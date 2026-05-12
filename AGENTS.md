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
| 3 | Taste | `/fw-taste` | Define quality governance and design language (+ DesignInfrastructure for track-relevant tracks, v1.3.0+) |
| 4 | Strategy Lock | `/fw-frequency` + `/fw-current` | Lock economics and strategic direction |
| 5 | Architecture & Flow | `/fw-flow` + `/fw-stability` | Document operations, then specify architecture (+ four Runtime Port manifests, v1.1.0+) |
| 6 | Activation | `/fw-resonance` | Build working interfaces from declared capabilities |
| 7 | Integrity | `/fw-entropy` + `/fw-sovereignty` + `/fw-consonance` | Pressure test, enforce boundaries, verify alignment |
| 8 | Integration | `/fw-coherence` | Package for handoff + HarnessBundle (v1.2.0+) + diagnostic + methodology evolution |

## Operating Layer outputs (v1.4.0 manifest schema)

Beyond the lifecycle phases, the protocol now declares **runtime ports** for portability:

- **Four port manifests** emitted by `/fw-stability` (Phase 5): `SkillManifest`, `MemoryMap`, `ContextManifest`, `IntegrationManifest` — declarative YAML any runtime can ingest.
- **HarnessBundle** emitted by `/fw-coherence` (Phase 8): markdown view of the port manifests (`soul.md` / `identity.md` / `purpose.md` / `memory.md` / `tools.md` / `boundary.md` / `skills/*.md` + top-level `CLAUDE.md`) for file-based runtimes.
- **DesignInfrastructure** emitted by `/fw-taste` (Phase 3, track-relevant): tokens, component primitives with contract rules, design-eye evaluator Skill, examples library.
- **Observability Interface** (PROTOCOL.md §12): minimum event surface any v1.4.0 runtime emits — runtime picks transport.

See `PROTOCOL.md` §9–§12 for the spec and `examples/face.works/` for a complete worked example.

## Repo structure

```
Facework/
├── PROTOCOL.md          ← open protocol spec (source of truth)
├── SETUP.md             ← zero-to-ready setup guide (tiered by when you need it)
├── ROADMAP.md           ← versioning rules + version history
├── OPERATING-LAYER-PLAN.md    ← strategic umbrella for v0.0.5–v0.0.7 (shipped)
├── RUNTIME-PORTS-PLAN.md      ← v0.0.5 execution detail (shipped)
├── HARNESS-BUNDLE-PLAN.md     ← v0.0.6 execution detail (shipped)
├── DESIGN-INFRASTRUCTURE-PLAN.md  ← v0.0.7 execution detail (shipped)
├── V0.0.8-PLAN.md             ← v0.0.8 execution detail (shipped)
├── facework.manifest.yaml         ← reference project manifest (v1.4.0)
├── facework.manifest.schema.json  ← JSON Schema for manifest validation
├── theories/            ← paradigm (Cultural Physics, Coherence OS)
├── methodology/         ← build system (retros, changelog)
├── skills/              ← 12 protocol skills + 8 operating skills
├── examples/            ← reference output from completed runs (NOT active project)
│   └── face.works/      ← first protocol run (Facework's own infrastructure)
│       ├── define/                ← phase 1–4 governance artifacts
│       ├── runtime-ports/         ← v1.1.0 YAML port manifests
│       ├── harness-bundle/        ← v1.2.0 markdown bundle
│       ├── design-infrastructure/ ← v1.3.0 tokens + components + examples
│       └── prototype/             ← phase 6 working interfaces
└── bin/                 ← validation tooling (validate-manifest, etc.)
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
| `/design-consultation` | Design system research — typography, color, spacing, motion |
| `/gstack-upgrade` | Upgrade gstack to the latest version |
