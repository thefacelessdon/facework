# FACEWORK

A coherence practice for building things.

Facework is a system of 12 primitives (forces that govern coherence), engines, and architectural forms that maintain structural alignment inside complex systems. Applied to product creation, it becomes an 8-phase methodology that takes an idea from zero to a fully architected, spec'd, prototyped, and handoff-ready product.

The methodology was developed and validated building [GAMUT](https://github.com/thefacelessdon/GAMUT) — creator commerce infrastructure — and refined across multiple protocol runs including [HUE Unlimited](https://github.com/thefacelessdon/hue-unlimited).

---

## Why

Products collapse because people build surfaces before they build systems. A prototype without governance is a liability. Specs without resolved decisions are built on assumptions. Code without playbooks produces behavior nobody designed.

The conflict at the center of building things is not talent, speed, or funding. The conflict is: systems are asked to carry weight before their coherence is established. Facework resolves this by enforcing a build sequence where each layer's coherence is verified before the next layer is added.

The law is simple: anything not coherent will eventually contradict itself. Anything that contradicts itself will eventually collapse. Gates, canonical sources, decision records, and specs make collapse optional.

There is a deeper pattern underneath the structural one. The history of creative industries — jazz, hip hop, fashion, social media — follows the same physics: communities generate the cultural energy, and external systems capture the current. The infrastructure was never designed to sustain the source. Products built without coherence thinking reproduce this pattern by accident, because the build process never asks: whose energy powers this system, and who controls the infrastructure it flows through? Facework carries that question through every phase of the build.

---

## The Primitive Stack

Twelve primitives — forces that govern coherence — across eight phases. Every phase begins by reading existing artifacts (intake). The final phase closes with a diagnostic that evolves the practice.

```
Phase 1  SEMANTICS      Extract meaning, define canonical language
Phase 2  FIELD          Map social dynamics and adoption physics
Phase 3  TASTE          Set quality governance + design language
Phase 4  FREQUENCY      Extract the irreducible economic signal
         CURRENT        Establish direction, resolve contradictions
Phase 5  FLOW           Design adaptive behavior (playbooks)
         STABILITY      Build the architectural foundation (specs)
Phase 6  RESONANCE      Make it transmissible (prototype from DESIGN.md)
Phase 7  ENTROPY        Reveal structural weakness
         SOVEREIGNTY    Enforce ownership boundaries
         CONSONANCE     Verify cross-layer alignment
Phase 8  COHERENCE      Integrate into a unified whole + diagnostic
```

---

## Install

```bash
git clone https://github.com/thefacelessdon/facework.git
cd facework
./install.sh
```

This symlinks 12 protocol skills and 8 operating skills into your Claude Code environment.

## Protocol and Validation

Facework Protocol v2 docs:

- `PROTOCOL.md`
- `COMPLIANCE.md`
- `CERTIFICATION.md`
- `facework.manifest.schema.json`

Sample manifest:

- `facework.manifest.yaml`

Validate in one command:

```bash
./bin/validate-manifest
```

Standard repo command:

```bash
make validate
```

Validate a custom manifest path:

```bash
./bin/validate-manifest /path/to/facework.manifest.yaml
```

Or with make:

```bash
make validate-manifest FILE=/path/to/facework.manifest.yaml
```

Full protocol check (manifest + required spec files):

```bash
make protocol-check
```

## Use

Open Claude Code in any project directory. Type:

```
/fw-semantics
```

It will ask about what you're building, extract canonical meaning, and tell you when to run the next phase. Chain through all 8 phases. Coherence closes the loop with a diagnostic that evolves the methodology.

## Commands

| Command | Phase | What It Produces |
|---------|-------|-----------------|
| `/fw-semantics` | 1: Semantics | Signal thesis, canonical language, distortion risks, audience interpretation map |
| `/fw-field` | 2: Field | Field participant map, status/incentive model, adoption dynamics, extraction risk map |
| `/fw-taste` | 3: Taste | Taste contract, DESIGN.md (design language spec), quality rubric, anti-patterns |
| `/fw-frequency` | 4: Strategy Lock | Business model, rate structure, governance, agreements, exit guarantees, gates |
| `/fw-current` | 4: Strategy Lock | Dilemmas surfaced, decision records with reasoning, all contradictions resolved |
| `/fw-flow` | 5: Architecture & Flow | Operational playbooks — every workflow mapped to human/agent ownership |
| `/fw-stability` | 5: Architecture & Flow | Architecture specs — schemas, state machines, data flows, edge cases |
| `/fw-resonance` | 6: Activation | Working prototype from DESIGN.md, demo data, typed schema, test suite |
| `/fw-entropy` | 7: Integrity | Pressure test, failure mode analysis, implementation specs, critical gap fixes |
| `/fw-sovereignty` | 7: Integrity | Ownership/control matrix, dependency risk tiers, exit audit, sovereignty requirements |
| `/fw-consonance` | 7: Integrity | Cross-layer alignment check, contradiction register, stakeholder consonance |
| `/fw-coherence` | 8: Integration | README, review brief, project tracker, engineering guide, clean repo, coherence scorecard, diagnostic retro |

## The Loop

```
/fw-semantics → /fw-field → /fw-taste
Extract meaning   Map social physics   Set quality bar + DESIGN.md

/fw-frequency → /fw-current
Extract signal    Lock direction

/fw-flow → /fw-stability
Design operations   Build architecture

/fw-resonance → /fw-entropy + /fw-sovereignty + /fw-consonance
Build prototype    Integrity: pressure test + ownership + alignment

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

## Start Here

New to Facework? Read in this order:

1. **This README** — what it is, how to install, what the commands do (5 min)
2. **[The Theory of Cultural Physics](theories/cultural-physics.md)** — why coherence matters, the extraction pattern, the governing equation (15 min)
3. **[The Coherence Operating System](theories/the-coherence-operating-system.md)** — the 12 primitives, engines, and how they operate inside the build (15 min)
4. **[Build Methodology](methodology/build-methodology.md)** — the GAMUT case study that validated the methodology (20 min)
5. **Install and run `/fw-semantics`** — start building (5 min)

Total: under 1 hour from clone to first skill.

## Theories

The full Facework theory — 12 primitives, engines, architectural forms, and how they operate inside the build methodology — lives in [`theories/the-coherence-operating-system.md`](theories/the-coherence-operating-system.md).

The theory of Cultural Physics — the paradigm that explains why coherence matters, what happens when creative energy is extracted instead of sustained, and why this matters most for the cultures that have always supplied the energy the world runs on — lives in [`theories/cultural-physics.md`](theories/cultural-physics.md).

## Methodology

The GAMUT case study — the first complete protocol run that validated the build methodology — lives in [`methodology/build-methodology.md`](methodology/build-methodology.md). The canonical 8-phase sequence is defined in [`PROTOCOL.md`](PROTOCOL.md).

Version history: [`methodology/CHANGELOG.md`](methodology/CHANGELOG.md)

Project retros: [`methodology/retros/`](methodology/retros/)

---

## Companion Tooling

Facework pairs with [gstack](https://github.com/garrytan/gstack) — Garry Tan's Claude Code skill pack — for review, design, QA, and shipping. gstack skills surface throughout the Facework workflow:

| gstack Skill | Facework Phase | Role |
|---|---|---|
| `/plan-ceo-review` | Frequency, Current | Challenges assumptions, finds the 10-star product, forces decisions |
| `/plan-eng-review` | Stability, Entropy | Locks architecture, data flow, failure modes, test coverage |
| `/design-consultation` | Resonance | Establishes design system — typography, color, spacing, motion — before building the prototype |
| `/plan-design-review` | Resonance, Entropy | Designer's eye audit of the prototype — spacing, hierarchy, contrast, AI slop |
| `/qa-design-review` | Resonance, Entropy | Same audit, but iteratively fixes issues and re-verifies with screenshots |
| `/review` | Entropy | Pre-landing structural review — race conditions, trust boundaries, missing invariants |
| `/qa` | Entropy | Systematic QA against the running prototype — health score, screenshots, repro steps |
| `/browse` | Resonance, Entropy | Gives the agent eyes — navigate, click, screenshot, verify the live prototype |
| `/retro` | Diagnostic | Engineering retrospective — commit analysis, work patterns, team breakdown |
| `/ship` | Coherence | Sync main, run tests, push, open PR — the last mile |
| `/document-release` | Coherence | Post-ship doc update — syncs README, CHANGELOG, and guides to match what shipped |
| `/gstack-upgrade` | — | Upgrade gstack to the latest version |

Facework's 12 protocol skills handle the build sequence. gstack handles the pressure testing, design review, QA, and shipping that keep each phase honest. Both install as Claude Code skills and work independently — Facework doesn't require gstack, but the methodology was developed using both and they stay in lockstep.

See gstack's [README](https://github.com/garrytan/gstack) for install instructions.

---

## What This Is Not

This is not a project management tool. It is not a template library. It is not a framework you adopt and follow.

It is a coherence practice — a system for maintaining structural alignment inside things you build. The methodology is how the practice operates. The commands are how the practice executes. The retro is how the practice evolves.

Build the architecture, and the identity will make itself known.

---

*FACEWORK: A Coherence Practice™ — [face.works](https://face.works)*
