---
id: FW-DEC-002
title: The site experience derives from the Standards Architecture, not the GPT-era frame
date: 2026-08-11
status: resolved
authority: canonical
ratified_by: Harper (harper@face.works)
---

# FW-DEC-002 — Standards-First Experience Language

## Question

Should face.works keep the experience language and taxonomy it inherited from
the GPT-era visual-system application program (FVS-900) — or must every
user-facing phrase and browse structure derive from the Standards Architecture
canon (Constitution, theories, Protocol, COS)?

## Decision

**The site derives from the Standards Architecture, not the GPT-era frame.**
Every load-bearing phrase and the browse taxonomy must carry a recorded
derivation chain into canon. Language that cannot be derived is retired;
language that can be derived is re-earned with its chain recorded here.

Ratified by Harper, 2026-08-11.

## Provenance audit

Three phrases and one taxonomy were audited for canonical provenance:

| Surface item | Origin | Verdict |
|---|---|---|
| Tagline "A public record of attention" | GPT-era FVS-900 coinage | **RETIRED** |
| The Work's six types (Field Notes / Models / Frameworks / Experiments / Conversations / Library) | GPT-era FVS-900 taxonomy | **RETIRED** |
| Hero "It doesn't decorate. It reads." | Reading Room derivation (0.0.29) | **RE-EARNED** |
| Footer "Knowledge should outlive the interface." | GPT-era program (0.0.28) | **RE-EARNED** |

## Retired items

### 1. Tagline — "A public record of attention"

Retired as **canon-inverted**: in cultural-physics §I/§III, attention is the
*extracted commodity* — the thing platforms harvest from creators. A practice
whose theory names attention as what extraction takes cannot brand its record
as a record of attention.

**Ratified replacement: "A public record of coherence"**

Derivation chain:
- CONSTITUTION Art. VI — "Every meaningful action performed through Facework
  shall produce persistent evidence" (the *public record*),
- × CONSTITUTION Art. I — "The purpose of Facework is to establish, preserve,
  and restore coherence" (*of coherence*).

### 2. The Work taxonomy — six FVS-900 types

Field Notes / Models / Frameworks / Experiments / Conversations / Library is
retired: it is a content-marketing typology with no canonical anchor.

**Ratified replacement: the working-canon shape** —
**Constitution · Theories · Protocol · Postures · Runs & Evidence · Methodology**

Derivation chain:
- standards/README.md — "the working canon is the Constitution, the theory
  layer, the Protocol, and the Skills" (Skills = the Postures, per
  CONSTITUTION Art. V and skills/OPERATING_SKILLS.md),
- + CONSTITUTION Art. VI (evidence) → **Runs & Evidence**,
- + COS §VII (the loops — retros and methodology evolution) → **Methodology**.

Implementation notes: Constitution and Protocol are single served documents,
so their bucket rows link straight to `/protocol/constitution` and `/protocol`
(no wrapper pages). The four multi-record buckets get browse surfaces at
`/theories`, `/postures`, `/runs`, `/methodology`; the six retired routes
permanently redirect to their nearest new home (field-notes→/runs,
models→/theories, frameworks→/theories, experiments→/runs,
conversations→/methodology, library→/methodology).

## Re-earned items (kept, with recorded derivations)

### 1. Hero — "It doesn't decorate. It reads."

- PROTOCOL.md §1 — "Taste is governance, not decoration."
- + COS §IV — "Every phase begins by reading existing artifacts."
- + cultural-physics §VI — "read the room."

### 2. Footer — "Knowledge should outlive the interface."

- CONSTITUTION Art. XIII — "The ultimate measure of Facework is not
  completion. It is transmission."
- + CONSTITUTION Closing Declaration — "carrying continuity beyond those who
  first imagined them."
- + coherence-design §XI — "so transmissible that they outlive the people who
  first imagined them."

## Alternatives rejected

**Tagline candidates:**
- B — "Systems that hold their shape" (coherence-design's own line, but
  describes the *output* of the discipline, not what the site *is*; loses the
  Art. VI record framing).
- C — "The measure is transmission" (Art. XIII verbatim, but names the test
  rather than the artifact; the site is the record, not the measure).

**Taxonomy schemes:**
- A — Five-layer model (Theory / Discipline / Practice / Implementation /
  Runtime): an authority chain, not a browse structure; readers do not seek
  "Implementation."
- B — Evidence-kinds: privileges Art. VI over the rest of the canon shape and
  fragments the theory layer.
- D — Four-constructs: too coarse; collapses the Constitution and Protocol
  into "Practice" and leaves evidence and methodology homeless.

## Consequences

- FVS-900's "public record of attention" line and its six-type list are
  annotated as superseded in `visual-system/FVS-900-applications.md`
  (historical text preserved, per Art. XI traceability).
- `visual-system/README.md` carries a governance note: the visual system is an
  Implementation-layer artifact under the five-layer model (CONSTITUTION
  Art. III); where FVS content conflicts with canon, canon governs.
- The site's data layer records the mapping of existing readings into the new
  buckets (see `examples/face.works/prototype/src/data/knowledge.ts`).

## Revisit trigger

If the standards track activates (post-1.0) and FS-000–900 formalize a public
taxonomy that differs from the working-canon shape, this decision is re-opened
against that ratified standard.
