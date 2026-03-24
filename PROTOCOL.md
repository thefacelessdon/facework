# Facework Protocol v1

Status: Draft  
Version: 1.0.0

Facework Protocol is an open standard for turning cultural signal into coherent, ownable business systems for creators and cultural brands.

This spec defines:
- lifecycle phases
- required artifacts
- pass/fail gates
- manifest interoperability
- compliance and certification hooks

## 1) Design Principles

- Signal before scale.
- Taste is governance, not decoration.
- Coherence over output volume.
- Sovereignty by design (audience, data, distribution, infrastructure).
- Human-agent interoperability for every phase output.

## 2) Canonical Objects

A conforming implementation should produce these objects:

- `SignalThesis`
- `AudienceFieldMap`
- `TasteContract`
- `DecisionLedger`
- `WedgeSpec`
- `SystemArchitecture`
- `WorkflowPlaybooks`
- `LaunchPlan`
- `SovereigntyMap`
- `DiagnosticReport`

## 3) Lifecycle Phases

### Phase 0: Intake
Goal: Capture hunch, context, constraints, and assets.

Required output:
- `IntakeRecord`

Gate:
- Problem/opportunity statement is explicit and bounded.

### Phase 1: Semantics
Goal: Define canonical meaning boundaries and anti-distortion language.

Required output:
- `SignalThesis`

Gate:
- Includes "means" and "does-not-mean" sections.
- Distortion risks documented.

### Phase 2: Field
Goal: Map actors, social dynamics, incentives, and attention flows.

Required output:
- `AudienceFieldMap`

Gate:
- Key actors and incentives mapped.
- Initial entry vector selected.

### Phase 3: Taste
Goal: Convert intuition into explicit quality governance.

Required output:
- `TasteContract`

Gate:
- Testable acceptance/rejection criteria.
- On-brand and off-brand examples.

### Phase 4: Strategy Lock (Frequency + Current)
Goal: Lock direction and governing business logic.

Required outputs:
- `DecisionLedger`
- `WedgeSpec`

Gate:
- No unresolved strategic contradictions.
- Wedge has audience, offer, channel, and economic logic.

### Phase 5: Architecture and Flow (Stability + Flow)
Goal: Produce buildable architecture and executable operating workflows.

Required outputs:
- `SystemArchitecture`
- `WorkflowPlaybooks`

Gate:
- Build artifacts are implementable without founder context.
- Workflows include triggers, thresholds, ownership, and escalation paths.

### Phase 6: Activation (Resonance + Launch Ops)
Goal: Build transmissible implementation and launch sequencing.

Required output:
- `LaunchPlan`

Gate:
- Launch roles, sequencing, metrics, and rollback conditions defined.

### Phase 7: Integrity (Sovereignty + Consonance)
Goal: Enforce ownership boundaries and cross-artifact alignment.

Required outputs:
- `SovereigntyMap`
- `ConsonanceCheck`

Gate:
- Dependencies classified as own/rent/mitigate.
- No unresolved cross-artifact contradictions.

### Phase 8: Evolution (Diagnostic)
Goal: Convert outcomes into method upgrades.

Required output:
- `DiagnosticReport`

Gate:
- Lessons include concrete updates to templates, tests, or rules.

## 4) Manifest Interoperability

Conforming projects should include a machine-readable `facework.manifest.yaml` and validate it against `facework.manifest.schema.json`.

Recommended root keys:
- `protocol_version`
- `project`
- `inputs`
- `artifacts`
- `gates`
- `compliance`

## 5) Normative Terms

The terms "MUST", "MUST NOT", "SHOULD", and "MAY" in this document are used as described in RFC 2119.

## 6) Minimum Conformance

A project is minimally conformant with Facework Protocol v1 only if:
- all required primitive artifacts are present,
- all phase gates are explicitly marked pass/fail with evidence,
- manifest validates against schema,
- compliance score is computed,
- sovereignty risks are documented with mitigation.

