# Operating Layer Plan — v0.0.5 through v0.0.7

Status: Draft
Working title: open to renaming (alternates considered: `RUNTIME-INTERFACE-PLAN.md`, `PORTABILITY-PLAN.md`)
Author session: 2026-05-12
Folds into: `PROTOCOL.md` §9–§11 over three releases; this plan is retired once v0.0.7 ships.

This is the strategic umbrella. Detailed execution plans live in companion docs:
- v0.0.5 detail: [RUNTIME-PORTS-PLAN.md](RUNTIME-PORTS-PLAN.md)
- v0.0.6 detail: `HARNESS-BUNDLE-PLAN.md` (to be drafted before v0.0.6 starts)
- v0.0.7 detail: `DESIGN-INFRASTRUCTURE-PLAN.md` (to be drafted before v0.0.7 starts)

---

## 1) The reframe — Facework is interface, not runtime

Three things now exist in the operator stack and they should stay distinct:

| Layer | Owned by | Role |
|---|---|---|
| **Practice** | GAMUT | The methodology that builds a tenant's world — strategy, taste, architecture, operations |
| **Protocol** | Facework | The open spec that declares what a coherent tenant world *contains* and *exposes* |
| **Runtime** | Corey's build (and others) | The intelligence layer that operates the tenant world |

Until now, Facework has produced methodology artifacts — `SignalThesis`,
`TasteContract`, `WorkflowPlaybooks`, `CapabilityMap`. These are good for humans
and good for governance. They are *not* good for runtimes, because no runtime
knows where to plug in.

The reframe: **Facework's improvement vector is portability.** The job is to
declare the ports any runtime can ingest — not to grow a runtime, not to add a
dashboard, not to ship a harness. If the protocol exposes the right ports, any
runtime can operate the tenant world.

This changes the entire improvement frame. Instead of asking "what should the
protocol grow into?", the question is now "what is the protocol's contract with
the runtimes that consume it?"

## 2) The canonical port spec — Meng's four-layer model

Adopted from independent research evidence (three sources converge on the
same shape):

> **Skills, Memory, Context, Connections.**
> Skills = repeatable workflows. Memory = long-term across sessions.
> Context = what the agent sees in this session. Connections = the tools it can reach.

- Meng (Brian Lovin / Toolbenders) explicitly declares these four as the
  layers that "hold the whole thing together."
- Diego (Ramp / Glass) describes building "knowledge, learning, rituals, soul,
  a heartbeat, a purpose" as the soft infrastructure of an installed harness —
  which decomposes cleanly across the four layers.
- Chase (Agentic OS) frames the architecture as "domains → tasks → skills →
  automations" — Facework's existing `WorkflowPlaybooks` + `CapabilityMap`,
  exposed via the Skills port.

The four ports are the canonical Facework port spec. Every runtime ingests
them. Every conforming Facework project emits them.

## 3) The three moves — what we ship across three releases

**Sequencing rationale:** A is the foundation (no port = nothing to plug into).
C is what Corey's runtime actually consumes (markdown bundle for harness
ingest). B is the design axis that lands as a Skill inside the Skills port — so
A must exist first.

| Move | Release | What ships | Why this order |
|---|---|---|---|
| **A** — Declare the four ports | v0.0.5 | Four new canonical artifacts: `SkillManifest`, `MemoryMap`, `ContextManifest`, `IntegrationManifest`. Manifest schema extension. Worked example. | Foundation. Without ports, B and C have nothing to land in. |
| **C** — HarnessBundle export | v0.0.6 | Phase 8 packaging that reformats the four port artifacts as harness-native markdown (`soul.md`, `identity.md`, `skills/`, `memory.md`, `tools.md`, `CLAUDE.md`). Track-aware skeletons. | This is what Corey's runtime consumes directly. Highest external leverage once A is real. |
| **B** — DesignInfrastructure as active artifact | v0.0.7 | Phase 3 (Taste) extended: `TasteContract` becomes LLM-callable. Design tokens as structured data, component primitives that pass the contract by construction, a "design eye" evaluator Skill registered in `SkillManifest`. | The design axis (Diego's insight). Lands as a Skill, so requires A. Higher craft cost; ship after C proves the runtime loop. |

Compression decisions (`TasteContract` + `DesignLanguageSpec` consolidation,
`SovereigntyMap` + `ConsonanceCheck` consolidation, artifact-count reduction)
are **deferred to v0.1.0** — see §7.

## 4) Move A (v0.0.5) — Declare the four ports

**Goal:** every conforming Facework project emits a YAML port declaration any
runtime can ingest.

**Scope summary** (full detail in [RUNTIME-PORTS-PLAN.md](RUNTIME-PORTS-PLAN.md)):
1. Four new canonical artifacts added to `PROTOCOL.md` §2
2. New `PROTOCOL.md` §9 — Runtime Ports
3. `facework.manifest.schema.json` extended with `runtime_ports` block
4. Phase 5 gate extended — port emission required
5. `/fw-stability`, `/fw-flow`, `/fw-coherence` updated to emit/validate
6. Worked example at `examples/face.works/runtime-ports/`
7. `bin/` validation extended
8. CHANGELOG + VERSION bump

**Conformance:** SHOULD in v0.0.5, calibrated by evidence level (validated
projects MUST, signaled SHOULD, thesis MAY). Upgrade to universal MUST in v0.1.0.

**Effort:** ~1 worktree, ~3–5 days for spec + schema + skill updates + example.
Mostly declarative work — schemas and reference content from existing artifacts.

**Done when:** the Face.works example emits all four port artifacts and the
manifest validates against the extended schema.

## 5) Move C (v0.0.6) — HarnessBundle export

**Goal:** any runtime (Corey's, Open Claw, Glass-style internal tool) can
ingest a Facework project as harness-native files without bespoke bridge code.

**Scope summary** (full detail to be drafted in `HARNESS-BUNDLE-PLAN.md`):

1. New canonical artifact: `HarnessBundle` — added to `PROTOCOL.md` §2
2. New `PROTOCOL.md` §10 — HarnessBundle packaging
3. Phase 8 gate extended — bundle emission required for handoff
4. Bundle format:
   ```
   harness-bundle/
   ├── soul.md          ← SignalThesis + TasteContract + Frequency (DecisionLedger)
   ├── identity.md      ← ProjectContext (track, audience, phase emphasis)
   ├── purpose.md       ← Current (DecisionLedger) + WedgeSpec
   ├── skills/          ← SkillManifest exploded to per-skill files
   ├── memory.md        ← MemoryMap as navigation contract
   ├── tools.md         ← IntegrationManifest as tool wiring guide
   ├── boundary.md      ← MemoryMap-vs-runtime-memory rules (avoids "one system of record" collision)
   └── CLAUDE.md        ← top-level navigation for the bundle
   ```
5. Track-aware skeleton bundles for the five tracks (Creator, Cultural Brand,
   Athlete, Agency/Studio, Platform/Product) — one starter bundle per track
6. `/fw-coherence` extended to emit the bundle
7. Worked example: `examples/face.works/harness-bundle/`
8. Reference ingestion test: stub runtime in `bin/` that ingests the bundle
   and reports back what it sees

**Conformance:** SHOULD for Validated projects; OPTIONAL otherwise.

**Effort:** ~1 worktree, ~4–6 days. Higher craft cost than Move A because the
markdown templates need to be actually readable and useful, not just
schema-valid.

**Done when:** the Face.works bundle ingests cleanly into Corey's runtime
(or stub runtime if Corey's isn't accessible) and a tenant operator can
operate the world from the bundle alone.

**Decision gate before v0.0.6 starts:** Corey reviews v0.0.5 manifest schema
and confirms the bundle format hits his runtime's actual ingest expectations.
We do not draft `HARNESS-BUNDLE-PLAN.md` until this review happens.

## 6) Move B (v0.0.7) — DesignInfrastructure as active artifact

**Goal:** non-designers in a Facework-conformant tenant world can ship
brand-coherent output because the design system is callable, not descriptive.

**Scope summary** (full detail to be drafted in `DESIGN-INFRASTRUCTURE-PLAN.md`):

1. New canonical artifact: `DesignInfrastructure` — added to `PROTOCOL.md` §2
2. Extend Phase 3 (Taste) gate — currently produces `TasteContract` +
   `DesignLanguageSpec`; now also produces `DesignInfrastructure`
3. Components of `DesignInfrastructure`:
   - **Tokens-as-data** — design tokens in structured JSON/YAML (not just
     descriptive prose in DESIGN.md)
   - **Component primitives** — minimum viable set that pass the
     `TasteContract` by construction (typography, color, grid, motion)
   - **Design eye evaluator** — Skill registered in `SkillManifest` that
     takes an output and returns pass/fail with feedback grounded in the
     `TasteContract`
   - **Examples + anti-examples** — in a format LLMs can reference
4. The evaluator becomes a callable Skill — any runtime invokes it as gate
   before shipping output (this is why Move A must come first)
5. `/fw-taste` extended to emit `DesignInfrastructure` alongside existing
   artifacts
6. Reference implementation in `examples/face.works/design-infrastructure/`

**Conformance:** SHOULD for Validated projects in Creator / Cultural Brand /
Athlete tracks (where design is brand-load-bearing). OPTIONAL for Agency /
Platform tracks unless the tenant declares brand sensitivity.

**Effort:** ~1 worktree, ~5–8 days. Highest craft cost of the three moves —
the evaluator Skill needs taste-grounded prompts and worked test cases.

**Done when:** a non-designer using the Face.works tenant world can generate
new content (post, page, asset) and the design eye Skill gates it against
`TasteContract`, producing not-brand-destructive output as Diego describes
in the Ramp design infrastructure pattern.

**Decision gate before v0.0.7 starts:** v0.0.6 bundle has been ingested by
at least one external runtime and the round-trip works. Move B is
nice-to-have until the runtime loop is proven.

## 7) Compression decisions — deferred to v0.1.0

The current canonical object list has 16 artifacts. Some compression is
warranted but not yet:

| Candidate compression | Rationale to do it | Rationale to defer |
|---|---|---|
| `TasteContract` + `DesignLanguageSpec` → unified `TasteSystem` | Both are Phase 3 outputs; overlap in surface | Move B will reshape both significantly; consolidate after, not before |
| `SovereigntyMap` + `ConsonanceCheck` → unified `IntegrityReport` | Both are Phase 7 outputs; same audience | Move A's Connections port pulls from `SovereigntyMap`; rename after port-side stabilizes |
| `WorkflowPlaybooks` + `CapabilityMap` boundary clarification | Operational vs declarative overlap | Move A's Skills port pulls from both; clarify boundary only after we see how Skills evolves |

**Decision rule:** do not compress until three reference tenants have run
through v0.0.7. Premature consolidation hides which artifacts are actually
load-bearing for runtimes. v0.1.0 is the consolidation release once we have
real-world signal.

## 8) Cross-cutting decisions

### 8.1 Naming

- Plan documents use action-shaped names: `RUNTIME-PORTS-PLAN`,
  `HARNESS-BUNDLE-PLAN`, `DESIGN-INFRASTRUCTURE-PLAN`. They retire when the
  spec section they describe ships.
- Spec sections in `PROTOCOL.md` use noun phrases: `§9 Runtime Ports`,
  `§10 HarnessBundle`, `§11 Design Infrastructure`.
- "Operating Layer" stays as the umbrella concept; this doc keeps the working
  title unless a better one emerges in review.

### 8.2 GAMUT's role

GAMUT publishes track-specific skeleton bundles in Move C (v0.0.6). Facework
stays track-agnostic in the spec — only the example output is opinionated.
This preserves Facework's open-protocol identity while letting GAMUT ship the
build practice with concrete defaults.

### 8.3 Corey review checkpoints

Three checkpoints, all gating. Scheduled precisely:

1. **At GAMUT port-over** — Facework v0.0.5 ships end-to-end (Steps 1–6) on
   its own trajectory. The Corey review fires when GAMUT ports the v0.0.5
   spec, schema, and example into Corey's runtime — that's the first
   real-world ingest test. Any required spec adjustments flow back as a
   v0.0.5 patch release.
2. **Before v0.0.6 starts** — review the proposed `HarnessBundle` markdown
   layout (`soul.md` / `identity.md` / `skills/`). Confirm it matches what
   his runtime actually reads file-by-file.
3. **After v0.0.6 ships** — ingest the Face.works bundle into Corey's live
   runtime. Confirm round-trip works (ports → bundle → runtime → operational
   tenant world) before Move B (v0.0.7 DesignInfrastructure) starts.

### 8.4 Conformance evolution

- v0.0.4 conformers remain conformant. No breaking changes through v0.0.7.
- v0.0.5 adds SHOULD requirements (evidence-level calibrated).
- v0.0.6 adds SHOULD for Validated projects on HarnessBundle.
- v0.0.7 adds SHOULD for track-relevant projects on DesignInfrastructure.
- v0.1.0 upgrades select SHOULDs to MUSTs, consolidates artifacts.

### 8.5 The "one system of record" boundary

`MemoryMap` describes the **tenant world's** memory layer (vault, capture,
knowledge base). It does not displace Claude's runtime-level auto-memory at
`~/.claude/projects/<cwd>/memory/`. Both exist; they serve different consumers.

Every Facework conforming project MUST emit a `boundary.md` (added in v0.0.6
HarnessBundle) that names this distinction so runtime + tenant memory do not
compete. This is explicitly called out in `PROTOCOL.md` §9 and reiterated in
the boundary doc. See [RUNTIME-PORTS-PLAN.md §7.4](RUNTIME-PORTS-PLAN.md) for
the dilemma's resolution.

## 9) Strategic risks

- **Runtime coupling.** Even though Move C produces a "harness-native" bundle,
  the markdown shape could quietly couple to one runtime's conventions
  (Open Claw's, Corey's, Glass's). Mitigation: validate against ≥2 runtimes
  before v0.0.6 ships.
- **Specification drift from real tenant use.** Move A could over-specify port
  fields before tenants emit them. Mitigation: minimal required sets;
  expand once we have 3+ reference tenants.
- **Design infrastructure scope explosion.** Move B can grow into a full
  design system product. Mitigation: hold scope to "evaluator Skill +
  primitives sufficient to pass `TasteContract`" — not a comprehensive design
  system.
- **Compression timing miscall.** Compressing too early hides load-bearing
  distinctions; compressing too late accumulates protocol bloat. Mitigation:
  three-tenant rule gates v0.1.0 consolidation.
- **Methodology identity drift.** Facework risks becoming a "tools spec"
  instead of a methodology with tools. Mitigation: keep PROTOCOL.md's
  Phases 1–8 governance language intact; ports are *outputs* of phases,
  not replacements for them.

## 10) Success criteria — the operating layer at v0.0.7

A tenant who runs Facework through Phase 8 emits a manifest where:

- Four port artifacts validate against the extended schema (Move A)
- A `HarnessBundle/` packages the world as harness-native markdown (Move C)
- A `DesignInfrastructure` evaluator Skill is registered and callable (Move B)

And operationally:

- Any runtime that supports the four-port interface ingests the manifest and
  operates the world without bespoke bridge code
- A tenant can switch from runtime X to runtime Y without rebuilding the
  underlying world
- A non-designer in the tenant world ships content the design-eye Skill
  gates as on-brand
- The handoff packet a client receives at Phase 8 is no longer just a
  README + docs — it is an operational system any operator can run

## 11) Sequencing and parallelism

The three moves are **mostly sequential** with two parallelism opportunities:

```
v0.0.5 (Move A)
   │
   ├─→ Corey review checkpoint #1 ───┐
   │                                  │
   └─→ HARNESS-BUNDLE-PLAN.md draft ←─┘    ← parallel with v0.0.5 wrap-up
            │
            ▼
v0.0.6 (Move C)
   │
   ├─→ Corey review checkpoint #2 + #3 ──┐
   │                                       │
   └─→ DESIGN-INFRASTRUCTURE-PLAN.md ←────┘  ← parallel with v0.0.6 wrap-up
            │
            ▼
v0.0.7 (Move B)
   │
   └─→ v0.1.0 compression decisions (after 3+ reference tenants)
```

Inside each move, work *is* parallelizable — schema + spec + skill update +
example can be drafted concurrently as long as they reconcile at integration.
See per-move execution plans for in-move parallelism detail.

## 12) Immediate next step

1. ✅ Umbrella plan drafted (this doc)
2. ✅ v0.0.5 execution plan drafted ([RUNTIME-PORTS-PLAN.md](RUNTIME-PORTS-PLAN.md))
3. ⏳ Lock §7 decisions in [RUNTIME-PORTS-PLAN.md](RUNTIME-PORTS-PLAN.md) (six open dilemmas with recommendations)
4. ⏳ Begin v0.0.5 implementation per the locked plan
5. ⏳ Schedule Corey review checkpoint #1 mid-implementation

**Recommended next move:** confirm the six §7 dilemma resolutions in
[RUNTIME-PORTS-PLAN.md](RUNTIME-PORTS-PLAN.md) (or call out overrides), then
proceed to step 1 of the v0.0.5 sequencing — draft the four port artifact
specs.

---

## Appendix A — How this maps to the prior research

| Research source | Contribution | Lands in |
|---|---|---|
| Chase (Agentic OS) | Domains → tasks → skills → automations frame; observability as separable layer | Skills port (Move A); explicit "runtime ≠ Facework" boundary |
| Meng (Brian Lovin / Toolbenders) | Four-layer model (Skills, Memory, Context, Connections); soul/identity/tools markdown file pattern | Canonical port spec (Move A); HarnessBundle format (Move C) |
| Diego (Ramp / Glass) | Design infrastructure as active system, not governance doc; soul/heartbeat/rituals/purpose framing | DesignInfrastructure artifact (Move B); HarnessBundle soul.md content (Move C) |

## Appendix B — Out of scope

Explicitly *not* shipped by this plan, in any of the three releases:

- A Facework-native dashboard or observability UI
- A Facework-native runtime or harness
- Per-runtime adapter code (each runtime adapts to the spec, not the reverse)
- A skill marketplace or cross-tenant skill registry
- Telemetry, usage tracking, or run logging

These belong to runtimes (Corey's, others). Facework specifies the surface;
runtimes implement the operator experience.
