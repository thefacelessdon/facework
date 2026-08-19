---
title: "Chat Routing Memo"
date: 2026-06-29
source: "https://chatgpt.com/share/6a400eef-e4cc-83ea-a36e-064828752660"
status: Draft
purpose: "Route cross-layer insights from one conversation into canonical Facework homes"
---

# Chat Routing Memo

This memo is the **intake layer** for a high-signal conversation whose
implications appear to span:

- the Facework protocol
- the design system
- the website
- the brand architecture
- possibly the theory / discipline layers

It is **not** the final home of any idea. Its job is to:

1. capture the important thinking in one place
2. classify each idea by layer
3. decide what becomes canonical now
4. route each durable idea into its correct long-term document

---

## Source

- Shared chat: <https://chatgpt.com/share/6a400eef-e4cc-83ea-a36e-064828752660>
- Repository: `Facework`
- Review context:
  - standards integration
  - Constitution / Discipline / Practice separation
  - protocol implications
  - face.works site and brand implications

---

## Working Rule

Use this memo for **synthesis and routing**, not permanent authority.

Every idea below must end in one of four states:

- **Canonical now** — promote into a permanent source of truth immediately
- **Project-level only** — belongs to face.works or another concrete project, not Facework globally
- **Deferred** — important, but not yet earned by evidence
- **Rejected** — interesting, but contradicts the current canon or duplicates an existing concept

---

## Executive Read

### What this chat seems to affect

- [x] Theory / worldview
- [x] Coherence Design discipline
- [x] Constitution / governing rules
- [x] Protocol / skills / phase logic
- [x] Facework offer / business architecture
- [x] Brand architecture
- [x] Website information architecture
- [x] Design language / visual system
- [x] Standards track

### One-paragraph synthesis

> The conversation appears to sharpen Facework as more than a protocol toolkit:
> it clarifies the layered relationship between Cultural Physics, Coherence
> Design, Facework, and its proof ventures, while also implying downstream
> consequences for how the public brand, website, design system, and standards
> track should be organized. The strongest conclusion already supported by this
> thread is that Facework needs clearer routing between worldview, discipline,
> practice, execution, and public expression.

### Main claim

> Facework needs to treat cross-layer insight as a routing problem: first decide
> whether an idea belongs to theory, discipline, practice, brand, website, or
> deferred standards, then promote it into exactly one canonical home.

---

## Insight Inventory

List the major ideas from the chat before routing them.

| ID | Idea | Why it matters | Initial layer guess | Confidence |
|----|------|----------------|---------------------|------------|
| I-01 | Facework sits inside a larger layered system: Cultural Physics → Coherence Design → Facework → ventures | This is the clearest routing frame to emerge in the thread and affects theory, positioning, README, and site IA | Practice / Brand / Site | High |
| I-02 | The Constitution should govern the practice while the protocol remains mutable | This separates governing truth from execution logic and prevents protocol churn from destabilizing identity | Practice | High |
| I-03 | Coherence Design is a missing discipline layer, not just extra copy | This changes how Facework is positioned and where design/system ideas belong before they become protocol mechanics | Discipline | High |
| I-04 | The standards architecture is valuable, but most of it should remain deferred until earned by external evidence | This prevents overspecifying the system and keeps standards from outrunning practice | Standards track / Practice | High |
| I-05 | The same conversation may have implications for website, brand architecture, and design language, but those should not be promoted globally without routing | This is the core operational lesson for how to use the chat without causing concept duplication | Brand / Site / Design system | Medium |

---

## Routing Matrix

For each idea, decide the **one canonical home** if it is promoted.

| Idea ID | Final disposition | Canonical home | Why here and not elsewhere |
|---------|-------------------|----------------|-----------------------------|
| I-01 | Canonical now | `README.md`, `CONSTITUTION.md`, `theories/coherence-design.md` | The layer model is public positioning and structural truth, not just a project note |
| I-02 | Canonical now | `CONSTITUTION.md` | Governing authority belongs in the Constitution, not in the protocol spec |
| I-03 | Canonical now | `theories/coherence-design.md` | This is a discipline-layer clarification, not merely a site or marketing update |
| I-04 | Canonical now | `methodology/architecture-reconciliation-2026-06.md`, `standards/README.md` | The decision to defer belongs in reconciliation and standards-track governance |
| I-05 | Deferred pending direct chat review | `examples/face.works/prototype/DESIGN.md` and `examples/face.works/prototype/src/app/` if confirmed | The thread suggests design and website implications, but we have not yet verified the chat-specific content closely enough to promote them globally |

---

## Protocol Implications

Use this section only for implications that change how Facework is executed.

### Questions

- Does the chat change phase order?
- Does it change what a phase is for?
- Does it introduce a missing artifact?
- Does it sharpen an existing gate?
- Does it change how `/fw-*` skills should behave?
- Does it affect the "Protocol establishes / Postures maintain" split?

### Candidate changes

- [ ] Change to `PROTOCOL.md`:
  - Possibly add clearer language around Practice vs Protocol if this thread's
    routing logic proves to affect how phases are understood.
- [ ] Change to a protocol skill:
  - Possibly add a routing step in `/fw-coherence` or a related operating skill
    so cross-layer insight gets classified before being canonized.
- [ ] Change to a gate or artifact:
  - Candidate future artifact: a reusable "routing memo" pattern for major
    architectural conversations.
- [x] No protocol change:
  - Reason: based on this thread alone, the strongest changes are framing,
    governance, and documentation architecture, not phase mechanics.

### Canonical destination

- [PROTOCOL.md](/Users/facelessdon/projects/Facework/PROTOCOL.md:1)
- Relevant `skills/*/SKILL.md`
- [methodology/CHANGELOG.md](/Users/facelessdon/projects/Facework/methodology/CHANGELOG.md:1)

---

## Design System Implications

Use this section for changes to the visual logic, interface behavior, and taste
system.

### Questions

- Does the chat change the meaning of Taste?
- Does it imply new design primitives, tokens, or constraints?
- Does it alter how visual language should express the 12 primitives?
- Does it change what "on-brand" means structurally?
- Does it affect the future DesignInfrastructure direction?

### Candidate changes

- [x] Change to face.works `DESIGN.md`:
  - The site likely needs to express the layered architecture more explicitly:
    theory, discipline, practice, and proof should feel distinct rather than
    collapsed into one undifferentiated system story.
- [ ] Change to design tokens / component rules:
  - Nothing specific yet from this thread alone.
- [ ] Change to examples / anti-examples:
  - Candidate future update if the chat contains a sharper definition of what
    Facework should and should not look or sound like.
- [ ] No design-system change:
  - Reason: not enough detail to lock token-level changes yet.

### Canonical destination

- [examples/face.works/prototype/DESIGN.md](/Users/facelessdon/projects/Facework/examples/face.works/prototype/DESIGN.md:1)
- `examples/face.works/design-infrastructure/` if the idea becomes active design infrastructure

---

## Website / Brand Architecture Implications

Use this section for implications specific to the public expression of Facework.

### Questions

- Does the chat change how Facework should be positioned?
- Does it change homepage hierarchy or narrative sequence?
- Does it split or merge brand layers?
- Does it change the relationship between Facework, face.works, GAMUT, HUE, etc.?
- Does it change site IA, page purpose, or conversion flow?

### Candidate changes

- [x] Change to repo-level positioning:
  - Facework should be described as the Practice layer inside a larger coherent
    system, not as the whole stack.
- [x] Change to face.works website IA:
  - The site likely needs a cleaner distinction between the open protocol, the
    discipline beneath it, and the ventures or proof above it.
- [x] Change to brand architecture:
  - The relationship between Facework, face.works, and proof ventures should be
    made more legible.
- [x] Change to copy system / canonical language:
  - "Protocol establishes / Postures maintain" is already one example of the
    kind of language clarification this thread supports.
- [ ] No website / brand change:
  - Reason: not applicable; the thread clearly points to brand/site implications.

### Canonical destination

- [README.md](/Users/facelessdon/projects/Facework/README.md:1) for public repo positioning
- [examples/face.works/define/README.md](/Users/facelessdon/projects/Facework/examples/face.works/define/README.md:1) for business / offer architecture
- `examples/face.works/prototype/src/app/` for actual site implementation
- [examples/face.works/prototype/DESIGN.md](/Users/facelessdon/projects/Facework/examples/face.works/prototype/DESIGN.md:1) for page structure and visual logic

### Current mismatch observed in repo

Based on the current local `face.works` artifacts:

- The repo-level positioning now distinguishes **theory**, **discipline**,
  **practice**, and **proof ventures**, but the current homepage and design spec
  still largely present Facework as one unified system-story.
- The homepage currently leads with the protocol claim and the extraction
  argument, but does not yet clearly distinguish:
  - why Cultural Physics exists
  - what Coherence Design adds as a discipline
  - what Facework does as a practice
  - where proof or ventures sit
- The existing design language spec has strong primitive and engine logic, but
  its IA still reflects an earlier framing where "the system" and "the
  protocol" are closer together than the new layered model suggests.

### Likely project-level updates if confirmed

- Add a clearer layer narrative on the home page or system page:
  Theory → Discipline → Practice → Proof.
- Rework the "The System" view so it distinguishes:
  - Cultural Physics
  - Coherence Design
  - Facework Protocol / Practice
  - proof / reference outputs
- Revisit whether `Proof`, `Protocol`, and `Status` are the right top-level
  public navigation labels once the layer model becomes visible.
- Update the business/offer framing so `face.works` reads as the commercial
  application or expression of the practice rather than as the whole canon.

---

## Theory / Discipline Implications

Use this section only if the chat changes worldview-level truth, not just
execution.

### Questions

- Is this a new law, or only a better articulation of an existing one?
- Does this belong to Cultural Physics or to Coherence Design?
- Does it change the definition of a primitive?
- Does it change the meaning of coherence, resonance, entropy, sovereignty, etc.?

### Candidate changes

- [ ] Change to Cultural Physics:
  - No direct theory-law change proven yet.
- [x] Change to Coherence Design:
  - The thread already supports making Coherence Design explicit as the
    discipline layer between theory and practice.
- [x] Change to Constitution:
  - The Constitution should hold the governing relationship between Practice,
    Protocol, and Postures.
- [ ] No theory / discipline change:
  - Reason: not applicable; the discipline/practice distinction is one of the
    clearest conclusions already validated in this thread.

### Canonical destination

- [theories/cultural-physics.md](/Users/facelessdon/projects/Facework/theories/cultural-physics.md:1)
- [theories/coherence-design.md](/Users/facelessdon/projects/Facework/theories/coherence-design.md:1)
- [CONSTITUTION.md](/Users/facelessdon/projects/Facework/CONSTITUTION.md:1)

---

## Standards Track Implications

Use this section if the chat affects the deferred standards apparatus rather
than the live canon.

### Questions

- Does this belong in the post-1.0 standards track rather than the active repo canon?
- Does it affect FS / FOS / FRS structure?
- Does it clarify something that should be recorded as deferred rather than activated?

### Candidate changes

- [x] Add note to standards track:
  - Cross-layer insights from major chats should be routed before they are used
    to expand FS/FOS/FRS ambitions.
- [x] Update reconciliation logic:
  - The standards machinery must remain downstream of evidence, not upstream of it.
- [ ] No standards-track change:
  - Reason: not applicable; this thread directly reinforced the deferment logic.

### Canonical destination

- [standards/README.md](/Users/facelessdon/projects/Facework/standards/README.md:1)
- [methodology/architecture-reconciliation-2026-06.md](/Users/facelessdon/projects/Facework/methodology/architecture-reconciliation-2026-06.md:1)

---

## Canonical-Now Decisions

Only list the ideas that should be promoted immediately.

| Decision | Promote to | Why now | Evidence threshold met? |
|----------|------------|---------|-------------------------|
| Facework belongs inside a layered stack rather than standing for the whole canon | `README.md`, `CONSTITUTION.md`, `theories/coherence-design.md` | Already repeatedly supported by the standards review and applied branch work | Yes |
| The Constitution governs the practice; the protocol is mutable execution logic | `CONSTITUTION.md` | Already implemented and validated through the standards integration work in this thread | Yes |
| Coherence Design deserves a distinct canonical home | `theories/coherence-design.md` | This resolved an identified architecture gap and has already been drafted and applied in the fresh branch | Yes |

---

## Deferred Decisions

List ideas that feel right but should not yet become canonical.

| Idea | Why defer | What evidence would earn activation? |
|------|-----------|--------------------------------------|
| Full website IA rewrite based on the shared chat alone | We know there are likely implications, but we have not yet extracted the exact claims from the source chat | A direct pass through the shared chat plus a concrete IA proposal |
| Brand-architecture changes beyond current README / design-language framing | The thread suggests this area matters, but not enough detail is grounded yet to lock the hierarchy | Clear statements from the chat about relationship, naming, and role separation |
| New protocol artifact for routing cross-layer insights | Useful pattern, but not yet earned as protocol surface area | Repeated use across multiple real conversations and projects |

---

## Immediate Follow-Up Actions

### Documentation actions

- [x] Update [README.md](/Users/facelessdon/projects/Facework/README.md:1)
- [ ] Update [PROTOCOL.md](/Users/facelessdon/projects/Facework/PROTOCOL.md:1)
- [ ] Update [theories/cultural-physics.md](/Users/facelessdon/projects/Facework/theories/cultural-physics.md:1)
- [x] Update [theories/coherence-design.md](/Users/facelessdon/projects/Facework/theories/coherence-design.md:1)
- [x] Update [CONSTITUTION.md](/Users/facelessdon/projects/Facework/CONSTITUTION.md:1)
- [ ] Update [examples/face.works/prototype/DESIGN.md](/Users/facelessdon/projects/Facework/examples/face.works/prototype/DESIGN.md:1)
- [ ] Update `examples/face.works/prototype/src/app/`
- [x] Update [standards/README.md](/Users/facelessdon/projects/Facework/standards/README.md:1)
- [x] Update [methodology/CHANGELOG.md](/Users/facelessdon/projects/Facework/methodology/CHANGELOG.md:1)

### Decision actions

- [ ] Create follow-up decision record
- [x] Open a brand-architecture pass
- [x] Open a website IA pass
- [x] Open a design-system pass
- [ ] Open a protocol revision pass

### Suggested next concrete passes

- [ ] Brand-architecture memo for the relationship between Facework, face.works,
  and proof ventures
- [ ] Website IA pass against `examples/face.works/prototype/DESIGN.md`
- [ ] Homepage/content pass against `examples/face.works/prototype/src/app/page.tsx`
- [ ] Decide whether the layer model needs its own public page or interactive map

---

## Final Synthesis

Complete this only after routing everything:

### What changed in Facework itself

> The repo now has enough evidence to treat the layer split as real: Cultural
> Physics is theory, Coherence Design is discipline, Facework is practice, and
> the protocol is one mutable expression inside that practice rather than the
> whole system.

### What changed only in face.works

> We have a strong indication that face.works should make the layered structure,
> brand hierarchy, and public narrative more explicit, but those changes should
> remain project-level until we extract the exact design and IA implications from
> the source chat.

### What the current repo already suggests about face.works

> Even before re-reading the shared chat, the current local repo already shows a
> mismatch: repo-level doctrine has evolved toward a layered architecture, while
> the site and design spec still mostly present Facework as a single public
> object. That likely means the next design and IA work is less about inventing
> a new brand and more about making the newly explicit layer model legible.

### What remains open

> The open question is not whether the shared chat matters, but how much of it
> belongs to global Facework canon versus face.works-specific execution. The
> next step is a direct pass through the source conversation to identify which
> website, design-system, and brand-architecture moves are truly durable.
