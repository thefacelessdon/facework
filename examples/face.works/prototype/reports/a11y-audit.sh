#!/usr/bin/env bash
#
# reports/a11y-audit.sh — one-command automated accessibility audit of the
# face.works production build.
#
# Runs axe-core (WCAG 2.0/2.1/2.2 A + AA + best-practice) over every route in
# the sitemap, on a real production build, at a PINNED desktop viewport.
#
#   ./reports/a11y-audit.sh            # build, serve, audit, tear down
#   ./reports/a11y-audit.sh --no-build # reuse the existing .next build
#   PORT=3999 WIDTH=1440 ./reports/a11y-audit.sh
#
# Exit code is 0 only when there are 0 violations, so this is CI-safe.
#
# ── Why the viewport is pinned ──────────────────────────────────────────────
# The Field register (The Practice — dark obsidian) paints its ground on a
# `.rr-field` container. At a zero/near-zero viewport width that container
# collapses to 0px, dark-register text falls onto the light <body>, and axe
# reports dozens of PHANTOM color-contrast failures that do not exist for real
# users. Width is the load-bearing dimension (>=1024 is safe); axe scans the
# whole document, so the height is cosmetic. Always audit at a real width.
#
# This is a superset of the manual pass: it cannot judge screen-reader speech,
# real-device touch/reflow, 200% zoom, or reduced-motion. Those rows live in
# reports/at-test-script.md and still need a human on real assistive tech.
# ────────────────────────────────────────────────────────────────────────────

set -euo pipefail

PORT="${PORT:-3210}"
WIDTH="${WIDTH:-1280}"
HEIGHT="${HEIGHT:-900}"

# prototype root = this script's directory's parent (reports/..)
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$HERE"

STAMP="$(date +%Y-%m-%d)"
# Distinct `axe-` prefix so this never clobbers the hand-curated
# `accessibility-audit-<date>.{md,json}` narrative reports.
OUT="reports/axe-${STAMP}.json"
# @axe-core/cli --save resolves relative to cwd and mangles absolute paths,
# so keep RAW relative (cwd = prototype root).
RAW="reports/.axe-raw-$$.json"
SERVER_LOG="$(mktemp -t faceworks-a11y-server.XXXXXX.log)"

# 1. Production build (dev injects extra DOM that pollutes results).
if [[ "${1:-}" != "--no-build" ]]; then
  echo "▸ building production bundle…"
  npm run build >/dev/null
fi

# 2. Serve the production build in the background; always tear it down.
echo "▸ starting \`next start\` on :${PORT}…"
npm run start -- -p "$PORT" >"$SERVER_LOG" 2>&1 &
SERVER_PID=$!
cleanup() { kill "$SERVER_PID" 2>/dev/null || true; rm -f "$SERVER_LOG" "$RAW"; }
trap cleanup EXIT

# 3. Wait for readiness (up to ~30s).
for i in $(seq 1 60); do
  if curl -sf "http://localhost:${PORT}/" >/dev/null 2>&1; then break; fi
  if [[ $i -eq 60 ]]; then
    echo "✗ server did not come up on :${PORT}"; cat "$SERVER_LOG"; exit 1
  fi
  sleep 0.5
done

# 4. Derive routes from the sitemap (single source of truth) → localhost URLs.
URLS="$(curl -s "http://localhost:${PORT}/sitemap.xml" \
  | grep -oE '<loc>[^<]+</loc>' \
  | sed -E "s#</?loc>##g; s#https://face\.works#http://localhost:${PORT}#" \
  | tr '\n' ' ')"
if [[ -z "${URLS// }" ]]; then
  echo "✗ no routes parsed from /sitemap.xml"; exit 1
fi
echo "▸ auditing $(wc -w <<<"$URLS" | tr -d ' ') routes at ${WIDTH}×${HEIGHT}…"

# 5. Run axe across every route at the pinned window (see header note on width).
set +e
npx -y @axe-core/cli $URLS \
  --tags wcag2a,wcag2aa,wcag21a,wcag21aa,wcag22aa,best-practice \
  --chrome-options="headless,disable-gpu,window-size=${WIDTH},${HEIGHT}" \
  --save "$RAW"
set -e

if [[ ! -s "$RAW" ]]; then
  echo "✗ axe produced no report (expected $RAW)"; exit 1
fi

# 6. Compact the report — @axe-core/cli's raw output embeds a full `passes`
#    array per route (megabytes). Keep only what a reviewer acts on: per-route
#    violations + incomplete (needs-review) items. Falls back to raw if no jq.
if command -v jq >/dev/null 2>&1; then
  jq 'map({
        url,
        violationCount: (.violations | length),
        violations: (.violations | map({id, impact, help, nodes: (.nodes | length),
                     targets: (.nodes | map(.target | join(" ")))})),
        incomplete: (.incomplete | map({id, nodes: (.nodes | length)}))
      })' "$RAW" > "$OUT"
  TOTAL="$(jq '[.[].violationCount] | add // 0' "$OUT")"
else
  cp "$RAW" "$OUT"
  TOTAL="unknown (install jq for a verdict)"
fi

# 7. Summary. Verdict comes from the report, not the CLI exit code (which
#    conflates violations with save/IO errors).
echo
if [[ "$TOTAL" == "0" ]]; then
  echo "✅ 0 violations across $(jq length "$OUT") routes. Report → $OUT"
else
  echo "❌ ${TOTAL} violation(s) — see $OUT, fix at the source, and re-run."
fi
echo "ℹ  Manual VoiceOver/NVDA/real-device rows remain open — see reports/at-test-script.md"
[[ "$TOTAL" == "0" ]] && exit 0 || exit 1
