# FACEWORK

An open protocol for turning ideas into coherent, ownable systems — and exposing them to any runtime.

Facework is 12 primitives (forces that govern coherence), an 8-phase build methodology, a runtime portability layer (v1.4.0 manifest schema), and a set of Claude Code skills that take a project from zero to fully architected, spec'd, handoff-ready — with working interfaces and declarative ports any agent harness can ingest. The methodology was developed building [GAMUT](https://github.com/thefacelessdon/GAMUT) and refined across multiple protocol runs including [HUE Unlimited](https://github.com/thefacelessdon/hue-unlimited).

---

## What It Does

- **Detects your project track** — Creator, Cultural Brand, Athlete/Public Figure, Agency/Studio, or Platform/Product — and tailors every phase to it.
- **Produces canonical artifacts** — 20 of them, including strategy docs, architecture specs, decision records, operational playbooks, sovereignty maps, and v1.1.0+ runtime ports — each gated before the next phase begins.
- **Builds working interfaces** from declared capabilities, not generic prototypes.
- **Exposes runtime ports** for any agent harness — four declarative YAML manifests (Skills, Memory, Context, Connections) plus a markdown bundle for file-based runtimes. The tenant world becomes portable across runtimes without rebuilding context.
- **Closes with a diagnostic** that evolves the methodology itself. Every project makes the practice better.

The law underneath: anything not coherent will eventually contradict itself. Anything that contradicts itself will eventually collapse. Facework makes collapse optional.

---

## Quickstart

**Prerequisites:** Git, Node.js (v20+), [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview) (`npm install -g @anthropic-ai/claude-code`)

```bash
git clone https://github.com/thefacelessdon/facework.git
cd facework
./install.sh
```

This symlinks 12 protocol skills and 8 operating skills into your Claude Code environment.

Now open Claude Code in your project directory and start the protocol:

```bash
cd ~/projects/your-project
claude
```

```
/fw-semantics
```

It reads what exists, detects your project track, and begins extracting meaning. Chain through all 8 phases to a fully coherent system.

> **New to the terminal?** See the full [Setup Guide](SETUP.md) — covers everything from opening a terminal to configuring Git, GitHub, and Claude Code from scratch.

---

## The Primitive Stack

Twelve primitives across eight phases. Phase 1 detects the project track and extracts meaning. The final phase closes with a diagnostic that evolves the practice.

```
Phase 1  SEMANTICS      Detect track, extract meaning, define canonical language
Phase 2  FIELD          Map social dynamics and adoption physics
Phase 3  TASTE          Set quality governance + design language
Phase 4  FREQUENCY      Extract the irreducible economic signal
         CURRENT        Establish direction, resolve contradictions
Phase 5  FLOW           Design adaptive behavior (playbooks)
         STABILITY      Build the architectural foundation (specs + CapabilityMap)
Phase 6  RESONANCE      Build working interfaces from declared capabilities
Phase 7  ENTROPY        Reveal structural weakness
         SOVEREIGNTY    Enforce ownership boundaries
         CONSONANCE     Verify cross-layer alignment
Phase 8  COHERENCE      Integrate into a unified whole + diagnostic
```

---

## The Operating Layer (v1.4.0 manifest schema)

The 8 phases produce a coherent tenant world. The Operating Layer makes that world **portable to any runtime** — agent harnesses, file-based tools, custom runtimes. Facework declares the interface; runtimes implement.

Four runtime ports declared in YAML:

| Port | Artifact | Declares |
|---|---|---|
| Skills | `SkillManifest` | Every callable workflow with sponsors, verifier, multiplayer, model tier |
| Memory | `MemoryMap` | Vault structure + indexing + retention + boundary against runtime memory |
| Context | `ContextManifest` | What each skill loads at session start (soul / identity / purpose bundles) |
| Connections | `IntegrationManifest` | External tools with auth, trust boundary, sensors/actuators |

Three derived layers:

- **HarnessBundle** — markdown view (`soul.md` / `identity.md` / `purpose.md` / `skills/` / `memory.md` / `tools.md` / `boundary.md`) for file-based runtimes that ingest directories instead of YAML.
- **DesignInfrastructure** — LLM-callable design layer: structured design tokens, component primitives with machine-readable contract rules, a `design-eye-evaluator` Skill that gates output against the TasteContract, plus an examples library.
- **Observability Interface (PROTOCOL.md §12)** — minimum event surface any v1.4.0 runtime emits (`skill.invoked`, `memory.write`, `cache.hit`, `verifier.run`, etc.). The protocol declares the events; runtimes pick the transport.

**Conformance is calibrated** — Validated-evidence projects MUST emit all four ports; Signaled SHOULD; Thesis MAY emit a minimal SkillManifest only. DesignInfrastructure is track-aware (Cultural Brand MUST, Creator/Athlete/Platform SHOULD, Agency/Studio MAY).

The pattern: **protocol declares properties, runtimes implement.** A tenant world built through the 8 phases can be operated by Corey's runtime, Open Claw, Glass-style internal tools, or any harness that supports the four-port interface.

See [PROTOCOL.md](PROTOCOL.md) §9 (Runtime Ports), §10 (HarnessBundle), §11 (DesignInfrastructure), §12 (Observability Interface), and the worked example at [examples/face.works/](examples/face.works/) — a complete agency/studio tenant world demonstrating every layer.

---

## Commands

| Command | Phase | What It Produces |
|---------|-------|-----------------|
| `/fw-semantics` | 1: Semantics | ProjectContext (track detection), signal thesis, canonical language, distortion risks, audience interpretation map |
| `/fw-field` | 2: Field | Field participant map, status/incentive model, adoption dynamics, extraction risk map |
| `/fw-taste` | 3: Taste | Taste contract, DESIGN.md (design language spec), quality rubric, anti-patterns, and (track-relevant) DesignInfrastructure — tokens, components, design-eye evaluator, examples library |
| `/fw-frequency` | 4: Strategy Lock | Business model, rate structure, governance, agreements, exit guarantees, gates |
| `/fw-current` | 4: Strategy Lock | Dilemmas surfaced, decision records with reasoning, all contradictions resolved |
| `/fw-flow` | 5: Architecture & Flow | Operational playbooks — every workflow mapped to human/agent ownership |
| `/fw-stability` | 5: Architecture & Flow | Architecture specs — schemas, state machines, data flows, edge cases — and the four Runtime Port manifests (Skills, Memory, Context, Connections) |
| `/fw-resonance` | 6: Activation | Working interfaces composed from declared capabilities, demo data, typed schema, test suite |
| `/fw-entropy` | 7: Integrity | Pressure test, failure mode analysis, implementation specs, critical gap fixes |
| `/fw-sovereignty` | 7: Integrity | Ownership/control matrix, dependency risk tiers, exit audit, sovereignty requirements |
| `/fw-consonance` | 7: Integrity | Cross-layer alignment check, contradiction register, stakeholder consonance |
| `/fw-coherence` | 8: Integration | README, review brief, project tracker, engineering guide, HarnessBundle (markdown view of runtime ports), clean repo, coherence scorecard, diagnostic retro |

---

## The Loop

```
/fw-semantics → /fw-field → /fw-taste
Detect track +    Map social physics   Set quality bar + DESIGN.md
extract meaning

/fw-frequency → /fw-current
Extract signal    Lock direction

/fw-flow → /fw-stability
Design operations   Build architecture + CapabilityMap

/fw-resonance → /fw-entropy → /fw-sovereignty → /fw-consonance
Build interfaces   Pressure test   Ownership audit   Alignment check

/fw-coherence
Package handoff + diagnostic
         ↓
methodology evolves
         ↓
next project starts
from updated system
```

Every project makes the practice better. Every retro is a version bump.

---

## Go Deeper

1. **[The Theory of Cultural Physics](theories/cultural-physics.md)** — why coherence matters, the extraction pattern, the governing equation
2. **[The Coherence Operating System](theories/the-coherence-operating-system.md)** — the 12 primitives, engines, and how they operate inside the build
3. **[Build Methodology](methodology/build-methodology.md)** — the GAMUT case study that validated the methodology
4. **[Protocol Spec](PROTOCOL.md)** — lifecycle phases, required artifacts, pass/fail gates, manifest schema

---

## Companion Tooling

Facework pairs with [gstack](https://github.com/garrytan/gstack) for review, design, QA, and shipping, and with [Impeccable](https://github.com/pbakaus/impeccable) for design-language enforcement. All three install as Claude Code skills and work independently — Facework doesn't require either companion, but the methodology was developed using all three.

### gstack — Review, design, QA, ship

| gstack Skill | Facework Phase | Role |
|---|---|---|
| `/plan-ceo-review` | Frequency, Current | Challenges assumptions, finds the 10-star product, forces decisions |
| `/plan-eng-review` | Stability, Entropy | Locks architecture, data flow, failure modes, test coverage |
| `/design-consultation` | Resonance | Establishes design system — typography, color, spacing, motion — before building interfaces |
| `/design-shotgun` | Taste, Resonance | Generates multiple AI design variants, opens a comparison board, collects structured feedback before committing to one direction |
| `/design-html` | Resonance | Design finalization — produces production-quality Pretext-native HTML/CSS that reflows dynamically (smart API routing per design type) |
| `/plan-design-review` | Resonance, Entropy | Designer's eye review of a design plan before implementation — pre-build rating across each design dimension |
| `/qa-design-review` | Resonance, Entropy | Build-time designer's eye QA with iterative fix loop — screenshots before/after |
| `/design-review` | Resonance, Entropy | Live-site designer's eye audit — visual inconsistency, spacing, hierarchy, AI slop patterns, iteratively fixed and re-verified |
| `/review` | Entropy | Pre-landing structural review — race conditions, trust boundaries, missing invariants |
| `/qa` | Entropy | Systematic QA against running interfaces — health score, screenshots, repro steps |
| `/browse` | Resonance, Entropy | Gives the agent eyes — navigate, click, screenshot, verify live interfaces |
| `/retro` | Diagnostic | Engineering retrospective — commit analysis, work patterns, team breakdown |
| `/ship` | Coherence | Sync main, run tests, push, open PR — the last mile |
| `/document-release` | Coherence | Post-ship doc update — syncs README, CHANGELOG, and guides to match what shipped |

See gstack's [README](https://github.com/garrytan/gstack) for the full skill catalog and install instructions.

### Impeccable — Design language layer

[Impeccable](https://github.com/pbakaus/impeccable) ("the design language that makes your AI harness better at design") is a Claude Code skill engineered specifically against the SaaS aesthetic mimicry problem — the same drift Facework's TasteContract calls out as off-brand. It provides 7 domain reference files (typography / color / motion / spatial / interaction / responsive / UX writing), 23 commands (`polish`, `audit`, `critique`, `distill`, `animate`, `bolder`, `quieter`, and more), plus 27 deterministic anti-pattern rules and a 12-rule LLM critique pass.

Impeccable interlocks with Facework's design layer in three places:

| Impeccable mode | Facework phase / artifact | Role |
|---|---|---|
| `teach` (design context setup) | Phase 3 Taste — DESIGN.md generation | Bootstrap the project's design vocabulary against Impeccable's curated references |
| `craft` (shape-then-build) | Phase 6 Resonance — working interfaces | Build interfaces with high design quality, avoiding the SaaS register Facework's TasteContract explicitly rejects |
| `extract` (pull reusable components + tokens) | v1.3.0 DesignInfrastructure (PROTOCOL.md §11) | Extract components and tokens — feeds directly into the `tokens.json` / `components.yaml` / examples library that DesignInfrastructure declares |

Impeccable's deterministic anti-pattern rules + LLM critique pass are a concrete implementation of the **design-eye-evaluator** Skill pattern declared by Facework v1.4.0 (PROTOCOL.md §9.3 `verifier_skill_id`). Facework declares the contract; Impeccable can be the runtime that implements the gate.

See [impeccable.style](https://impeccable.style) for ready-to-use bundles.

---

## What This Is Not

This is not a project management tool. It is not a template library. It is not a framework you adopt and follow.

It is a coherence practice — a system for maintaining structural alignment inside things you build. The methodology is how the practice operates. The commands are how the practice executes. The retro is how the practice evolves.

Build the architecture, and the identity will make itself known.

---

*FACEWORK: A Coherence Practice™ — [face.works](https://face.works)*
