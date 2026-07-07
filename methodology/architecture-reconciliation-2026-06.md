---
title: "Architecture Reconciliation — Standards Integration"
date: 2026-06-30
status: Decided
supersedes: none
governs: CONSTITUTION.md, theories/coherence-design.md, standards/
---

# Architecture Reconciliation — Standards Integration

## Context

The external *Facework Standards Architecture* draft was reviewed for
integration. It carries the authoritative definition of Facework and its layer
model. Review found the theory and primitives layers strong, but the draft
carried three competing internal layer models, two incompatible versions of one
standard (FOS-500), and a vocabulary split across two dictionaries.

This record locks the reconciliation. It was first drafted against 0.0.4; by the
time it landed, parallel work had shipped 0.0.5–0.0.8 (the Operating Layer
trilogy: Runtime Ports, HarnessBundle, DesignInfrastructure, plus efficiency
hints). This version reconciles against that shipped state and lands at **0.0.9**.

## Governing call: evidence-calibrated depth

Facework is pre-1.0. The nine-layer constitutional standards apparatus
(FS/FOS/FRS) is formalization ahead of evidence, so it stays **staged** in
`standards/` until the protocol earns it through external runs (see
`ROADMAP.md`). What integrates now is the part that sharpens the idea without
committing to premature machinery: the Constitution and the Discipline layer.

## Definition of Facework — deferred to the Standards Architecture

Facework's definition is established by the Facework Standards Architecture and
is not re-decided here. Per that source and the Constitution: **Facework is the
Practice** — the practical application of Coherence Design — and the Protocol is
a component *within* Facework, not a synonym for it.

**Open tension (flagged, not resolved):** the shipped `README.md` (0.0.5–0.0.8)
frames Facework as "a protocol" within an operator-ownership stack
(Practice = GAMUT, Protocol = Facework, Runtime = Corey). The Constitution and
the Standards Architecture frame Facework as the Practice. These are two axes —
a conceptual-layer model and an operator-ownership model — using the same words
for different things. Reconciling the wording belongs to the Standards
Architecture rollout, not to this integration. Both framings are preserved
as-is until then.

## The five spine decisions

Resolved by the protocol's own logic during the Standards Architecture review.
All five survive the 0.0.8 state:

1. **Five-layer model** is canonical: Theory → Discipline → Practice →
   Implementation → Runtime.
2. **Capability is an artifact, not an architectural layer.** Confirmed: the
   shipped Runtime Ports (`SkillManifest`, `MemoryMap`, `ContextManifest`,
   `IntegrationManifest`) are artifacts emitted by phases, not a new tier.
3. **One identifier — FRN** (`frn:facework:<type>:<name>`).
4. **Resonance has one definition** — transmission through frequency alignment.
5. **Postures are the maintenance half of the Practice** (Protocol establishes
   coherence, Postures maintain it). Convergent: the shipped work independently
   uses "posture" language.

## What integrates now vs. later

**Now (0.0.9):**
- `CONSTITUTION.md` — the governing spine (13 articles).
- `theories/coherence-design.md` — the Discipline layer between Cultural Physics
  (Theory) and Facework (Practice).
- Stale `*-PLAN.md` files archived to `methodology/archive/` (the Operating
  Layer plan self-retires once 0.0.7 ships, which it did).

**Deferred to the post-1.0 Standards track (`standards/`):**
- The FS-000–900 Specification, FOS-100–800 Operating Standards, FRS-000–800
  Reference Standards, and certification.
- **Correction from the 0.0.4 draft of this record:** Runtime Ports are **not**
  deferred. They shipped at 0.0.5–0.0.8 as concrete protocol artifacts. Only the
  *formal FS-400 Runtime specification* stays in the deferred track. See
  `standards/README.md`.

## Open follow-ups (tracked, not blocking)

- Reconcile the "Facework is a protocol" README wording with the "Facework is
  the Practice" Constitution wording during the Standards Architecture rollout.
- ~~Define `Stability` and `Signal` canonically in one vocabulary source.~~
  **Done (0.0.10):** both anchored in `theories/cultural-physics.md` §VII — the
  canonical term table now covers Signal, Frequency, Current, Stability,
  Coherence, and `Signal` has a prose definition (with the "entropy is signal"
  overload disambiguated). `Stability` was already defined in prose there and in
  the COS Primitive Stack; only the table row was missing.
- Decide the five-document rollout split (Cultural Physics → Coherence Design →
  COS → Facework → Gamut) when the Standards track activates.
