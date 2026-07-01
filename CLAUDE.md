# Facework — Protocol Toolkit

This repo is a **protocol toolkit**, not a project workspace. It contains the
Facework protocol spec, methodology, theories, and agent skills (`/fw-*` commands)
for running the protocol on any project.

## Running the protocol on a project

When someone runs `/fw-semantics` (or any `/fw-*` skill), they are starting a
protocol run on **their** project — not on this repo. Every skill begins by
reading the project's existing artifacts before asking questions.

**Do NOT treat `examples/` as the active project.** It contains reference output
from a completed protocol run (Face.works). It exists to show what the protocol
produces. Ignore it when running the protocol on a new project.

## Protocol Phases (canonical sequence)

| Phase | Name | Skill(s) | Purpose |
|-------|------|----------|---------|
| — | Setup | `SETUP.md` | Prerequisite: get tools installed |
| 1 | Semantics | `/fw-semantics` | Detect track, extract meaning and canonical language |
| 2 | Field | `/fw-field` | Map social dynamics and adoption loops |
| 3 | Taste | `/fw-taste` | Define quality governance and design language |
| 4 | Strategy Lock | `/fw-frequency` + `/fw-current` | Lock economics and strategic direction |
| 5 | Architecture & Flow | `/fw-flow` + `/fw-stability` | Document operations, then specify architecture |
| 6 | Activation | `/fw-resonance` | Build working interfaces from declared capabilities |
| 7 | Integrity | `/fw-entropy` + `/fw-sovereignty` + `/fw-consonance` | Pressure test, enforce boundaries, verify alignment |
| 8 | Integration | `/fw-coherence` | Package for handoff + diagnostic + methodology evolution |

## Repo structure

```
Facework/
├── CONSTITUTION.md      ← governing authority of the practice (13 articles)
├── PROTOCOL.md          ← open protocol spec (source of truth)
├── SETUP.md             ← zero-to-ready setup guide (tiered by when you need it)
├── theories/            ← Theory (Cultural Physics) + Discipline (Coherence Design) + COS
├── methodology/         ← build system (retros, changelog, decisions, archive)
├── skills/              ← 12 protocol skills + 8 operating skills (Postures)
├── standards/           ← deferred post-1.0 standards track (FS/FOS/FRS) — NOT canonical yet
├── examples/            ← reference output from completed runs (NOT active project)
│   └── face.works/      ← first protocol run (Facework's own infrastructure)
└── bin/                 ← validation tooling
```

The five-layer model (per the Facework Standards Architecture): **Theory**
(Cultural Physics) → **Discipline** (Coherence Design) → **Practice** (Facework)
→ **Implementation** (Skills, Artifacts) → **Runtime**. The Protocol establishes
coherence; Postures maintain it. See
`methodology/architecture-reconciliation-2026-06.md`.

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
| `/design-consultation` | Design system research — typography, color, spacing, motion |
| `/gstack-upgrade` | Upgrade gstack to the latest version |
