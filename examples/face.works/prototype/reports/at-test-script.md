# Facework — Manual Assistive-Technology Test Script

Companion to the automated audit (`accessibility-audit-2026-08-06.md`). The axe-core
pass reports 0 violations across 16 routes, but automated tools can't judge
screen-reader semantics, focus management, single-page-app route announcements, or
real-device reflow. This script covers exactly that. It is the "manual VoiceOver,
NVDA, iOS Safari, and Android Chrome review" named as an open release gate on
`/accessibility`.

Budget ~30–45 min for a full pass.

## Where to run

The Vercel preview is SSO-gated, so run against a local **production** build (not
`dev`, which injects extra DOM):

```bash
cd examples/face.works/prototype && npm run build && npm run start
```

Test `http://localhost:3000`.

## Tools (do at least the bold two)

- **macOS Safari + VoiceOver** (⌘F5) — primary
- **iOS Safari + VoiceOver** (real iPhone) — primary
- Windows NVDA + Firefox — if available
- Android Chrome + TalkBack — if available

Record each row: ✅ pass / ❌ fail (note what the AT announced) / ⚠️ awkward-but-usable.

---

## A. Global — run on `/`, `/proof`, `/status`, `/engage`, `/privacy`, `/accessibility`

| # | Check | How | Pass criteria | WCAG |
|---|-------|-----|---------------|------|
| A1 | Skip link | Load page, press Tab once | First focus is "Skip to content"; activating it moves focus into `<main>` | 2.4.1 |
| A2 | Landmarks | VO rotor → Landmarks (VO-U) / NVDA `D` | Exactly one banner, one main, one contentinfo; no orphan regions | 1.3.1 |
| A3 | Heading order | VO rotor → Headings / NVDA `H` | Exactly one `h1`; no skipped levels | 1.3.1, 2.4.6 |
| A4 | Keyboard-only | Unplug mouse; Tab through page | Every control reachable, logical order, nothing trapped | 2.1.1, 2.4.3 |
| A5 | Visible focus | Same pass | Every focused element shows the outline (never invisible) | 2.4.7 |
| A6 | 200% text | Zoom text to 200% | No clipped/overlapping text, no loss of content or function | 1.4.4 |
| A7 | Reflow / mobile | 320px width (or real phone) | No horizontal scroll; single-column reflow intact | 1.4.10 |
| A8 | Reduced motion | OS "Reduce motion" ON, reload | Mark motion / transitions stilled or minimal | 2.3.3 |
| A9 | Link purpose | Rotor → Links | Each link makes sense out of context (no bare "↗" / "read more") | 2.4.4 |

## B. Navigation

| # | Check | How | Pass criteria |
|---|-------|-----|---------------|
| B1 | Desktop rail | Tab through the left nav | Reads all items incl. Protocol/Proof/Engage as links; current page announced as "current page" (`aria-current`) |
| B2 | Mobile menu — trigger | Phone width; find the toggle | Announced as a button with expanded/collapsed state (`aria-expanded`) |
| B3 | Mobile menu — operate | Activate with the SR | State flips to "expanded"; items become reachable; toggling collapses and announces it |
| B4 | Footer nav | Tab to footer | Status / Accessibility / Privacy reachable and labeled |

## C. Interactive surfaces (axe flagged these as "can't sample")

| # | Surface | Check | Pass criteria |
|---|---------|-------|---------------|
| C1 | Artifact filter (home / proof) | Operate filter buttons with SR | Each is a button with pressed state (`aria-pressed`); after filtering, the change is announced via the live region (`aria-live`) — not silence |
| C2 | Facework Field (`/field/index.html`) | Navigate with SR | The "experimental reflection instrument" framing + "not a diagnosis / local-first" disclaimer are reachable and read *before* the inputs — the boundary must be discoverable by ear |
| C3 | Field — three inputs | Fill the 3 inputs via keyboard/SR | Each input has an associated label the SR reads; values entered keyboard-only |
| C4 | Field — trace + controls | Trigger trace, then Save / delete / clear | Actions are labeled buttons; success is announced or focus moves sensibly; the canvas trace has a text alternative or is correctly `aria-hidden` so the SR isn't stuck reading a canvas |
| C5 | Field — archive | With a saved trace, review the local archive | Saved items announced as a list; delete/clear reachable and their effect perceivable |

**C2 and C4 are the priority** — the axe report explicitly couldn't sample the Field's
canvas-over-text and dynamic content.

## D. SPA route changes (App Router — the subtle one)

| # | Check | How | Pass criteria |
|---|-------|-----|---------------|
| D1 | Focus on navigate | SR on; click a nav link (client-side nav) | Focus lands sensibly (top of new `<main>` / new h1), not stranded on the old link or lost to `<body>` |
| D2 | Change announced | Same | SR conveys the page changed (new title/heading announced); a silent route change is a fail |

> D1/D2 are the classic single-page-app gap: Next's App Router doesn't move focus or
> announce navigation by default. If they fail, the fix is a route-change
> focus/announce handler.

## E. Per-tool gotchas

- **VoiceOver (Safari):** use the rotor (VO-U) for Landmarks/Headings/Links/Form-controls. Check the Field canvas doesn't read as a huge blank image.
- **iOS VoiceOver:** swipe-navigate home + Field; check tap targets feel ≥44px; mobile menu operates by swipe+double-tap.
- **NVDA:** browse-mode `D`/`H`/`F`/`K` to list landmarks/headings/forms/links; confirm the filter live region actually speaks.
- **Android TalkBack:** linear swipe through home + one content page + the Field; verify the menu button state.

## Recording template

```
Device/AT: __________   Build commit: __________   Date: __________
Global A1–A9:      [ per-page ✅/❌/⚠️ ]
Nav B1–B4:         ...
Interactive C1–C5: ...   ← priority
Routes D1–D2:      ...
Blocking fails:    __________
```

Any ❌ / ⚠️: record the row + what the SR said. Most likely fixes are D1/D2
(route-change focus) and C4 (canvas labeling) — both small and well understood.
