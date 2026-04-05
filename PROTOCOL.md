# Facework Protocol

Status: Draft
Version: 0.0.3 (see VERSION and ROADMAP.md)

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

A conforming implementation MUST produce these objects:

- `ProjectContext`
- `SignalThesis`
- `AudienceFieldMap`
- `TasteContract`
- `DesignLanguageSpec`
- `DecisionLedger`
- `WedgeSpec`
- `WorkflowPlaybooks`
- `SystemArchitecture`
- `CapabilityMap`
- `LaunchPlan`
- `SovereigntyMap`
- `ConsonanceCheck`
- `HandoffPackage`
- `DiagnosticReport`

## 3) Prerequisites

### Setup

Before running the protocol, builders must have the tools to operate.
See `SETUP.md` for the tiered setup guide (terminal, Git, Claude Code, etc.).
Setup is not a protocol phase — it is logistics.

### Project Tracks

Five project tracks tailor the protocol to the builder's situation. Track
detection happens inside Phase 1 (Semantics) as part of intake — it is not
a separate phase.

- **Creator** — individual building around their own signal (artist, writer, designer, musician).
- **Cultural Brand** — brand rooted in cultural context and community identity.
- **Athlete / Public Figure** — public figure converting attention into owned infrastructure.
- **Agency / Studio** — service business building systems for clients or internal products.
- **Platform / Product** — technology product serving a market.

## 4) Lifecycle Phases

### Phase 1: Semantics
Goal: Detect project track, define canonical meaning boundaries, and establish anti-distortion language.

Required outputs:
- `ProjectContext` (track, audience, phase emphasis)
- `SignalThesis`

Gate:
- Project track detected and confirmed.
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
Goal: Convert intuition into explicit quality governance and design language.

Required outputs:
- `TasteContract`
- `DesignLanguageSpec` (delivered as DESIGN.md)

Gate:
- Testable acceptance/rejection criteria.
- On-brand and off-brand examples.
- Design language covers: typography, color (mapped to states), grid, motion, iconography, tone.

### Phase 4: Strategy Lock (Frequency + Current)
Goal: Lock direction and governing business logic.

Required outputs:
- `DecisionLedger`
- `WedgeSpec`

Gate:
- No unresolved strategic contradictions.
- Wedge has audience, offer, channel, and economic logic.

### Phase 5: Architecture & Flow (Flow + Stability)
Goal: Document operational reality, then produce buildable architecture grounded in capabilities.

Required outputs:
- `WorkflowPlaybooks`
- `SystemArchitecture`
- `CapabilityMap` (atomic primitives, contracts, isolation properties, integration surface — or explicit waiver with rationale)

Gate:
- Workflows include triggers, thresholds, ownership, and escalation paths.
- Build artifacts are implementable without founder context.
- Playbooks inform specs (operational reality before architecture).
- Capability map declares what the system can do (owned, rented, or deferred) so interfaces can compose from it.

### Phase 6: Activation (Resonance)
Goal: Build working interfaces composed from declared capabilities. Permanent demo mode.

Required outputs:
- `LaunchPlan`
- `CapabilityMap` (from Stability — referenced here, not created)
- Working interfaces with demo data, typed schema, test suite

Gate:
- Composition test: every interface traces to declared capabilities. If an interface needs undeclared capabilities, that is a Stability gap — not more UI.
- Specificity test: interfaces are specific to this project. A generic output that could belong to any project fails.
- DESIGN.md applied (not generic SaaS patterns).
- Interfaces carry the frequency of the community they serve.
- Launch roles, sequencing, metrics, and rollback conditions defined.

### Phase 7: Integrity (Entropy + Sovereignty + Consonance)
Goal: Pressure test, enforce ownership boundaries, verify cross-layer alignment.

Required outputs:
- `SovereigntyMap`
- `ConsonanceCheck`
- Resolved issues and critical gap fixes

Gate:
- Dependencies classified as own/rent/mitigate.
- No unresolved cross-artifact contradictions.
- Extraction review passed.
- All critical gaps addressed.

### Phase 8: Integration (Coherence)
Goal: Package for handoff. Prove transmission. Evolve the practice.

Required outputs:
- `HandoffPackage` (README, review brief, project tracker, engineering guide)
- `DiagnosticReport` (coherence scorecard, per-primitive retro, methodology updates)

Gate:
- New builder can start without the original builder present.
- Community this serves can understand and operate the system independently.
- Coherence scorecard produced with Flow, Resonance, Structural Integrity scores.
- Lessons include concrete updates to templates, tests, or rules.

## 5) Manifest Interoperability

Conforming projects should include a machine-readable `facework.manifest.yaml` and validate it against `facework.manifest.schema.json`.

Recommended root keys:
- `protocol_version`
- `project`
- `inputs`
- `artifacts`
- `gates`
- `compliance`

## 6) Normative Terms

The terms "MUST", "MUST NOT", "SHOULD", and "MAY" in this document are used as described in RFC 2119.

## 7) Minimum Conformance

A project is minimally conformant with Facework Protocol v2 only if:
- all required primitive artifacts are present,
- all phase gates are explicitly marked pass/fail with evidence,
- manifest validates against schema,
- compliance score is computed,
- sovereignty risks are documented with mitigation.

## 8) Stage Gate Profiles (Constrained v1)

This section defines stage content inside the protocol itself to avoid expanding
spec surface in v1. Each stage is governed by four questions only.

### Stage: MVP

#### 1) What must be true to enter this stage?
- `/fw-frequency` has defined a clear economic floor and non-negotiables.
- `/fw-current` has locked direction with explicit no-go lines.
- The first build slice is bounded to one wedge and one primary user journey.

#### 2) What must be proven to exit this stage?
- A real user can complete the core journey end-to-end.
- The wedge can produce repeatable value above the defined economic floor.
- Stage assumptions are documented with pass/fail evidence and unresolved risks.

#### 3) What metrics are required vs nice-to-have?
- Required: activation on the core journey, time-to-first-value, cost-to-serve
  for the wedge, and at least one value/retention signal for initial users.
- Nice-to-have: referral behavior, secondary feature adoption, qualitative NPS.

#### 4) What can break the stage and force rollback?
- Core journey fails for representative users.
- Unit economics fall below the defined floor with no credible recovery path.
- A locked non-negotiable is violated (rights, obligations, or trust boundary).

### Stage: BETA

#### 1) What must be true to enter this stage?
- MVP exit proof is complete and reproducible.
- `/fw-stability` has defined artifact requirements for data, auth, and failure handling.
- `/fw-flow` has stage-gate playbooks with ownership and escalation paths.

#### 2) What must be proven to exit this stage?
- The system operates reliably under sustained real usage with known failure modes.
- Required workflows run from playbooks without founder-only context.
- Critical dependencies, ownership boundaries, and mitigation paths are explicit.

#### 3) What metrics are required vs nice-to-have?
- Required: reliability (availability/error budget), incident response time,
  retention trend on core cohort, and gross margin trend versus beta target.
- Nice-to-have: expansion behavior, automation coverage, support deflection.

#### 4) What can break the stage and force rollback?
- Reliability drops below declared thresholds or unresolved high-severity incidents.
- Playbooks fail in production scenarios and require repeated ad-hoc interventions.
- Ownership/sovereignty boundaries are breached by a critical dependency.

### Stage: SCALE

#### 1) What must be true to enter this stage?
- Beta reliability and operations thresholds are met for a sustained period.
- Governance, architecture, and workflow artifacts remain aligned under load.
- Team handoff is possible without loss of decision context.

#### 2) What must be proven to exit this stage?
- Growth can continue without degrading quality, economics, or control boundaries.
- Operating model supports multi-team execution with predictable outcomes.
- The system can absorb shocks (traffic, dependency failures, org change) without collapse.

#### 3) What metrics are required vs nice-to-have?
- Required: contribution margin by segment, SLO adherence at higher load,
  change failure rate, mean time to recovery, and dependency risk exposure.
- Nice-to-have: international/localization efficiency, partner ecosystem velocity,
  advanced predictive health indicators.

#### 4) What can break the stage and force rollback?
- Growth increases entropy faster than operating capacity (quality or reliability collapse).
- Economics degrade materially with scale (margin compression without mitigation).
- Control boundaries erode (vendor lock-in, loss of portability, or unbounded risk concentration).

