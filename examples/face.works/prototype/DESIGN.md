# face.works — Design Language

Derived, not decorated. Every decision below traces to what Facework *is*.
Method: epistemology → governing metaphor → color/type/layout/mark/motion laws →
instrument library → taste contract (the same derivation used for the sibling
practice 14th & Co, applied to Facework's own meaning — not its skin).

Design context lives in `.impeccable.md`. This file is the enforceable contract.

---

## 1. Epistemology

Facework is *a discipline for seeing, designing, and maintaining the structures
that let identity carry weight over time.* It calls itself **a public record of
attention.** Its core act is not building — it is **reading coherence**: seeing
the structure under the surface, and whether it holds under pressure, before it
fails.

First read of any surface should be: *"this is a reading of a real system, and it
would still hold if I inherited it cold."*

## 2. Governing metaphor (keystone)

> **Facework doesn't decorate — it reads.**

face.works is a reading room / observatory. Every surface is a **reading** of a
system's coherence — never a portfolio, brochure, or dashboard. Sibling to 14th &
Co: they *instrument transfer* (operational); Facework *instruments attention*
(diagnostic / perceptual).

**The core test (taste contract apex):** *If this reading were inherited by
someone who wasn't in the room, would it still hold?* If not, it isn't finished.

## 3. Two registers (two states of one system)

Not a theme toggle — two states of one record.

| Register | Ground | State | Home |
|---|---|---|---|
| **The Record** | warm paper (light) | settled / issued readings | **The Work** |
| **The Field** | warm obsidian (dark) | live / under observation | **The Practice** + the Lorenz Field |

Publishing a reading = crossing Field → Record. Same hue family, same status
vocabulary, same type across both. The Field earns more chroma (dark ground); the
Record stays quiet.

## 4. Color

OKLCH only. Monochrome-first: **color only classifies.** Warm neutrals tinted to
Facework's own hue (~70–85), distinct from 14th & Co's sail. **One brand accent —
Verdigris** (coherence that holds and ages; a patina). Ink-black CTAs. The status
palette is reserved and never becomes a brand color; Verdigris (hue ~190) is clear
of every status hue and of 14th & Co's Record Blue (262), so it can never collide
with a reading's own verdict.

### The Record — light
```css
--paper:      oklch(0.967 0.008 85);  /* page ground */
--surface:    oklch(0.936 0.010 84);  /* raised panel / worksheet fill */
--rule:       oklch(0.800 0.013 82);  /* hairline rules, borders */
--meta:       oklch(0.515 0.012 80);  /* metadata + secondary text */
--body:       oklch(0.305 0.012 68);  /* reading body */
--ink:        oklch(0.175 0.012 55);  /* ink, marks, PRIMARY ACTIONS/CTAs */
--verdigris:      oklch(0.55 0.075 190);  /* brand accent — fills/marks */
--verdigris-text: oklch(0.47 0.070 190);  /* accent AS TEXT on paper (AA) — links/active */
```

### The Field — dark (warm obsidian)
```css
--field:        oklch(0.185 0.008 70);  /* ground */
--field-panel:  oklch(0.235 0.009 70);
--field-raised: oklch(0.270 0.010 70);
--field-line:   oklch(0.340 0.010 70);  /* 1px borders */
--field-text:   oklch(0.920 0.012 85);
--field-mute:   oklch(0.630 0.013 78);
--verdigris-field: oklch(0.740 0.085 190);  /* lifted for ≥4.5:1 on the field */
```

### Reserved status (classification only — NOT brand, NOT decoration)
```css
--settled:  oklch(0.56 0.12 150);  /* green  — settled / owned  (circle) */
--attention:oklch(0.70 0.13 75);   /* amber  — needs attention   (text-tier 0.52 0.12 72 on paper) */
--exposure: oklch(0.58 0.19 30);   /* red    — weak / at risk     (text-tier 0.48 0.17 30 on paper) */
--archive:  oklch(0.50 0.13 300);  /* violet — archived / wayfinding */
```
Rules: CTAs are `--ink` (never colored). Verdigris marks the **active / attended**
state and links only. Status colors are permanently spoken-for. As lightness
approaches paper/ink, reduce chroma. Never pure #000/#fff. No gradients, no glow.

## 5. Typography

Three faces, three registers of voice. Self-host all three (`@fontsource`) — no
CDN. None are reflex defaults; none are shared with 14th & Co (Archivo/Azeret).

| Role | Face | Voice |
|---|---|---|
| **Reading** (body, article titles) | **Literata** | the reading room — sustained long-form |
| **Structure** (display, section heads, nav, UI) | **Schibsted Grotesk** | the publication — editorial authority |
| **Record** (labels, IDs, metadata, verdicts, Field instruments) | **Spline Sans Mono** | the record — certifies, tabular |

Serif *reads* · grotesque *structures* · mono *certifies*. Article/reading titles
are Literata (the thinking speaks); section and structural headers are Schibsted
(the system speaks); every eyebrow/ID/verdict is Spline Sans Mono.

```
--font-reading:  "Literata", Georgia, serif;
--font-structure:"Schibsted Grotesk", system-ui, sans-serif;
--font-record:   "Spline Sans Mono", ui-monospace, monospace;
```

### Scale (fluid clamp on content headings; fixed rem in dense UI)
| Token | Spec | Face |
|---|---|---|
| Display | `clamp(2.5rem, 6vw, 4.5rem)`, lh 1.02, ls -0.02em | Schibsted 800 |
| Reading title (H1) | `clamp(1.9rem, 4vw, 2.9rem)`, lh 1.1, balance | Literata 600 |
| Section head | `1.4–1.7rem`, semibold | Schibsted 600 |
| Body | `1.0625rem`, lh 1.65, max **68ch** | Literata 400 |
| Record label (`.fig`) | `0.6875rem`, uppercase, ls 0.1em | Spline Sans Mono 500 |
| Data / verdict | tabular, `font-variant-numeric: tabular-nums` | Spline Sans Mono |

Rules: ≥1.25 ratio between steps; uppercase only for short mono labels, never body;
light-on-dark (Field) adds 0.05–0.1 to line-height. The mono `.fig` eyebrow is the
connective tissue — nearly every block opens with one.

## 6. Space & layout

4pt scale, semantic tokens: `--sp-1 4 · 2 8 · 3 12 · 4 16 · 6 24 · 8 32 · 12 48 · 16 64 · 24 96`.
Lay siblings out with `gap`, not margins. Vary spacing for hierarchy — a heading
earns space above it. Body max 68ch.

**Grammar: the reading is the unit, not the card.** A reading = mono eyebrow →
title → body → instrument → verdict. Prefer hairline-ruled rows and squared panels
over cards; never card-inside-card; never repeated equal card grids unless the
content is truly tabular. Section heads carry a mono record-label and an index
*only where order is real* (Field Note 027, phase 3 of 5) — never as decoration.
Self-adjusting grids via `repeat(auto-fit, minmax(…, 1fr))`; container queries for
components, viewport queries for page layout.

## 7. Instrument library (derived from Cultural Physics)

Every visual is one of these, or argues its way in. No stock, no decorative icons,
no illustration for its own sake — the instrument *is* the illustration.

| Instrument | Construct | Answers |
|---|---|---|
| **The Reading** | Signal | What does this system actually carry, stripped of performance? |
| **The Field / Trace** | Frequency + Current | What is the bounded pattern, and how does it move over time? (the Lorenz Field) |
| **The Structure / Lineage** | Stability | What holds it up, and what survives handoff? |
| **The Pressure reading** | Entropy | Where is coherence failing under load? |
| **The Coherence verdict** | Coherence | Is it synchronized — the diagnostic state (n/5)? |

Shared grammar: **square = open/unsettled, circle = settled/issued** everywhere;
color classifies only where a real state exists; every figure gets a mono label
and a caption that carries the claim.

## 8. The mark

Keep the **Coherence Mark** (four bands = the four constructs, open axis =
coherence; derived in `visual-system/identity/FVI-001`). Adopt the shape-law
discipline: the mark is a **state machine** — its center encodes a *true* coherence
state (square while open, circle when settled), colored by status only where real.
The mark never lies. It rests in ink almost everywhere; it earns color only when a
genuine state is present.

## 9. Motion

Structural only — `transform`, `opacity`, SVG `stroke-dashoffset`. Never animate
layout properties. No bounce, no elastic, no glow. Signature behavior: **draw-in /
settle** — Field traces trace on; issued Record readings are forward-only ("the web
reading draws in once and settles; print is the settled state"). Easing
`cubic-bezier(0.22, 1, 0.36, 1)` for reveals + diagram draw-in. `prefers-reduced-
motion` shows the settled state instantly, everywhere.

## 10. Information architecture — the two-mode spine

Fixes "I don't know where things start and end." Two modes, one clear entry each.

- **The Work** (Record register) — the published thinking + research: field notes,
  models, frameworks, and experiments, presented as issued readings. This is the
  front door and the reason to return.
- **The Practice** (Field register) — how to work with Facework: proof, cases, and
  engage. One page that answers *what it is, what it costs, what you get.*

Plus **About** and the operating records (Status / Privacy / Accessibility) in the
footer. The Lorenz **Field** lives inside The Work as the flagship experiment (it
*is* the Field/Trace instrument, live). Every path resolves to one of the two
modes; nothing floats.

## 11. Taste contract (reject the AI tells)

- Core test (§2): would this reading hold if inherited cold?
- Every visual is one of the five instruments, or argues its way in.
- Color only classifies. CTAs are ink. Verdigris marks active/attended only.
- The mark encodes a true state — never decoration.
- **Banned:** gradient text, side-stripe accent borders (>1px), glassmorphism,
  card-inside-card, repeated equal card grids, hero-metric templates, bounce
  easing, decorative sparklines, monospace-as-"techy" shorthand, centered-
  everything, rounded-corner icon-above-every-heading.
- Copy is a reading, not marketing: name things by what they are; no agency
  theater, no technical costume, no exclamation points.

---

*Open: verify `@fontsource` packages for the trio at build; retire the 0.0.28 FVS
type direction (Public Sans) in favor of this trio. Accent locked: Verdigris.*
