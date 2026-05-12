# Facework Protocol

Status: Draft
Version: 0.0.5 (see VERSION and ROADMAP.md). Manifest schema 1.0.0 (baseline) and 1.1.0 (adds Runtime Ports, §9).

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
- `EvidenceLevel`
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
- `SkillManifest` (v1.1.0 — Runtime Ports, §9)
- `MemoryMap` (v1.1.0 — Runtime Ports, §9)
- `ContextManifest` (v1.1.0 — Runtime Ports, §9)
- `IntegrationManifest` (v1.1.0 — Runtime Ports, §9)

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

### Demand Gate

Before entering Phase 1, answer three forcing questions. Each requires a
specific answer, not a category or thesis:

1. **Demand reality:** Name one person who would be upset if this disappeared
   tomorrow. Not "interested." Upset. If the answer is a category ("music
   producers"), not a person, the demand is hypothetical.
2. **Status quo:** What is the user doing right now to solve this problem, even
   badly? If the answer is "nothing," the problem may not be painful enough to
   act on.
3. **Specificity:** Name, title, what gets them promoted, what gets them fired.
   If you can't describe one person at this level, you're building for an
   abstraction.

The answers determine the project's **evidence level**:

| Level | Evidence | Protocol depth |
|---|---|---|
| **Validated** | Named users, observed behavior, payment or engagement signals | Full depth. All phases earn their weight. |
| **Signaled** | Inbound interest, repeated asks from specific people, adjacent evidence | Standard depth. Run all phases but flag speculative decisions. |
| **Thesis** | Pattern recognition, market observation, founder conviction | Reduced depth. Prioritize Frequency and one validation artifact. Defer Sovereignty, Consonance, and Entropy until demand evidence exists. |

The evidence level is recorded in `ProjectContext` and calibrates effort
throughout the protocol. A thesis-level project SHOULD NOT produce the same
volume of artifacts as a validated one.

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
- `SkillManifest`, `MemoryMap`, `ContextManifest`, `IntegrationManifest` (v1.1.0, calibrated by `project.evidence_level` — see §9.2)

Gate:
- Workflows include triggers, thresholds, ownership, and escalation paths.
- Build artifacts are implementable without founder context.
- Playbooks inform specs (operational reality before architecture).
- Capability map declares what the system can do (owned, rented, or deferred) so interfaces can compose from it.
- Runtime Ports (when emitted) satisfy §9.8 — port schemas validate, cross-manifest references resolve, `MemoryMap.boundary` is declared.

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
- `protocol_version` (`1.0.0` baseline or `1.1.0` with Runtime Ports)
- `project` (v1.1.0 adds optional `evidence_level` and `track`)
- `inputs`
- `artifacts`
- `gates`
- `compliance`
- `runtime_ports` (v1.1.0 only — see §9)

## 6) Normative Terms

The terms "MUST", "MUST NOT", "SHOULD", and "MAY" in this document are used as described in RFC 2119.

## 7) Minimum Conformance

A project is minimally conformant with Facework Protocol v2 only if:
- all required primitive artifacts are present,
- all phase gates are explicitly marked pass/fail with evidence,
- manifest validates against schema,
- compliance score is computed,
- sovereignty risks are documented with mitigation.

A v1.1.0 manifest is additionally conformant only if Runtime Ports satisfy
§9.2 (evidence-level calibrated emission) and §9.7 (cross-manifest
references resolve bidirectionally).

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

## 9) Runtime Ports (v1.1.0, additive)

Runtime Ports declare how a tenant world exposes itself to any runtime shell —
the intelligence layer that operates the world after Phases 1–8 produce it.
Where lifecycle phases produce methodology artifacts (good for humans, good
for governance), Runtime Ports produce **machine contracts**: declarative
manifests any harness can ingest without rebuilding context.

Four ports, adopted from the layered model converged on by independent
research (Chase / Agentic OS, Meng / Toolbenders, Diego / Ramp):

| Port | Artifact | Declares |
|---|---|---|
| Skills | `SkillManifest` | Every repeatable workflow the tenant can perform |
| Memory | `MemoryMap` | Where long-term knowledge lives, with explicit runtime-vs-tenant boundary |
| Context | `ContextManifest` | What each skill loads at session start |
| Connections | `IntegrationManifest` | External tools the tenant reaches, with auth and trust boundary |

Runtime Ports are an addition for v1.1.0 (Facework toolkit v0.0.5). v1.0.0
manifests remain conformant. Formal schema lives in
`facework.manifest.schema.json` under `$defs` (`skillManifest`, `memoryMap`,
`contextManifest`, `integrationManifest`). Worked example:
`examples/face.works/runtime-ports/`.

### 9.1 Manifest declaration

A v1.1.0 manifest declares ports under `runtime_ports`. The canonical
location for port manifests is `define/` relative to the project root (same
folder that holds `define/PROJECT-CONTEXT.md` and other Phase 1+ artifacts):

```yaml
runtime_ports:
  skills:
    manifest: "define/skill-manifest.yaml"
  memory:
    manifest: "define/memory-map.yaml"
  context:
    manifest: "define/context-manifest.yaml"
  connections:
    manifest: "define/integration-manifest.yaml"
```

Each port manifest is a separate YAML file. The main manifest declares paths
only; per-port validation loads each file and checks against the relevant
`$defs` schema. Paths are resolved relative to the directory of the main
`facework.manifest.yaml`.

### 9.2 Conformance — evidence-level calibrated

A project's `project.evidence_level` (from §3 Demand Gate) calibrates how
many ports MUST be emitted:

| Evidence level | Conformance |
|---|---|
| Validated | MUST emit all four port manifests |
| Signaled | SHOULD emit all four; minimum: `SkillManifest` + `MemoryMap` |
| Thesis | MAY emit a minimal `SkillManifest` only |

This evolves to universal MUST in v0.1.0 once three reference tenants exist.

### 9.3 SkillManifest

Declares every callable workflow in the tenant world. Each skill is grounded
in a `WorkflowPlaybook` (Phase 5 Flow) and capabilities declared in
`CapabilityMap`.

**Required top-level keys:** `version`, `tenant`, `track`, `skills[]`.

**Required skill fields:** `id` (slug), `name`, `description`, `domain`,
`trigger` (`on_demand` | `scheduled` | `event` | `continuous`), `ownership`
(`human` | `agent` | `hybrid`), `playbook` (path to playbook markdown).

**Optional skill fields:** `inputs[]`, `outputs[]`,
`depends_on_capabilities[]`, `reads_memory[]`, `writes_memory[]`,
`context_load[]`, `integrations[]`, `escalation`, `schedule` (required if
`trigger=scheduled`), `event` (required if `trigger=event`), `tags[]`.

**Validation:**
1. All skill IDs unique within the manifest.
2. Every `playbook` path resolves to an existing file.
3. Cross-manifest references resolve (§9.7).
4. If `trigger=scheduled`, `schedule` is a cron expression.

**Phase 5 gate (Skills port):**
- Every `WorkflowPlaybook` produced in Phase 5 is referenced by ≥1 skill.
- Track-relevant skills present per `ProjectContext.track`.
- At least one human-ownership skill SHOULD exist (avoids fully-automated
  drift). Validators warn when zero are declared but do not fail — some
  agency/automation-heavy systems legitimately keep human judgment outside
  the runtime.

Formal schema: `$defs.skillManifest`. Example:
`examples/face.works/runtime-ports/skill-manifest.yaml`.

### 9.4 MemoryMap

Declares the tenant world's vault structure, indexing, retention, and — most
critically — the boundary against runtime-level memory.

**Required top-level keys:** `version`, `tenant`, `root`, `structure[]`,
`boundary`.

**Required folder fields:** `path`, `purpose`. Optional: `contains[]`,
`written_by[]`, `read_by[]`, `children[]` (nested folders).

**Boundary block (REQUIRED)** declares the separation between tenant memory
(the vault) and runtime memory (the agent's own continuity store). Fields:
`tenant_memory_root`, `runtime_memory_path`, `rule` (prose stating who owns
what and the no-auto-promotion contract), `responsibilities`.

This resolves the "one system of record" collision: skills MUST write tenant
content to the vault; runtimes MUST NOT auto-promote tenant content into
their per-project memory without explicit user action.

**Optional top-level keys:** `indexing[]` (search/RAG layers),
`retention[]` (archive/delete/compress policies), `conventions` (filename,
frontmatter, link style).

**Validation:**
1. All folder paths unique.
2. `root` is a relative path (not absolute, not `~`).
3. Every skill ID in `written_by`/`read_by` resolves to a `SkillManifest`
   entry.
4. `boundary.rule` is present and non-empty.

**Phase 5 gate (Memory port):** at minimum a capture folder, a wiki folder,
an outputs folder, and an archive folder are declared (or explicit waiver
recorded). `boundary` is present.

Formal schema: `$defs.memoryMap`. Example:
`examples/face.works/runtime-ports/memory-map.yaml`.

### 9.5 ContextManifest

Declares what each skill loads at session start — soul, identity, taste, and
current decisions needed for coherent execution.

**Required top-level keys:** `version`, `tenant`, `global` (loaded for every
skill invocation), `bundles[]` (named, composable bundles).

**Required bundle fields:** `id` (slug), `name`, `purpose`, and at least
one of `load[]` (context sources) or `composes[]` (inherit from other
bundles). A bundle that only composes other bundles (like a typical
`global`) is a valid pattern — `load[]` is optional in that case.

**Source kinds:** `file` (static load), `query` (search against a
`MemoryMap` index), `live` (fetch from an Integration), `section` (load a
specific markdown heading).

**Three conventional bundles** SHOULD be present (Validated: MUST). They
map directly to harness-native files in Move C (v0.0.6):

- `soul` — `SignalThesis` + `TasteContract` + Frequency decisions
- `identity` — `ProjectContext` (track, audience, phase emphasis)
- `purpose` — Current decisions + `WedgeSpec` + stage criteria

**Optional bundle fields:** `max_tokens` (budget hint), `priority` (`must` |
`should` | `may`), `composes[]` (inherit other bundles), `excludes[]`.

**Validation:**
1. Bundle IDs unique. No cycles in `composes`.
2. Every `file` source `path` resolves.
3. Every `query` source's `against` references an indexed folder in
   `MemoryMap`.
4. Every `live` source's `integration` resolves to an `IntegrationManifest`
   entry.
5. Bundles referenced by `SkillManifest.skills[].context_load[]` exist here.

**Phase 5 gate (Context port):** `global` bundle declared. Three
conventional bundles present per evidence level.

Formal schema: `$defs.contextManifest`. Example:
`examples/face.works/runtime-ports/context-manifest.yaml`.

### 9.6 IntegrationManifest

Declares every external tool, service, or system the tenant reaches.
Validated in Phase 5 (Architecture & Flow) and again in Phase 7
(Sovereignty) — external dependencies are trust-boundary decisions.

**Required top-level keys:** `version`, `tenant`, `integrations[]`.

**Required integration fields:** `id` (slug), `name`, `kind` (`mcp` |
`rest` | `cli` | `filesystem` | `webhook` | `db`), `auth` (`oauth` |
`api_key` | `local` | `none` | `mtls`), `trust_boundary` (`own` | `rent` |
`mitigate` — from `SovereigntyMap`), `used_by[]` (skill IDs).

**Optional integration fields:** `endpoint`, `scope[]`, `secrets[]`
(secret-store references — NEVER secret values), `rate_limits`, `failover`,
`data_residency`, `pii`, `description`.

**Secret refs** carry `{name, store, ref, required?}`. The validator
hard-fails on any field that looks like a raw key, token, or password —
only references into external secret stores (`1password`, `aws_secrets`,
`env`, `doppler`, custom) are allowed.

**Validation:**
1. All integration IDs unique.
2. Every `used_by[]` skill resolves; every `SkillManifest` skill's
   `integrations[]` resolves here. Bidirectional.
3. No raw secrets present.
4. If `pii: true`, `data_residency` is declared.

**Phase 5 gate (Connections port):** all skill `integrations[]` references
resolve here. No raw secrets.

**Phase 7 gate (Sovereignty addition):** every integration's
`trust_boundary` matches its classification in `SovereigntyMap`; every
`rent` integration has a mitigation path; high-blast-radius integrations
(`db`, `filesystem` with write scope) are `own` or have explicit waiver
recorded.

Formal schema: `$defs.integrationManifest`. Example:
`examples/face.works/runtime-ports/integration-manifest.yaml`.

### Path templating in skill paths

Skill paths (`outputs[].write_to`, `reads_memory[]`, `writes_memory[]`) may
contain templated variables in `{name}` form. Runtimes resolve these at
invocation time. Resolution order:

1. **Skill inputs.** Any `{var}` matching an `inputs[].name` is replaced
   with the input's value at runtime.
2. **Built-in date variables** (UTC unless the runtime overrides):
   `{yyyy}`, `{mm}`, `{dd}` (zero-padded), `{yyyy-mm-dd}` (ISO date),
   `{ww}` (ISO week number, zero-padded).
3. **Glob patterns** in `reads_memory[]`: `*` matches one path segment;
   `**` matches any depth. Used to indicate "all files at-or-below this
   path" (e.g., `wiki/clients/**`).

Validators resolve templated paths to their **literal prefix** (everything
before the first `{` or `*`) when checking against `MemoryMap.structure[]`.
A skill writing to `wiki/clients/{client_id}/handoff/` resolves to prefix
`wiki/clients/` and validates against the declared folder of that name. A
skill writing to `outputs/morning-brief/` validates against an exact-match
folder.

Templates without matching inputs or built-ins are **runtime errors at
invocation**, not validation errors at build time — runtimes can introduce
their own additional variables (session ID, user ID, etc.) without breaking
the manifest contract.

### 9.7 Cross-manifest validation

A valid set of Runtime Ports satisfies these bidirectional references:

1. `SkillManifest.skills[].reads_memory[]` and `writes_memory[]` →
   `MemoryMap.structure[].path`. The skill path's literal prefix
   (everything before the first `{` or `*` — see "Path templating" above)
   must equal or be at-or-below a declared MemoryMap folder.
2. `SkillManifest.skills[].context_load[]` → `ContextManifest.bundles[].id`
   or `ContextManifest.global.id`.
3. `SkillManifest.skills[].integrations[]` ↔
   `IntegrationManifest.integrations[].id` and `…used_by[]` — bidirectional.
4. `ContextManifest.bundles[].load[]` with `kind: live` →
   `IntegrationManifest.integrations[].id`.
5. `MemoryMap.structure[].written_by[]` and `read_by[]` →
   `SkillManifest.skills[].id`.
6. `SkillManifest.skills[].depends_on_capabilities[]` → entries in
   `CapabilityMap` (existing Phase 5 artifact).

`bin/validate-manifest` runs these checks and reports unresolved references
as gate failures.

### 9.8 Phase 5 gate — full extension

Adding to existing Phase 5 gate criteria:

- Per `project.evidence_level`, §9.2 conformance is satisfied.
- All four port manifests (when emitted) validate against their `$defs`
  schema in `facework.manifest.schema.json`.
- All cross-manifest references (§9.7) resolve.
- `MemoryMap.boundary` block is present.
- No raw secrets present in `IntegrationManifest`.

### 9.9 Track-aware skeletons (deferred to v0.0.6)

v0.0.5 ships Runtime Ports track-agnostic. Track-specific skeleton port
manifests for the five tracks (Creator, Cultural Brand, Athlete,
Agency/Studio, Platform/Product) ship in v0.0.6 as GAMUT-published
opinionated starting points. Facework itself remains track-neutral in the
spec — the protocol defines the `track` field; GAMUT (or another practice)
publishes the per-track defaults.

### 9.10 Boundary with HarnessBundle (deferred to v0.0.6)

Runtime Ports declare YAML contracts. v0.0.6 (Move C) adds a `HarnessBundle`
artifact that reformats these contracts as harness-native markdown files
(`soul.md`, `identity.md`, `skills/`, etc.) for runtimes that prefer
file-based ingest. The YAML manifests remain the source of truth; the
HarnessBundle is a derived view.

