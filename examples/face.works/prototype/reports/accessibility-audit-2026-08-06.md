# Accessibility Audit — face.works (Reading Room redesign)

- **Date:** 2026-08-06
- **Build under test:** the redesigned site (`design/reading-room` branch). Every route's DOM was rebuilt in the new "Reading Room" design language, which runs in two registers: the light **Record** surface and the dark, warm-obsidian **Field** surface. This audit supersedes the pre-redesign run of the same date; the earlier DOM no longer exists.
- **Tool:** [@axe-core/cli](https://www.npmjs.com/package/@axe-core/cli) driving **axe-core 4.11.1** in headless Chrome (`chrome-headless`, bundled Chromium driver).
- **Ruleset / tags:** `wcag2a, wcag2aa, wcag21a, wcag21aa, wcag22aa` (WCAG 2.0/2.1/2.2 Levels A + AA).
- **Target:** Production build served locally (`npm run build` → `PORT=3100 npm run start`). The audit ran against the real production DOM, not the dev server. Port 3100 was used because the dev server owns :3000.
- **Method:** `npx -y @axe-core/cli <17 URLs> --tags wcag2a,wcag2aa,wcag21a,wcag21aa,wcag22aa --save …`. A compacted, machine-readable result (per-route violations, needs-review items, and pass/violation/incomplete counts — the verbose `passes` arrays are dropped to keep the file small) is in the sibling `accessibility-audit-2026-08-06.json`.

## Summary

**0 violations across 17 routes**, on the production build, after one real color-contrast fix (below). Every audited WCAG 2.0/2.1/2.2 A + AA rule that axe can evaluate automatically passes on every representative route, in both the light Record and dark Field registers. axe checked **735 text nodes** for contrast across the 17 routes.

Automated testing catches an estimated 20–50% of accessibility issues; it does not replace manual review with assistive technology and disabled users. That manual review (VoiceOver, NVDA, iOS Safari, Android Chrome) remains a named, still-open release gate.

## Per-route results

| Route | Register | Result | Violations | Needs-review |
|-------|----------|--------|-----------|--------------|
| `/` | Record (light) | Pass | 0 | 0 |
| `/field-notes` | Record | Pass | 0 | 0 |
| `/models` | Record | Pass | 0 | 0 |
| `/frameworks` | Record | Pass | 0 | 0 |
| `/conversations` | Record | Pass | 0 | 0 |
| `/library` | Record | Pass | 0 | 0 |
| `/experiments` | Record | Pass | 0 | 0 |
| `/about` | Record | Pass | 0 | 0 |
| `/protocol` | Record | Pass | 0 | 0 |
| `/protocol/cultural-physics` | Record | Pass | 0 | 0 |
| `/engage` | Field (dark) | Pass | 0 | 0 |
| `/proof` | Field (dark) | Pass | 0 | 0 |
| `/cases` | Field (dark) | Pass | 0 | 0 |
| `/status` | Record (light) | Pass | 0 | 0 |
| `/privacy` | Record | Pass | 0 | 0 |
| `/accessibility` | Record | Pass | 0 | 0 |
| `/field/index.html` | Field canvas | Pass | 0 | 1 (see residual) |

## Violations found and fixed

The first run surfaced one real color-contrast violation, in **7 occurrences** across three routes. It has been fixed at the source. The re-run confirms the fix.

### 1. `color-contrast` (serious) — `.rr-strip__desc--settled` on `/proof`, `/cases`, `/status` (7 nodes) → FIXED

- **Rule:** [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast) (WCAG 1.4.3 AA). Text must meet a 4.5:1 minimum contrast ratio.
- **Cause:** The "settled" green status token, `--rr-settled: oklch(0.56 0.12 150)` (`#36884d`), was authored as a **fill/mark** color (the circle marker on verdicts, lineage, index). `.rr-strip__desc--settled` reused that same fill value **as body text**. As text it failed on both registers:
  - Dark **Field** (`/proof`, `/cases`): `#36884d` on obsidian `#15120f` measured **4.25:1** (below 4.5:1).
  - Light **Record** (`/status`, 5 nodes): `#36884d` on paper `#f7f4ee` measured **3.99:1** (below 4.5:1).
  - The sibling `.rr-strip__desc--attention` / `--exposure` classes already routed through register-aware `--rr-status-*` aliases with paper-text / field-lifted tiers; `--settled` was the one status that never got its text tier. That inconsistency was the root cause.
- **Fix — `src/app/reading-room.css`:** mirrored the existing attention/exposure pattern by giving "settled" a paper text-tier and a field-lifted text-tier, and routing the text class through a register alias. The base `--rr-settled` is unchanged, so every marker/fill use (lines 213, 267, 457, 628) is visually identical.

  | Location | Before | After |
  |----------|--------|-------|
  | `reading-room.css:29` | `--rr-settled: oklch(0.56 0.12 150)` (used for text + fills) | unchanged — comment now reads "FILLS/MARKS only" |
  | `reading-room.css:30` (new) | — | `--rr-settled-text: oklch(0.49 0.12 150)` (paper text tier) |
  | `reading-room.css:31` (new) | — | `--rr-settled-field: oklch(0.72 0.10 150)` (field-lifted text tier) |
  | `reading-room.css:81` (new, `.rr` scope) | — | `--rr-status-settled: var(--rr-settled-text)` |
  | `reading-room.css:99` (new, `.rr-field` scope) | — | `--rr-status-settled: var(--rr-settled-field)` |
  | `reading-room.css:543` | `.rr-strip__desc--settled { color: var(--rr-settled) }` | `color: var(--rr-status-settled)` |

- **Verification (re-audit, same tags/tool):**
  - `/proof`, `/cases`: `.rr-strip__desc--settled` now `#75b683` on `#15120f` = **7.79:1** (was 4.25:1). Pass.
  - `/status`: now `#1d7339` on `#f7f4ee` = **5.36:1** (was 3.99:1). Pass.
  - Full 17-route re-run: **0 violations**.

## Color contrast (specifically checked)

Contrast on the dark Field register (verdigris links/accent and muted text on warm obsidian) and the light Record surfaces was the named high-risk area. After the settled-text fix:

- Every one of the **735 text nodes** axe sampled for contrast across 17 routes passes at ≥4.5:1 (normal) / ≥3:1 (large).
- The dark-Field verdigris accent (`--rr-verdigris-field`, `oklch(0.740 0.085 190)`) and field muted text (`--rr-field-mute`) pass on obsidian; the light-Record verdigris-as-text token (`--rr-verdigris-text`) passes on paper. No further token changes were needed.
- The only text that could not be scored is text painted over the animated `/field/index.html` canvas, which axe cannot sample (see residual).

## Residual needs-review items (not violations — documented honestly)

axe leaves **one** rule-instance as *incomplete* (needs manual review). It is not a failure:

| Route | Rule | Nodes | Why axe can't decide | Assessment |
|-------|------|-------|----------------------|------------|
| `/field/index.html` | `color-contrast` | 8 | "background color could not be determined because element contains an image node" / "content is too short to determine if it is actual text" — text and short labels sit over the animated field `<canvas>` | Defensible. The background is a dynamic canvas axe cannot sample. The text uses the same Field tokens measured as passing on the static obsidian ground elsewhere in this audit. Left as-is; flagged for the manual AT pass. |

No other route reports any needs-review item.

## Reproduce

```bash
cd examples/face.works/prototype
npm run build && PORT=3100 npm run start      # production, port 3100
npx -y @axe-core/cli \
  http://localhost:3100/ http://localhost:3100/field-notes http://localhost:3100/models \
  http://localhost:3100/frameworks http://localhost:3100/conversations http://localhost:3100/library \
  http://localhost:3100/experiments http://localhost:3100/about http://localhost:3100/protocol \
  http://localhost:3100/protocol/cultural-physics http://localhost:3100/engage http://localhost:3100/proof \
  http://localhost:3100/cases http://localhost:3100/status http://localhost:3100/privacy \
  http://localhost:3100/accessibility http://localhost:3100/field/index.html \
  --tags wcag2a,wcag2aa,wcag21a,wcag21aa,wcag22aa \
  --save reports/accessibility-audit-2026-08-06.json
```

## Honest bottom line

**0 automatically-detectable WCAG 2.2 A/AA violations across all 17 representative routes** of the redesigned (Reading Room) site, on the production build, with axe-core 4.11.1 — after fixing one real contrast violation (the "settled" status color used as text: 3.99–4.25:1, now 5.36–7.79:1). One needs-review item remains: text over the animated `/field/index.html` canvas, which axe cannot sample. Automated coverage is partial by nature; manual assistive-technology review (VoiceOver, NVDA, iOS Safari, Android Chrome) remains an open release gate.
