# Facework — Agent Guide

**This file is the canonical agent instruction set for this repo, for every
harness.** Berd, goose, Codex, and other AGENTS.md-reading tools load it
automatically; `CLAUDE.md` is a thin pointer to it plus Claude Code-specific
additions. If you are reading a different instruction file in this repo and it
conflicts with this one, **this file governs** — report the conflict.

---

## What this repo is

Facework is a **protocol toolkit**, not a project workspace and not an
application. It contains the Facework protocol spec, the theory stack, the
methodology build system, and agent skills (`/fw-*`) for running an 8-phase
coherence protocol **on other people's projects**.

The one piece of running software here is `examples/face.works/prototype` — the
Next.js site that publishes the protocol at face.works.

---

## Four rules that prevent the common mistakes

1. **`examples/` is not the active project.** It is reference output from a
   completed protocol run (Face.works). When a `/fw-*` skill runs, it operates
   on the *user's* target repo. Every skill begins by reading that project's
   existing artifacts before asking questions. Never treat `examples/` as the
   thing being worked on unless the task is explicitly about the site.

2. **Release version lives in `VERSION` and nowhere else.** Never hardcode it
   into a document — that drift has been fixed twice already (0.0.16, 0.0.40)
   and the second time it survived seven releases. The **manifest schema**
   version is a separate, real axis: the spec line is at **1.5.0**
   (`RuntimeConformanceProfile`, PROTOCOL.md §9.12), while
   `facework.manifest.yaml` declares `1.4.0` because runtime conformance is an
   opt-in additive tier (§9.2). That is not drift. Do not "reconcile" them.

3. **Authority flows one direction.** Where a lower layer conflicts with canon
   above it, **canon governs** — including `visual-system/`, which is an
   Implementation-layer artifact and is explicitly subordinated in
   `methodology/decisions/DECISION-002-standards-first-experience-language.md`.

4. **`standards/` is deferred post-1.0.** It is a staged FS/FOS/FRS track, **not
   canonical**. Never cite it as governing. (Runtime Ports are the exception —
   they were promoted out of that track and shipped at 0.0.5–0.0.8.)

---

## The five-layer model

| Layer | Where it lives |
|---|---|
| **Theory** — Cultural Physics | `theories/cultural-physics.md` |
| **Discipline** — Coherence Design | `theories/coherence-design.md` |
| **Practice** — Facework | `PROTOCOL.md`, `CONSTITUTION.md` (13 articles) |
| **Implementation** — Skills, Artifacts | `skills/`, `agents/`, `visual-system/` |
| **Runtime** | out of scope — Facework declares, it does not implement |

The Protocol establishes coherence; **Postures** maintain it. Background:
`methodology/architecture-reconciliation-2026-06.md`.

The governing equation is `Coherence = (Flow × Resonance) / (1 + Entropy)`. The
build sequence *is* that equation, executed in order.

---

## Protocol phases (canonical sequence)

| Phase | Name | Skill(s) | Purpose |
|-------|------|----------|---------|
| — | Setup | `SETUP.md` | Prerequisite: get tools installed |
| 1 | Semantics | `/fw-semantics` | Detect track, extract meaning and canonical language |
| 2 | Field | `/fw-field` | Map social dynamics and adoption loops |
| 3 | Taste | `/fw-taste` | Quality governance + design language (+ DesignInfrastructure) |
| 4 | Strategy Lock | `/fw-frequency` + `/fw-current` | Lock economics and strategic direction |
| 5 | Architecture & Flow | `/fw-flow` + `/fw-stability` | Operations, then architecture (+ four Runtime Port manifests) |
| 6 | Activation | `/fw-resonance` | Build working interfaces from declared capabilities |
| 7 | Integrity | `/fw-entropy` + `/fw-sovereignty` + `/fw-consonance` | Pressure test, enforce boundaries, verify alignment |
| 8 | Integration | `/fw-coherence` | Handoff package + HarnessBundle + diagnostic + methodology evolution |

Each phase has a **gate**. No phase advances without explicit pass/fail evidence.

---

## Repo structure

```
Facework/
├── VERSION                        ← release version — single source of truth
├── CONSTITUTION.md                ← governing authority of the practice (13 articles)
├── PROTOCOL.md                    ← open protocol spec (source of truth)
├── ROADMAP.md                     ← versioning rules + full version history
├── SETUP.md                       ← zero-to-ready setup guide
├── COMPLIANCE.md / CERTIFICATION.md
├── facework.manifest.yaml         ← reference project manifest
├── facework.manifest.schema.json  ← JSON Schema for manifest validation
├── theories/                      ← Theory + Discipline + the Coherence OS
├── methodology/                   ← build system: retros, decisions, changelog, archive
├── skills/                        ← 12 protocol + 8 Posture + system-loop skills
├── agents/                        ← 9 paired specialist agents
├── visual-system/                 ← FVS/FVI/FVA/FVR/FVP identity spec (Implementation layer)
├── standards/                     ← deferred post-1.0 track — NOT canonical
├── examples/face.works/           ← reference output from a completed run (NOT the active project)
│   ├── define/ runtime-ports/ harness-bundle/ design-infrastructure/
│   └── prototype/                 ← the live Next.js site (own guide: prototype/CLAUDE.md)
└── bin/                           ← validate-manifest, validate-tokens, harness-to-claude-code
```

### Skills and agents

- **12 protocol skills** (`skills/fw-*`) — one per phase primitive.
- **8 Postures** (`decision-log`, `evidence-debug`, `contract-sync`, `mvp-cut`,
  `beta-hardening`, `scale-readiness`, `launch-ops`, `weekly-upgrade`) — product-loop
  modes that cut across phases. See `skills/OPERATING_SKILLS.md`.
- **System-loop skills** (`runtime-validation-pass`) — a third class that evolves
  the methodology itself; neither phase primitive nor Posture.
- **9 specialist agents** in `agents/`, one paired to each operating skill.

Skills and agents here are repo artifacts. They are **not** auto-discovered by
Berd or goose, which read their own global skill/agent roots.

---

## Working on the site

`examples/face.works/prototype` — Next.js (App Router), TypeScript strict,
Tailwind v4, vitest.

**Read `examples/face.works/prototype/CLAUDE.md` before touching it.** That file
is the real engineering guide. The `AGENTS.md` sitting next to it is Next.js
auto-generated boilerplate rewritten by `next dev` — it is not a guide.

Non-negotiables:

- **The Reading Room** is the design language. `src/app/reading-room.css` with
  `--rr-*` OKLCH tokens is the source of truth. `--fw-*` in `globals.css` is
  legacy aliasing only — treat `--rr-*` as canonical.
- **Two registers of one system:** `.rr` (light warm paper) = **The Work**;
  `.rr-field` (dark warm obsidian) = **The Practice**.
- **Verdigris is the only brand accent.** Primary CTAs are ink, never verdigris.
  Status colors classify, never decorate. Never more than one accent per section.
- **The `CoherenceMark` is open-center.** It is derived from the governing
  equation — Coherence is the maintained relationship, never a placed node.
  Never reintroduce a center dot in any state.
- **`/protocol/[slug]` serves committed derived copies** of real canon docs with
  provenance (source path + SHA). Editing a canon doc without resyncing breaks
  the drift gate — that gate has already caught a live canon edit (0.0.40).

Gates, run from `examples/face.works/prototype`:

```
npm run build
npm test
npm run sync-canon -- --check
```

Plus an axe-core WCAG 2.2 AA pass over all routes (0 violations is the standing
bar) and a banned-pattern grep for superseded identity terms. Manual AT rows are
tracked in `reports/at-test-script.md`.

Repo-level validation:

```
make protocol-check        # validate manifest + required protocol files
./bin/validate-tokens      # enforce token source-authority
```

---

## Ship discipline

Documented in retro 008 for this docs/spec repo — gstack `/ship`'s code pipeline
does not fit here:

1. **Branch first.** Never commit to `main` directly.
2. **Stage only the session's files.** **Never `git add -A`** — the working tree
   carries untracked `personal/`, client, and scratch directories.
3. **Bump `VERSION`** (single semver) and **add a `ROADMAP.md` version-history
   row** stating what was *earned*, not merely what changed.
4. **Open a PR.** Recent releases all land as reviewed PRs.

Pre-1.0 rule: any change that shapes the protocol is a **PATCH**. MINOR is
reserved for validated capability milestones; `0.1.0` now means **Independent
Validation** — operation or review by someone who is not the author.

> `methodology/CHANGELOG.md` stopped at 0.0.27; 0.0.28 onward are recorded as
> `ROADMAP.md` rows. Follow the ROADMAP path. The CHANGELOG backlog is known and
> unresolved — do not silently backfill it.

## Working style

- **Findings first.** Lead with the answer, then the evidence.
- **Source-verify canon-bound claims.** Prose docs are not spec-grade; cite the
  source file. This rule exists because a prose-only claim once nearly shipped
  as canon and was overturned by reading the source (retro 008).
- **Retros are a system loop.** `methodology/retros/` is how the methodology
  evolves; decisions land in `methodology/decisions/`.
- **The Sovereignty-loop guard-rail (0.0.14, canon in
  `theories/the-coherence-operating-system.md` §VII):** an agent may
  *recommend* a Sovereignty-loop exit but must **never record it as decided**.
  It stays RECOMMENDED, not RESOLVED, until the human rules. This was earned —
  a run once pre-wrote a founder's scope cull as ratified before he had decided.
