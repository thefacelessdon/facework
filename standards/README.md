# Facework Standards Track (Post-1.0)

**Status: Deferred. Not canonical.**

This directory holds the formal standards apparatus for Facework — a layered
Specification (FS), Operating Standards (FOS), and Reference Standards (FRS),
plus a Runtime/Ports model and certification. It is **staged, not active.**

## Why it's deferred

Facework is pre-1.0 with zero external protocol runs (see [`ROADMAP.md`](../ROADMAP.md)).
Declaring a constitutional standards ecosystem before the protocol has run
externally would scale the *specification* ahead of the *evidence* — the exact
failure mode the practice exists to prevent.

The standards track **activates when the protocol earns it**: after the 1.0
criteria in `ROADMAP.md` are met (3+ external runs, settled phase sequence,
reproducible diagnostics). Until then, the working canon is the Constitution,
the theory layer (`theories/`), the Protocol (`PROTOCOL.md`), and the Skills.

## What's here

- [`source/standards-architecture-draft-v1.md`](source/standards-architecture-draft-v1.md)
  — the full external draft (Constitution, FS-000–900, theory layers,
  FOS-100–800, Primitives, FRS-000–800), preserved verbatim as the source of
  truth for this track.

## Decisions already locked

The five spine decisions in
[`methodology/architecture-reconciliation-2026-06.md`](../methodology/architecture-reconciliation-2026-06.md)
govern this track when it activates. In particular: the **five-layer model**
(Theory → Discipline → Practice → Implementation → Runtime), **Capability is an
artifact not a layer**, **FRN** is the single identifier, and the standards must
not duplicate concepts already canonical in the practice.

## Known issues to resolve before activation

Carried from the review of the source draft:

- Three competing layer models → collapsed to the five-layer model (done in
  reconciliation; the FS/FOS/FRS docs still need rewriting to match).
- Dual FOS-500 (Resource vs. Capability) → keep Resource; drop Capability-layer.
- `urn:` references → convert to `frn:`.
- `Resonance` two definitions → use the unified definition.
- `Stability` and `Signal` undefined in the vocabulary → define in one source.
- Raw-export cruft (`Tab 44/45/46/56`, `FACEWORK REFERNECESTANDARDS` typo).
- FRS legislates (`SHALL`) where it should only exemplify.
- FS-400 Runtime is an outline, not a spec.
