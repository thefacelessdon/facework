---
name: fw-stability
version: 4.1.0
description: |
  Stability: Phase 5 of the Facework Protocol (with /fw-flow). Build the
  architectural foundation. Produce complete technical specs for every major
  system before writing code. Adapts spec categories to the product type.
  In v1.1.0 (toolkit v0.0.5), also emits the four Runtime Ports (§9) so any
  runtime can operate the tenant world. Runs after Strategy Lock (Phase 4),
  alongside Flow.
allowed-tools:
  - Read
  - Write
  - Edit
  - Grep
  - Glob
  - Bash
  - AskUserQuestion
  - Agent
---

# /fw-stability — Build the Foundation

**Phase 5 of the Facework Protocol (Architecture & Flow — with /fw-flow).**
Entry: DecisionLedger and WedgeSpec exist; no unresolved strategic contradictions (Phase 4 gate).
Exit: SystemArchitecture implementable without founder context.
Co-skill: /fw-flow runs alongside this phase to document operational workflows.
Note: For services/methodology businesses, Flow runs BEFORE Stability. For pure
software products, the original order may still apply.

You are a systems architect producing specifications that carry weight.
Every major system gets a spec. Every spec is implementable without
clarifying questions.

## The Cultural Physics Foundation

Stability is the force that doesn't appear in the Cultural Physics equation
by name — it's the infrastructure that makes Flow possible. You can't have
current without a conductor. You can't have flow without architecture.

The governing equation: `Coherence = (Flow × Resonance) / (1 + Entropy)`

Every spec you write either increases the system's capacity for flow (energy
moves freely through well-designed architecture) or increases entropy (energy
gets trapped in poorly designed systems, leaks through edge cases, contradicts
itself across boundaries). A spec that contradicts the business model is entropy.
A spec that assumes an API exists without confirming it is entropy. A spec that
gives the platform control over data the creator should own is entropy.

Stability specs should be evaluated not just for structural soundness but for
whether they build conduits (energy flows through) or containers (energy gets trapped).

## Step 0: Read Existing Artifacts

Before specifying architecture, scan the project for prior work:
- All artifacts from Phases 1–4 (SignalThesis through DecisionLedger)
- Existing architecture docs, system diagrams, or technical specs
- Existing codebase (if any) — read the structure, not just docs about it
- API documentation, integration guides, or dependency registries
- Prior security audits, performance reports, or infrastructure reviews

Read `define/PROJECT-CONTEXT.md` if it exists. Read the `track:` field from its
YAML frontmatter. Adapt depth, spec categories, and CapabilityMap format to the
track (see Track Emphasis below). If it doesn't exist, proceed normally.

Summarize what you found. Do not re-specify systems these artifacts already cover.

### Track Emphasis

The project track determines architectural depth:

| Track | Stability emphasis |
|-------|-------------------|
| Creator | Light — platform-hosted capabilities. Focus on: integration map (which platforms own what), data portability, content ownership. Skip: database schemas, migration sequences. CapabilityMap = integration surface. |
| Cultural Brand | Standard — own site + integrations. CMS spec, commerce integration, community tooling, content pipeline architecture. CapabilityMap = owned + rented capabilities. |
| Athlete / Public Figure | Standard — mixed ownership. Merch fulfillment, content distribution, booking system, endorsement tracking. CapabilityMap = heavy on sovereignty classification. |
| Agency / Studio | Light-to-Standard — methodology > infrastructure. Delivery system spec, client portal requirements, project tracking, reporting. CapabilityMap = delivery capabilities + client-facing tools. |
| Platform / Product | Heavy — full architecture. Database schemas, migration sequence, DataSource contract, event vocabulary, API surface, auth model. CapabilityMap = full capability audit with owned/rented/deferred. |

If no track is set, infer from artifacts and confirm with the user.

## Step 1: Read Frequency + Current Artifacts

Understand the business model, decisions, and constraints before specifying.
The specs must be consistent with what's already been established.

Pay particular attention to the Ownership & Control section of the business model
and any ownership dilemmas resolved in Current. The architecture must implement
the ownership decisions — if creators own their data, the data isolation spec
must enforce that structurally, not just promise it in documentation.

## Step 2: Identify What Needs Specs

Ask the user what's being built technically, then determine which specs apply.
Not every product needs every category:

**Data & Security** (most products need these):
- Data isolation / access control — who can read/write what
- Authentication / authorization model
- Financial validation — if money flows through the system

**Integration** (if connecting to external systems):
- Sync model — source of truth per data type, conflict resolution
- API registry — external services, auth methods, rate limits, confirmed/unconfirmed status
- Observability — alerts, logging, monitoring, runbooks

**Product** (adapt to what's being built):
- Information architecture — screens, views, components, data sources
- Automation / agent operations — if the system has automated behavior
- Domain-specific features — whatever is unique to this product

Use AskUserQuestion: "Based on what you're building, which of these systems
need formal specs?" Recommend based on what Frequency and Current revealed.

## Step 3: Write Each Spec

Every spec follows this structure:
```markdown
---
title: "[System] Specification"
type: Technical Architecture
version: 1.0
status: Working Draft
---

# [System Name]

## Context
What problem this solves. Why this system exists.

## Architecture
How it works. Include ASCII diagrams for:
- Data flow (how information moves between components)
- State machines (if the system has lifecycle states)
- System boundaries (what's inside vs outside this system)

## Data Model
Tables, schemas, types. Use SQL, TypeScript types, or whatever
matches the project's stack. Be precise — these become the
database schema.

## Ownership & Control
Who owns this data? Who can access it? What happens to it
if the participant leaves? This section implements the ownership
decisions from Current at the architectural level.

## Rules & Logic
Business rules with specific values:
  "If X drops below 30, do Y" — not "if X is low, consider Y"
Thresholds, conditions, decision trees. Specific and testable.

## Edge Cases
What can go wrong. For each:
- The scenario
- How it's detected
- How it's handled
- What the user sees

## External Dependencies
APIs, services, third-party systems. For each:
- Auth method
- Key endpoints
- Rate limits (confirmed or estimated)
- Fallback if unavailable

## Acceptance Criteria
How to verify the implementation is correct.
Testable, measurable conditions. Not aspirational.
```

## Step 4: Diagrams

Include ASCII diagrams for any non-trivial:
- State machine (lifecycle states, transitions, guards)
- Data flow (sync pipelines, event flows, processing sequences)
- System topology (queue layout, service architecture)
- Decision tree (threshold logic, branching behavior)

## Step 5: Capability Map

After specs are written, produce a `CapabilityMap` — the contract that
Resonance (Phase 6) will compose interfaces from. This is the bridge
between architecture and working interfaces.

The CapabilityMap declares what the system can do. Every interface built
in Resonance must trace to a declared capability. If a capability doesn't
exist here, Resonance cannot build an interface that depends on it.

**For Platform/Product projects:**
```markdown
# Capability Map

## Owned Capabilities
| Capability | Domain | Status | Contract Surface | Events Emitted |
|-----------|--------|--------|-----------------|----------------|
| e.g. Tenant isolation | Core | Built | RLS via tenant_id | tenant.created |
| e.g. Order processing | Commerce | Specified | create_order RPC | order.placed |

## Rented Capabilities (platform dependencies)
| Capability | Provider | Integration Status | Fallback |
|-----------|----------|-------------------|----------|
| e.g. Payments | Stripe | Connected | Manual invoice |

## Deferred Capabilities (known gaps — backlog for future phases)
| Capability | Why Deferred | What Depends On It |
|-----------|-------------|-------------------|
| e.g. Analytics | Below MVP threshold | Operator dashboard |
```

**For Creator/Brand/Athlete projects:**
```markdown
# Capability Map

## Platform Capabilities (rented — the integration surface)
| Capability | Platform | What It Provides | API/Connection |
|-----------|----------|-----------------|----------------|
| e.g. Product catalog | Shopify | Products, inventory, checkout | Storefront API |
| e.g. Email delivery | ConvertKit | Sequences, broadcasts, subscribers | REST API |

## Owned Capabilities (what you control directly)
| Capability | Where It Lives | What It Provides |
|-----------|---------------|-----------------|
| e.g. Content | Own site / CMS | Portfolio, blog, about |
| e.g. Brand identity | DESIGN.md | Visual system, tone, voice |

## Gaps (no platform covers this yet)
| Need | Options Considered | Decision |
|------|-------------------|----------|
```

**For Agency/Studio projects:**
```markdown
# Capability Map

## Delivery Capabilities (the methodology as infrastructure)
| Capability | Tool/Process | Status |
|-----------|-------------|--------|
| e.g. Intake | Typeform + Notion | Live |
| e.g. Scoping | Internal template | Manual |
| e.g. Delivery tracking | Linear | Live |

## Client-Facing Capabilities
| Capability | Surface | Status |
|-----------|---------|--------|
| e.g. Client portal | Custom app | Needs build |
| e.g. Reporting | Notion export | Manual |
```

The CapabilityMap is a **required artifact** for Phase 5 gate. Resonance
will not produce grounded interfaces without it.

## Step 5b: Parallel Lanes

When the build will use multiple agents or parallel workstreams, define the
parallelization boundaries. This makes execution implications explicit —
Stability already defines component boundaries, this section maps them to
non-overlapping file scopes.

```
PARALLEL LANES
═══════════════
Lane A: [module/scope] — directories: [paths], depends on: [nothing / Lane X]
Lane B: [module/scope] — directories: [paths], depends on: [nothing / Lane X]
Lane C: [module/scope] — directories: [paths], depends on: [Lane A]
...
CONFLICT ZONES: [directories where multiple lanes overlap — force sequential]
```

**The rule:** If two lanes share a directory, they go in the same lane
(sequential). If they don't, they can run in parallel. Parallelization works
at the module/directory level, not the file level. Plans describe intent
("add API endpoints"), not specific files. Module-level boundaries
(`app/api/`, `app/pages/`, `lib/`) are reliable. File-level boundaries
are guesswork.

**When to skip:** Solo builder working sequentially. The parallel lanes
section earns its weight when 2+ agents or contributors will build
simultaneously.

**Cost:** 10 minutes. Prevents merge conflicts and rework during parallel execution.

## Step 5c: Verification Map

For each capability in the CapabilityMap, define how to verify it works,
how to prove it's broken, and what the edge cases are. This is a verification
contract — not a test plan. It's written in capability language, not code
language, and maps directly to tests during implementation.

For each capability:
```
CAPABILITY: [name]
  WORKS: [input] → [expected output]
  BREAKS: [failure condition] → [user sees X] → [system does Y]
  EDGES: [boundary condition 1], [boundary condition 2]
```

Example:
```
CAPABILITY: Subscribe to newsletter
  WORKS: valid email → 200, stored in Sanity, welcome email sent
  BREAKS: Sanity unavailable → 503, email queued for retry
  EDGES: duplicate email → 200 "already signed up", honeypot filled → 200 silent reject, invalid email → 400
```

The verification map prevents two failure modes:
1. Tests that miss edge cases because the tester invented coverage ad hoc
2. Capabilities that ship without any verification because no one defined
   what "working" means

**Cost:** One table per capability. Add 2-3 columns to the existing CapabilityMap
or produce as a companion artifact.

## Step 5d: Runtime Ports (v1.1.0)

After CapabilityMap and Verification Map, emit the four Runtime Ports
defined in `PROTOCOL.md` §9. These are machine contracts any runtime ingests
to operate the tenant world — they expose Phase 5 outputs as portable,
declarative manifests.

**Conformance is calibrated by `project.evidence_level`** (§9.2):

| Evidence level | Emit |
|---|---|
| Validated | All four port manifests (MUST) |
| Signaled | All four if possible; minimum: `SkillManifest` + `MemoryMap` (SHOULD) |
| Thesis | Minimal `SkillManifest` only (MAY) |

Read `define/PROJECT-CONTEXT.md` for `evidence_level`. If unset, ask the
user before emitting. Reference example for every port:
`examples/face.works/runtime-ports/`.

### 5d.1 — SkillManifest → `define/skill-manifest.yaml`

Declare every callable workflow as a Skill. Pull from `/fw-flow`'s
`WorkflowPlaybooks` — every playbook is referenced by ≥1 skill.

Required skill fields: `id`, `name`, `description`, `domain`, `trigger`
(`on_demand` | `scheduled` | `event` | `continuous`), `ownership` (`human`
| `agent` | `hybrid`), `playbook` (path).

Optional: `inputs`, `outputs`, `depends_on_capabilities` (references
CapabilityMap), `reads_memory`, `writes_memory`, `context_load`,
`integrations`, `escalation`, `schedule` (required if `trigger=scheduled`),
`event` (required if `trigger=event`), `tags`.

Track-relevant skills MUST be present per `ProjectContext.track`:
- Agency/Studio: ≥1 of {prospect qualification, engagement delivery,
  stage-gate monitoring, engagement closure}
- Creator / Cultural Brand / Athlete: ≥1 of {content pipeline, audience
  capture, distribution}
- Platform/Product: ≥1 of {onboarding, customer feedback loop, release
  operations}

At least one human-ownership skill SHOULD exist (avoids fully-automated
drift). Some agency/automation-heavy systems legitimately keep human
judgment outside the runtime — that's fine, but document why.

### 5d.2 — MemoryMap → `define/memory-map.yaml`

Declare the vault structure that holds long-term tenant knowledge.

Required: `root`, `structure[]` (at minimum: capture / wiki / outputs /
archive folders — or explicit waiver), `boundary` block.

**The `boundary` block MUST be present and explicit.** Declare the
separation between tenant memory (the vault) and runtime memory (Claude's
per-project memory at `~/.claude/projects/<sanitized-cwd>/memory/`).
Skills MUST write tenant content to the vault; runtimes MUST NOT
auto-promote tenant content without explicit user action. This resolves
the "one system of record" collision — see PROTOCOL.md §9.4.

Optional: `indexing[]` (search/RAG layers), `retention[]` (archive/delete
policies), `conventions` (filename, frontmatter, link style).

### 5d.3 — ContextManifest → `define/context-manifest.yaml`

Declare what each skill loads at session start.

Required: `global` bundle (loaded for every skill), `bundles[]`. Each
bundle: `id`, `name`, `purpose`, `load[]` (file / query / live / section
sources).

**Three conventional bundles SHOULD be present** (Validated: MUST). They
map directly to the harness-native files Move C (v0.0.6) will emit:
- `soul` — from `SignalThesis` + `TasteContract` + Frequency decisions
- `identity` — from `ProjectContext` (track, audience, phase emphasis)
- `purpose` — from Current decisions + `WedgeSpec` + stage criteria

### 5d.4 — IntegrationManifest → `define/integration-manifest.yaml`

Declare every external tool the tenant world reaches.

Required: `id`, `name`, `kind` (`mcp` | `rest` | `cli` | `filesystem` |
`webhook` | `db`), `auth` (`oauth` | `api_key` | `local` | `none` | `mtls`),
`trust_boundary` (`own` | `rent` | `mitigate` from `SovereigntyMap`),
`used_by[]` (skill IDs).

**Never include raw secrets.** Use `SecretRef` pointers
(`{name, store, ref, required?}`) into external secret stores
(`1password`, `aws_secrets`, `env`, `doppler`, custom). Validator
hard-fails on any field that looks like a raw key, token, or password.

Optional: `endpoint`, `scope[]`, `rate_limits`, `failover`,
`data_residency`, `pii`, `description`. If `pii: true`, `data_residency`
is required.

Phase 7 (Sovereignty) further validates `trust_boundary` against
`SovereigntyMap`.

### 5d.5 — Declare ports in `facework.manifest.yaml`

Bump `protocol_version` to `1.1.0` and add the `runtime_ports` block:

```yaml
runtime_ports:
  skills:      { manifest: "define/skill-manifest.yaml" }
  memory:      { manifest: "define/memory-map.yaml" }
  context:     { manifest: "define/context-manifest.yaml" }
  connections: { manifest: "define/integration-manifest.yaml" }
```

Ensure `project.evidence_level` and `project.track` are set in the
manifest — both inform conformance and port shape.

## Step 6: Cross-Reference

- Every rate/threshold traces to canonical source in business model
- No spec contradicts another spec
- External API dependencies listed with confirmed/unconfirmed status
- Edge cases reference the spec that handles them
- Acceptance criteria are testable
- Ownership and control structures in the architecture match the
  decisions made in Frequency and Current — the architecture implements
  the ownership model, it doesn't override it
- CapabilityMap covers every domain referenced in specs

**Runtime Ports cross-manifest checks (§9.7) — bidirectional:**

- `SkillManifest.skills[].reads_memory[]` and `writes_memory[]` resolve to
  paths declared in `MemoryMap.structure[]` (literal or pattern match)
- `SkillManifest.skills[].context_load[]` resolves to bundle IDs in
  `ContextManifest.bundles[]` or `ContextManifest.global.id`
- `SkillManifest.skills[].integrations[]` ↔
  `IntegrationManifest.integrations[].used_by[]` — bidirectional, both
  directions must resolve
- `SkillManifest.skills[].depends_on_capabilities[]` resolves to entries
  in CapabilityMap
- `ContextManifest.bundles[].load[]` of `kind: live` references an
  integration declared in `IntegrationManifest`
- `MemoryMap.structure[].written_by[]` and `read_by[]` resolve to skill
  IDs in `SkillManifest`
- `MemoryMap.boundary` is present and non-empty
- No raw secrets in `IntegrationManifest` — only `SecretRef` pointers

Run `bin/validate-manifest` to confirm port references resolve cleanly
before closing Stability.

## Step 6.5: Cold Read (Optional)

Before marking Stability complete, optionally dispatch a cold read — a separate
agent (or reviewer) who reads the architecture specs with no conversation context.

**Input:** The SystemArchitecture, CapabilityMap, and key specs — assembled as
one structured summary.

**Instruction to the cold reader:** "Read this architecture and tell me what's
wrong. No compliments. Just the problems."

**Process:** For each finding, decide:
- **Accept** — incorporate the fix before closing.
- **Reject** — state the reasoning.
- **Defer** — name the trigger for revisiting.

**When to skip:** Thesis-level projects. Challenge the architecture when there's
validated demand behind it.

**Time cost:** 5 minutes.

## Output

### Tier 1 — Narrative (shown in conversation)

Present a 5–7 sentence summary: "Here's the architecture, what the system
can do, and how it exposes itself to runtimes." Cover stack decisions, key
specs produced, the capability surface (owned vs rented vs deferred), and
the four Runtime Ports emitted (skills, memory, context, connections —
calibrated by evidence_level). This is what the user reads immediately.

### Tier 2 — Summary Card (written to file)

Write to `define/stability-summary.md`:
- Specs produced (count and names)
- Capability count (owned / rented / deferred)
- Runtime Ports emitted (count per port + evidence-level conformance status)
- Key architecture decisions
- One summary table

### Tier 3 — Machine Artifacts (written to files)

Write the full SystemArchitecture + CapabilityMap to `define/stability-specs.md`
with YAML frontmatter:
```yaml
---
artifact: SystemArchitecture
phase: stability
track: [track from PROJECT-CONTEXT.md or "unset"]
version: 1.0
status: Working Draft
---
```

**Runtime Ports** (v1.1.0):
- `define/skill-manifest.yaml` — `SkillManifest`
- `define/memory-map.yaml` — `MemoryMap`
- `define/context-manifest.yaml` — `ContextManifest`
- `define/integration-manifest.yaml` — `IntegrationManifest`

Update `facework.manifest.yaml`:
- `protocol_version: "1.1.0"`
- `project.evidence_level` and `project.track` populated
- `runtime_ports` block declaring the four manifest paths

Close with: "Stability built. [N] specs produced ([N] lines total).
CapabilityMap declares [N] capabilities ([N] owned, [N] rented, [N] deferred).
Runtime Ports emitted: [N] skills, [N] vault folders, [N] context bundles,
[N] integrations — manifest at protocol_version 1.1.0. Every major system
is specified. Run /fw-flow for operational playbooks (or in parallel).
Run /fw-resonance to compose interfaces from declared capabilities."
