---
title: "Architecture Reconciliation — Standards Integration"
date: 2026-06-29
status: Decided
supersedes: none
governs: CONSTITUTION.md, theories/, README.md, skills/OPERATING_SKILLS.md, standards/
---

# Architecture Reconciliation — Standards Integration

## Context

A large external draft — *The Facework Standards Architecture* — was brought in
for review and integration. It contained a Constitution, a layered Specification
(FS-000–900), expanded theory (Cultural Physics, Coherence Design, the Coherence
Operating System), Operating Standards (FOS-100–800), the twelve Primitives, and
Reference Standards (FRS-000–800).

Rigorous review found the theory and primitives layers excellent, but the
document carried three competing models of its own architecture, two
incompatible versions of one standard (FOS-500), and a vocabulary split across
two dictionaries. The practice that exists to *reduce structural contradiction
before complexity compounds it* was contradicting itself.

This record locks the reconciliation. Every integrated artifact traces here.

## The governing call: evidence-calibrated depth

Facework is pre-1.0 with zero external protocol runs (see `ROADMAP.md`).
Committing a nine-layer constitutional standards ecosystem before the protocol
has run externally once would violate Facework's own first law — *do not
establish heavy governance before the system has run.* The draft scaled the
**specification** ahead of the **evidence**.

Decision: **phase it.** Integrate the parts that sharpen the idea now; stage the
standards machinery as a post-1.0 track the protocol earns through real runs.
This applies Facework's own evidence-level gate to Facework itself.

## The five spine decisions

Resolved by the protocol's own logic (Semantics, Frequency, Consonance), not by
preference.

### 1. One layer model — the five-layer model is canonical

```
Theory        — Cultural Physics        (why systems cohere or decay)
Discipline    — Coherence Design        (how coherent systems are designed)
Practice      — Facework                (Constitution, Protocol, Postures, Registries)
Implementation— Skills + Artifacts      (executable methods and persistent evidence)
Runtime       — Execution environments  (Claude Code today; others later)
```

The draft's seven-layer (Canon) and nine-layer (FOS-200) models are not rival
ladders — they listed *components inside* layers as if they were layers.
Constitution, Operating Standards, Registries, Protocol, and Postures all live
**inside Practice**. Skills and Artifacts live **inside Implementation**.

### 2. Capability is an artifact, not an architectural layer

The architecture is **Primitive → Protocol → Skill → Artifact**. Capability is
*what a system can do*, declared in the `CapabilityMap` artifact (Stability /
Resonance phases) — consistent with the repo's existing capability learnings.
The draft wrongly promoted it to a tier between Primitive and Skill, which
spawned the dual FOS-500 and most of the FRS contradictions. Rejected. (Article
XII: no addition shall duplicate an existing concept.)

### 3. One identifier — the Facework Resource Name (FRN)

Canonical form: `frn:facework:<type>:<name>` (URN-like, brand-aligned). Every
`urn:` reference in the draft is corrected to FRN.

### 4. Resonance has one definition

**Resonance is transmission through frequency alignment** — a system resonates
when its signal aligns with the lived reality of its field, amplifying
transmission. Physics is the mechanism; lived reality is the condition. The
draft's two definitions (physics vs. social) fold into this one.

### 5. Postures are the maintenance half of the Practice

The **Protocol establishes** coherence (run once to set it). **Postures
maintain** coherence (standing operating modes that preserve it over time). The
eight existing operating skills *are* postures. Not a new primitive — a Practice
component beside the Protocol. (From Field Note, Jun 23 2026: postures are "the
mechanism for keeping coherence intact as work continues after initial setup.")

## Sharpened positioning

> **Cultural Physics** explains why systems cohere or decay → **Coherence
> Design** is the discipline of designing for coherence → **Facework** is the
> practice that applies it (Protocol establishes, Postures maintain) → the
> ventures (HUE, GAMUT, Fortunate) are the proof.

## What integrates now vs. later

**Now (this integration):**
- `CONSTITUTION.md` — the philosophical spine (new; pure upside).
- `theories/coherence-design.md` — the missing Discipline layer.
- `README.md` — the positioning through-line + Protocol/Postures framing.
- `skills/OPERATING_SKILLS.md` — operating skills reframed as Postures.

**Deferred to the post-1.0 Standards track (`standards/`):**
- FS-000–900 (Specification), FOS-100–800 (Operating Standards),
  FRS-000–800 (Reference Standards), Runtime/Ports spec, certification.
- These are earned through external runs, not declared ahead of them.
  See `standards/README.md`.

## Open follow-ups (tracked, not blocking)

- Define `Stability` and `Signal` canonically in one vocabulary source when the
  Lexicon is folded into the theory layer.
- Decide the five-document rollout split (Cultural Physics → Coherence Design →
  COS → Facework → Gamut) when the Standards track activates.
