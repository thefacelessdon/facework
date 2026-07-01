# Runtime Ports Plan — v0.0.5

Status: Draft
Target: v0.0.5
Plan author: working session, 2026-05-12
Folds into: `PROTOCOL.md` §9 (new section) once executed

## 1) Purpose

Facework is a protocol toolkit, not a runtime. Its job is to produce a coherent
tenant world that any runtime shell — Corey's, Open Claw, Glass-style internal
tools, Co-Work, custom — can plug into and operate without rebuilding context.

Today the protocol produces methodology artifacts (good for humans, good for
governance) but lacks declared **runtime ports** that a harness can consume
directly. This plan adopts Meng's four-layer model (Skills, Memory, Context,
Connections) as Facework's canonical port spec and adds four artifacts that
expose the tenant world to any runtime.

Move A is the portability fix. It unblocks Move B (Design Infrastructure) and
Move C (HarnessBundle export). Without it, neither has a port to land in.

## 2) The four ports (canonical, adopted)

| Port | Artifact (new) | What it declares | Harness uses it to |
|---|---|---|---|
| **Skills** | `SkillManifest` | Every repeatable workflow the tenant can perform, with inputs, outputs, ownership, and trigger conditions | Expose callable skills to the operator (button, slash command, cron, API) |
| **Memory** | `MemoryMap` | Where long-term tenant knowledge lives, how it's indexed, what each skill reads and writes | Route capture, retrieval, and persistence without inventing paths |
| **Context** | `ContextManifest` | What each skill loads at session start — soul, identity, taste, current decisions, recent state | Build session context efficiently, without crawling everything |
| **Connections** | `IntegrationManifest` | External tools the tenant world reaches — MCP servers, APIs, file systems, permissions | Wire the harness's tool layer with auth, scope, and trust boundaries declared |

These are **declarative contracts**, not implementations. Facework specifies the
shape; runtimes implement the execution. A conforming Facework project can be
ingested by any runtime that supports the four-port interface.

## 3) Mapping to existing artifacts (no rebuild — recompose)

Every port is built from artifacts Facework already produces. The work is
declaration and shape, not new content.

| Port | Built from |
|---|---|
| `SkillManifest` | `WorkflowPlaybooks` (Phase 5 Flow) + `CapabilityMap` (Phase 5 Stability) |
| `MemoryMap` | Vault structure + per-skill read/write paths declared in `WorkflowPlaybooks` + indexing rules from `ProjectContext` |
| `ContextManifest` | `SignalThesis` + `TasteContract` + `DesignLanguageSpec` + `DecisionLedger` + `ProjectContext` — per-skill subsets, not the whole pile |
| `IntegrationManifest` | `CapabilityMap` (rented capabilities) + `SovereigntyMap` (trust boundaries) + tooling declared in `WorkflowPlaybooks` |

The "soul, heartbeat, rituals, purpose" framing from Meng and Diego maps cleanly:
- **Soul** = `SignalThesis` + `TasteContract` + Frequency (in `DecisionLedger`)
- **Identity** = `ProjectContext`
- **Purpose** = `WedgeSpec` + Current (in `DecisionLedger`)
- **Rituals** = `WorkflowPlaybooks` (operational cadences)
- **Heartbeat** = governance metrics from `DiagnosticReport` (later)

These all flow into `ContextManifest` as the harness's loadable soul.

## 4) Manifest schema extension

Extend `facework.manifest.yaml` with a new top-level key:

```yaml
runtime_ports:
  skills:
    manifest: artifacts/skill-manifest.yaml      # SkillManifest path
    count: 14                                    # declared skills
    callable: true                                # harness can execute
  memory:
    manifest: artifacts/memory-map.yaml          # MemoryMap path
    root: vault/                                 # vault root path
    indexed: true                                 # search index present
  context:
    manifest: artifacts/context-manifest.yaml    # ContextManifest path
    soul: artifacts/soul.md                      # human-readable soul (Move C bridge)
    identity: artifacts/identity.md              # human-readable identity
  connections:
    manifest: artifacts/integration-manifest.yaml
    mcp_servers: 4
    external_apis: 2
```

The `runtime_ports` block is the integration surface. A harness that reads the
manifest knows exactly where to find each port's declarations.

Each port artifact has its own sub-schema (defined in v0.0.5 as additions to
`facework.manifest.schema.json`).

## 5) Phase ownership

Apply Facework's own logic: Phase 5 (Architecture & Flow) emits buildable
contracts; Phase 8 (Coherence) packages them for handoff. Therefore:

- **Skills, Memory, Context, Connections** → emitted by Phase 5 as part of the
  Architecture & Flow gate.
- **Sovereignty review of Connections** → validated in Phase 7 (Sovereignty) —
  external dependencies are trust-boundary decisions.
- **Packaging for harness ingest** → Phase 8 (Coherence) wraps the four ports
  into a runtime-ready bundle. This is where Move C will land.

Phase 5 gate is extended:
- Workflows include triggers, thresholds, ownership, escalation paths *(unchanged)*
- Build artifacts implementable without founder context *(unchanged)*
- Playbooks inform specs *(unchanged)*
- Capability map declares own/rent/defer *(unchanged)*
- **NEW:** Four runtime port artifacts produced and validate against schema
- **NEW:** Each declared skill traces to a `WorkflowPlaybook` and uses only
  declared `CapabilityMap` capabilities

## 6) Worked example (scope for v0.0.5)

`examples/face.works/` already contains reference output from a completed run.
Add a `runtime-ports/` subfolder with the four port artifacts populated from
existing Face.works artifacts:

```
examples/face.works/runtime-ports/
├── skill-manifest.yaml
├── memory-map.yaml
├── context-manifest.yaml
└── integration-manifest.yaml
```

Plus a thin `harness-bundle/README.md` showing what Move C will produce (stub
only — the actual bundling logic is v0.0.6).

This is the reference any tenant follows when emitting their own ports.

## 7) Open dilemmas — RESOLVED 2026-05-12

All six locked at recommended defaults. Quick reference:

| # | Dilemma | Resolution |
|---|---|---|
| 7.1 | One unified vs four artifacts | **Four separate** — distinct contracts for distinct consumers |
| 7.2 | MUST vs SHOULD for conformance | **SHOULD in v0.0.5, evidence-level calibrated** — Validated=MUST, Signaled=SHOULD, Thesis=MAY-minimal-SkillManifest |
| 7.3 | Track-aware defaults | **Yes** — skeleton ports per track (Creator, Cultural Brand, Athlete, Agency/Studio, Platform/Product) |
| 7.4 | MemoryMap vs Claude auto-memory | **Distinct layers** — boundary block in every MemoryMap declares the separation |
| 7.5 | Harness export format timing | **YAML now (v0.0.5); markdown bundle deferred to v0.0.6 (Move C)** |
| 7.6 | Naming | **"Runtime Ports"** — declarative, plural, integration-shaped |

Detailed rationale for each below.

### 7.1 — One unified `RuntimeInterface` artifact, or four separate ports?

**Recommendation: four separate.** Protocol logic — Phase 5 already separates
`WorkflowPlaybooks` (operational), `SystemArchitecture` (build), `CapabilityMap`
(what the system can do). The pattern is distinct contracts for distinct
consumers. Skills (operator-facing), Memory (data-flow), Context (session-load),
Connections (trust-boundary) each have distinct consumers and gates. Merging
them would force every port through one gate and obscure the trust-boundary
review for Connections that Phase 7 needs.

### 7.2 — Required artifacts (MUST) or recommended (SHOULD) for conformance?

**Recommendation: SHOULD in v0.0.5, calibrated by evidence level.** Validated
projects MUST produce all four. Signaled projects SHOULD. Thesis-level MAY
produce a minimal `SkillManifest` only. Upgrade to universal MUST in v0.1.0 once
real-world examples exist.

Protocol logic — §3 evidence levels already calibrate effort by demand
evidence. Forcing four new artifacts on a thesis-level run would violate the
"thesis projects should not produce the same volume as validated ones" rule.

### 7.3 — Track-aware port defaults?

**Recommendation: yes.** Creator track has different default skills than Agency
track. The five tracks declared in §3 ([Creator, Cultural Brand, Athlete,
Agency/Studio, Platform/Product](PROTOCOL.md:59)) imply different operational
shapes — ship per-track skeleton ports as opinionated starting points, tenant
trims/extends.

Protocol logic — `ProjectContext` already declares track. Letting it propagate
to port defaults is consistent with progressive disclosure.

### 7.4 — Memory port vs Claude's per-project auto-memory: how do they relate?

**Recommendation: declare them as distinct layers in `MemoryMap`.** The user's
"one system of record" rule applies *within* Claude's runtime — Claude's
per-project auto-memory at `~/.claude/projects/<cwd>/memory/` is for the
agent's cross-session continuity, owned by the runtime.

`MemoryMap` describes the *tenant project's* memory layer (vault, knowledge
base, capture loops) — owned by the tenant world. They live at different
addresses and serve different consumers. The MemoryMap MUST explicitly call
out that it does not displace runtime-level memory, and SHOULD declare a
boundary file (`memory-boundary.md`) that any runtime reads to know which
layer is which.

This needs explicit treatment in `PROTOCOL.md` §9 to avoid the two systems
competing.

### 7.5 — Harness export format declared now, or deferred to Move C?

**Recommendation: declare the YAML schema now (v0.0.5); defer the markdown
harness bundle to v0.0.6.** Move A makes the contracts portable; Move C makes
them ergonomic for specific harnesses. Splitting the work lets v0.0.5 ship
without committing to a specific harness's file conventions.

### 7.6 — Naming: "Runtime Ports" or "Operating Layer" or "Harness Interface"?

**Recommendation: Runtime Ports.** Most precise. "Operating Layer" implies a
new methodological layer (it's not — it's an interface). "Harness Interface"
couples to one runtime concept. "Runtime Ports" is the right level of
abstraction — declarative, plural, integration-shaped.

## 8) Scope — what's in v0.0.5

**In scope:**
1. `PROTOCOL.md` §9 (new section) — Runtime Ports specification
2. Four new canonical artifacts added to §2 (Canonical Objects)
3. Phase 5 gate updated with port emission requirements
4. `facework.manifest.schema.json` extended with `runtime_ports` block and four
   port sub-schemas
5. `facework.manifest.yaml` updated as reference
6. `/fw-stability` and `/fw-flow` skills updated to emit ports
7. `/fw-coherence` skill updated to validate ports for handoff completeness
8. Worked example in `examples/face.works/runtime-ports/`
9. `bin/` validation extended for new schema sections
10. `CHANGELOG.md` entry
11. `VERSION` bump to 0.0.5

**Not in scope (deferred):**
- `HarnessBundle` markdown export (Move C, v0.0.6)
- `DesignInfrastructure` as active artifact (Move B, v0.0.7)
- Dashboard, observability, headless runners (not Facework's job)
- Artifact compression / consolidation (`TasteContract`+`DesignLanguageSpec`
  merge, `SovereigntyMap`+`ConsonanceCheck` merge) — deferred to v0.1.0
- Track-specific skeleton ports (defer to v0.0.6 once schema is settled)

## 9) Sequencing

1. **Lock open decisions** (§7) — confirm or override recommendations
2. **Draft four port artifact specs** — schema, fields, validators, examples
3. **Extend manifest schema** — `facework.manifest.schema.json` + reference
   `facework.manifest.yaml`
4. **Update `PROTOCOL.md`** — add §9, extend §2 canonical objects, extend
   Phase 5 gate, add cross-references in Phase 7 and Phase 8
5. **Update skills** — `/fw-stability`, `/fw-flow`, `/fw-coherence` learn to
   emit and validate ports
6. **Build worked example** — populate `examples/face.works/runtime-ports/`
   from existing Face.works artifacts
7. **Validation pass** — `bin/` checks the new schema; run against the example
8. **Document the boundary** — explicit treatment of MemoryMap vs runtime
   auto-memory in `PROTOCOL.md` §9 and `CLAUDE.md`
9. **CHANGELOG + VERSION bump**

## 10) What Move A unlocks

- **Move B (Design Infrastructure)** — has a port to land in. Active design
  validation becomes a callable Skill registered in `SkillManifest`.
- **Move C (HarnessBundle)** — has artifacts to bundle. Phase 8 packaging
  reformats the four port manifests into harness-native files (soul.md,
  identity.md, skills/, etc.).
- **Corey's runtime** — can ingest a Facework manifest directly. No bespoke
  bridge code.
- **Tenant portability** — a tenant can switch runtimes without rebuilding the
  underlying world.
- **Cross-tenant skill sharing** — tenants who use the same skill (e.g.
  "client-onboarding-doc") can publish/consume from a shared port.

## 11) Risks

- **Scope creep into Move C** — easy to start writing markdown exports while
  defining the YAML schema. Hold the line: v0.0.5 is YAML contracts only.
- **Schema overspecification** — declaring too many required fields per port
  before real-world tenants emit them. Default to a minimal required set,
  expand once we have ≥3 reference tenants.
- **Coupling to a specific MCP semantics** — `IntegrationManifest` should
  describe MCP-shaped connections without requiring MCP. Allow REST/CLI/file
  connections.
- **Boundary confusion** — MemoryMap vs runtime memory will get mixed up
  unless the protocol is explicit. §7.4 must be addressed in the spec text,
  not just in this plan.

## 12) Success criteria for v0.0.5

- A new Facework run produces all four port artifacts during Phase 5.
- `facework.manifest.yaml` validates against the extended schema.
- The `examples/face.works/runtime-ports/` example is complete and
  schema-valid.
- A test harness (could be a stub script in `bin/`) demonstrates ingesting the
  example manifest and listing the four ports' contents — proves the surface
  is consumable.
- `CHANGELOG.md` documents the addition as additive (no breaking changes for
  v0.0.4 conformers, but new SHOULD requirements for evidence-level Validated
  projects).

## 13) Open questions — RESOLVED 2026-05-12

1. **§7.1–§7.6 recommendations:** all six confirmed at recommended defaults
   (see §7 RESOLVED table above).
2. **Spec location:** **inline in `PROTOCOL.md` §9.** Threshold check passed —
   inline §9 came in at 255 lines, well under the 400-line trigger for
   extraction. The four `spec/runtime-ports/*.md` drafting files were deleted
   after §9 inlined — git history preserves them if recovery is ever needed.
   Single source of truth per layer: PROTOCOL.md §9 (prose) +
   `facework.manifest.schema.json` `$defs` (formal schema) +
   `examples/face.works/runtime-ports/*.yaml` (worked example).
3. **Corey review checkpoint:** scheduled **after Step 4** (skills update).
   Step 4 must complete and the worktree must be at a coherent stopping
   point before checkpoint #1 fires. Steps 5–6 do not start until Corey
   confirms the four-port shape matches his runtime's ingest model.
4. **GAMUT's role:** v0.0.5 **ships track-agnostic.** Per-track skeleton
   port manifests are GAMUT's responsibility, published in v0.0.6 alongside
   Move C's HarnessBundle. Facework's spec defines the `track` field;
   defaults are an external practice's contribution.

---

**Next step:** lock §7 decisions, then begin §9 step 1 (draft four port
artifact specs). Recommend doing the draft inside this worktree and shipping
v0.0.5 as one coherent PR.
