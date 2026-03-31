# Facework — Protocol Toolkit

This repo is a **protocol toolkit**, not a project workspace. It contains the
Facework protocol spec, methodology, theories, and agent skills (`/fw-*` commands)
for running the protocol on any project.

## Running the protocol on a project

When someone runs `/fw-intake` (or any `/fw-*` skill), they are starting a
protocol run on **their** project — not on this repo. Every run begins with
Phase 0 (Intake) to confirm the target project and scan for existing artifacts.

**Do NOT treat `examples/` as the active project.** It contains reference output
from a completed protocol run (Face.works). It exists to show what the protocol
produces. Ignore it when running the protocol on a new project.

## Protocol Phases (canonical sequence)

| Phase | Name | Skill(s) | Purpose |
|-------|------|----------|---------|
| 0 | Intake | `/fw-intake` | Capture hunch, context, constraints, assets |
| 1 | Semantics | `/fw-semantics` | Extract meaning and canonical language |
| 2 | Field | `/fw-field` | Map social dynamics and adoption loops |
| 3 | Taste | `/fw-taste` | Define quality governance and design language |
| 4 | Strategy Lock | `/fw-frequency` + `/fw-current` | Lock economics and strategic direction |
| 5 | Architecture & Flow | `/fw-flow` + `/fw-stability` | Document operations, then specify architecture |
| 6 | Activation | `/fw-resonance` | Build transmissible prototype from DESIGN.md |
| 7 | Integrity | `/fw-entropy` + `/fw-sovereignty` + `/fw-consonance` | Pressure test, enforce boundaries, verify alignment |
| 8 | Integration | `/fw-coherence` | Package for handoff |
| 9 | Evolution | `/fw-diagnostic` | Retrospective and methodology update |

## Repo structure

```
Facework/
├── PROTOCOL.md          ← open protocol spec v2.0.0 (source of truth)
├── theories/            ← paradigm (Cultural Physics, Coherence OS)
├── methodology/         ← build system (retros, changelog)
├── skills/              ← 14 agent skills (/fw-* commands)
├── examples/            ← reference output from completed runs (NOT active project)
│   └── face.works/      ← first protocol run (Facework's own infrastructure)
└── bin/                 ← validation tooling
```

## gstack

Use the `/browse` skill from gstack for **all web browsing**. Never use
`mcp__claude-in-chrome__*` tools.

### Available gstack skills

| Skill | Purpose |
|-------|---------|
| `/plan-ceo-review` | CEO/founder-mode plan review — challenge premises, find the 10-star product |
| `/plan-eng-review` | Eng manager-mode plan review — lock architecture, data flow, edge cases |
| `/plan-design-review` | Designer's eye review of a live site — visual audit with letter grades |
| `/review` | Pre-landing PR review — SQL safety, trust boundaries, structural issues |
| `/ship` | Ship workflow — merge, test, review diff, bump version, push, create PR |
| `/browse` | Fast headless browser — navigate, interact, screenshot, assert state |
| `/qa` | Systematic QA testing + iterative bug fixing with atomic commits |
| `/qa-only` | Report-only QA testing — structured report, no code changes |
| `/qa-design-review` | Designer's eye QA with iterative fix loop |
| `/setup-browser-cookies` | Import cookies from real browser for authenticated testing |
| `/retro` | Weekly engineering retrospective with trend tracking |
| `/document-release` | Post-ship documentation update across all project docs |
