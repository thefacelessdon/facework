# Runtime Ports ↔ Berd — Gap Analysis (fifth runtime, the multi-harness corner)

Date: 2026-08-18
Status: Draft finding (methodology note)
Scope: Fifth validation of §9 + §9.11, and the **second `HarnessBundle` (§10)
consumer** — `bin/harness-to-berd`, built and verified in this pass. Target chosen
as the untested corner: **Berd** (Block), a desktop shell that fronts *several*
agent harnesses behind one set of primitives.
Companion: the four prior `methodology/runtime-ports-{buzz,letta,openai,claude-code}-gap-*`
notes; `standards/source/fs400-runtime-buzz-validation-2026-08-04.md`.

---

## Why Berd

Buzz (collaboration/audit), Letta (memory/context), OpenAI (hosted/rented), and
Claude Code (file-native/local) were each **one runtime with one agent loop**. Every
finding so far assumed that shape: a shell *is* its harness, so classifying the
shell classifies the loop.

Berd breaks that assumption. It is a **multi-harness shell** — `goose`,
`claude-acp`, `codex-acp`, `copilot-acp`, `amp-acp`, `cursor-agent` are all
selectable, and the choice is made **per session**, not per install
(`berdctl info harnesses`; `berdctl session create --harness-id`). Claude Code —
already a validated reference runtime — is one of the loops Berd can host. So this
pass tests the ports one layer up: against a shell whose agent loop is a
*late-bound parameter*.

That is also the shape Facework's own positioning implies (the authoring layer
compiles down to runtimes it does not own, §9.11). If the ports only hold when the
harness is fixed, the portability claim is weaker than stated.

---

## Headline

- **`SkillManifest` is partially native, with the weakest trigger coverage of any
  runtime so far** — 1/4 native (`on_demand`). Skills are portable `SKILL.md`
  folders and load cleanly; `scheduled` has a UI-only home (Automations) and
  `event`/`continuous` have none.
- **`ContextManifest` is partial, and needs *three* vehicles at three scopes** —
  `AGENTS.md` per attached workspace (file-native, injected as
  `<workspace-instructions>`), project instructions, and the agent persona
  (swappable per session). This is the first runtime where the bundle could not
  compose into one place — it had to be split by **lifetime**, not by topic.
- **`MemoryMap` has no home at all.** Not partial — absent. No memory store, no
  boundary primitive, no per-project memory directory. Weakest of five.
- **`IntegrationManifest` is authoring-side.** First shell that fronts MCP-capable
  harnesses while exposing **no machine-writable integration surface**: connections
  and extensions are configured in the UI, with no on-disk config and no `berdctl`
  noun. A regression against Claude Code's `.mcp.json`.
- **Three new findings** (below): the harness layer can be plural and late-bound;
  the state layer splits into authoring vs operational; the session — not the
  install — is the binding point for `model_tier` and `ownership`.
- **§10 HarnessBundle validated a second time**, by a runtime it was not designed
  for, via a working converter (`bin/harness-to-berd`, verified end-to-end).

## Port map

| Port | Berd | vs prior |
|---|---|---|
| `SkillManifest` | 🟡 partial — `~/.agents/skills/<name>/SKILL.md` (personal) or `<project>/.agents/skills/` (project); matched by `description` at session start. `on_demand` native; `scheduled` → Automations (UI-built, no CLI); no `event`/`continuous` primitive | **weakest triggers** (1/4 native vs Claude Code's 3/4); skill *format* is the most portable of the five |
| `MemoryMap` | ❌ no home — no memory store, no boundary primitive, no per-project memory dir. Boundary survives only as prose in project instructions | weakest of five; Claude Code at least had CLAUDE.md + auto-memory |
| `ContextManifest` | 🟡 partial — three scopes: `<workspace>/AGENTS.md` (walked per attached dir, injected as `<workspace-instructions>`), project instructions, agent persona (`~/.agents/agents/<slug>.md`), plus attached `working_dirs`. Declarative at session start, but flat: no per-skill bundles, no budget, no ordering | 3rd runtime to host context, by a 3rd mechanism — and the **first with scoped layers** (workspace / project / session) |
| `IntegrationManifest` | ❌ authoring-side — Connections (OAuth catalog) + Extensions (stdio/SSE/HTTP/ACP/builtin), both UI-only. No config file, no CLI noun | first shell where integrations do **not** bind to a file; governance metadata homeless as everywhere |

Identity / audit: **absent** (as Letta, OpenAI, Claude Code). Sessions are
transcripts, not a tamper-evident log. Only Buzz has crypto identity + audit.

---

## Shell sovereignty

Berd does not resolve to one own/rent verdict, and — unlike Claude Code — it does
not resolve cleanly per layer either:

| Layer | Classification | Where it lives |
|---|---|---|
| Harness (the agent loop) | **plural / late-bound** — `mitigate` for the shell, `own` or `rent` per selected harness | Berd is a local desktop app (source inspectable to this operator — it was read at 0.0.44 — but not self-hostable); the loops under it (goose, claude-acp, codex-acp, …) are separate third-party binaries chosen per session |
| State — **authoring** (agents, skills) | **own** | `~/.agents/agents/*.md`, `~/.agents/skills/*/SKILL.md` — plain files, portable, app-neutral |
| State — **operational** (projects, sessions, transcripts, connections) | **mitigate** | app-internal, local; reachable only via `berdctl` / UI; no on-disk config found and no documented export path |
| Model | **rent** | provider connections per harness (Anthropic, OpenAI, …) |

Exit path: authoring state relocates by copying two directories. Operational state
(project definitions, session history, connection wiring) has no verified export —
re-creating a tenant on another shell means re-running `berdctl project create`,
re-wiring connections by hand, and losing transcripts. The waiver in the companion
`RuntimeConformanceProfile` covers harness, operational state, and model.

---

## New findings

### A. The harness layer can be plural and late-bound → sharpens FS-400.7
FS-400.7 (from the Claude Code pass) established that shell sovereignty decomposes
into harness / state / model. Berd shows the **harness slot can hold a set, resolved
per invocation** — one shell, six selectable loops, chosen at `berdctl session
create`. Consequences the spec does not yet cover:

1. `shell_sovereignty.harness` cannot always be a scalar. For a multi-harness shell
   it is the shell's own classification **plus** the set of loops it can bind, each
   with its own verdict.
2. This is *not* §9.11's split-runtime binding. Split-runtime is **one port → one
   substrate** (Letta hosts memory, Buzz hosts triggers). Here **all four ports bind
   to one shell**, and the *execution* underneath varies per session. Same ports,
   different loop. The spec needs both concepts, not one.
3. It is a sovereignty *hedge*: a tenant whose ports bind to a multi-harness shell
   can swap the rented model layer by switching harness, without re-authoring
   anything. That is portability the four prior runtimes could not demonstrate —
   and it is the strongest evidence to date for the ports-as-contract claim, since
   the same generated bundle is consumed by a shell that then runs it on Claude
   Code, Codex, or goose.

### B. The state layer splits into authoring state vs operational state → refines FS-400.7
Claude Code's `state: own` was a single verdict because everything (CLAUDE.md,
`.claude/`, transcripts, memory) sat on local disk in plain files. Berd splits it:
**authoring state** (agents, skills) is plain portable markdown under `~/.agents/`,
while **operational state** (projects, sessions, transcripts, connections) is
app-internal with no file surface. Both are local — so a naive "does it leave your
machine" test says `own` for both — but only one is *portable*, and portability is
what the Phase-7 exit plan actually depends on. Locality and portability are
different properties, and the sovereignty classification should track portability.

### C. The session is the binding point for `model_tier` and `ownership` → §9.3 gap
`SkillManifest.model_tier` (v1.4.0) says a runtime "maps `advanced` to their premium
tier." On Claude Code that is install-time configuration. On Berd, harness, model,
**and persona** are all arguments to `berdctl session create` — bound per
invocation, not per install. So the spec's implicit assumption (a skill's model tier
resolves once, at install) does not hold generally. `ownership` behaves the same way:
`hybrid` is expressed by *how a session is driven* (`session send --if-running steer`
mid-run, or `queue` for a follow-up), not by a declared property of the installed
skill. Invocation-time binding deserves naming in §9.3.

### D. §10 HarnessBundle validated a second time — context composes by *lifetime*, not by file
The bundle converts cleanly to Berd, which is real evidence for §10's "derived
markdown view for file-based harnesses" claim on a runtime it was not designed for.
One thing did not carry: the Claude Code converter composes every bundle section
into **one** `CLAUDE.md`. Berd cannot, because it composes context at three scopes
with three different lifetimes:

| Scope | Vehicle | Lifetime |
|---|---|---|
| Workspace | `<workspace>/AGENTS.md`, walked per attached dir and injected as `<workspace-instructions>` | every session with that workspace attached, any harness, any persona |
| Project | project instructions (`berdctl project create --instructions`) | every session in the project, across workspaces |
| Session | the agent persona (`~/.agents/agents/<slug>.md`) | one session; **swappable per invocation** |

The split follows from the lifetimes, not from the topics: the memory boundary must
hold for *any* agent, so it goes to `AGENTS.md`; the tenant contract (soul,
identity, purpose, memory map, tools) describes *this* agent, so it goes to the
persona; project instructions carry a pointer rather than a second copy, because two
authoritative copies of the boundary is exactly the drift the boundary exists to
prevent.

This vindicates §10.3's decision to keep `boundary.md` a **separate file** rather
than a section of the root file: on a shell with swappable personas, the boundary
needs an independent home. It also suggests §10.1's bundle layout is under-specified
in one respect — it declares *which files exist*, but not **which are
persona-scoped and which are invariant**. A consumer targeting a multi-scope shell
has to infer that split. Recording it in the bundle would make the derived view
portable to any shell with scoped context, not just to single-file ones.

**Converter built and verified (this pass).** `bin/harness-to-berd` consumes a
HarnessBundle and emits `AGENTS.md` + `.agents/agents/{tenant}.md` +
`.agents/skills/{id}/SKILL.md` + a `berd-install/` operator kit (INSTALL,
project-instructions, connections checklist, per-skill launch commands). Against
`examples/face.works/harness-bundle`: 7 skills → 7 skill folders, 6 sections → one
persona, `boundary.md` → `AGENTS.md`, 8 integrations → a manual checklist, triggers
reported as 4 `on_demand` / 2 `scheduled` / 1 `event`.
End-to-end: installing the generated persona and one generated skill into
`~/.agents/` had Berd discover both (`berdctl agent list` → `face.works`;
`berdctl skill list` → `global:/Users/…/.agents/skills/design-eye-evaluator`), then
they were removed. Two things the paper mapping missed, both caught by writing the
converter:

1. **Berd skill `name` is load-bearing, not display-only.** It must equal the folder
   name in lowercase kebab-case — the opposite of Claude Code, where `name` is
   display-only and the id comes from the directory. Human-readable names have to
   move to `metadata.display_name`.
2. **`description` is the trigger surface.** Berd matches skills to a request by
   description, so a bundle skill's opening paragraph alone under-triggers; the
   converter folds the firing condition (`trigger`, `schedule`, `event_name`) into
   the description text. The bundle also flattens §9.3's `event` object to
   `event_name`/`event_source` in markdown — the converter accepts both shapes.

---

## Five-runtime synthesis

| | Buzz | Letta | OpenAI | Claude Code | Berd |
|---|---|---|---|---|---|
| Corner | collab/audit | memory/context | hosted/rented | file-native/local | **multi-harness shell** |
| `MemoryMap` | ❌ keyword | ✅ semantic+boundary | 🟡 semantic, no boundary, rented | 🟡 file+grep, no boundary | ❌ **none** |
| `ContextManifest` | ❌ | ✅ blocks | ❌ | ✅ file hierarchy | 🟡 scoped: AGENTS.md / project / persona |
| `SkillManifest` triggers | ✅ full | ❌ sleep-time | ❌ | 🟡 3/4 | 🟡 **1/4 native** (+1 UI-only) |
| `IntegrationManifest` | ✅ | ✅ | ✅ | ✅ MCP file | ❌ **UI-only, no file** |
| identity / audit | ✅ / ✅ | ❌ / ❌ | ❌ / ❌ | ❌ / ❌ | ❌ / ❌ |
| sovereignty | own | own | rent-all | own-harness+state / rent-model | **plural harness / split state / rent-model** |

Confirmed a fifth time: descriptive governance metadata is homeless on every
runtime; crypto identity + tamper-evident audit remain Buzz-only. Newly stressed:
`IntegrationManifest` had been native on all four prior runtimes — Berd shows that
is not guaranteed, and a shell can front MCP-capable harnesses while offering no
machine-writable integration surface of its own. New this pass: the harness layer
can be plural and late-bound (A), state splits authoring vs operational (B),
`model_tier`/`ownership` bind at invocation (C), and §10 has a second consumer (D).

---

## Provenance

- Facework: `PROTOCOL.md` §9, §9.3, §9.11, §9.12, §10; `bin/harness-to-claude-code`.
- Berd 0.6.2 on this machine, verified from source-of-record rather than prose:
  `berdctl {info,agent,skill,project,session,folder} --help`; `berdctl info
  harnesses|models`; the app's own bundled skills
  (`~/Library/Application Support/xyz.block.berd/skills/{agent-builder,skill-builder,berd-help}/`),
  including `berd-help/references/{projects,skills,sessions,agents,automations,connections-and-extensions,settings}.md`;
  the on-disk agent/skill files under `~/.agents/`; and `berd.sqlite`
  (`_sqlx_migrations`, `layout_items`, `layout_state` only).
- Live check: generated persona + skill installed, discovered by `berdctl agent
  list` / `berdctl skill list`, then removed.
- `AGENTS.md` as workspace instructions: verified against the Berd source at
  Facework 0.0.44 (`src-tauri/src/commands/workspace_context.rs` —
  `const AGENTS_FILENAME: &str = "AGENTS.md"`, walked per workspace dir and
  injected as `<workspace-instructions>`), recorded in `ROADMAP.md` and acted on
  in this repo's own `AGENTS.md`. The Berd source is **not** present on this
  machine now, so that citation is inherited from the prior pass rather than
  re-verified here.
- Flagged provisional (inferred from absence, not from a positive source):
  - No memory primitive — no memory noun in `berdctl`, no memory directory in app
    data, no mention in the bundled help references.
  - Operational state has no export path — not found in app data, no `berdctl`
    noun; `berd-help` does reference session history/archive/fork/**import**
    behavior (`src/shared/i18n/locales/en/sessions.json`), so an import/export
    surface may exist in the UI and was not verifiable here.
  - The shell's `mitigate` classification rests on **not being self-hostable**,
    not on secrecy: the source was inspected at 0.0.44, but it is not in this
    environment and no license was verified here.
