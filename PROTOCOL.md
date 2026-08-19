# Facework Protocol

Status: Draft
Release version: tracked in [`VERSION`](VERSION); see ROADMAP.md for versioning rules. Manifest schema 1.0.0 (baseline), 1.1.0 (Runtime Ports, §9), 1.2.0 (HarnessBundle, §10), 1.3.0 (DesignInfrastructure, §11), 1.4.0 (efficiency hints + skill polish — amendments throughout §9–§11, new §12 Observability Interface), 1.5.0 (RuntimeConformanceProfile + runtime-conformance tier, §9.2/§9.12), 1.6.0 (multi-harness shells — `shell_sovereignty.harness_options`, §9.11/§9.12), 1.7.0 (enforceable Sovereignty-loop ruling — `waiver.ruling`, §9.12).

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
- `HarnessBundle` (v1.2.0 — derived markdown view of Runtime Ports, §10)
- `DesignInfrastructure` (v1.3.0 — active design system + design-eye evaluator, §11)
- `RuntimeConformanceProfile` (v1.5.0 — how the ports bind to a runtime + shell sovereignty, §9.12; required only when runtime conformance is claimed)

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
- If the tenant declares a Runtime Shell (§9.11), the shell itself is classified
  in the `SovereigntyMap`. A non-self-hostable shell is `rent` with maximal blast
  radius (substrate for all four ports) and requires an explicit waiver with a
  mitigation path — exit/export plan, data posture (retention, training,
  residency), and a recorded owner ruling. (No Runtime Shell declared → this
  bullet does not apply.)
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

### 6.1 Pre-gate checks (0.0.70)

Four mechanical checks. Every phase SHOULD run all four before declaring its gate
passed; they are cheap, they take under a minute, and each was earned by a defect
that survived a phase which had read the artifacts carefully.

1. **Version currency.** Every `reads:` frontmatter entry names the version of that
   artifact **as it now exists**, not as it existed when the phase ran. A phase
   composing against v1.1 content while declaring it read v1.0 is how a
   cross-artifact contradiction stays invisible.
2. **Citation resolution.** Every `§`-number citation resolves to the heading it
   claims. Section renumbering between versions silently repoints a citation at
   unrelated content, and the reader concludes the referenced material was never
   written.
3. **Count agreement.** Every count in frontmatter matches the body it summarises.
   Machine-readable counts are what later phases and runtimes read without opening
   the body.
4. **Mechanism diff.** For any **mechanism** specified in more than one artifact,
   **diff the mechanisms — not just the citations.**

> Check 4 is the one that is not obvious, and it exists because checks 1–3 share a
> blind spot. All three verify claims that trace back to a **locked decision**, so
> they catch a phase contradicting something decided. They do not catch **two
> phases independently designing the same mechanism two incompatible ways**, since
> neither is contradicting anything on the record. In the run that earned this,
> checks 1–3 found three defects and check 4 found the worst one: two phases had
> specified the same vesting instrument with opposite outcomes for the same person,
> and a full reconciliation pass had already run over both without noticing.
>
> **Agreement about what was decided is not agreement about what happens.**

## 7) Minimum Conformance

A project is minimally conformant with the Facework Protocol only if:
- all required primitive artifacts are present **and their declared paths
  resolve to real files** (clarified v0.0.56 — see below),
- all phase gates are explicitly marked pass/fail with evidence,
- manifest validates against schema,
- compliance score is computed,
- sovereignty risks are documented with mitigation.

A v1.1.0 manifest is additionally conformant only if Runtime Ports satisfy
§9.2 (evidence-level calibrated emission) and §9.7 (cross-manifest
references resolve bidirectionally).

**Manifest role — `tenant` vs `reference` (v1.6.0, additive).** "Artifacts are
present" was unenforceable as written, because a manifest can name a path without
the file existing, and the validator checked only that the key was set. It is now
checked. But one manifest legitimately cannot satisfy it: the protocol toolkit's
own `facework.manifest.yaml`, which demonstrates the schema without being a tenant
world — it has never run the protocol on itself and therefore has no `SignalThesis`,
`AudienceFieldMap`, `TasteContract`, `LaunchPlan`, `SovereigntyMap` or
`DiagnosticReport` to point at.

A manifest therefore declares `project.manifest_role`:

- **`tenant`** (default, and the assumption when the key is absent) — every path in
  `artifacts` MUST resolve. This is the conformance rule.
- **`reference`** — the manifest illustrates the schema and is **not a conformance
  claim**. Artifact paths are illustrative and are not required to resolve.
  Validators MUST report the exemption in their output rather than passing
  silently, and a `reference` manifest MUST NOT be cited as evidence of
  conformance.

The exemption is declared, visible, and narrow — the treatment §9.11 gives an
`unenforced: true` governance gate, applied to conformance itself. A silent pass
would be the defect this clarification removes.

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

**Claiming runtime conformance (0.0.25).** A project declares the claim by adding
a `conformance` block under `runtime_ports`:

```yaml
runtime_ports:
  # ...the four port refs above...
  conformance:
    claimed: true
    runtime: "claude-code"          # the target runtime shell (free-form label)
    profile: "define/runtime-conformance-profile.yaml"   # RuntimeConformanceProfile, §9.12
```

When `conformance.claimed` is `true`, the §9.2 runtime-conformance MUSTs apply and
`profile` MUST resolve to a valid `RuntimeConformanceProfile`. Omitting the block
(or `claimed: false`) leaves the project at base conformance — nothing changes.

Each port manifest is a separate YAML file. The main manifest declares paths
only; per-port validation loads each file and checks against the relevant
`$defs` schema. Paths are resolved relative to the directory of the main
`facework.manifest.yaml`.

The manifest is **substrate-agnostic**. A system that operates the tenant world
after Phases 1–8 produce it — a *Runtime Shell* — MAY consume the ports on any
substrate, and the four ports MAY bind to *different* substrates in one
deployment (see §9.11). The manifest is the integration contract across those
substrates; it is never owned by the runtime.

### 9.2 Conformance — two tiers (v1.5.0)

Runtime Ports have two conformance tiers. **Base conformance stays
evidence-calibrated** — "signal before scale" (§3) is preserved, so a
thesis-level project is never forced to emit validated-level artifact volume:

| Evidence level | Base conformance (emission) |
|---|---|
| Validated | MUST emit all four port manifests |
| Signaled | SHOULD emit all four; minimum: `SkillManifest` + `MemoryMap` |
| Thesis | MAY emit a minimal `SkillManifest` only |

**Runtime conformance (0.0.25 — the universal MUST).** A project MAY *claim
runtime conformance*: a declaration that its tenant world targets a runtime shell
(§9.11) and is ready to be operated. When claimed (via
`runtime_ports.conformance`, §9.1), these are MUST **regardless of evidence
level**:

1. All four port manifests are emitted and validate against their `$defs` schema.
2. All cross-manifest references (§9.7) resolve.
3. A `RuntimeConformanceProfile` (§9.12) is emitted, declaring how each port binds
   to the target runtime and how the shell's sovereignty is classified.

This is where "universal MUST" lives — universal *within the runtime-conformance
claim*, not imposed on every project. The claim is **opt-in and additive**: a
project that does not claim it remains conformant at the base tier above, and no
existing v1.0.0–v1.4.0 manifest is affected. The rationale: Runtime Ports become
mandatory exactly where they are meaningful — a tenant actually being operated on
a runtime — not for a thesis-level project still validating demand, which has no
runtime to conform to.

The runtime-conformance capability was earned by four reference-runtime
validations (Buzz, Letta, OpenAI, Claude Code); see
`standards/source/fs400-runtime-buzz-validation-2026-08-04.md`. (This is a PATCH
capability, not the `0.1.0` release — ROADMAP reserves `0.1.0` for the first
external protocol run.)

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

**v1.4.0 optional skill fields (additive, all default-omitted):**
- `sponsors[]` — humans accountable for the skill's correctness, memory
  hygiene, and lifecycle. SHOULD be populated on Validated-evidence projects.
- `verifier_skill_id` — generalizes the `design-eye-evaluator` pattern.
  References a Skill (in the same manifest) that gates this skill's
  output before publication. The verifier SHOULD have `domain: quality`.
- `multiplayer: bool` — when `true`, the skill may be invoked by multiple
  users concurrently and memory writes accrue across users. Default
  `false`.
- `model_tier: standard | advanced` — declares which model tier this
  skill warrants. Runtimes map `advanced` to their premium tier (e.g.
  Opus). Default `standard`.
- `advisor_escalation` — optional skill_id this skill can invoke for a
  one-shot advisor judgment. Composable: the escalation goes through a
  registered Skill, so it gets its own audit trail.

**Validation:**
1. All skill IDs unique within the manifest.
2. Every `playbook` path resolves to an existing file.
3. Cross-manifest references resolve (§9.7).
4. If `trigger=scheduled`, `schedule` is a cron expression.
5. (v1.4.0) `verifier_skill_id` and `advisor_escalation`, when present,
   resolve to declared skills in the same manifest.

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

**v1.4.0 optional folder field:** `compactable: bool` — when `true`, the
folder's contents may be summarized or dropped from in-session context
after writing. Content persists on disk; just not in the live agent's
context window. Default `false`. Maps to Claude Platform compaction
optimization.

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

**Substrate note (additive).** `MemoryMap.structure` is filesystem-first — a
path-addressable vault with per-folder `written_by`/`read_by`. A Runtime Shell
whose memory is not a filesystem (e.g. an event-log runtime that stores
knowledge as addressable records or channel history) MAY bind `structure` to
that store instead. When it does, `written_by`/`read_by` degrade to the coarsest
scope the substrate enforces (e.g. channel/room membership rather than
per-folder ACL), and `indexing`/`retention`/`conventions` bind only where the
substrate has an equivalent. The `boundary` block still applies, and it is
**behavioral, not only structural**: a non-filesystem runtime satisfies it only
if it (a) exposes distinct tenant-knowledge and agent-continuity stores AND
(b) does not let an agent auto-promote content across that line without explicit
human action. A runtime that can write shared/tenant memory autonomously (e.g.
background memory-consolidation agents) has the boundary structurally but
breaches it at runtime; a conformant binding declares the mitigation (read-only
tenant stores, or no autonomous write access to the tenant store). This is the
Sovereignty-loop floor (COS §VII) at the memory tier. See §9.11.

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

**v1.4.0 optional bundle field:** `cache_affinity: stable | dynamic` —
hint for runtimes implementing prompt caching. Default `stable` (cache
aggressively). Tenants declare `dynamic` for bundles with live feeds or
frequently-rotating content. Most protocol artifacts (`soul`, `identity`,
`purpose`, `taste`) are stable by construction.

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

**v1.4.0 optional integration fields:**
- `load_mode: eager | lazy | on_search` — declares whether the runtime
  should eagerly load the integration's schema/handles or pull on demand.
  Default `eager`. Setting `on_search` maps to the Claude Platform tool-
  search optimization — appropriate when the integration's schema is
  large and infrequently used.
- `scope[]` items may now be either a plain operation string (back-compat
  with v1.0.0–v1.3.0) OR an object `{operation, direction}` where
  `direction` is `sensor` (reads from the external world), `actuator`
  (writes to / acts on the external world), or `both`. Mixed forms are
  allowed in the same manifest. This adopts Karpathy's sensors-and-
  actuators framing for agent-native infrastructure.

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

`bin/validate-manifest` runs checks **1–5** and reports unresolved references as
gate failures.

**Rule 6 is authoring-layer, not validator-gated (clarified v0.0.49).** The
`CapabilityMap` is a Phase 5 authoring artifact, not a port manifest — the
validator has no path to load it, so it reports the count of declared capability
references and delegates resolution to the authoring layer. This is the same
declared-and-delegated treatment §9.12 gives a governance gate marked
`unenforced: true`: the obligation is real, it is visible, and it is not silently
presented as machine-checked. A validator that claims to run a check it cannot
run is the defect this clarification removes.

#### 9.7.1 Re-validation trigger (0.0.70)

Cross-manifest validation is **not a one-time Phase 5 check.** Any phase that
**writes to a Runtime Port manifest** MUST re-run §9.7 before closing its own
gate, and MUST record that it did.

This closes a real gap rather than a theoretical one. In the run that earned this
rule, `/fw-stability` ran §9.7 and passed correctly; a later phase then added a
skill whose `reads_memory` entry was a **parent glob** (`define/records/`) rather
than one of the declared child paths. Both Integrity phases read the manifest and
neither re-validated it, because §9.7 was scoped to the phase that emitted the
ports. `/fw-coherence` found it in seconds — three phases and one gate too late.

A manifest is machine-read by runtimes that cannot notice a dangling path, so a
stale port reference is silent by construction. **The phase that writes owns the
re-validation.**

### 9.8 Phase 5 gate — full extension

Adding to existing Phase 5 gate criteria:

- Per `project.evidence_level`, §9.2 base conformance is satisfied.
- All four port manifests (when emitted) validate against their `$defs`
  schema in `facework.manifest.schema.json`.
- All cross-manifest references (§9.7) resolve.
- `MemoryMap.boundary` block is present.
- No raw secrets present in `IntegrationManifest`.
- **When runtime conformance is claimed (§9.2):** all four ports are emitted and
  valid, and a `RuntimeConformanceProfile` (§9.12) is present, validates, and
  covers all four ports. (No claim → this line does not apply.)

### 9.9 Track-aware skeletons (deferred to v0.0.6)

v0.0.5 ships Runtime Ports track-agnostic. Track-specific skeleton port
manifests for the five tracks (Creator, Cultural Brand, Athlete,
Agency/Studio, Platform/Product) ship in v0.0.6 as GAMUT-published
opinionated starting points. Facework itself remains track-neutral in the
spec — the protocol defines the `track` field; GAMUT (or another practice)
publishes the per-track defaults.

### 9.10 Boundary with HarnessBundle

Runtime Ports declare YAML contracts. The `HarnessBundle` (v1.2.0, see §10)
reformats these contracts as harness-native markdown files (`soul.md`,
`identity.md`, `skills/`, etc.) for runtimes that prefer file-based
ingest. The YAML manifests remain the source of truth; the HarnessBundle
is a derived view.

### 9.11 Runtime Shells and substrate binding (additive)

A **Runtime Shell** is any system that operates a tenant world after Phases 1–8
produce it by consuming one or more Runtime Ports. A Runtime Shell is a
*consumer* of the manifest, never its owner. This subsection generalizes the
port model so it holds against runtimes Facework did not design. It was derived
from four external validations spanning the corners — Buzz
(github.com/block/buzz, a collaboration/execution/audit runtime), Letta
(github.com/letta-ai/letta, a memory/context runtime), OpenAI's hosted agent
surface (Responses API + Agents SDK, a hosted/rented runtime), and Claude Code /
Agent SDK (a file-native local harness) — recorded in
`standards/source/fs400-runtime-buzz-validation-2026-08-04.md` (deferred FS-400
source input) and the four `methodology/runtime-ports-{buzz,letta,openai,claude-code}-gap-*`
notes. The runtimes host complementary port subsets and none hosts all four — the
evidence for the partial conformance and split-runtime binding below.

**Partial conformance.** A Runtime Shell MAY host a proper subset of the four
ports. Conformance is declared **per port**, not globally. A shell that hosts
`SkillManifest` + `IntegrationManifest` while another substrate hosts `MemoryMap`
is a valid, expected shape — not a degraded one.

**Split-runtime binding.** The four ports MAY bind to different substrates in
one deployment; the manifest is the integration contract across them. The two
validating runtimes are a complementary pair. A **memory/context runtime**
(Letta) hosts `MemoryMap` (semantic archival store + shared/read-only memory
units) and `ContextManifest` (labeled, budgeted context units — `soul`/
`identity`/`purpose` map to named blocks) natively, but lacks native triggers,
cryptographic identity, and tamper-evident audit. A **collaboration/execution/
audit runtime** (Buzz) hosts `SkillManifest` triggers and `IntegrationManifest`
wiring and provides identity and a tamper-evident audit log, but has no home for
`MemoryMap` structure or `ContextManifest` composition. A full tenant can bind
memory/context to the first and triggers/identity/audit to the second, with the
manifest as the contract. Neither runtime alone hosts all four; the pair does.

**Governance splits into enforceable gates and descriptive metadata.** The two
runtimes show governance is two kinds, not one axis:
- **Enforceable gates** — `SkillManifest.verifier_skill_id`, `escalation`,
  `ownership: hybrid`. A capable Runtime Shell CAN host these: Letta binds them to
  human-in-the-loop tool approval and tool-execution rules; Buzz to approval
  events (executor wiring pending). A conformance profile states which gate binds
  to which runtime mechanism.
- **Descriptive metadata** — `IntegrationManifest.trust_boundary`, `secrets`,
  `rate_limits`, `pii`, `data_residency`; `SkillManifest.sponsors`. Homeless on
  both validating runtimes; inherently authoring-layer. It remains authoritative
  in the manifest **even when no runtime enforces it** — non-enforcement moves an
  attribute from *enforced* to *declared*, and *declared* is a documented
  delegation to the authoring layer or human process, NOT an unsatisfied gate.

Conformance reporting SHOULD classify each governance attribute as gate or
metadata, and (for gates) record the runtime mechanism that binds it.

**Runtime-provided guarantees.** A Runtime Shell MAY provide guarantees the ports
only describe, and these differ by runtime. Buzz's signed, tamper-evident
execution log gives `DecisionLedger` and `ConsonanceCheck` a runtime home they
otherwise lack; Letta's context compaction, tool-rule sequencing, and semantic
archival retrieval back the token-budget, ordering, and `query`-source hints the
ports only declare. Such guarantees are cataloged in the shell's conformance
profile, not required by the ports. A guarantee can also be a **liability**: a
hosted runtime's stored state and audit trail are observability guarantees that
are simultaneously ownership costs (mutable, remote, non-portable). The
conformance profile records both — what the shell provides, and where tenant
state and audit live.

**Sovereignty of the shell itself.** The Runtime Shell is itself a
`SovereigntyMap` dependency (Phase 7), not merely a host for the ports. A shell
that is **not self-hostable is `rent` with maximal blast radius** — it is the
substrate for all four ports at once (all memory, all execution, all stored
state, the audit log). Facework does not forbid a rented runtime; it forbids a
*silent* one. A non-self-hostable shell therefore requires an **explicit waiver
with a mitigation path**: an exit/export plan (can tenant state be relocated to
another shell?), a data posture (retention, training, residency), and a recorded
owner ruling — a Sovereignty-loop (COS §VII) decision, not a default. Derived
from the third validation (OpenAI's hosted surface), where all four ports wire
but the substrate is rented, closed, and non-relocatable. Enforced at the Phase 7
gate.

**A shell's harness layer MAY be plural and late-bound.** The four validating
runtimes above are each one shell with one agent loop, so classifying the shell
classified the loop. A **multi-harness shell** breaks that: one set of primitives
fronts several interchangeable agent loops, and the loop is selected *per
invocation* rather than per install (Berd — goose / Claude Code / Codex / Copilot /
Amp, chosen at session creation; the fifth validation). This is distinct from
split-runtime binding above: split-runtime is one port bound to one substrate each,
whereas here **all four ports bind to one shell** and only the execution underneath
varies. Two consequences: `shell_sovereignty.harness` is then the shell's own
classification *plus* the set of loops it can bind (§9.12 `harness_options`), and
the arrangement is a **sovereignty hedge** — the rented model layer can be swapped
by switching harness, with no re-authoring, which is the strongest available
evidence for the ports-as-contract claim. Derived from the fifth validation (Berd).

**Context MAY compose at more than one scope, and the split is by lifetime.** A
Runtime Shell MAY expose several context vehicles with different lifetimes — e.g. a
workspace-scoped instruction file that reaches every session with that workspace
attached, project-scoped instructions, and a per-session persona that is swappable
per invocation. When it does, `ContextManifest` content MUST be assigned by
lifetime, not by topic: anything that must hold **regardless of which agent runs**
(above all `MemoryMap.boundary`) belongs to the longest-lived vehicle, and the
tenant contract that describes a particular agent belongs to the persona. A rule
duplicated across two vehicles is drift, not redundancy — the shorter-lived vehicle
SHOULD point at the longer-lived one. Derived from the fifth validation (Berd),
where the boundary binds to `AGENTS.md` per workspace while soul/identity/purpose
bind to a swappable persona.

**Shell sovereignty decomposes by layer.** Own-vs-rent is not one verdict per
shell — it decomposes into **harness** (the agent loop), **state** (memory,
config, transcripts), and **model** (the LLM). A shell may be own-harness +
own-state + rent-model (Claude Code / Agent SDK: an open harness running as a
local subprocess, state on the tenant's disk, only model calls leaving) — a
materially smaller ownership cost than rent-all (OpenAI, where harness, state, and
model all live on the vendor). The Phase-7 waiver attaches to whichever layer is
rented and scopes its mitigation to that layer, rather than flattening every
hosted dependency to "rent with maximal blast radius." Derived from the fourth
validation (Claude Code).

**The state layer classifies on portability, not locality.** State decomposes once
more — into **authoring state** (the tenant's agents, skills, instruction files) and
**operational state** (project definitions, session transcripts, integration
wiring). A shell MAY hold both entirely on local disk and still be `own` for one and
`mitigate` for the other, when only the authoring half is plain, relocatable files
and the operational half is reachable only through the app (Berd — `~/.agents/*.md`
vs app-internal project/session/connection state). "Does it leave the machine" is
therefore the wrong test; the Phase-7 exit plan depends on **whether tenant state
can be relocated**, so that is what `shell_sovereignty.state` classifies. When the
two halves differ, classify `state` by the *weaker* half and say so in the waiver's
`exit_plan`. Derived from the fifth validation (Berd).

### 9.12 RuntimeConformanceProfile (v1.5.0, additive)

Declares **how** a tenant world satisfies the Runtime Ports on a specific runtime
shell. REQUIRED when a project claims runtime conformance (§9.2). It is the
conformance-profile format formalized from the FS-400 concepts validated across
four runtimes — the machine record of what §9.11 describes in prose.

**Required top-level keys:** `version`, `tenant`, `runtime` (label of the target
shell), `port_bindings[]`, `shell_sovereignty`, `governance[]`.

**`port_bindings[]`** — one entry per port (`skills`, `memory`, `context`,
`connections`):
- `port` — which port.
- `status` — `native` (the runtime hosts it directly) | `partial` | `authoring_side`
  (not hosted; stays in the authoring layer / Facework manifest).
- `mechanism` — the runtime primitive that hosts it (e.g. `claude-code:.claude/skills`),
  or `authoring-layer` when `authoring_side`.
- `notes` (optional).

**`shell_sovereignty`** (FS-400.6 + FS-400.7) — sovereignty **decomposed by
layer**, each classified `own | rent | mitigate`:
- `harness` — the agent loop. For a **multi-harness shell** this classifies the
  shell itself; the loops it can bind go in `harness_options` below.
- `state` — memory, config, transcripts. Classified on **portability, not
  locality**: when authoring state (agents, skills, instruction files) and
  operational state (projects, sessions, integration wiring) differ, classify by
  the weaker half and say so in the waiver's `exit_plan` (§9.11).
- `model` — the LLM.
- `harness_options[]` (v1.6.0, optional) — for a multi-harness shell, the agent
  loops it can bind, each `{ harness, posture, notes? }`. Present only when the
  loop is selected per invocation rather than fixed at install; MUST list ≥2
  when present. Omitting it means the shell is single-harness (§9.11).
  **`harness_options` is descriptive, not a guarantee (clarified v0.0.49).** The
  FS-400.8 sovereignty hedge is a property you *read off* the list — it holds only
  when at least one loop is `own` — not something declaring the list asserts. A
  shell whose every selectable loop is `rent` is still multi-harness and still
  valid; it simply has no hedge, and validators SHOULD say so rather than let the
  §9.11 framing imply otherwise.
- `waiver` — REQUIRED if any layer is `rent` or `mitigate`. Fields: `layers[]`
  (which layers the waiver covers), `exit_plan` (can tenant state relocate?),
  `data_posture` (`retention`, `training`, `residency`), and `ruling` — the
  recorded Sovereignty-loop decision. A fully self-hostable shell (all layers
  `own`) omits `waiver`.
- `ruling` (v1.7.0) — `{ status, by?, date?, note? }`. `status` is `ruled` or
  `pending`. **`ruled`** REQUIRES `by` (who ruled) and `date` (ISO `YYYY-MM-DD`).
  **`pending`** REQUIRES that `by` and `date` be absent — a ruling is recorded or it
  is not; there is no half-recorded state. The date field is `date`, not `on`:
  YAML 1.1 parses a bare `on:` key as the boolean `true`, so `on` is unusable as a
  manifest key. `pending` is the honest state for a
  profile that is **validation output rather than an adoption decision**, and it
  is what the 0.0.14 guard-rail requires an agent to write: an agent MAY record
  `status: pending`, and MUST NEVER write `status: ruled` on a human's behalf.
- `owner_ruling` (v1.5.0, **deprecated in v1.7.0**) — the original free-text form.
  Still accepted and read as `status: ruled`, so every v1.5.0/v1.6.0 profile stays
  valid. Exactly one of `ruling` or `owner_ruling` may be present. It was replaced
  because free text cannot be gated: a profile could satisfy the Phase-7 gate with
  the string `"PENDING — no ruling recorded yet"`, which asserts the gate's own
  condition is unmet.

**`governance[]`** (FS-400.4) — one entry per governance attribute the project
relies on (`trust_boundary`, `verifier_skill_id`, `escalation`, `pii`,
`rate_limits`, `data_residency`, `sponsors`, …):
- `attribute` — the manifest field.
- `kind` — `gate` (enforceable — the runtime can act on it) | `metadata`
  (descriptive — inherently authoring-layer).
- `binds_to` — for `gate`, the runtime mechanism that enforces it (e.g.
  `claude-code:permissions`); OR `unenforced: true` when the runtime cannot enforce
  it (declared, delegated to the authoring layer or human process — NOT a gate
  failure, per §9.11).

**Validation:**
1. Every `port` in `port_bindings` is one of the four; each resolves to a declared
   port manifest (or is `authoring_side`).
2. Every `rent`/`mitigate` layer in `shell_sovereignty` is covered by a `waiver`
   with a non-empty `exit_plan` and a well-formed `ruling` (or the deprecated
   `owner_ruling`). `harness_options`, when
   present, lists ≥2 loops, each with a valid `posture`.
3. Each `governance[]` entry is classified `gate` or `metadata`; every `gate`
   either sets `binds_to` or is marked `unenforced`.

**Phase gates:**
- **Phase 5** — when runtime conformance is claimed, the profile is present and
  validates; `port_bindings` cover all four ports.
- **Phase 7** — `shell_sovereignty` is consistent with the `SovereigntyMap`; every
  `rent`/`mitigate` layer's `waiver` carries `ruling.status: ruled` with `by` and
  `date` (this is the machine form of the §9.11 Phase-7 gate line). A profile whose
  waiver is `pending` is valid as **validation output** but MUST NOT be reached
  through a `conformance.claimed: true` manifest (§9.2) — claiming runtime
  conformance asserts the tenant world is ready to be operated, which a rented or
  mitigated shell cannot be until its owner has ruled. This is the gate that
  v1.5.0–v1.6.0 declared but could not enforce.

Formal schema: `$defs.runtimeConformanceProfile`. Worked examples:
`examples/face.works/runtime-ports/runtime-conformance-profile.yaml` (the Claude
Code binding from the fourth validation) and
`runtime-conformance-profile-berd.yaml` (the multi-harness binding from the fifth,
exercising `harness_options` and the authoring-vs-operational state split).

## 10) HarnessBundle (v1.2.0, additive)

Runtime Ports (§9) declare YAML contracts. Some runtimes ingest YAML
directly. Others — Open Claw, Glass-style internal tools, file-based
harnesses — expect a markdown bundle on disk: `soul.md`, `identity.md`,
`skills/`, etc. The HarnessBundle is the **derived markdown view** of the
Runtime Ports for those runtimes.

The YAML manifests in §9 remain the source of truth. The HarnessBundle is
regeneratable from them, one-way only in v1.2.0 (round-trip deferred).

**Validation (0.0.22).** The fourth Runtime Ports validation — Claude Code /
Agent SDK, a file-native local harness — is the first runtime whose on-disk
layout maps cleanly onto this derived view (`soul.md` ← CLAUDE.md, `skills/` ←
`.claude/skills/`, integrations ← `.claude/mcp.json`, governance ←
`.claude/settings.json`). §10 was asserted for "file-based harnesses"; it now has
a concrete target, and a reference consumer — `bin/harness-to-claude-code`
converts a bundle into a runnable Claude Code `.claude/` layout (0.0.23). See
`methodology/runtime-ports-claude-code-gap-2026-08-05.md`.

### 10.1 Bundle layout

```
harness-bundle/
├── CLAUDE.md         # top-level navigation — runtime's entry point
├── soul.md           # SignalThesis + TasteContract + Frequency
├── identity.md       # ProjectContext: tenant, track, audience, phase
├── purpose.md        # Current decisions + WedgeSpec + stage criteria
├── memory.md         # MemoryMap navigation (vault structure)
├── tools.md          # IntegrationManifest as readable wiring guide
├── boundary.md       # memory boundary rule — runtime reads at install
└── skills/
    ├── {skill-id-1}.md
    ├── {skill-id-2}.md
    └── ...
```

**Filenames are conventional and load-bearing.** Runtimes locate files by
name. Tenants do not rename; deviations break runtime ingest.

### 10.2 Manifest declaration

A v1.2.0 manifest extends the `runtime_ports` block with a `bundle` field
(v1.4.0 adds optional `cache_affinity` to both port refs and the bundle
ref):

```yaml
runtime_ports:
  skills:      { manifest: "define/skill-manifest.yaml" }
  memory:      { manifest: "define/memory-map.yaml" }
  context:     { manifest: "define/context-manifest.yaml" }
  connections: { manifest: "define/integration-manifest.yaml" }
  bundle:      { path: "harness-bundle/" }
```

The `bundle.path` field declares where the markdown bundle lives, relative
to the main manifest. Existing four-port declarations are unchanged.

### 10.3 File specifications

Each bundle file has a declared source and shape:

| File | Source artifacts | Shape |
|---|---|---|
| `CLAUDE.md` | (generated) | YAML frontmatter (`manifest_version`, `generated_at`, `source_manifest_sha`) + navigation listing of bundle files |
| `soul.md` | `SignalThesis` + `TasteContract` + Frequency decisions | Voice of the tenant world — narrative + means/does-not-mean + quality bar |
| `identity.md` | `ProjectContext` + stage | Scannable factual block: tenant, track, audience, evidence level, stage |
| `purpose.md` | Current decisions + `WedgeSpec` + stage criteria | Numbered list of premises the system depends on |
| `memory.md` | `MemoryMap.structure[]` + `indexing[]` + `conventions` | Tree view of vault + indexing notes (excludes `boundary` — that's `boundary.md`) |
| `tools.md` | `IntegrationManifest.integrations[]` | Per-integration setup with auth pointer (NOT secret values), rate limits, failover |
| `boundary.md` | `MemoryMap.boundary` | Declarative contract: who owns what, no-auto-promotion rule |
| `skills/{id}.md` | `SkillManifest.skills[]` (one file per skill) | YAML frontmatter (id, trigger, ownership, tags) + sections: inputs, outputs, dependencies, when this fires, escalation, source playbook link |

### 10.4 Conformance — calibrated by evidence level

| Evidence level | Bundle conformance |
|---|---|
| Validated | MUST emit the full bundle |
| Signaled | SHOULD emit minimum: `CLAUDE.md`, `soul.md`, `identity.md`, `purpose.md`, `skills/` |
| Thesis | MAY emit minimal: `CLAUDE.md` + `skills/` only |

The bundle is a **handoff artifact**, not a methodology artifact —
conformance shifts with handoff-readiness rather than evidence depth
alone.

**`boundary.md` is required at every level (clarified v0.0.50).** The minimums
above list content depth; they are not permission to omit the memory boundary.
Per §10.7 the file is present and non-empty whenever a bundle exists, at Thesis
as much as at Validated — it is the "one system of record" contract between
tenant memory and runtime memory (§9.4), and a bundle that ships without it hands
the runtime no ownership rule at all.

### 10.5 Generation

The HarnessBundle is **derived** from the four Runtime Port manifests plus
existing artifacts (`SignalThesis`, `TasteContract`, `DecisionLedger`,
`WedgeSpec`, `ProjectContext`).

**Source of truth:** the YAML manifests in §9. Tenant edits to bundle
files do not propagate back. To update content, edit the source artifact
and regenerate.

`/fw-coherence` emits the HarnessBundle in Phase 8 (Integration) as part
of the HandoffPackage (Step 6c — Emit Harness Bundle). For v1.2.0,
generation is manual (the skill walks the user through producing each
file). Automation deferred to later versions once the bundle format
stabilizes against ≥2 reference runtimes.

### 10.6 Round-trip (deferred)

v1.2.0 ships **one-way export only** (YAML → markdown). The YAML
manifests are the source of truth; the bundle is read-only.

Round-trip editing (bundle MD edits re-imported into YAML) is deferred to
v0.1.0+ if real-world use shows demand.

### 10.7 Phase 8 gate — full extension

Adding to existing Phase 8 (Coherence) gate criteria:

- When `runtime_ports.bundle.path` is declared, the directory exists at
  that path relative to the main manifest.
- Required bundle files present per `project.evidence_level` (§10.4).
- `boundary.md` is present and non-empty when the bundle exists.
- Every skill in `SkillManifest.skills[]` has a corresponding
  `skills/{id}.md` file.

### 10.8 Track-aware skeletons (GAMUT v0.0.6)

Facework v0.0.6 defines the bundle format; GAMUT (or any equivalent
practice) ships per-track skeleton bundles. Facework remains track-neutral
in the spec.

## 11) DesignInfrastructure (v1.3.0, additive)

Phase 3 (Taste) historically produces a `TasteContract` and
`DesignLanguageSpec` (DESIGN.md) — both readable, governance-grade
documents. They define what on-brand means; they do not, in their
current form, **gate output in real time**.

`DesignInfrastructure` (v1.3.0) makes Phase 3 emit an **active** layer:
design tokens as data, component primitives, a callable design-eye
evaluator Skill, and an LLM-readable examples library. The TasteContract
becomes load-bearing during operation, not just at handoff.

This is "design as infrastructure, not governance" (the framing from
Diego at Ramp / Glass).

### 11.1 The four components

| Component | Purpose | Format |
|---|---|---|
| `tokens.json` | Structured design tokens (color, type, space, radius, motion) | JSON |
| `components.yaml` | Minimum component primitives with token references and contract rules | YAML |
| `design-eye-spec.md` | Playbook for the design-eye-evaluator Skill | Markdown |
| `examples/` | LLM-readable on-brand and anti-examples with annotated rationale | Markdown |

### 11.2 Manifest declaration

A v1.3.0 manifest adds a top-level `design_infrastructure` block:

```yaml
design_infrastructure:
  tokens:     "define/design-infrastructure/tokens.json"
  components: "define/design-infrastructure/components.yaml"
  examples:   "define/design-infrastructure/examples/"
  evaluator_skill_id: "design-eye-evaluator"
```

`evaluator_skill_id` MUST resolve to a Skill declared in
`SkillManifest`. The Skill's `playbook` field SHOULD point at the
design-eye-spec.md.

### 11.3 Tokens (`tokens.json`)

Structured design tokens. Canonical top-level vocabulary:

| Key | Purpose |
|---|---|
| `color` | Named color values (neutral / brand / semantic) |
| `type` | Typography: family, scale, leading |
| `space` | Spacing scale |
| `radius` | Border radius scale |
| `motion` | Duration + easing |

Within each, tenants choose their own values. Tokens are JSON for
widest tool ecosystem compatibility (Style Dictionary, CSS-in-JS, etc.).
DTCG export can be added later as a derived view.

### 11.4 Components (`components.yaml`)

Minimum viable component primitives. Each component declares:

- `id` (slug) and `name`
- `purpose` — one-line description
- `variants[]` — declared variant names
- `states[]` — declared interaction states
- `tokens_used[]` — token paths the component references
- `contract.must[]` and `contract.must_not[]` — rules that pass the
  `TasteContract` by construction

The contract rules are **machine-readable**: the design-eye-evaluator
consumes them when grading output.

### 11.5 Design-eye-evaluator Skill

Registered in `SkillManifest` as a callable workflow:

- `id: design-eye-evaluator`
- `domain: quality`
- `trigger: on_demand`
- `ownership: agent`
- Inputs: `artifact_path` (required), `artifact_type` (required),
  `severity_threshold` (optional)
- Outputs: `evaluation_report` — markdown report with pass/fail +
  dimension scores + grounded feedback referencing specific contract
  clauses and example library entries
- Context: loads `soul`, `taste`, and a new `design-infrastructure`
  bundle that includes tokens + components + examples

Other output-producing skills (page builders, content generators) MAY
register the evaluator as a post-step, blocking ship if it fails the
declared threshold.

### 11.6 Examples library (`examples/`)

Two required markdown files:

- `examples/on-brand-examples.md` — concrete cases that pass the
  TasteContract, with annotations of why they pass
- `examples/off-brand-anti-examples.md` — cases that fail, with
  annotations of which contract clauses they violate

These are reference data for the evaluator. v1.3.0 ships markdown-only;
image-based examples + vision evaluation are deferred.

### 11.7 Conformance — track-aware

Unlike Move A and Move C (evidence-level calibrated),
DesignInfrastructure conformance is **track-aware**:

| Track | Conformance |
|---|---|
| Creator | SHOULD emit (brand fidelity is load-bearing) |
| Cultural Brand | MUST emit (brand IS the product) |
| Athlete / Public Figure | SHOULD emit |
| Agency / Studio | MAY emit (delivery-shaped, brand secondary) |
| Platform / Product | SHOULD emit (UI consistency is operational) |

Rationale: design fidelity is a function of *what kind of project this
is*, not *how much demand evidence exists*. A Cultural Brand at
thesis-level still needs the active infrastructure; an Agency at
validated-level may legitimately defer.

### 11.8 Generation

`/fw-taste` emits the four components in Phase 3 alongside the existing
`TasteContract` and `DesignLanguageSpec`. New step: **Step 6 — Emit
Design Infrastructure (track-relevant)**.

`/fw-stability` Step 5d.1 (SkillManifest emission) registers the
`design-eye-evaluator` Skill automatically when DesignInfrastructure
exists.

For v1.3.0, the evaluator implementation is the runtime's job — the
spec declares what gets evaluated and the output shape; runtimes execute
the actual LLM call against tokens + components + examples + contract.

### 11.9 Phase 3 gate — full extension

Adding to existing Phase 3 (Taste) gate criteria:

- For tracks where DesignInfrastructure is required by §11.7, the four
  components are emitted and validate.
- `evaluator_skill_id` references a Skill in `SkillManifest` that
  exists and has `domain: quality` and `ownership: agent`.
- Tokens file parses as JSON; components file parses as YAML.
- `examples/on-brand-examples.md` and
  `examples/off-brand-anti-examples.md` exist and are non-empty.

### 11.10 Round-trip from feedback (deferred)

v1.3.0 ships one-way: TasteContract → DesignInfrastructure. Evaluator
feedback that surfaces patterns the contract didn't capture could in
principle propagate back into TasteContract amendments. Round-trip is
deferred to v0.1.0+.

### 11.11 Verifier pattern generalizes (v1.4.0)

The `design-eye-evaluator` Skill registered by DesignInfrastructure is
one instance of a broader pattern. As of v1.4.0, any output-producing
Skill MAY declare a `verifier_skill_id` in its SkillManifest entry,
referencing another Skill (typically `domain: quality`, `ownership:
agent`) that gates the producing skill's output before publication.
DesignInfrastructure's evaluator was the first concrete verifier; other
tenant worlds can register verifiers for legal review, accuracy
checking, policy compliance, or any other output-gating concern. See
§9.3 v1.4.0 optional skill fields.

## 12) Observability Interface (v1.4.0, additive)

Runtime Ports (§9), HarnessBundle (§10), and DesignInfrastructure (§11)
declare WHAT the tenant world is. The Observability Interface declares
WHAT EVENTS runtimes SHOULD emit during operation. The protocol
specifies the event surface; runtimes pick the transport (stdout,
OpenTelemetry, custom dashboard, logfile, vendor sink — runtime's call).

This means: a dashboard that visualizes Facework runs — like the Claude
Platform dev dashboard, Corey's runtime dashboard, or any tenant's
custom UI — consumes the same event surface regardless of which runtime
is producing the events. Facework specifies it; nothing builds it.

**Enforcement class: runtime-layer (clarified v0.0.50).** Everything in §12 is an
obligation on a *running* system — events emitted during operation — so no
manifest validator can check it, and `bin/validate-manifest` does not try. The
§12.4 gate is a `/fw-coherence` (Phase 8) responsibility discharged against a
live runtime, not a manifest property. This is stated so the section is not read
as machine-checked by omission, per the standing rule earned in the §9 audit
(`methodology/section9-enforcement-audit-2026-08-19.md`): a normative rule lands
explicitly as enforced or as declared out-of-band — silence reads as "checked."

### 12.1 Minimum event surface

Any v1.4.0 conforming runtime SHOULD emit these events. Different
transport, same surface:

| Event | Fields | When |
|---|---|---|
| `skill.invoked` | skill_id, invoker, inputs (redacted), timestamp, multiplayer | At skill start |
| `skill.completed` | skill_id, outputs (paths), duration_ms, status, model_tier_used | On skill finish |
| `skill.error` | skill_id, error_class, message, timestamp | On skill failure |
| `memory.write` | path, skill_id, bytes, timestamp, compactable | Per memory write |
| `memory.read` | path_pattern, skill_id, timestamp | Per memory read (may be sampled) |
| `integration.called` | integration_id, operation, direction, skill_id, duration_ms | Per integration call |
| `verifier.run` | verifier_skill_id, gated_skill_id, verdict, scores, timestamp | When a verifier gates an output |
| `cache.hit` | prompt_prefix_hash, skill_id, savings_pct, cache_affinity | Per cache hit |
| `cache.miss` | prompt_prefix_hash, skill_id, reason, cache_affinity | Per cache miss |
| `advisor.escalated` | from_skill_id, to_skill_id, prompt_summary, timestamp | When `advisor_escalation` is invoked |

### 12.2 Field conventions

- **`redacted`** — secrets (per `IntegrationManifest.secrets[]`) and PII
  (per `IntegrationManifest.pii: true`) MUST be redacted from event
  payloads.
- **`path_pattern`** — for memory.read events, the original glob/template
  is preferred over the resolved literal (e.g., `wiki/clients/**` not
  `wiki/clients/acme/define/foo.md`) to keep events readable at scale.
- **`timestamp`** — ISO 8601 UTC unless the runtime's transport mandates
  a different format.
- **`duration_ms`** — wall-clock milliseconds from invocation start to
  completion.

### 12.3 What runtimes pick

The protocol does not specify:
- Event transport (stdout / OpenTelemetry / custom HTTP sink / file)
- Event format encoding (JSON / protobuf / msgpack)
- Sampling rate for high-volume events (memory.read, cache.hit)
- Retention policy on emitted events
- Aggregation or rollup conventions

These are runtime concerns. Different runtimes will choose differently;
the event surface is the interoperability layer.

### 12.4 Phase 8 (Coherence) gate addition

For v1.4.0 conformers, `/fw-coherence` (Phase 8) SHOULD confirm:
- The chosen runtime can emit the minimum event surface (§12.1).
- The HandoffPackage documents which transport the runtime uses, so
  the receiving operator knows where to look.
- Secrets and PII redaction is exercised at least once before handoff.

### 12.5 Relationship to other protocol layers

- **Runtime Ports (§9)** declare what the tenant world contains.
- **HarnessBundle (§10)** packages it for file-based ingest.
- **DesignInfrastructure (§11)** declares an active design layer (the
  first verifier).
- **Observability Interface (§12)** declares the operational visibility
  surface — what the system reveals about itself as it runs.

Together: four layers, each declaring properties; runtimes implement.
