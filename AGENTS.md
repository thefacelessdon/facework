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
   version is a separate, real axis (currently **1.7.0** — PROTOCOL.md
   §9.2/§9.11/§9.12). A manifest declares the schema version whose features it uses,
   so manifests sitting on different versions is normal, not drift — never
   "reconcile" them by bumping numbers. What must never disagree is **the spec
   and its enforcement**: if `PROTOCOL.md` declares a schema feature,
   `facework.manifest.schema.json` defines it and `bin/validate-manifest`
   enforces it. That trio drifted once — the 1.5.0 runtime-conformance tier was
   specified at 0.0.25 and unenforceable until 0.0.45 — so check all three
   whenever you touch any one of them.

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
├── .agents/agents/                ← 2 Berd personas — discovered on clone
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
- **2 Berd personas** in `.agents/agents/` — `protocol-operator` (runs one
  `/fw-*` phase against a tenant repo; cannot edit canon) and `canon-keeper`
  (edits this repo's canon; cannot run the protocol). A persona is the identity
  a whole session runs as — a different thing from the subagents in `agents/`
  that a session spawns.

Two roots, and only one of them is discovered. `skills/` and `agents/` are repo
artifacts — **not** auto-discovered by Berd or goose, which read their own global
roots. **`.agents/agents/` is the exception:** Berd discovers project-local
personas there, so cloning this repo puts both personas in the operator's picker
with no install step. `git clone` is therefore the distribution channel, and
`bin/fw-berd-launch --agent <path>` takes one by path. Blanket-ignoring
`.agents/` had hidden that channel until 0.0.67.

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
  the drift gate — it has caught two live canon edits (0.0.40, 0.0.46).

Gates, run from `examples/face.works/prototype`:

```
npm run build
npm test
npm run sync-canon -- --check
```

**If you edited a canon doc — `PROTOCOL.md`, `CONSTITUTION.md`, anything under
`theories/`, `standards/README.md`, `methodology/build-methodology.md` — you must
run `npm run sync-canon` and commit the regenerated copy, even when you never
touched the site.** The derived copies are committed, so a canon edit alone turns
the gate red. This is not site work; it is part of editing canon. 0.0.46 landed on
`main` with the gate red for exactly this reason — a protocol-only change did not
look like it needed a site command.

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
5. **Never `--delete-branch` a PR that is another PR's base.** GitHub *closes*
   the dependent PR, and a closed PR cannot be retargeted once its base is gone.

## Parallel sessions — one agent per worktree

More than one agent may be live in this repo. They do not share a branch, but on
a single checkout they **share a working tree**, and a `git checkout` by one moves
`HEAD` under the other.

- **Default to an isolated worktree per agent** (`git worktree add`, or Berd's
  per-session worktree startup mode). This is the structural fix; everything below
  is the fallback for when it is not in place.
- **Check `git branch --show-current` immediately before any `commit`, `amend`, or
  `checkout`** when another session may be live. Verify it is still your branch.
- **Never `git checkout --` to restore a fixture** while the thing under test is
  uncommitted — it restores from `HEAD` and silently discards your own work. Back
  up to a scratch file instead.
- **Before dropping a stash, verify its SHA**, not its index. `stash@{0}` is
  positional and shifts if another session stashes.
- If you find foreign uncommitted changes in the tree, **stop and report**. Do not
  stash, reset, or check out around them.

Earned the hard way at 0.0.53: a tree switched mid-sequence, a release commit
landed on another session's branch, and a `--amend` rewrote that session's commit.
Nothing was lost, but only because git refused one checkout at the right moment.

Pre-1.0 rule: any change that shapes the protocol is a **PATCH**. MINOR is
reserved for validated capability milestones; `0.1.0` now means **Independent
Validation** — operation or review by someone who is not the author.

> `methodology/CHANGELOG.md` is a **closed archive** — do not add entries to it,
> and do not backfill its 0.0.28–0.0.45 hole (that hole is deliberate; the
> releases are in `ROADMAP.md`). Ruling: `methodology/decisions/DECISION-003`.
> The release record is the ROADMAP row; methodology evolution goes in
> `methodology/retros/`; rulings go in `methodology/decisions/`.

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
