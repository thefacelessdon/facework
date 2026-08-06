# Runtime Ports ↔ Claude Code / Agent SDK — Gap Analysis (fourth runtime, the file-native local corner)

Date: 2026-08-05
Status: Draft finding (methodology note)
Scope: Fourth validation of §9 + §9.11, and the **first produced by the
`/runtime-validation-pass` skill** (0.0.20) and its paired `runtime-ports-auditor`
agent (0.0.21) — i.e. the program dogfooding its own encoded method. Target chosen
as the untested corner: **Claude Code / Claude Agent SDK**, a file-native, local,
single-player harness. Also the runtime Facework's `HarnessBundle` (§10) was
designed to target.
Companion: the three prior `methodology/runtime-ports-{buzz,letta,openai}-gap-*`
notes; `standards/source/fs400-runtime-buzz-validation-2026-08-04.md`.

---

## Why Claude Code

Buzz (a relay you run), Letta (a memory-server you run), and OpenAI (hosted cloud)
left one corner untested: a **file-native local harness** — an agent loop that
runs as a subprocess on your own disk, configured entirely by files. That is
exactly the shape §10's `HarnessBundle` (YAML ports → `soul.md`/`identity.md`/
`skills/` on disk) was built to emit. So this pass does double duty: exercise the
new skill, and give §10 its first empirical test.

---

## Headline

- **`ContextManifest` and `IntegrationManifest` are native.** Context composes
  declaratively from the CLAUDE.md hierarchy + path-scoped `.claude/rules/` +
  settings; integrations are MCP + permission rules. Second runtime after Letta
  to host `ContextManifest` natively — and via a *completely different* mechanism
  (file hierarchy vs memory blocks).
- **`SkillManifest` and `MemoryMap` are partial.** Skills + Hooks + Routines +
  Subagents cover 3/4 triggers (on_demand / scheduled / event; no native
  continuous) — more trigger coverage than Letta or OpenAI. Memory is CLAUDE.md +
  auto-memory, file+grep, no semantic index and no multi-tenant boundary
  primitive.
- **Two new findings** (below): shell sovereignty is layer-decomposable, and §10's
  HarnessBundle is validated for the first time.
- **Identity / audit: absent** (no keypairs, transcripts only) — as Letta and
  OpenAI; only Buzz has crypto identity + tamper-evident audit.

## Port map

| Port | Claude Code | vs prior |
|---|---|---|
| `SkillManifest` | 🟡 partial — Skills (`/name`, on_demand) + Hooks (event) + Routines (scheduled) + Subagents; 3/4 triggers, no unified manifest | more triggers than Letta/OpenAI |
| `MemoryMap` | 🟡 partial — CLAUDE.md + auto-memory (`~/.claude/projects/<p>/memory/`); file+grep, no semantic, no tenant boundary | weaker index than Letta; no boundary like OpenAI |
| `ContextManifest` | ✅ native — CLAUDE.md hierarchy + `.claude/rules/` (path-scoped) + settings; declarative at startup | 2nd native host (Letta was 1st), different mechanism |
| `IntegrationManifest` | ✅ native — MCP (`mcp.json`) + permission rules (allow/ask/deny, `mcp__<srv>__<tool>`); managed settings enforce | MCP wiring like all three; governance metadata still homeless |

---

## Shell sovereignty — the sharper finding

Claude Code does not fit a single own/rent classification. It **decomposes by
layer**:

| Layer | Classification | Where it lives |
|---|---|---|
| Harness (agent loop, context mgmt, permissions, hooks, MCP client, built-in tools) | **own** | open-source Agent SDK, runs as a subprocess in your infra |
| State (transcripts, CLAUDE.md, auto-memory, settings, MCP config) | **own** | your local disk; fully portable |
| Model (Opus/Sonnet/Haiku) | **rent** | Anthropic-hosted, closed, via API |

Exit path: move `.claude/` + `~/.claude/projects/<p>/` + the repo to new infra,
repoint `ANTHROPIC_API_KEY`. Only the model layer exits your control.

This is a **materially different sovereignty shape from OpenAI**, where the
harness, state, *and* model all live on the vendor's servers (rent-all, no
self-host, no relocation). FS-400.6 currently treats a non-self-hostable shell as
"`rent` with maximal blast radius" — binary. Claude Code shows sovereignty is not
binary: a shell can be **own-harness + own-state + rent-model**, and the Phase-7
waiver should scope to the *rented layer* (here: the model API — standard
commercial terms, no state lock-in), not the whole shell.

---

## New findings

### A. Shell sovereignty is layer-decomposable (harness / state / model) → FS-400.7
Classify the shell per layer, not as one own/rent verdict. The blast radius and
the required waiver attach to whichever layer is rented. Rent-model-only (Claude
Code) is a much smaller ownership cost than rent-all (OpenAI); the spec should let
a binding say so rather than flatten both to "rent." Sharpens FS-400.6.

### B. HarnessBundle (§10) validated by a real file-native runtime
Claude Code's file layout maps cleanly onto §10's derived markdown view — the
first runtime to actually exercise the file-based ingest §10 describes:

| HarnessBundle (§10) | Claude Code file |
|---|---|
| `soul.md` | CLAUDE.md root (identity, purpose, values) |
| `identity.md` | settings.json + CLAUDE.md identity section |
| `skills/` | `.claude/skills/` |
| (hooks) | `.claude/settings.json` hooks |
| (integrations) | `.claude/mcp.json` |
| (governance) | `.claude/settings.json` permissions |

The bundle is fully reconstructible from the file structure, portable, and
user-controlled. §10 was asserted ("some runtimes prefer file-based ingest"); this
is its first evidence. A HarnessBundle → Claude Code converter (read
`soul.md`/`skills/` → emit `CLAUDE.md`/`.claude/skills/`) — **built** as
`bin/harness-to-claude-code` (0.0.23), verified against this bundle: 7 skills →
`.claude/skills/{id}/SKILL.md`, six sections → a composed `CLAUDE.md`, 5 MCP
servers → `.mcp.json` + `settings.json` permission scaffolds (endpoints/secrets
excluded by design, filled from `.claude/MCP-SETUP.md`).

**End-to-end verified (0.0.24).** The converter output *boots as a real runtime*,
not just valid files: writing the bundle into a live Claude Code tree
auto-discovered all 7 skills (registered by dir-slug id with the generated
descriptions), and a headless `claude -p` rooted in the output answered from the
composed `CLAUDE.md` across four sections (`face.works | agency_studio | $5,000 |
vault/`). The run also caught two things the paper mapping missed: (1) SKILL.md
`name` is display-only — the id comes from the directory, so a human-readable
`name` is correct, not a bug; (2) carried-through port fields as *top-level*
frontmatter keys load locally but **hard-error on claude.ai / Skills-API upload**
— fixed by nesting them under the spec-allowed `metadata` key, so bundles are
portable to hosted upload, not only local Claude Code. Verify-before-fix: the
suspected name bug was disproved; the real (upload-portability) defect was only
visible from the frontmatter spec, not the local load.

---

## Four-runtime synthesis

| | Buzz | Letta | OpenAI | Claude Code |
|---|---|---|---|---|
| Corner | collab/audit | memory/context | hosted/rented | file-native/local |
| `MemoryMap` | ❌ keyword | ✅ semantic+boundary | 🟡 semantic, no boundary, rented | 🟡 file+grep, no boundary |
| `ContextManifest` | ❌ | ✅ blocks | ❌ | ✅ file hierarchy |
| `SkillManifest` triggers | ✅ full | ❌ sleep-time | ❌ | 🟡 3/4 (on_demand/sched/event) |
| identity / audit | ✅ / ✅ | ❌ / ❌ | ❌ / ❌ | ❌ / ❌ |
| sovereignty | own | own | **rent-all** | **own-harness+state / rent-model** |

Confirmed a fourth time: `ContextManifest` is hostable natively (now by two very
different mechanisms — blocks, file hierarchy); governance gates are hostable
(permissions/hooks = HITL); descriptive governance metadata is homeless
everywhere; crypto identity + tamper-evident audit remain Buzz-only. New this
pass: sovereignty decomposes by layer (A), and §10 has real evidence (B).

---

## Skill dogfood note

This was the first run of `/runtime-validation-pass`. The loop held: opposite-corner
selection named a genuinely untested corner; the paired `runtime-ports-auditor`
produced the Output Contract cleanly; the source-verify discipline kept the claims
doc-cited (with two provisional flags, correctly, on identity/audit absence). The
skill produced a new finding, not a restatement — which is the bar it sets for
itself. No changes to the skill needed from this run.

---

## Provenance

- Facework: `PROTOCOL.md` §9, §9.11, §10, Phase 7.
- Claude Code / Agent SDK (code.claude.com/docs, Aug 2026): skills, hooks,
  routines, memory (CLAUDE.md + auto-memory), rules, MCP, permissions, Agent SDK
  hosting (subprocess + local session storage).
- Flagged provisional (inferred from absence in docs): no cryptographic
  identity/signing; audit is session transcripts, not tamper-evident.
