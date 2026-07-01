# Facework Standards Track (Post-1.0)

**Status: Deferred. Not canonical.**

This directory holds the formal standards apparatus for Facework — a layered
Specification (FS), Operating Standards (FOS), and Reference Standards (FRS),
plus certification. It is **staged, not active.**

## Why it's deferred

Facework is pre-1.0. Declaring a constitutional standards ecosystem before the
protocol has been validated by external runs would scale the *specification*
ahead of the *evidence* — the failure mode the practice exists to prevent.

The standards track **activates when the protocol earns it**: after the 1.0
criteria in [`ROADMAP.md`](../ROADMAP.md) are met. Until then, the working canon
is the Constitution, the theory layer (`theories/`), the Protocol
(`PROTOCOL.md`), and the Skills.

## Runtime Ports are NOT deferred

An earlier draft of the reconciliation listed "Runtime/Ports" as deferred. That
was corrected. **Runtime Ports shipped at 0.0.5–0.0.8** as concrete protocol
artifacts (`SkillManifest`, `MemoryMap`, `ContextManifest`, `IntegrationManifest`,
plus HarnessBundle and DesignInfrastructure) — see `PROTOCOL.md` §9–§12 and the
worked example under `examples/face.works/runtime-ports/`.

Only the **formal FS-400 Runtime *specification*** (the abstract standards
document) stays in this deferred track. The ports themselves are live.

## What's here

- [`source/standards-architecture-draft-v1.md`](source/standards-architecture-draft-v1.md)
  — the full external draft (Constitution, FS-000–900, theory layers,
  FOS-100–800, Primitives, FRS-000–800), preserved verbatim as the source of
  truth for this track. It also carries the authoritative definition of Facework.

## Decisions already locked

The five spine decisions in
[`methodology/architecture-reconciliation-2026-06.md`](../methodology/architecture-reconciliation-2026-06.md)
govern this track when it activates: the **five-layer model**, **Capability is
an artifact not a layer**, **FRN** as the single identifier, one **Resonance**
definition, and **Postures** as the maintenance half of the Practice.

## Known issues to resolve before activation

Carried from the review of the source draft:

- Three competing layer models → collapsed to the five-layer model.
- Dual FOS-500 (Resource vs. Capability) → keep Resource; drop Capability-layer.
- `urn:` references → convert to `frn:`.
- `Resonance` two definitions → use the unified definition.
- `Stability` and `Signal` undefined in the vocabulary → define in one source.
- Raw-export cruft (`Tab 44/45/46/56`, `FACEWORK REFERNECESTANDARDS` typo).
- FRS legislates (`SHALL`) where it should only exemplify.
- FS-400 Runtime spec is an outline — and must reconcile with the Runtime Ports
  that already shipped (see above).
