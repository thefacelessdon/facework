# FACEWORK

An open protocol for turning ideas into coherent, ownable systems.

Facework is 12 primitives (forces that govern coherence), an 8-phase build methodology, and a set of Claude Code skills that take a project from zero to fully architected, spec'd, and handoff-ready — with working interfaces. The methodology was developed building [GAMUT](https://github.com/thefacelessdon/GAMUT) and refined across multiple protocol runs including [HUE Unlimited](https://github.com/thefacelessdon/hue-unlimited).

---

## What It Does

- **Detects your project track** — Creator, Cultural Brand, Athlete/Public Figure, Agency/Studio, or Platform/Product — and tailors every phase to it.
- **Produces canonical artifacts** — strategy docs, architecture specs, decision records, operational playbooks, sovereignty maps — each gated before the next phase begins.
- **Builds working interfaces** from declared capabilities, not generic prototypes.
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

## Commands

| Command | Phase | What It Produces |
|---------|-------|-----------------|
| `/fw-semantics` | 1: Semantics | ProjectContext (track detection), signal thesis, canonical language, distortion risks, audience interpretation map |
| `/fw-field` | 2: Field | Field participant map, status/incentive model, adoption dynamics, extraction risk map |
| `/fw-taste` | 3: Taste | Taste contract, DESIGN.md (design language spec), quality rubric, anti-patterns |
| `/fw-frequency` | 4: Strategy Lock | Business model, rate structure, governance, agreements, exit guarantees, gates |
| `/fw-current` | 4: Strategy Lock | Dilemmas surfaced, decision records with reasoning, all contradictions resolved |
| `/fw-flow` | 5: Architecture & Flow | Operational playbooks — every workflow mapped to human/agent ownership |
| `/fw-stability` | 5: Architecture & Flow | Architecture specs — schemas, state machines, data flows, edge cases |
| `/fw-resonance` | 6: Activation | Working interfaces composed from declared capabilities, demo data, typed schema, test suite |
| `/fw-entropy` | 7: Integrity | Pressure test, failure mode analysis, implementation specs, critical gap fixes |
| `/fw-sovereignty` | 7: Integrity | Ownership/control matrix, dependency risk tiers, exit audit, sovereignty requirements |
| `/fw-consonance` | 7: Integrity | Cross-layer alignment check, contradiction register, stakeholder consonance |
| `/fw-coherence` | 8: Integration | README, review brief, project tracker, engineering guide, clean repo, coherence scorecard, diagnostic retro |

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

Facework pairs with [gstack](https://github.com/garrytan/gstack) for review, design, QA, and shipping. Both install as Claude Code skills and work independently — Facework doesn't require gstack, but the methodology was developed using both.

| gstack Skill | Facework Phase | Role |
|---|---|---|
| `/plan-ceo-review` | Frequency, Current | Challenges assumptions, finds the 10-star product, forces decisions |
| `/plan-eng-review` | Stability, Entropy | Locks architecture, data flow, failure modes, test coverage |
| `/design-consultation` | Resonance | Establishes design system — typography, color, spacing, motion — before building interfaces |
| `/plan-design-review` | Resonance, Entropy | Designer's eye audit of working interfaces — spacing, hierarchy, contrast, AI slop |
| `/qa-design-review` | Resonance, Entropy | Same audit, but iteratively fixes issues and re-verifies with screenshots |
| `/review` | Entropy | Pre-landing structural review — race conditions, trust boundaries, missing invariants |
| `/qa` | Entropy | Systematic QA against running interfaces — health score, screenshots, repro steps |
| `/browse` | Resonance, Entropy | Gives the agent eyes — navigate, click, screenshot, verify live interfaces |
| `/retro` | Diagnostic | Engineering retrospective — commit analysis, work patterns, team breakdown |
| `/ship` | Coherence | Sync main, run tests, push, open PR — the last mile |
| `/document-release` | Coherence | Post-ship doc update — syncs README, CHANGELOG, and guides to match what shipped |

See gstack's [README](https://github.com/garrytan/gstack) for install instructions.

---

## What This Is Not

This is not a project management tool. It is not a template library. It is not a framework you adopt and follow.

It is a coherence practice — a system for maintaining structural alignment inside things you build. The methodology is how the practice operates. The commands are how the practice executes. The retro is how the practice evolves.

Build the architecture, and the identity will make itself known.

---

*FACEWORK: A Coherence Practice™ — [face.works](https://face.works)*
