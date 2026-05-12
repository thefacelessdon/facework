# On-Brand Examples — Face.works

Concrete artifacts that pass the TasteContract, with annotated rationale.
The evaluator pulls these as reference data when grading new artifacts.

---

## Example 1: Engagement closure email

**Artifact:** Email to client at engagement close.

**Why on-brand:**

```
Hi Alex,

We're closing out the engagement. The handoff package is at
github.com/face.works/alex-eng-001 — you have admin access already.

Three things to note before you start operating it:

1. The taste contract is in define/TasteContract.md. Read it first.
2. Skills are documented in harness-bundle/skills/. Each has a trigger
   and an ownership column — start with the human-ownership ones.
3. The memory boundary doc is harness-bundle/boundary.md. Read this
   before the runtime writes anything anywhere.

Diagnostic report (define/diagnostic.md) has the coherence scorecard.
You came in green-zone. Two yellow flags we resolved during stage 3 —
both noted with the resolutions inline.

If anything is unclear in a way that the docs don't fix, ping me.

— Harper
```

- **Signal fidelity (5):** Direct, declarative, no consultant register.
  Operator-shaped, not impressing-the-client-shaped.
- **Compositional clarity (5):** Three numbered items, no nesting, clear
  call-to-action at the end. Reader's eye is guided without effort.
- **Voice:** Founder-direct, no "I just wanted to follow up" preamble.
  "Three things to note" — status before motion.

---

## Example 2: Engagement-delivery page layout

**Artifact:** Page rendered for `wiki/clients/<client>/define/README.md`.

**Why on-brand:**

- Display heading uses `type.family.display` (Inter Tight, `3xl`,
  weight 600), tight leading. Sits on a single line.
- Body paragraphs use `type.family.body` (Inter, `base`, weight 400),
  relaxed leading (1.7). Max-width 64ch. Reader's eye doesn't sprint.
- Section spacing is `space.16` (64px) top and bottom. Generous, not
  cramped. Editorial register, not SaaS.
- Color discipline: brand.primary only for headings; neutral.800 for body
  text; brand.accent only for inline links. No gradient, no shadow.
- Buttons are 44px tall minimum, brand.primary fill, radius.md (4px),
  240ms transition. Focus state shows a 2px outline in brand.accent.

Each of these aligns with a declared component contract rule.

---

## Example 3: Status card for stage-gate monitoring

**Artifact:** Card in the weekly status report at `outputs/weekly-status/`.

```
┌─────────────────────────────────────────────────────────┐
│ Acme Co — MVP Stage                                     │
│                                                         │
│ Coherence: 3.2 (GREEN)                                  │
│ Last touch: 2 days ago                                  │
│ Blocker: none                                            │
│                                                         │
│ Phase 7 review: 2026-05-20                              │
└─────────────────────────────────────────────────────────┘
```

- **Compositional clarity (5):** Title, score, recency, blocker, next —
  in that order. Hierarchy is recognizable without reading.
- **Behavioral coherence (5):** Card uses the `card` component
  primitive. Internal padding is `space.6` (24px). Background is
  `neutral.50` with `neutral.200` border. Radius is `lg` (8px). Every
  token used is declared.
- **Durability under scale (5):** Replace "Acme Co" with any client
  name; the format holds. No magic numbers.

---

## Example 4: Voice in the morning brief

**Artifact:** Daily morning brief in `outputs/morning-brief/`.

```
Pipeline today: 4 active inquiries, 2 qualified.

Acme Co (qualified): wants to start in 3 weeks. Capacity available.
Sarah (signal: strong, status: discovery): publishing audience numbers
  this week. Decide on follow-up after.

Competitor watch: nothing new at the top of the stack.

Decision needed (you): Acme Co needs a price quote by Friday.
```

- **Signal fidelity (5):** Status, not posturing. "Decision needed (you)"
  is direct ownership marking. No "as discussed previously" or "circling
  back" — those are extraction patterns disguised as politeness.
- **Voice:** Founder-shaped. Reads aloud like the founder would say it.

---

## Pattern summary

Every example above shares:

1. **Status before motion.** Verdict, score, or assessment leads. Then
   the supporting detail.
2. **Token discipline.** Colors, spacings, type sizes always reference
   declared tokens, never inline values.
3. **Component discipline.** Components are used per contract — primary
   buttons don't get shadows, headings don't get all-caps, cards have
   their declared radius.
4. **Editorial register, not SaaS register.** Generous spacing,
   restrained color, left-aligned text, single-line headings where
   possible. The work reads like writing, not like a dashboard.
5. **Direct voice.** Founder-shaped. No consultant prefacing. Names over
   abstractions.
