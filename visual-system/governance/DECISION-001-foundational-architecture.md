---
id: FVS-DEC-001
title: Establish the Facework Visual Specification
date: 2026-08-06
status: resolved
authority: canonical
---

# FVS-DEC-001 — Establish the Facework Visual Specification

## Question

Should Facework maintain a conventional brand guide, continue treating existing
prototype design files as the source of truth, or establish a dedicated visual
specification derived from the same theory–discipline–practice architecture as
the protocol?

## Decision

Establish `visual-system/` as the canonical Facework Visual Specification.

- FVS-000 defines the framework.
- FVS-100 holds constitutional principles.
- FVS-110 through FVS-900 specify the visual discipline and practice.
- FVR documents provide evidence.
- Implementations remain replaceable and are promoted only after evaluation.

## Why

Existing visual materials conflict in meaningful ways. The original Visual
Language System emphasizes a dark, all-monospace, engineered expression. The
newer design-infrastructure example uses a light editorial field, sans-serif
reading stack, ochre accent, and softer components. Treating either as
automatically canonical would turn an implementation into doctrine.

FVS instead preserves the durable relationships shared by both and makes the
remaining differences testable:

- structural monospace plus a legible reading voice;
- coordinated paper and field modes;
- color as semantic state;
- calm, precise, document-like composition;
- explicit lineage and accessibility;
- the butterfly as a provisional artifact requiring derivation.

## Consequences

1. `original site exploration reference/` remains historical evidence.
2. `examples/face.works/prototype/DESIGN.md` remains implementation-specific.
3. `examples/face.works/design-infrastructure/` must be reconciled before its
   tokens are called canonical Facework tokens.
4. New identity work begins with Atlas studies and artifact records.
5. FVS versioning is independent of the Facework Protocol release version.

## Revisit condition

Revisit after the first complete reference implementation has been evaluated
across web, document, presentation, diagram, and small-scale identity contexts.
