# On-Brand Examples — face.works (Reading Room)

Real face.works surfaces that pass the taste contract, each annotated with the
component contracts and taste clauses it satisfies. The design-eye evaluator
cites these by id (`ON-n`) as the nearest model a reviewed artifact should
resemble.

Every example is read from the live prototype (`examples/face.works/prototype/`),
not invented. Token names are cited; values live in
`prototype/src/app/reading-room.css` and are never restated here. Clause ids
(`clause: …`) and component ids resolve in `../components.yaml`.

---

## ON-1 — Home masthead

**Surface:** `/` — `src/app/page.tsx`, `<header className="rr-masthead">`

```
FACEWORK · A PUBLIC RECORD OF COHERENCE          ← RecordLabel, tick
It doesn't decorate. It reads.                   ← .rr-display
Facework is a discipline for seeing, designing, and maintaining the
structures that let identity carry weight over time. …   ← .rr-lede
```

**Why on-brand:**

- **record-label** — short mono eyebrow, uppercase, `--rr-muted` with the
  `--rr-accent` square tick (clause: mono-certifies, verdigris-attended).
- **display** — one statement, left on the reading edge, `--rr-text-strong`,
  balanced wrap, no gradient, no exclamation point (clause: one-axis,
  no-gradient-no-glow, copy-is-a-reading).
- The lede says what Facework *is* in plain nouns — no "transform", no
  "unlock", no "AI-powered" (clause: copy-is-a-reading).
- Signal fidelity: the governing metaphor ("doesn't decorate — it reads",
  DESIGN.md §2) is the headline itself, not a slogan beside it.

---

## ON-2 — The current reading + verdict

**Surface:** `/` — section `#current-attention`

```
CURRENT READING                                  ← SectionHead label
What has our attention now                       ← Schibsted title
▪ RUNS & EVIDENCE · FN-027                       ← Reading eyebrow
Visible lineage                                  ← Literata title
<body paragraphs at the reading measure>
▮▮▮▯▯ 3/5 ■ OPEN                                 ← CoherenceVerdict
```

**Why on-brand:**

- **reading** — eyebrow → title → body → verdict, the unit in order, sitting
  directly on the ground with no card (clause: reading-is-the-unit,
  no-card-in-card).
- **section-head** — structure speaks in `--rr-font-structure`; the reading
  title speaks in `--rr-font-reading` (clause: three-voices).
- **coherence-verdict** — score in record voice with tabular numerals; lit
  bars `--rr-accent`; marker is derived from the record's status through
  `verdictForStatus()`, never asserted (clause: no-fabricated-records,
  shape-law).
- Inherited-cold test: the body states the claim ("finished … when it would
  still hold if someone inherited it cold") rather than gesturing at it.

---

## ON-3 — Reading index rows

**Surface:** `/` "Recent readings" and every ledger — `ReadingIndex`

```
───────────────────────────────────────────────────────────
FN-026    Title in Schibsted                      ● SETTLED
          Muted one-line note
───────────────────────────────────────────────────────────
FM-001    Cultural Physics                        ■ OPEN
          Muted one-line note
───────────────────────────────────────────────────────────
```

**Why on-brand:**

- **reading-index** — hairline-ruled rows in `--rr-line`, not cards; mono ID
  column, structural title, muted note (clause: hairline-only,
  no-equal-card-grid).
- **shape-marker** — square = open, circle = settled, through the one
  component (clause: shape-law).
- Hover moves only the title to `--rr-accent-text`; focus draws an
  `--rr-accent` outline. No row fill, no chevron (clause: verdigris-attended).

---

## ON-4 — Ink CTA into the Practice

**Surface:** `/` "The Practice" section — `<InkCTA href="/engage">Enter the practice</InkCTA>`

**Why on-brand:**

- **ink-cta** — `--rr-cta-fill` / `--rr-cta-ink`, sized to its label,
  left-aligned, one action in the section (clause: ink-cta, one-axis).
- Hover is opacity only, on `--rr-ease-settle` (clause: structural-motion).
- Copy names the move ("Enter the practice") — no "Get started today!", no
  urgency (clause: copy-is-a-reading).

---

## ON-5 — Ledger holdings line (thin collection)

**Surface:** `/postures` and other ledgers — `Ledger.tsx`, `.rr-ledger-holdings`

```
■ 8 POSTURES DEFINED · 0 ENTRIES ISSUED
```

**Why on-brand:**

- **ledger** — the ledger counts itself from its records via `holdingsFor()`;
  counts in `--rr-text-strong`, units in `--rr-muted`, record voice
  (clause: no-fabricated-records, mono-certifies).
- A thin collection states its condition without apology — no "coming soon",
  no empty-state illustration (clause: copy-is-a-reading, five-instruments).
- No dates: records carry none, so none are shown.

---

## ON-6 — Reading margin on a canon document

**Surface:** `/protocol/[slug]` — `Margin.tsx`, `.rr-ledger__rail`

```
                                         │ CANON · PROTOCOL
  <document body at --rr-measure>        │ <source path> @ <sha> · <status>
                                         │ ~N words
                                         │ ────────────────
                                         │ CONTENTS
                                         │ 1) Purpose …
```

**Why on-brand:**

- **margin** — typographic apparatus: canon voice above the one hairline,
  wayfinding below; no background, no card (clause: margin-is-apparatus).
- Honest `~N words`, provenance to a real path @ SHA, Contents from the
  document's own h2 spine — nothing estimated or fabricated
  (clause: no-fabricated-records).
- Below 1100px the rail folds inline and Contents becomes a native
  `<details>` — never hidden (clause: margin-is-apparatus).

---

## ON-7 — Lineage as rows, not a diagram

**Surface:** `/engage`, `/status` — `StructureLineage`

**Why on-brand:**

- **structure-lineage** — what holds the system up is a ruled list with
  shape-law markers, label in `--rr-font-structure`, note in
  `--rr-font-record`. No flowchart boxes or connector arrows
  (clause: hairline-only, shape-law, no-card-in-card).
- FVS-200 Module + Axis: each row is a module with a shared left datum; the
  combination is explainable ("Knowledge path").

---

## ON-8 — Copy in the reading register

**Surface:** home lede, Practice section

> The other mode: how to work with Facework — the proof, the method, and what
> an engagement costs and delivers.

**Why on-brand:**

- Names the thing by what it is; promises an answer to *what it is, what it
  costs, what you get* (DESIGN.md §10) instead of a benefit claim
  (clause: copy-is-a-reading).
- No exclamation point, no "we're passionate about", no agency theatre, no
  technical costume.
