# Facework Compliance v1

Status: Draft  
Version: 1.0.0

This document defines how to score adherence to Facework Protocol.

## 1) Scoring Model

Total score: 100 points, across five dimensions.

- Signal Integrity (20)
- Taste Fidelity (20)
- System Coherence (20)
- Operational Readiness (20)
- Infrastructure Sovereignty (20)

## 2) Compliance Levels

- `L0 Draft` (<40)
- `L1 Structured` (40-59)
- `L2 Coherent` (60-74)
- `L3 Launch-Ready` (75-89)
- `L4 Sovereign` (90-100)

## 3) Dimension Rubrics

### A) Signal Integrity (0-20)

- 0-5: Hunch exists but lacks bounded thesis.
- 6-10: Thesis exists with partial audience and behavior logic.
- 11-15: Clear thesis, mapped actors, and explicit distortion risks.
- 16-20: Signal is testable, evidenced, and directly tied to wedge decisions.

Evidence:
- `SignalThesis`
- `AudienceFieldMap`
- intake assumptions log

### B) Taste Fidelity (0-20)

- 0-5: Taste implied only by examples.
- 6-10: Basic style criteria documented.
- 11-15: Testable acceptance/rejection criteria plus edge cases.
- 16-20: Criteria actively enforced in reviews, with documented exceptions.

Evidence:
- `TasteContract`
- release or review notes showing gate enforcement

### C) System Coherence (0-20)

- 0-5: Artifacts exist but contradict each other.
- 6-10: Major artifacts aligned, gaps still unresolved.
- 11-15: Cross-artifact dependencies mapped with minor drift.
- 16-20: No unresolved contradictions across strategy, architecture, and workflows.

Evidence:
- `DecisionLedger`
- `SystemArchitecture`
- `ConsonanceCheck`

### D) Operational Readiness (0-20)

- 0-5: High-level plan only.
- 6-10: Workflows defined, ownership unclear.
- 11-15: Triggers, thresholds, and escalation paths specified.
- 16-20: Launch plan includes measurable goals, rollback, and post-launch loop.

Evidence:
- `WorkflowPlaybooks`
- `LaunchPlan`
- runbook checkpoints

### E) Infrastructure Sovereignty (0-20)

- 0-5: Dependency list only.
- 6-10: Basic own/rent distinction.
- 11-15: Mitigations and migration paths for critical rented dependencies.
- 16-20: Clear control boundaries, fallback strategy, and explicit risk posture.

Evidence:
- `SovereigntyMap`
- risk register and mitigation decisions

## 4) Scoring Procedure

1. Validate manifest schema.
2. Confirm required artifacts exist.
3. Score each dimension (0-20) with evidence links.
4. Compute total and level.
5. Record pass/fail gates and unresolved risks.

## 5) Reporting Format

Every compliance report should include:

- protocol version
- score by dimension
- total score and level
- failed gates with rationale
- unresolved risks
- recommended next upgrades

## 6) Failure Conditions

A project cannot claim `L2 Coherent` or higher if any are true:

- missing required primitive artifacts
- no `DecisionLedger`
- no `TasteContract`
- no `SovereigntyMap`
- manifest invalid or absent

