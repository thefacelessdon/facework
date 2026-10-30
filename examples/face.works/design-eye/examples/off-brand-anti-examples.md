# Off-Brand Anti-Examples — face.works (Reading Room)

Patterns that fail the taste contract, each tied to the component contract
and taste clause it violates. The evaluator cites these by id (`OFF-n`) as the
drift a reviewed artifact may be sliding toward, and names the on-brand
counterpart (`ON-n`) as the correction.

Most are the DESIGN.md §11 bans made concrete. Clause ids (`clause: …`) and
component ids resolve in `../components.yaml`. Literal values that appear here
are quoted *as the drift*, never as guidance — the only source of a value is
`prototype/src/app/reading-room.css`.

---

## OFF-1 — Gradient headline

**Pattern:** the masthead statement filled with a verdigris-to-ink gradient
(`background-clip: text`), or a soft gradient wash behind the hero.

**Violates:** **display** `must_not` "no gradient fill, text shadow, or glow";
clause: no-gradient-no-glow, banned-ai-tells.

**Why it fails:** a gradient is decoration claiming significance it hasn't
earned — the opposite of "it doesn't decorate". It also spends the accent on
nothing attended (clause: verdigris-attended).

**Counterpart:** ON-1. **Correction:** solid `--rr-text-strong`.

---

## OFF-2 — Card inside a card

**Pattern:** a raised `--rr-ground-raised` panel with a shadow, holding a
reading, which itself holds a bordered "key insight" box.

**Violates:** **reading** `must_not` "no card … wrapping the reading";
clause: no-card-in-card, reading-is-the-unit; FVS-200 §5 (cardification).

**Why it fails:** containers replace structure. The reading is the unit; it
sits on the ground and is separated by space and hairlines, not boxes.

**Counterpart:** ON-2. **Correction:** drop both containers; separate with
`gap` on the `--rr-sp-*` scale and one `--rr-line` hairline if needed.

---

## OFF-3 — Equal card grid for non-tabular content

**Pattern:** "Our Theories" as a 3×2 grid of identical rounded cards, each
with an icon, a title and two lines of copy.

**Violates:** **reading-index** `must_not` "no cards per row and no equal card
grid in place of rows"; clause: no-equal-card-grid, banned-ai-tells
(rounded icon-above-every-heading).

**Why it fails:** equal cards flatten a record into a catalogue — every item
is equally loud (FVS-200 §2 failure: "making every part equally loud"), and
order, status, and ID disappear.

**Counterpart:** ON-3. **Correction:** hairline index rows with mono ID and
ShapeMarker status.

---

## OFF-4 — Monospace as "techy" costume

**Pattern:** section titles or body paragraphs set in `--rr-font-record`
because it "feels technical"; a terminal-style blinking cursor after the
headline.

**Violates:** **section-head** / **prose** `must` "(title / body) in
--rr-font-structure / --rr-font-reading"; clause: mono-certifies,
three-voices, banned-ai-tells; copy-is-a-reading (technical costume).

**Why it fails:** mono *certifies* — labels, IDs, verdicts. Used for voice it
stops meaning "this is the record" and becomes styling.

**Counterpart:** ON-2. **Correction:** structure in Schibsted, thinking in
Literata; mono only for the eyebrow, ID and verdict.

---

## OFF-5 — Bounce / elastic easing

**Pattern:** index rows that spring in with overshoot; a CTA that scales up
with a bounce on hover; a Trace that wobbles before settling.

**Violates:** **ink-cta** `must_not` "no … pulsing"; **trace** `must`
"draw-in animates stroke-dashoffset only, eased on --rr-ease-settle";
clause: structural-motion, banned-ai-tells.

**Why it fails:** the signature behavior is *draw-in / settle* — readings
arrive and come to rest. Overshoot reads as play, not record.

**Counterpart:** ON-4. **Correction:** `--rr-ease-settle` with a
`--rr-motion-*` duration, transform/opacity only, reduced motion settled.

---

## OFF-6 — Colored CTA

**Pattern:** the "Enter the practice" button filled verdigris (or green "go").

**Violates:** **ink-cta** `must_not` "no colored fill — not verdigris, not a
status hue"; clause: ink-cta, verdigris-attended, status-reserved.

**Why it fails:** verdigris means *attended*; green means *settled*. A colored
button spends both meanings on a click target and lets the brand collide with
a reading's verdict.

**Counterpart:** ON-4. **Correction:** `--rr-cta-fill` / `--rr-cta-ink`.

---

## OFF-7 — Hero-metric template

**Pattern:** a band of four huge numbers ("27 readings · 5 theories · 98%
coherence · 14 runs") under the masthead, each with a tiny caption.

**Violates:** **display** `must_not` "no hero-metric template"; **ledger**
`must_not` "no hero-metric tiles"; clause: banned-ai-tells,
no-fabricated-records (a "98% coherence" has no derivation).

**Why it fails:** numbers posed as achievement, detached from the records they
count. The ledger counts itself in record voice, in place.

**Counterpart:** ON-5. **Correction:** a holdings line on the ledger it
describes, derived via `holdingsFor()`.

---

## OFF-8 — Decorative sparkline / dashboard chrome

**Pattern:** a tiny trend line beside each index row, or a donut chart for the
coherence score.

**Violates:** **coherence-verdict** `must_not` "no gauge dial, donut chart,
progress ring, or sparkline"; **trace** `must_not`; clause: five-instruments,
banned-ai-tells.

**Why it fails:** face.works is a reading room, never a dashboard (DESIGN §2).
A visual that is not one of the five instruments has to argue its way in; a
sparkline with no claim cannot.

**Counterpart:** ON-2. **Correction:** CoherenceVerdict n/5; a Trace only
where a real pattern over time is the claim, with a caption that states it.

---

## OFF-9 — Side-stripe accent border

**Pattern:** a "callout" with a 4px verdigris left border and a tinted fill.

**Violates:** **prose** `must_not` (quotes are one 1px hairline);
**section-head** `must_not` "no side-stripe accent border"; clause:
hairline-only, banned-ai-tells.

**Counterpart:** ON-6. **Correction:** 1px hairline indent, no fill.

---

## OFF-10 — Centered everything

**Pattern:** masthead, section heads, body and CTA all centered in a narrow
column.

**Violates:** **display** `must` "left-aligned on the column's reading edge";
**ink-cta** `must` "left-aligned in its section"; clause: one-axis,
banned-ai-tells; FVS-200 §2 failure ("equilibrium produced by centering
everything").

**Counterpart:** ON-1. **Correction:** a single left reading edge; balance
from interval and the margin rail, not symmetry.

---

## OFF-11 — Glassmorphism / glow

**Pattern:** a frosted translucent nav over a blurred Lorenz trace; a glowing
verdigris halo on the mark.

**Violates:** clause: no-gradient-no-glow, banned-ai-tells;
**coherence-mark** `must_not` "no use as a decorative motif".

**Counterpart:** ON-1. **Correction:** opaque register ground; the mark rests
in `currentColor`.

---

## OFF-12 — Filled-center mark

**Pattern:** the Coherence Mark with a dot in the center (the superseded 0.0.29
form), or the wordmark typeset in Schibsted.

**Violates:** **coherence-mark** `must_not` "no filled center node or center
dot", "no Schibsted-text stand-in for the wordmark"; clause: open-center-mark.

**Why it fails:** coherence is the relationship, never a node. A filled center
asserts the thing the mark exists to deny.

**Correction:** `CoherenceMark` (open center) + `FaceworkWordmark`.

---

## OFF-13 — Marketing register / agency theatre

**Pattern:**

```
Unlock the power of coherence! 🚀
We partner with visionary brands to transform their identity into
next-generation, AI-powered operating systems. Let's build the future together!
```

**Violates:** **display** / **ink-cta** `must_not` "no exclamation point";
clause: copy-is-a-reading (marketing register, agency theatre, technical
costume), inherited-cold.

**Why it fails:** nothing in it is a reading — no named system, no claim that
could be checked, no state. Inherited cold, it carries nothing.

**Counterpart:** ON-8. **Correction:** name the system and what the reading
found; state cost and deliverable plainly.

---

## OFF-14 — Fabricated apparatus

**Pattern:** "6 min read" in the margin; "Updated Oct 3" on a record with no
date; a progress bar showing scroll position.

**Violates:** **margin** `must_not` "no reading-time estimate, no scroll-spy
JS"; **ledger** `must_not` "no dates on records that have none"; clause:
no-fabricated-records.

**Counterpart:** ON-6. **Correction:** `~N words`, provenance @ SHA, no date
unless the record carries one.

---

## OFF-15 — Superseded grounding (the drift this set replaced)

**Pattern:** an artifact styled from `design-infrastructure/tokens.json` —
Inter / Inter Tight / JetBrains Mono, an ochre brand accent (`#A37E3F`),
8px-radius neutral cards — or an evaluation report that cites token paths like
`type.family.display` or `color.brand.primary`.

**Violates:** clause: three-voices (wrong faces), verdigris-attended (wrong
accent), no-card-in-card; and the grounding rule itself — those paths are not
`--rr-*` tokens and do not exist in `reading-room.css`.

**Why it fails:** that set predates the Facework Visual Specification and is
marked *not active design authority* by its own README. Until 0.0.80 the
evaluator loaded it as its grounding, so an artifact could pass the gate while
contradicting the live site. `bin/validate-design-eye` now refuses any
evaluator wiring that points at it.

**Correction:** cite `--rr-*` tokens; resolve values in
`prototype/src/app/reading-room.css`.
