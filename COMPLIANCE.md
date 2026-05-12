# Facework Compliance v1

Status: Draft  
Version: 1.1.0 (Evidence lists extended for manifest schema v1.4.0 conformers)

This document defines how to score adherence to Facework Protocol.

**Scoring framework unchanged:** 100 points across five dimensions, L0–L4
levels. v1.4.0 manifests provide additional machine-checkable evidence
in every dimension; scorers MAY use these signals when present without
changing the underlying rubric.

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
- **v1.1.0+:** `ContextManifest.soul` bundle (compiles the signal thesis for runtime consumption) and `ContextManifest.identity` bundle
- **v1.2.0+:** HarnessBundle `soul.md` (derived signal-thesis view; runtime-ingestible)

### B) Taste Fidelity (0-20)

- 0-5: Taste implied only by examples.
- 6-10: Basic style criteria documented.
- 11-15: Testable acceptance/rejection criteria plus edge cases.
- 16-20: Criteria actively enforced — either in reviews (with documented
  exceptions) OR through an LLM-callable design-eye-evaluator Skill that
  gates output against the TasteContract at production time.

Evidence:
- `TasteContract`
- release or review notes showing gate enforcement
- **v1.3.0+:** `DesignInfrastructure` block — tokens, components with
  machine-readable contract rules, examples library
- **v1.3.0+:** `design-eye-evaluator` Skill registered in `SkillManifest`
  with `verifier_skill_id` cross-references from output-producing skills
  (active enforcement is a 16-20 signal, not just review notes)

### C) System Coherence (0-20)

- 0-5: Artifacts exist but contradict each other.
- 6-10: Major artifacts aligned, gaps still unresolved.
- 11-15: Cross-artifact dependencies mapped with minor drift.
- 16-20: No unresolved contradictions across strategy, architecture, and
  workflows. v1.1.0+: cross-manifest references resolve bidirectionally
  per PROTOCOL.md §9.7 (machine-checkable coherence signal).

Evidence:
- `DecisionLedger`
- `SystemArchitecture`
- `ConsonanceCheck`
- **v1.1.0+:** `bin/validate-manifest` output showing all cross-manifest
  references resolve (§9.7) — skill memory paths exist in MemoryMap,
  skill integrations bidirectional with IntegrationManifest, skill
  `context_load` exists in ContextManifest, verifier_skill_id /
  advisor_escalation resolve to declared skills

### D) Operational Readiness (0-20)

- 0-5: High-level plan only.
- 6-10: Workflows defined, ownership unclear.
- 11-15: Triggers, thresholds, and escalation paths specified.
- 16-20: Launch plan includes measurable goals, rollback, and
  post-launch loop. v1.1.0+: workflows are exposed as callable Skills
  with declared sponsors, ownership, and trigger semantics — the system
  is operationally portable, not just documented.

Evidence:
- `WorkflowPlaybooks`
- `LaunchPlan`
- runbook checkpoints
- **v1.1.0+:** `SkillManifest` declaring every callable workflow with
  trigger / ownership / sponsors / escalation
- **v1.1.0+:** `MemoryMap` declaring the vault structure with explicit
  `boundary` between tenant memory and runtime memory
- **v1.4.0+:** Skill `sponsors[]` populated; runtime emits the minimum
  audit-event surface (PROTOCOL.md §12) for operational visibility

### E) Infrastructure Sovereignty (0-20)

- 0-5: Dependency list only.
- 6-10: Basic own/rent distinction.
- 11-15: Mitigations and migration paths for critical rented dependencies.
- 16-20: Clear control boundaries, fallback strategy, and explicit risk
  posture. v1.1.0+: every external dependency declared in
  `IntegrationManifest` with machine-readable `trust_boundary`
  (own/rent/mitigate); rented dependencies have declared `failover`
  paths; no raw secrets present.

Evidence:
- `SovereigntyMap`
- risk register and mitigation decisions
- **v1.1.0+:** `IntegrationManifest` — every integration with
  `trust_boundary` matching `SovereigntyMap` classification, `failover`
  declared, secrets via `SecretRef` (never raw values)
- **v1.4.0+:** `IntegrationManifest.integrations[].scope[]` items using
  the sensor/actuator direction form for explicit read/write disclosure

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

