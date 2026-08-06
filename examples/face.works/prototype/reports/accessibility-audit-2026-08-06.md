# Accessibility Audit — face.works runtime

- **Date:** 2026-08-06
- **Tool:** [@axe-core/cli](https://www.npmjs.com/package/@axe-core/cli) driving **axe-core 4.11.1** in headless Chrome (`chrome-headless`, bundled Chromium driver)
- **Ruleset / tags:** `wcag2a, wcag2aa, wcag21a, wcag21aa, wcag22aa` (WCAG 2.0/2.1/2.2 Levels A + AA)
- **Target:** Production build served locally (`npm run build` → `npm run start`, port 3000). The audit ran against the real production DOM, not the dev server.
- **Method:** `npx -y @axe-core/cli <16 URLs> --tags wcag2a,wcag2aa,wcag21a,wcag21aa,wcag22aa --save reports/accessibility-audit-2026-08-06.json`. Raw machine-readable results (one axe result object per route, including passes and needs-review items) are in the sibling `.json` file.

## Summary

**0 violations across 16 routes.** Every audited WCAG 2.0/2.1/2.2 A + AA rule that axe can evaluate automatically passes on every representative route, against the production build.

Automated testing catches an estimated 20–50% of accessibility issues; it does not replace manual review with assistive technology and disabled users. That manual review (VoiceOver, NVDA, iOS Safari, Android Chrome) remains a named, still-open release gate.

## Per-route results

| Route | Result | Automatically-checkable violations |
|-------|--------|-------------------------------------|
| `/` | Pass | 0 |
| `/field-notes` | Pass | 0 |
| `/models` | Pass | 0 |
| `/frameworks` | Pass | 0 |
| `/cases` | Pass | 0 |
| `/conversations` | Pass | 0 |
| `/experiments` | Pass | 0 |
| `/library` | Pass | 0 |
| `/about` | Pass | 0 |
| `/proof` | Pass | 0 |
| `/status` | Pass | 0 |
| `/engage` | Pass | 0 |
| `/protocol` | Pass | 0 |
| `/privacy` | Pass | 0 |
| `/accessibility` | Pass | 0 |
| `/field/index.html` | Pass | 0 |

## Color contrast (specifically checked)

The muted body/label token (`--fw-muted`) had been flagged as a possible borderline (~4.8:1) contrast case. That concern is **not borne out** by measurement. As rendered in the production build, `--fw-muted` resolves to `#5d5b52` on the paper background `#fbfaf6`, which axe measures at **6.52:1** — comfortably above the WCAG AA threshold of 4.5:1 for normal text. The lowest passing contrast ratio anywhere in the audit is **6.48:1** (muted disclaimer text on the dark field background). axe checked **675 text nodes** for contrast across the 16 routes with **zero** contrast violations. No change to the muted token was needed or made.

## Violations found and fixed

The first run surfaced one real violation, since fixed at the source. Later runs confirm the fix.

### 1. `definition-list` (serious) — `/status`, 3 occurrences → FIXED

- **Rule:** [definition-list](https://dequeuniversity.com/rules/axe/4.11/definition-list) (WCAG cat.structure). Ensure `<dl>` elements are structured correctly.
- **Cause:** `src/app/status/page.tsx` used a `<dl>` to render each stage's exit-criteria checklist, but its direct children were `<div>` wrappers containing a `<span>` marker and `<p>` text — not the `<dt>`/`<dd>` groups a definition list requires. It was never semantically a definition list; it is a list of criteria.
- **Fix (`src/app/status/page.tsx`, ~lines 105–147):** converted the `<dl>` to a semantic `<ul>` with `list-style: none` and each criterion `<div>` to an `<li>`. Visual layout is unchanged (flex + status glyph + text preserved).
  - Before: `<dl style={{ marginTop: "var(--space-xl)" }}>` … per item `<div key={i} style={{ display: "flex", … }}>` … closing `</div></dl>`
  - After: `<ul style={{ marginTop: "var(--space-xl)", padding: 0, listStyle: "none" }}>` … per item `<li key={i} style={{ display: "flex", … }}>` … closing `</li></ul>`
- **Verification:** re-audit of `/status` after the fix reports `0 violations found`.

## Best-practice hardening (needs-review items reduced, not required for the pass)

axe also reported `aria-prohibited-attr` as a *needs-review* (incomplete) item — an `aria-label` on a plain `<div>` with no role, which is inconsistently announced by assistive tech. These were not counted as violations, but the correct fix is cheap and unambiguous, so it was applied: `role="group"` was added to each labelled `.evidence-strip` / `.filter-row` container so the `aria-label` becomes valid and reliably announced.

| File | Element | Change |
|------|---------|--------|
| `src/app/page.tsx` (line 42) | `.evidence-strip` "Evidence summary" | added `role="group"` |
| `src/app/proof/page.tsx` (line 120) | `.evidence-strip` "Provenance" | added `role="group"` |
| `src/app/proof/page.tsx` (line 148) | `.evidence-strip` "Audit verdict" | added `role="group"` |
| `src/app/status/page.tsx` (line 43) | `.evidence-strip` "Snapshot summary" | added `role="group"` |
| `src/app/engage/page.tsx` (line 87) | `.evidence-strip` "How engagement works" | added `role="group"` |
| `src/components/ArtifactRecord.tsx` (line 33) | `.filter-row` "Filter artifacts" | added `role="group"` |

After this change the `aria-prohibited-attr` needs-review items are gone.

## Residual needs-review items (not violations — documented honestly)

axe leaves 18 nodes across 3 rule-instances as *incomplete* (needs manual review). None are failures; each is a case axe cannot resolve programmatically, with a defensible rationale:

| Route | Rule | Nodes | Why axe can't decide | Assessment |
|-------|------|-------|----------------------|------------|
| `/` | `link-in-text-block` | 1 | "contrast ratio could not be determined because of element overlap" — the `.text-link` overlaps a decorative rule, so axe can't sample a clean background | Defensible. The link is a standalone underlined control with visible focus; real contrast is fine. Left as-is. |
| `/status` | `color-contrast` | 9 | "Element content contains only non-text characters" — the `●◐◯` stage-status glyphs | Defensible. These markers are `aria-hidden="true"` decoration; the status is also conveyed in adjacent text. Left as-is. |
| `/field/index.html` | `color-contrast` | 8 | "background color could not be determined because element contains an image node" — text sits over the animated field canvas | Defensible. Background is a dynamic canvas; axe cannot sample it. Text uses the same tokens measured elsewhere at 6.48–6.52:1. Left as-is. |

## Reproduce

```bash
cd examples/face.works/prototype
npm run build && npm run start          # production, port 3000
npx -y @axe-core/cli \
  http://localhost:3000/ http://localhost:3000/field-notes http://localhost:3000/models \
  http://localhost:3000/frameworks http://localhost:3000/cases http://localhost:3000/conversations \
  http://localhost:3000/experiments http://localhost:3000/library http://localhost:3000/about \
  http://localhost:3000/proof http://localhost:3000/status http://localhost:3000/engage \
  http://localhost:3000/protocol http://localhost:3000/privacy http://localhost:3000/accessibility \
  http://localhost:3000/field/index.html \
  --tags wcag2a,wcag2aa,wcag21a,wcag21aa,wcag22aa \
  --save reports/accessibility-audit-2026-08-06.json
```

## Honest bottom line

**0 automatically-detectable WCAG 2.2 A/AA violations across all 16 representative routes**, on the production build, with axe-core 4.11.1. One real violation (`definition-list` on `/status`) was found and fixed at source. Color contrast was specifically verified: the muted token measures 6.52:1, not the feared ~4.8:1. Automated coverage is partial by nature; manual assistive-technology review remains an open release gate.
