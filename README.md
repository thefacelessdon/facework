# FACEWORK

An open protocol for turning ideas into coherent, ownable, runtime-portable systems.

Facework declares what a coherent tenant world contains, exposes, and emits — through 8 lifecycle phases that produce 20 canonical artifacts, plus a runtime portability layer (manifest schema v1.4.0) that lets any agent harness ingest the result without rebuilding context. The methodology was developed building [GAMUT](https://github.com/thefacelessdon/GAMUT) and refined across multiple protocol runs including [HUE Unlimited](https://github.com/thefacelessdon/hue-unlimited).

---

## The Law

> Anything not coherent will eventually contradict itself.
> Anything that contradicts itself will eventually collapse.
> Facework makes collapse optional.

Coherence is hard. Systems that look coherent in design contradict themselves in operation. Systems coherent in operation lack the strategic clarity to scale. Strategy, taste, architecture, operations, and product all drift if no discipline maintains alignment across them.

The Facework Protocol is that discipline — and the contract surface for handing the coherent system to anyone, including a runtime that wasn't there when it was built.

---

## What Facework Is

**Facework is a protocol** — an open specification for how a coherent, ownable tenant world is built and exposed. Conforming projects produce:

- **20 canonical artifacts** spanning strategy, taste, architecture, operations, integrity, integration, runtime ports, harness bundle, and design infrastructure
- **Phase gates** marking each transition with explicit pass/fail evidence
- **Machine-readable manifests** validated by `bin/validate-manifest`
- **Runtime ports** any agent harness can ingest without rebuilding context
- **A handoff** that someone who wasn't in the room can pick up on Day 1

It is **not** a runtime, framework, template library, design system, or product. It declares; it does not implement at the runtime level. That separation is the deepest design choice in Facework — see [The Pattern](#the-pattern-declare-contracts-runtimes-implement) below.

Facework ships as:

- **[PROTOCOL.md](PROTOCOL.md)** — the open spec (lifecycle phases, canonical artifacts, gates, manifest schema)
- **12 protocol skills** (`/fw-*`) that operate the methodology
- **8 operating skills** that cut across phases (`/decision-log`, `/evidence-debug`, `/contract-sync`, `/mvp-cut`, `/beta-hardening`, `/scale-readiness`, `/launch-ops`, `/weekly-upgrade`)
- **A reference manifest** (`facework.manifest.yaml`) + **JSON Schema** (`facework.manifest.schema.json`)
- **A worked example** (`examples/face.works/`) — a complete agency/studio tenant world demonstrating every layer

---

## How It Works

### Eight Phases

The protocol runs in a canonical sequence. Each phase has a gate. No phase advances without explicit pass/fail evidence.

```
Phase 1  SEMANTICS      Detect project track, extract meaning, define canonical language
Phase 2  FIELD          Map social dynamics, incentives, attention flows
Phase 3  TASTE          Define quality governance + design language
                        → emits DesignInfrastructure (v1.3.0): tokens,
                          components, design-eye-evaluator Skill, examples
Phase 4  FREQUENCY      Extract the irreducible economic signal
         CURRENT        Lock direction, resolve strategic dilemmas
Phase 5  FLOW           Document operational workflows (playbooks)
         STABILITY      Specify architecture + CapabilityMap
                        → emits four Runtime Port manifests (v1.1.0):
                          Skills, Memory, Context, Connections
Phase 6  RESONANCE      Build working interfaces composed from declared capabilities
Phase 7  ENTROPY        Pressure test for structural weakness
         SOVEREIGNTY    Enforce ownership boundaries
         CONSONANCE     Verify cross-layer alignment
Phase 8  COHERENCE      Package handoff
                        → emits HarnessBundle (v1.2.0): markdown view for
                          file-based runtimes
                        → diagnostic scorecard + retro + methodology evolution
```

### The Operating Layer

The 8 phases produce a coherent tenant world. The operating layer **exposes** that world to any runtime — agent harnesses, file-based tools, custom runtimes. Same discipline as everywhere else in the protocol: declare contracts, runtimes implement.

| Layer | What it declares | Spec |
|---|---|---|
| **Four Runtime Ports** (v1.1.0) | `SkillManifest`, `MemoryMap`, `ContextManifest`, `IntegrationManifest` — YAML contracts any runtime ingests | [§9](PROTOCOL.md) |
| **HarnessBundle** (v1.2.0) | Markdown view (`soul.md` / `identity.md` / `purpose.md` / `memory.md` / `tools.md` / `boundary.md` / `skills/*.md`) for file-based runtimes | [§10](PROTOCOL.md) |
| **DesignInfrastructure** (v1.3.0) | Active design layer — LLM-callable tokens, primitives with machine-readable contract rules, design-eye-evaluator Skill, examples library | [§11](PROTOCOL.md) |
| **Observability Interface** (v1.4.0) | Minimum event surface every runtime emits (`skill.invoked`, `memory.write`, `cache.hit`, `verifier.run`, etc.) — transport is the runtime's call | [§12](PROTOCOL.md) |
| **Efficiency hints** (v1.4.0) | Optional declarations: cache affinity, load mode, intermediate outputs, compactable folders, model tier, advisor escalation, sensor/actuator scope | [§9 amendments](PROTOCOL.md) |

Conformance is **calibrated** — not uniform. `project.evidence_level` (Validated / Signaled / Thesis) scales the required port volume. `project.track` (Creator / Cultural Brand / Athlete / Agency-Studio / Platform-Product) scales which layers are mandatory. A thesis-level project doesn't produce validated-level artifact volume; a Cultural Brand MUST emit DesignInfrastructure while an Agency-Studio MAY defer it.

---

## The Pattern: Declare Contracts, Runtimes Implement

The deepest design choice in Facework is that it specifies **what** without specifying **how** at the runtime level. This pattern repeats at every layer:

- The protocol declares the **verifier pattern** (`verifier_skill_id` on any output-producing skill); a tenant picks a runtime that implements it. Impeccable's deterministic anti-pattern rules + LLM critique pass is one implementation. A hand-rolled review skill is another. The contract is the same.
- The protocol declares the **four port shapes** (Skills, Memory, Context, Connections); a tenant picks a runtime that ingests them. Corey's runtime, Open Claw, Glass-style internal tools — all different implementations of the same four-port contract.
- The protocol declares the **observability event surface** (`skill.invoked`, `memory.write`, `cache.hit`, `verifier.run`, ...); a tenant picks a transport. stdout, OpenTelemetry, custom HTTP sink, vendor dashboard — all valid.
- The protocol declares **design tokens as structured data**; a tenant picks a generator that consumes them. Style Dictionary, CSS-in-JS, a custom build script — all valid.

This is why Facework grows no runtime, no dashboard, no harness, no bundled design system. It declares surfaces; downstream tools own implementations.

**The corollary: the protocol owns the contract.** This explicitly includes the design contract — `/fw-taste` defines the quality bar, `/fw-resonance` builds from declared capabilities, and v1.3.0 DesignInfrastructure makes the TasteContract LLM-callable. Companion tools implement specific design moves; they don't define what good is.

---

## What You Get: 20 Canonical Artifacts

Every conforming Facework project produces these. Each is gated, each emitted by a specific phase, each cross-validated by `bin/validate-manifest`.

**Strategy + Taste** (Phases 1–4): `ProjectContext` · `EvidenceLevel` · `SignalThesis` · `AudienceFieldMap` · `TasteContract` · `DesignLanguageSpec` · `DecisionLedger` · `WedgeSpec`

**Architecture + Operations** (Phase 5): `WorkflowPlaybooks` · `SystemArchitecture` · `CapabilityMap` · `LaunchPlan`

**Integrity** (Phase 7): `SovereigntyMap` · `ConsonanceCheck`

**Integration** (Phase 8): `HandoffPackage` · `DiagnosticReport`

**Runtime Ports** (v1.1.0, Phase 5): `SkillManifest` · `MemoryMap` · `ContextManifest` · `IntegrationManifest`

**Operating Layer** (v1.2.0–v1.3.0): `HarnessBundle` · `DesignInfrastructure`

See [PROTOCOL.md §2](PROTOCOL.md) for the canonical list and the worked example at [examples/face.works/](examples/face.works/) for what each artifact looks like in practice.

---

## Commands (12 Protocol Skills)

| Command | Phase | What It Produces |
|---------|-------|-----------------|
| `/fw-semantics` | 1: Semantics | ProjectContext (track detection), signal thesis, canonical language, distortion risks, audience interpretation map |
| `/fw-field` | 2: Field | Field participant map, status/incentive model, adoption dynamics, extraction risk map |
| `/fw-taste` | 3: Taste | Taste contract, DESIGN.md (design language spec), quality rubric, anti-patterns, and (track-relevant) DesignInfrastructure — tokens, components, design-eye evaluator Skill, examples library |
| `/fw-frequency` | 4: Strategy Lock | Business model, rate structure, governance, agreements, exit guarantees, gates |
| `/fw-current` | 4: Strategy Lock | Dilemmas surfaced, decision records with reasoning, all contradictions resolved |
| `/fw-flow` | 5: Architecture & Flow | Operational playbooks — every workflow mapped to human/agent/hybrid ownership |
| `/fw-stability` | 5: Architecture & Flow | Architecture specs (schemas, state machines, data flows, edge cases) and the four Runtime Port manifests (Skills, Memory, Context, Connections) |
| `/fw-resonance` | 6: Activation | Working interfaces composed from declared capabilities, demo data, typed schema, test suite |
| `/fw-entropy` | 7: Integrity | Pressure test, failure mode analysis, implementation specs, critical gap fixes |
| `/fw-sovereignty` | 7: Integrity | Ownership/control matrix, dependency risk tiers, exit audit, sovereignty requirements |
| `/fw-consonance` | 7: Integrity | Cross-layer alignment check, contradiction register, stakeholder consonance |
| `/fw-coherence` | 8: Integration | README, review brief, project tracker, engineering guide, HarnessBundle (markdown view of runtime ports), clean repo, coherence scorecard, diagnostic retro |

---

## The Loop

```
/fw-semantics → /fw-field → /fw-taste
Detect track +   Map social physics   Set quality bar + DESIGN.md
extract meaning                       + DesignInfrastructure (v1.3.0)

/fw-frequency → /fw-current
Extract signal    Lock direction

/fw-flow → /fw-stability
Design operations  Build architecture + CapabilityMap
                   + four Runtime Port manifests (v1.1.0)

/fw-resonance → /fw-entropy → /fw-sovereignty → /fw-consonance
Build interfaces  Pressure test   Ownership audit   Alignment check

/fw-coherence
Package handoff + HarnessBundle (v1.2.0) + diagnostic
         ↓
methodology evolves
         ↓
next project starts from updated system
```

Every project makes the practice better. Every retro is a version bump.

---

## Companion Tooling

**Facework owns the design contract** — `/fw-taste` defines quality governance, design language, and (v1.3.0) the active DesignInfrastructure layer; `/fw-resonance` builds from declared capabilities; v1.4.0 generalizes the verifier pattern any output-producing skill can declare. The protocol does the foundational design work.

Companion tools are **optional accelerators** that consume or extend the protocol's contracts. A Facework project can ship coherent without either of them. They install as Claude Code skills alongside Facework and work independently.

### gstack — Workflow accelerators

[github.com/garrytan/gstack](https://github.com/garrytan/gstack) provides 23 opinionated tools that serve as CEO, Designer, Eng Manager, Release Manager, Doc Engineer, and QA. The Facework-aligned ones:

| gstack Skill | Facework Phase | Role |
|---|---|---|
| `/plan-ceo-review` | Frequency, Current | Challenges assumptions, finds the 10-star product, forces decisions |
| `/plan-eng-review` | Stability, Entropy | Locks architecture, data flow, failure modes, test coverage |
| `/design-consultation` | Resonance | Establishes design system — typography, color, spacing, motion — before building interfaces |
| `/design-shotgun` | Taste, Resonance | Generates multiple AI design variants, opens a comparison board, collects structured feedback before committing to one direction |
| `/design-html` | Resonance | Design finalization — produces production-quality Pretext-native HTML/CSS that reflows dynamically |
| `/plan-design-review` | Resonance, Entropy | Designer's eye review of a design plan before implementation — pre-build rating per design dimension |
| `/qa-design-review` | Resonance, Entropy | Build-time designer's eye QA with iterative fix loop |
| `/design-review` | Resonance, Entropy | Live-site designer's eye audit — visual inconsistency, spacing, hierarchy, AI slop patterns, iteratively fixed |
| `/review` | Entropy | Pre-landing structural review — race conditions, trust boundaries, missing invariants |
| `/qa` | Entropy | Systematic QA against running interfaces — health score, screenshots, repro steps |
| `/browse` | Resonance, Entropy | Gives the agent eyes — navigate, click, screenshot, verify live interfaces |
| `/retro` | Diagnostic | Engineering retrospective — commit analysis, work patterns, team breakdown |
| `/ship` | Coherence | Sync main, run tests, push, open PR — the last mile |
| `/document-release` | Coherence | Post-ship doc update — syncs README, CHANGELOG, and guides |

See gstack's [README](https://github.com/garrytan/gstack) for the full catalog (some additional skills not Facework-aligned).

### Impeccable — A runtime for the design-eye-evaluator contract

[github.com/pbakaus/impeccable](https://github.com/pbakaus/impeccable) is a Claude Code skill engineered against the SaaS aesthetic mimicry problem — the same drift Facework's TasteContract calls out as off-brand. It provides 7 domain reference files (typography / color / motion / spatial / interaction / responsive / UX writing), 23 commands (`polish`, `audit`, `critique`, `distill`, `animate`, `bolder`, `quieter`, ...), 27 deterministic anti-pattern rules, and a 12-rule LLM critique pass.

**Impeccable is a concrete runtime for Facework's design-eye-evaluator contract.** Facework v1.3.0 declares the evaluator Skill shape; v1.4.0 generalizes the verifier pattern via `verifier_skill_id`. Impeccable's deterministic rules + LLM critique are one implementation of that verifier. Its `extract` mode pulls components and tokens into the structured format DesignInfrastructure declares.

| Impeccable mode | Facework phase / artifact | Role |
|---|---|---|
| `teach` (design context setup) | Phase 3 Taste — DESIGN.md generation | Bootstrap project design vocabulary against curated references |
| `craft` (shape-then-build) | Phase 6 Resonance — working interfaces | Build interfaces with high design quality, avoiding the SaaS register the TasteContract rejects |
| `extract` (pull components + tokens) | v1.3.0 DesignInfrastructure | Extract reusable components and tokens — feeds directly into `tokens.json` / `components.yaml` / examples library |

See [impeccable.style](https://impeccable.style) for ready-to-use bundles.

---

## Quickstart

**Prerequisites:** Git, Node.js (v20+), [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview) (`npm install -g @anthropic-ai/claude-code`)

```bash
git clone https://github.com/thefacelessdon/facework.git
cd facework
./install.sh
```

This symlinks the 12 protocol skills and 8 operating skills into your Claude Code environment.

Open Claude Code in your project directory and start the protocol:

```bash
cd ~/projects/your-project
claude
```

```
/fw-semantics
```

It reads what exists, detects your project track, and begins extracting meaning. Chain through all 8 phases to a fully coherent system with runtime ports, harness bundle, and (track-relevant) design infrastructure ready for handoff.

> **New to the terminal?** See the full [Setup Guide](SETUP.md) — covers everything from opening a terminal to configuring Git, GitHub, and Claude Code from scratch.

---

## Go Deeper

1. **[Protocol Spec](PROTOCOL.md)** — lifecycle phases, canonical artifacts, gates, manifest schema 1.4.0, §9 Runtime Ports, §10 HarnessBundle, §11 DesignInfrastructure, §12 Observability Interface
2. **[The Theory of Cultural Physics](theories/cultural-physics.md)** — why coherence matters, the extraction pattern, the governing equation
3. **[The Coherence Operating System](theories/the-coherence-operating-system.md)** — the 12 primitives, engines, and how they operate inside the build
4. **[Build Methodology](methodology/build-methodology.md)** — the GAMUT case study that validated the methodology
5. **[Roadmap](ROADMAP.md)** — versioning rules, version history, criteria for 0.1.0 and 1.0.0
6. **[Compliance v1](COMPLIANCE.md)** — scoring rubric for protocol adherence
7. **[Certification](CERTIFICATION.md)** — eligibility for the "Powered by Facework" claim

---

## What This Is Not

Not a project management tool. Not a template library. Not a framework you adopt and follow. Not a design system. Not a runtime.

It is a **coherence practice** — a discipline for maintaining structural alignment across strategy, taste, architecture, operations, and product. The methodology operates the practice. The commands execute it. The diagnostic evolves it.

Build the architecture, and the identity will make itself known.

---

*FACEWORK: A Coherence Practice™ — [face.works](https://face.works)*
