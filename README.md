# FACEWORKS

A coherence practice for building things.

Faceworks is a system of forces, engines, and architectural forms that maintain structural alignment inside complex systems. Applied to product creation, it becomes a 7-phase methodology that takes an idea from zero to a fully architected, spec'd, prototyped, and handoff-ready product.

The methodology was developed and validated building [GAMUT](https://github.com/thefacelessdon/GAMUT) — creator commerce infrastructure — across 4 days: 10 architecture specs, 9 operational playbooks, 7 strategic decisions, a working prototype, and 75+ tracked work items.

---

## Why

Products collapse because people build surfaces before they build systems. A prototype without governance is a liability. Specs without resolved decisions are built on assumptions. Code without playbooks produces behavior nobody designed.

The conflict at the center of building things is not talent, speed, or funding. The conflict is: systems are asked to carry weight before their coherence is established. Faceworks resolves this by enforcing a build sequence where each layer's coherence is verified before the next layer is added.

The law is simple: anything not coherent will eventually contradict itself. Anything that contradicts itself will eventually collapse. Gates, canonical sources, decision records, and specs make collapse optional.

---

## The Primitive Stack

Seven forces. Each one activates a phase of the build.

```
FREQUENCY       Extract the irreducible signal
CURRENT         Establish direction, resolve contradictions
STABILITY       Build the architectural foundation
FLOW            Design adaptive behavior
RESONANCE       Make it transmissible
ENTROPY         Reveal structural weakness
COHERENCE       Integrate into a unified whole
```

---

## Install

```bash
git clone https://github.com/thefacelessdon/facework.git
cd facework
./install.sh
```

This symlinks 8 skills into your Claude Code environment.

## Use

Open Claude Code in any project directory. Type:

```
/fw-frequency
```

It will ask about your product, build the governance layer (business model, rates, agreements, gates), and tell you when to run `/fw-current`. Chain through all 7 primitives. End with `/fw-diagnostic` to capture learnings and evolve the methodology.

## Commands

| Command | Primitive | What It Produces |
|---------|-----------|-----------------|
| `/fw-frequency` | Frequency | Business model, rate structure, fund governance, agreements, exit guarantees, verification protocol, 3-gate security sequence |
| `/fw-current` | Current | Dilemmas surfaced, decision records with reasoning, all contradictions resolved |
| `/fw-stability` | Stability | Architecture specs — one per system. Schemas, state machines, data flows, edge cases, acceptance criteria |
| `/fw-flow` | Flow | Operational playbooks — every workflow mapped to human/agent ownership with thresholds and escalation |
| `/fw-resonance` | Resonance | Working prototype with demo data, typed schema, lifecycle-aware rendering, test suite |
| `/fw-entropy` | Entropy | 5-domain eng review, failure mode analysis, implementation specs, tool registries, prompt specs, critical gap fixes |
| `/fw-coherence` | Coherence | README, review brief, project tracker with context packets, engineering guide, clean GitHub repo |
| `/fw-diagnostic` | Diagnostic | Project retrospective — captures learnings, updates methodology, logs changes in changelog |

## The Loop

```
/fw-frequency → /fw-current → /fw-stability → /fw-flow →
/fw-resonance → /fw-entropy → /fw-coherence → /fw-diagnostic
                                                    ↓
                                          methodology evolves
                                                    ↓
                                          next project starts
                                          from updated system
```

Every project makes the practice better. Every retro is a version bump.

---

## Start Here

New to Faceworks? Read in this order:

1. **This README** — what it is, how to install, what the commands do (5 min)
2. **[The Theory of Cultural Physics](theories/cultural-physics.md)** — why coherence matters, the extraction pattern, the governing equation (15 min)
3. **[The Coherence Operating System](theories/the-coherence-operating-system.md)** — the 7 forces, engines, and how they operate inside the build (15 min)
4. **[Build Methodology](methodology/build-methodology.md)** — the 7-phase sequence with artifact maps and GAMUT proof (20 min)
5. **Install and run `/fw-frequency`** — start building (5 min)

Total: under 1 hour from clone to first skill.

## Theories

The full Faceworks theory — forces, engines, architectural forms, and how they operate inside the build methodology — lives in [`theories/the-coherence-operating-system.md`](theories/the-coherence-operating-system.md).

The theory of Cultural Physics — the paradigm that explains why coherence matters, what happens when creative energy is extracted instead of sustained, and why this matters most for the cultures that have always supplied the energy the world runs on — lives in [`theories/cultural-physics.md`](theories/cultural-physics.md).

## Methodology

The complete 7-phase build system with artifact maps, agent encoding blueprints, and reusable patterns lives in [`methodology/build-methodology.md`](methodology/build-methodology.md).

Version history: [`methodology/CHANGELOG.md`](methodology/CHANGELOG.md)

Project retros: [`methodology/retros/`](methodology/retros/)

---

## Companion Tooling

Faceworks pairs with [gstack](https://github.com/garrytan/gstack) — Garry Tan's Claude Code skill pack — for strategic review and engineering pressure testing. Two gstack skills surface in the Faceworks workflow:

| gstack Skill | Used In | Role |
|---|---|---|
| `/plan-ceo-review` | Phase 1 (Governance), Phase 2 (Strategic Pressure Testing) | Challenges assumptions, finds the 10-star product, forces decisions |
| `/plan-eng-review` | Phase 3 (Architecture), Phase 6 (Spine Hardening) | Locks architecture, data flow, failure modes, test coverage |

Faceworks's 8 skills handle the build sequence. gstack's review skills handle the pressure testing that keeps each phase honest. Both install as Claude Code skills and work independently — Faceworks doesn't require gstack, but the methodology was developed using both.

See gstack's [README](https://github.com/garrytan/gstack) for install instructions.

---

## What This Is Not

This is not a project management tool. It is not a template library. It is not a framework you adopt and follow.

It is a coherence practice — a system for maintaining structural alignment inside things you build. The methodology is how the practice operates. The commands are how the practice executes. The retro is how the practice evolves.

Build the architecture, and the identity will make itself known.

---

*FACEWORKS: A Coherence Practice™ — [face.works](https://face.works)*
