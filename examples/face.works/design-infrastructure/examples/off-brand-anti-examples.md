# Off-Brand Anti-Examples — Face.works

Cases that fail the TasteContract, with annotated rationale. The
evaluator pulls these when grading new artifacts to identify drift.

---

## Anti-example 1: Consultant-register engagement email

```
Hi Alex,

I just wanted to circle back regarding our recent engagement and the
upcoming handoff. Per our previous discussion, we'll be wrapping things
up over the next few days. Let me know if you have any questions or
concerns!

Looking forward to continuing to support you on your journey.

Best,
Harper
```

**Why off-brand:**

- **Signal fidelity (1):** "Just wanted to circle back," "upcoming
  handoff," "continuing to support you on your journey" — every
  sentence has consultant-register softening. None of it is status.
- **Voice (1):** The TasteContract explicitly rejects "we believe"
  prefacing and consultant register (see soul.md). This is a violation
  of contract clause `voice.no-prefacing`.
- **Compositional clarity (2):** No structure. No numbered items. No
  call to action. Reader can't extract what they need to do.

**Closest on-brand counterpart:** On-brand example 1.

**Correction:** Open with status. Numbered items for what the recipient
needs to read. No "circle back," no "looking forward to," no
"journey." Founder-direct or no email.

---

## Anti-example 2: SaaS-register marketing page

**Artifact:** Landing-style page with hero section, gradient background,
large CTA buttons stacked center-aligned, drop shadows on every card.

**Why off-brand:**

- Heading uses gradient text fill — **violates `heading.contract.must_not`:
  "no gradient fills."**
- Buttons have drop shadows — **violates `button.contract.must_not`:
  "no shadow variants for primary buttons."**
- Page background is a soft gradient — **violates editorial register
  (TasteContract clause `aesthetic.editorial-not-saas`).**
- Center-aligned headlines — **violates `section.contract.must_not`:
  "no centered text by default."**
- Multiple call-to-action buttons in a row, each pulsing on idle —
  **violates `button.contract.must_not`: "no animated icons or pulsing
  effects."**

**Score breakdown:**
- Signal fidelity (1) — reads as a Y Combinator landing page, not a
  Face.works artifact.
- Contextual integrity (2) — even if the components technically work, the
  composition is for the wrong audience.
- Compositional clarity (3) — at least the hierarchy is readable.
- Behavioral coherence (1) — none of the components match declared
  contracts.
- Durability under scale (2) — would compound the off-brand drift if
  multiplied across the system.

**Correction:** Replace gradient with `neutral.50` page background.
Remove shadow from primary buttons. Left-align headings. Single primary
CTA per section. No pulsing animation — `motion.base` duration on hover
state only.

---

## Anti-example 3: Status card with magic numbers

```
┌───────────────────────────────────────────┐
│ ACME CO — MVP STAGE                        │
│                                            │
│ Coherence Score: 3.2 (Looking great!)     │
│                                            │
│ ...content...                              │
└───────────────────────────────────────────┘
```

(With: 17px internal padding, `border-radius: 6px`, soft purple
gradient header bar, all-caps title in `font-weight: 700`.)

**Why off-brand:**

- **All-caps display text** — violates `heading.contract.must_not`: "no
  all-caps display text."
- **17px padding** is a magic number — **violates token discipline.**
  Spacing tokens are 4/8/12/16/20/24px. 17 isn't declared. Should be
  `space.6` (24px) per `card.contract.must`.
- **6px radius** is also off-token — declared `radius.md` is 4px,
  `radius.lg` is 8px. 6px is invented.
- **"Looking great!"** breaks voice. The TasteContract requires status,
  not motivation. The score is the assessment; no parenthetical pep
  talk.
- Soft purple gradient header — violates color discipline and editorial
  register.

**Score breakdown:**
- Signal fidelity (2) — the data is there, the wrapping is off.
- Behavioral coherence (1) — the card component contract is violated in
  three places.
- Durability under scale (1) — magic numbers compound. Every future card
  has to decide what padding/radius to use.

**Correction:** Pad with `space.6` (24px). Radius `lg` (8px). Title in
title-case, weight 600, no gradient bar. Drop the "Looking great!"
suffix — the score stands on its own.

---

## Anti-example 4: Decision record written as agency pitch

```
Decision: Creator-First Wedge

We're excited to announce our latest strategic decision: focusing on
the creator-first wedge. This represents an incredible opportunity to
unlock value across the creator economy ecosystem...
```

**Why off-brand:**

- "We're excited to announce" — consultant register, breaks voice.
- "Incredible opportunity" — marketing prose, breaks voice.
- "Unlock value across the creator economy ecosystem" — buzzword string.
  Face.works writes about specific people, not "ecosystems."

**Closest on-brand counterpart:** decision records in
`define/decisions/` are short, direct, and structured. They state the
decision, the reasoning, the implications, and the no-go side.

**Correction:** State the decision in one sentence. List the reasoning.
List the no-go side. No "excited to," no "ecosystem," no "unlock
value." Use specific names: "Sarah, audio engineer, building her own
catalog" — not "music producers."

---

## Pattern summary — common drift

Five drift patterns the evaluator should flag:

1. **Consultant register creep.** "Circle back," "as discussed," "going
   forward," "looking forward to," "support you on your journey." These
   are extraction patterns disguised as politeness.
2. **SaaS aesthetic mimicry.** Gradients, drop shadows, center-aligned
   hero sections, pulsing CTAs. Always wrong for Face.works register.
3. **Magic numbers.** Spacing/radius/sizing that doesn't reference a
   declared token. Always replaceable with a declared value.
4. **Marketing prose in operational artifacts.** "Excited to," "unlock,"
   "incredible," "opportunity," "leverage." Operational artifacts are
   factual, not promotional.
5. **Abstractions over names.** "Music producers" instead of "Sarah, audio
   engineer." "Creator economy" instead of "creators with their own
   audience." The contract demands specificity.
