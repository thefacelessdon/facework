---
title: "Decision 015: New Primitives Tested — Integration Deferred"
date: 2026-03-24
status: RESOLVED
---
# Decision 015: Five New Primitives Tested, Critical Issues Fixed, Structural Integration Deferred

## The Question
Semantics, Field, Taste, Consonance, and Sovereignty exist as skills but
were never tested against a real project. Are they load-bearing? Where do
they fit in the protocol?

## Resolution
All five were run against the Facework artifacts. Three critical issues
were fixed immediately:

1. **Naming resolved** (Semantics finding): "Facework" (no s) is canonical.
   "Faceworks" removed from all files. "face.works" is the domain.
2. **Sovereignty mitigation documented** (Sovereignty finding): Claude Code
   dependency mapped with Tier 1 risk and 3 mitigation postures. New doc:
   `documents/governance/external-dependencies.md`
3. **Trust transfer path added to GTM** (Field finding): 4-gate trust model
   added to go-to-market playbook with current status per gate.

The structural question — where do these 5 primitives live in the build
sequence — is **deferred to a dedicated /fw-current session.** Rationale:
v3.0 methodology changes haven't been tested against a real engagement yet.
Adding a protocol restructure on top of unverified changes violates the
build discipline of verifying before adding weight.

## Test Results

| Primitive | Load-Bearing? | Key Finding |
|-----------|--------------|-------------|
| Semantics | YES | Naming chaos, term overload, unexplained public concepts |
| Field | YES | Trust transfer path, gatekeeper mapping, adoption resistance |
| Taste | YES (narrow) | No quality rubric for non-visual artifacts |
| Consonance | PARTIALLY REDUNDANT | Overlaps with Entropy cross-ref + Semantics |
| Sovereignty | YES | Claude Code is existential undocumented dependency |

## Deferred Question

When ready, run /fw-current on: "Where do Semantics, Field, Taste,
Consonance, and Sovereignty fit in the protocol?" Options to evaluate:
- A) Add as phases in the build sequence (12 phases total)
- B) Run as a pre-flight audit layer before the 7-phase build
- C) Fold into existing primitives (Semantics → Frequency, Field → Current, etc.)
- D) Run as a post-build integrity check (like Consonance + Sovereignty)

**Trigger for revisiting:** After the first paid creator engagement, when
the original 7-phase sequence has been tested against real delivery.

## Implications
- 3 critical issues fixed (naming, sovereignty, trust path)
- Protocol structure unchanged (still 7 phases + diagnostic)
- Methodology v3.0 remains the current version
- Next engagement will test whether these findings change delivery
