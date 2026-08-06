# FS-400 Source Input — Runtime Shells validated (Buzz + Letta + OpenAI + Claude Code)

Date: 2026-08-04 (Buzz), updated 2026-08-05 (Letta + OpenAI + Claude Code)
Status: **Deferred / Not canonical.** Source input to the FS-400 Runtime
specification, which activates with the standards track post-1.0 (see
[`../README.md`](../README.md)).
Companion working analyses:
[`methodology/runtime-ports-buzz-gap-2026-08-04.md`](../../methodology/runtime-ports-buzz-gap-2026-08-04.md) (Buzz),
[`methodology/runtime-ports-letta-gap-2026-08-05.md`](../../methodology/runtime-ports-letta-gap-2026-08-05.md) (Letta),
[`methodology/runtime-ports-openai-gap-2026-08-05.md`](../../methodology/runtime-ports-openai-gap-2026-08-05.md) (OpenAI),
[`methodology/runtime-ports-claude-code-gap-2026-08-05.md`](../../methodology/runtime-ports-claude-code-gap-2026-08-05.md) (Claude Code)

---

## Why this document exists

`standards/README.md` records the open issue: *"FS-400 Runtime spec is an
outline — and must reconcile with the Runtime Ports that already shipped."*
Runtime Ports (`PROTOCOL.md` §9) shipped at 0.0.5–0.0.8 as live artifacts; the
abstract FS-400 specification did not. Reconciling them requires evidence that
the ports describe a real runtime, not an imagined one.

This memo supplies that evidence from **four external runtime shells the practice
did not design, spanning the corners**: Buzz (github.com/block/buzz, a Nostr-relay
collaboration/execution/audit runtime), Letta (github.com/letta-ai/letta, a
memory/context runtime) — both Apache-2.0 and self-hostable — OpenAI's hosted
agent surface (Responses API + Agents SDK), chosen because it **fails the
sovereignty port by construction**, and Claude Code / Agent SDK, a **file-native
local harness** (the corner §10's HarnessBundle targets). Buzz facts are cited to
source files; the rest to their docs and repo schemas.

It proposes seven concepts FS-400 should adopt, binds each Runtime Port to the
runtimes, and lists the §9 refinements the exercise surfaced. The runtimes host
**complementary** port subsets — none hosts all four — the core evidence for
partial conformance and split-runtime binding; the third also tests whether the
spec correctly catches a runtime that violates the ownership thesis.

---

## Summary finding

Runtime Ports are the **right seams** — real runtimes consume them — but no
runtime hosts all four. Buzz and Letta **partially conform in complementary
directions**: Buzz hosts the collaboration/execution/audit ports (`SkillManifest`
triggers, `IntegrationManifest` wiring, identity, tamper-evident audit) and has
no home for `MemoryMap` structure or `ContextManifest` composition; Letta hosts
`MemoryMap` (semantic store + shared/read-only memory units) and `ContextManifest`
(labeled, budgeted context units) natively but lacks native triggers, crypto
identity, and tamper-evident audit. OpenAI's hosted surface wires all four ports
but is the sovereignty-failing corner — the runtime shell itself is rented,
closed, and non-relocatable — which is what forces FS-400.6 below. Claude Code /
Agent SDK is the file-native local corner: it hosts `ContextManifest` +
`IntegrationManifest` natively and 3/4 `SkillManifest` triggers, and its
sovereignty is **layer-split** — own-harness + own-state + rent-model — which
forces FS-400.7. The correct binding is a **split runtime** with the Facework
manifest as the cross-substrate contract, and the shell itself must be
sovereignty-classified, per layer. FS-400 should *expect* partial, multi-substrate
conformance, not a single monolithic runtime.

---

## Proposed FS-400 concepts

### FS-400.1 — Runtime Shell (definition)
A **Runtime Shell** is any system that operates a tenant world after Phases 1–8
produce it, by consuming one or more Runtime Ports. A Runtime Shell is a
*consumer* of the manifest, never its owner. Buzz, Letta, OpenAI's hosted
surface, and Claude Code / Agent SDK are the reference examples.

### FS-400.2 — Partial Conformance
A Runtime Shell **MAY** host a proper subset of the four ports. Conformance is
declared **per port**, not globally. A shell that hosts `SkillManifest` +
`IntegrationManifest` while delegating `MemoryMap` + `ContextManifest` to another
substrate is *partially conformant* and is a valid, expected deployment shape —
not a degraded one.

### FS-400.3 — Split-Runtime Binding
Ports **MAY** bind to different substrates within one deployment. The Facework
manifest is the **integration contract across substrates**. The two validating
runtimes are a complementary pair — a canonical split binding uses both:

| Substrate | Ports it hosts |
|---|---|
| Memory/context runtime (Letta) | `MemoryMap` (semantic archival + shared/read-only blocks), `ContextManifest` (labeled budgeted blocks; `soul`/`identity`/`purpose` → blocks) |
| Collaboration/execution/audit runtime (Buzz) | `SkillManifest` triggers (workflows), `IntegrationManifest` wiring (`mcp_servers`), identity, tamper-evident audit |
| Facework authoring layer | descriptive governance metadata + coherence artifacts — source of truth, not delegated |

Neither runtime alone hosts all four; the pair does. This is the split-runtime
model validated from both corners.

### FS-400.4 — Governance splits into enforceable gates and descriptive metadata
The two runtimes show governance is **two kinds, not one axis**:
- **Enforceable gates** — `verifier_skill_id`, `escalation`, `ownership: hybrid`.
  A capable Runtime Shell CAN host these: Letta binds them to human-in-the-loop
  tool approval and tool-execution rules; Buzz to approval events (executor
  wiring pending). A conformance profile states which gate binds to which
  mechanism.
- **Descriptive metadata** — `trust_boundary`, `sponsors`, `pii`,
  `data_residency`, `rate_limits`, `retention`. Homeless on **both** validating
  runtimes; inherently authoring-layer. It **remains authoritative in the manifest
  even when no runtime enforces it** — non-enforcement moves an attribute from
  *enforced* to *declared*, and *declared* is a documented delegation, not an
  unsatisfied gate.

FS-400 conformance MUST classify each governance attribute as gate or metadata,
and (for gates) record the runtime mechanism that binds it.

### FS-400.5 — The memory boundary is behavioral, not only structural
`MemoryMap.boundary` (tenant vs agent memory) is satisfied only if the runtime
(a) exposes distinct tenant-knowledge and agent-continuity stores **and** (b) does
not let an agent auto-promote content across that line without explicit human
action. Letta demonstrates the failure mode: it has the boundary structurally
(shared vs per-agent blocks) but **breaches it by default** — sleep-time agents
autonomously rewrite shared memory. A conformant binding declares the mitigation
(read-only tenant blocks; no autonomous write to the tenant store). This is the
Sovereignty-loop floor (COS §VII) at the memory tier — the same class as the
14th & Co ADR-015 counterfeit that 0.0.14's guard-rail closed, one layer down.

### FS-400.6 — The Runtime Shell is itself a SovereigntyMap dependency
The first two runtimes were self-hostable, so sovereignty only ever bit
integrations *inside* the tenant. OpenAI's hosted surface is the first where the
**shell itself** is the rented dependency: models, execution, vector stores,
stored state, and the audit log are OpenAI-hosted and non-relocatable; only the
client SDK is open. Tracing this against the spec exposed the gap — nothing
classified the runtime shell itself.

A **Runtime Shell that is not self-hostable is a `rent` dependency with maximal
blast radius** — the substrate for all four ports at once. Phase 7 MUST classify
the shell in the `SovereigntyMap`; a non-self-hostable shell requires an explicit
waiver with a mitigation path: exit/export plan (can tenant state relocate to
another shell?), data posture (retention, training, residency), and a recorded
owner ruling (a Sovereignty-loop decision, not a default). Facework does not
forbid a rented runtime — it forbids a *silent* one.

Corollary: a **runtime-provided guarantee can be a liability.** OpenAI's hosted
state and tracing are observability guarantees that are simultaneously ownership
costs (mutable, remote, non-portable). A conformance profile records both — what
the shell provides, and where tenant state and audit live.

This is the only FS-400 concept about *rejection* rather than *fit*: the spec
does not (and should not) reject a rented runtime, but it must force the ownership
decision into the open.

### FS-400.7 — Shell sovereignty decomposes by layer (harness / state / model)
FS-400.6 classified the shell as a single own/rent dependency. The fourth
validation (Claude Code / Agent SDK) shows that verdict is too coarse: sovereignty
decomposes into three layers — **harness** (the agent loop), **state** (memory,
config, transcripts), and **model** (the LLM). Claude Code is **own-harness +
own-state + rent-model**: an open harness running as a local subprocess, all state
on the tenant's disk and portable, with only model API calls leaving. That is a
materially smaller ownership cost than OpenAI's **rent-all** (harness, state, and
model all vendor-hosted, non-relocatable). The Phase-7 waiver attaches to
whichever layer is actually rented and scopes its mitigation there, rather than
flattening every hosted dependency to "rent with maximal blast radius." A binding
records the per-layer verdict, not one own/rent stamp for the whole shell.

---

## Port-by-port binding to Buzz (with source citations)

Single normative Buzz kind registry: **`crates/buzz-core/src/kind.rs`** ("the
authoritative source for Buzz kind numbers", `u32` constants).

### SkillManifest → personas + workflows (partial)
A Facework skill is a *workflow-with-governance*; it decomposes across Buzz's
persona (`.persona.md`), skill dirs (`.agents/skills/`), and workflow engine
(`crates/buzz-workflow/src/schema.rs`). CLI consumer: `buzz workflows`
(`create`, `trigger`, `runs`, `approve`).

- **Triggers bind cleanly.** `trigger: scheduled` → workflow `on: schedule`
  (`cron`/`interval`); `trigger: event` → `message_posted` / `reaction_added` /
  `diff_posted` / `webhook`; `trigger: on_demand` → @mention.
- **`model_tier`** → persona `model: "provider:model-id"`. Binds.
- **`multiplayer`** → native (rooms-first). Free.
- **Governance spine does not bind cleanly.** `ownership: hybrid` /
  `escalation` rely on approval; the **protocol surface exists** —
  `KIND_WORKFLOW_APPROVAL_REQUESTED=46010`, `_GRANTED=46011`, `_DENIED=46012`,
  the generic `KIND_APPROVAL_GRANT=46030` / `KIND_APPROVAL_DENY=46031`, and the
  CLI verb `buzz workflows approve` — **but the executor resume path was
  reported not wired end-to-end** (runs mark `Failed` before reaching
  `WaitingApproval`). Bind as FS-400.4 *declared, not enforced* until wired.
- **`verifier_skill_id`** (gate output pre-publish) has **no declarative Buzz
  home**; closest is a `diff_posted` workflow into an approval gate. Stays
  authoring-side.

### IntegrationManifest → `mcp_servers` (best fit; governance stays declared)
Buzz is MCP-native: personas declare `mcp_servers`, packs declare `mcp_config`,
sessions get isolated MCP instances. Wiring binds directly (`used_by` ≈ which
personas hold the server; `kind: webhook` ↔ inbound `webhook` trigger + outbound
`call_webhook`). Every **governance** attribute — `trust_boundary`, `secrets`
refs, `rate_limits` (Buzz's 4-tier model reported *designed, not enforced*),
`pii`, `data_residency`, `failover` — has no home in Buzz and binds per FS-400.4
as *declared*.

### MemoryMap → engrams + notes + external vault (boundary binds; structure does not)
**Correction to first-draft analysis:** Buzz has a native two-tier memory model
that maps onto `MemoryMap.boundary`:
- **Runtime/agent memory** ≈ **engrams** — `KIND_AGENT_ENGRAM=30174`
  (addressable), CLI `buzz mem`, "persistent memory per NIP-AE". Related:
  `KIND_PERSONA=30175`, `KIND_MANAGED_AGENT=30177`.
- **Tenant memory** ≈ the shared event log + **NIP-23 long-form notes**
  (`buzz notes`, in-source "team knowledge base").

What does **not** bind: the vault's *structure*. Buzz memory is event-native, not
a path-addressable folder tree; retrieval is keyword FTS (no semantics); there is
no per-folder `written_by`/`read_by` ACL (channel membership is the only
granularity); no `retention[]` / `conventions` surface. FS-400 should treat
`MemoryMap.structure` as filesystem-first, with the log-native case bound as
"vault-over-MCP" (the worked example's `vault-fs` + `qmd`) and
`written_by`/`read_by` degrading to channel-level scope.

### ContextManifest → persona prompt (weak; no declarative composition)
Buzz session bootstrap is a flat static prepend: ACP harness prepends persona
prompt + pack `instructions.md`, bounded by `max_context_tokens`. There is no
composable bundle system and no `soul`/`identity`/`purpose` separation; the
`kind: query` / `kind: live` / `kind: section` source types have no declarative
home (they degrade to imperative REQ/FTS/MCP tool calls at runtime). This port
stays authoring-side; FS-400 should not expect a Runtime Shell to host declarative
context composition, only to accept a compiled static context blob.

---

## What Buzz supplies *beyond* the ports (candidate FS-400 "runtime guarantees")

FS-400 should recognize that a Runtime Shell can provide guarantees the ports
only gesture at as markdown. Buzz evidences two:

1. **Cryptographic audit substrate.** `crates/buzz-audit` — SHA-256 hash-chained,
   tamper-evident, single-writer (`pg_advisory_lock`); `KIND_AUDIT_ENTRY=48001`.
   Every skill invocation and agent action is a signed, searchable event. This is
   a *runtime* home for `DecisionLedger` / `ConsonanceCheck`, which are otherwise
   markdown. **Direction of fit: Facework governance artifacts → Buzz audit
   events.**
2. **Identity-scoped agents.** "Scoped by identity, not permission flags" =
   Nostr keypair + channel membership (NIP-29 `#h` tag, checked at REQ time) +
   injected MCP toolset. A richer, teammate-shaped model than a `human|agent|
   hybrid` string — and `buzz agents` is *owner-reviewed* agent creation, aligning
   with Facework's human-in-the-loop and Sovereignty posture.

### Code-review / CI binding (definitive, from source)
FS-400 reviewers will ask how review and CI events bind. Definitive answer from
`kind.rs`: **Buzz reuses NIP-34 and does not mint custom review kinds.** Patches
`KIND_GIT_PATCH=1617`, issues `1621`, status `1630–1633` are canonical NIP-34;
PR / PR-update `1618/1619` are Buzz extensions in the NIP-34 neighborhood.
**CI-result and approval semantics are carried by the workflow-execution kinds**
(`KIND_WORKFLOW_COMPLETED=46005` / `_FAILED=46006` as CI-style outcomes;
`46010–46012` + `46030/46031` as approvals), plus a chat-diff kind
`KIND_STREAM_MESSAGE_DIFF=40008`. Note the workflow family is **not** a
contiguous block: execution is `46001–46007`, approvals `46010–46012`,
`KIND_WORKFLOW_TRIGGER=46020`, generic approvals `46030/46031`; the workflow
*definition* is addressable at `KIND_WORKFLOW_DEF=30620`.

### Agent search surface (the ContextManifest `kind: query` runtime path)
`crates/buzz-search`: `pub async fn search(pool, query: &SearchQuery) ->
Result<SearchResult, SearchError>`. Exposed **on the Nostr wire as the NIP-50
`search` filter in REQ** (`crates/buzz-relay/src/handlers/req.rs`), one-shot (no
persistent subscription), community-scoped, `FullText` mode
(`websearch_to_tsquery`) over a generated `tsvector`. Caps: `per_page` clamped to
**500**, query text to **4096 chars**. Re-authorizes per hit ("search is never
the access boundary"). Agent-facing verb: `buzz messages search` (`--query`,
`--author`, `--since`, `--limit`). This is what a Facework `ContextManifest`
`kind: query` source compiles to on Buzz.

---

## Maturity gating (which bindings are live today)

FS-400 conformance claims must gate on these, all reported from source/ARCH:
- **Approval executor not wired end-to-end** → `ownership: hybrid` binds as
  *declared, not enforced*.
- **Rate-limit / 4-tier permission model not enforced** (always-allow stub) →
  `IntegrationManifest` scope/rate_limits bind as *declared*.
- **`send_dm` / `set_channel_topic` workflow actions** return `NotImplemented`.
- **No semantic memory** — keyword FTS only.

Buzz is explicit that it is unfinished. FS-400 should date any Buzz conformance
profile to a Buzz version, since these gates are expected to close.

---

## Second validation: Letta (opposite corner)

Letta (a memory-first agent runtime) was chosen to test the split-runtime model
from the corner opposite Buzz. Full port-by-port:
`methodology/runtime-ports-letta-gap-2026-08-05.md`. Summary binding:

| Port | Buzz | Letta |
|---|---|---|
| `MemoryMap` | no home (event-native, keyword FTS) | **native** — semantic archival (pgvector), shared + read-only blocks, org/agent boundary |
| `ContextManifest` | no home (flat prepend) | **native** — memory blocks are labeled, budgeted context units; `soul`/`identity`/`purpose` → blocks |
| `SkillManifest` | strong triggers, weak governance | weak triggers (no cron/webhook; sleep-time only), strong governance (HITL + tool rules) |
| `IntegrationManifest` | MCP wiring; metadata homeless | MCP wiring; metadata homeless |
| identity / audit | keypairs + hash-chained audit | DB string IDs; mutable log (no tamper-evidence) |

The inversion is the point: Letta hosts exactly the ports Buzz could not, and
goes dark on the ports Buzz aced. It confirms FS-400.2/.3 from the opposite side
and surfaced FS-400.4 (governance split) and FS-400.5 (behavioral boundary)
above. Two runtimes now agree that descriptive governance metadata is homeless —
inherently authoring-layer. Letta is the **second of §9.2's three reference
tenants**; the third (OpenAI, below) completes the set.

---

## Third validation: OpenAI hosted surface (sovereignty-failing corner)

OpenAI's hosted agent surface (Responses API + vector stores + Agents SDK) was
chosen to test the spec's *rejection* behavior, not its fit. Full port-by-port:
`methodology/runtime-ports-openai-gap-2026-08-05.md`. It wires all four ports —
function calling + a versioned `/v1/skills` registry (a near-match to
`SkillManifest` + playbook), vector stores + `file_search` (semantic memory),
first-class MCP — but with the same structural gaps as the others (no native
triggers, imperative context, no tenant/agent boundary primitive, governance
metadata homeless) plus the decisive one: **sovereignty fails by construction.**
The runtime is 100% OpenAI-hosted and non-relocatable; only the client SDK is
open; identity is org/API-key (no crypto); audit is mutable traces. Live proof of
the lock-in risk: OpenAI's own Assistants API sunsets 2026-08-26 and Agent Builder
is deprecated — the hosted agent artifact is disposable.

Three-runtime synthesis (§9.2 bar met):

| | Buzz | Letta | OpenAI hosted |
|---|---|---|---|
| Corner | collaboration/audit | memory/context | hosted/rented |
| `MemoryMap` | ❌ keyword | ✅ semantic + boundary | 🟡 semantic, no boundary, rented |
| `ContextManifest` | ❌ imperative | ✅ declarative blocks | ❌ imperative |
| triggers | ✅ | ❌ | ❌ |
| identity / audit | ✅ keypairs + hash-chain | ❌ | ❌ |
| sovereignty | ✅ self-host | ✅ self-host | ❌ fails by construction |

Confirmed across all three: descriptive governance metadata is homeless
everywhere (FS-400.4 — authoring-layer, high confidence now); enforceable gates
are partially hostable on all three; native triggers are Buzz-only; declarative
context composition is Letta-only; crypto identity + tamper-evident audit are
Buzz-only. The ports held across all three corners. The one thing that must land
before Runtime Ports go universal-MUST is **FS-400.6** — otherwise the spec would
bless a fully-rented runtime with no ownership accounting, contradicting its own
first principle.

---

## Fourth validation: Claude Code / Agent SDK (file-native local corner)

Claude Code was the first target chosen and audited **by the encoded skill itself**
(`/runtime-validation-pass` + the `runtime-ports-auditor` agent) — the program
dogfooding its own method. Full port-by-port:
`methodology/runtime-ports-claude-code-gap-2026-08-05.md`. It occupies the
file-native local corner none of the first three did (Buzz = relay, Letta =
memory-server, OpenAI = hosted). It hosts `ContextManifest` (CLAUDE.md hierarchy +
path-scoped rules) and `IntegrationManifest` (MCP + permissions) natively, 3/4
`SkillManifest` triggers (Skills/Hooks/Routines), partial `MemoryMap` (CLAUDE.md +
auto-memory; file+grep, no boundary), and no crypto identity/audit.

Two findings it alone produced:
- **FS-400.7** (above) — sovereignty decomposes by layer; Claude Code is
  own-harness + own-state + rent-model, distinct from OpenAI's rent-all.
- **HarnessBundle (§10) validated** — its on-disk layout (CLAUDE.md,
  `.claude/skills/`, `.claude/mcp.json`, settings) is the first real target for
  §10's derived markdown view, which had been asserted but never exercised. A
  HarnessBundle → Claude Code converter is **built** (`bin/harness-to-claude-code`,
  0.0.23) and verified against the face.works bundle.

Four-runtime synthesis:

| | Buzz | Letta | OpenAI | Claude Code |
|---|---|---|---|---|
| Corner | collab/audit | memory/context | hosted/rented | file-native/local |
| `MemoryMap` | ❌ keyword | ✅ semantic+boundary | 🟡 rented | 🟡 file+grep |
| `ContextManifest` | ❌ | ✅ blocks | ❌ | ✅ file hierarchy |
| `SkillManifest` triggers | ✅ full | ❌ | ❌ | 🟡 3/4 |
| identity / audit | ✅ / ✅ | ❌ / ❌ | ❌ / ❌ | ❌ / ❌ |
| sovereignty | own | own | rent-all | own-harness+state / rent-model |

Confirmed across all four: descriptive governance metadata is homeless everywhere
(FS-400.4); enforceable gates are partially hostable everywhere; crypto identity +
tamper-evident audit remain Buzz-only; `ContextManifest` is hostable natively by
two distinct mechanisms (Letta blocks, Claude Code file hierarchy). §9.2's
three-tenant bar was met at 0.0.18; this fourth pass adds the file-native corner
and the layer-decomposed sovereignty view. What remains before universal-MUST is
the conformance-profile format (FS-400.6 + FS-400.7 are now in canon).

---

## §9 refinements — status

All seven FS-400 concepts are folded into `PROTOCOL.md` as additive text:

- **Applied 0.0.15** (Buzz pass): §9.1 substrate-agnostic + ports-bind-to-
  different-substrates; §9.4 `MemoryMap` filesystem-first with non-filesystem
  binding; §9.11 (Runtime Shell, partial conformance, split-runtime binding,
  declared-vs-enforced, runtime-provided guarantees).
- **Applied 0.0.17** (Letta pass): §9.4 behavioral-boundary check (FS-400.5);
  §9.11 governance split into gates vs metadata (FS-400.4), complementary-pair
  binding, and Letta-side runtime guarantees.
- **Applied 0.0.18** (OpenAI pass): §9.11 shell-is-a-SovereigntyMap-dependency +
  guarantee-can-be-liability (FS-400.6); a **calibrated Phase 7 gate line**
  requiring a non-self-hostable shell to carry an explicit waiver (no-op when no
  Runtime Shell is declared, so it does not break port-less projects).
- **Applied 0.0.22** (Claude Code pass): §9.11 shell sovereignty **decomposes by
  layer** (harness/state/model — FS-400.7); §10 HarnessBundle validation note (a
  file-native runtime maps cleanly onto the derived view). First pass produced by
  the `/runtime-validation-pass` skill itself.

None break existing conformance; all are additive clarifications. A v0.1.0 pass
may formalize the conformance-profile format (per-attribute gate/metadata
classification; which gate binds which mechanism; the shell-waiver contents).

---

## Provenance

- Facework: `PROTOCOL.md` §9; `examples/face.works/runtime-ports/*.yaml`.
- Buzz (source, github.com/block/buzz@main): `crates/buzz-core/src/kind.rs`
  (kind registry), `crates/buzz-workflow/src/schema.rs` (workflow schema),
  `crates/buzz-search/src/{lib,query}.rs` + `crates/buzz-relay/src/handlers/req.rs`
  (search), `crates/buzz-cli/src/lib.rs` (CLI command tree),
  `crates/buzz-persona/PERSONA_PACK_SPEC.md` + `examples/meadow-core/`
  (persona/pack), `crates/buzz-audit` (audit).
- Letta (docs.letta.com + letta-ai/letta@main): memory blocks/tiers +
  `schemas/passage.py`; tool rules `schemas/tool_rule.py`; Agent File
  `schemas/agent_file.py`; MCP `schemas/mcp.py`; folders/sources
  `schemas/folder.py`; tenancy `schemas/identity.py`; compaction + sleep-time
  agents + HITL tool approval (guides).
- OpenAI (developers.openai.com/api/docs + openai.github.io/openai-agents-python,
  Aug 2026): Deprecations (Assistants sunset 2026-08-26; Agent Builder 2026-11-30);
  Responses/Conversations API; File search + vector stores; Skills (`/v1/skills`);
  MCP connectors; Your data (retention/training/ZDR/residency); Agents SDK
  (handoffs/guardrails/sessions/tracing).
- Claude Code / Agent SDK (code.claude.com/docs, Aug 2026): skills, hooks,
  routines, memory (CLAUDE.md + auto-memory), rules, MCP, permissions, Agent SDK
  hosting (subprocess + local session storage).
- Flagged reported-not-source-verified: Buzz approval-executor wiring gap and
  rate-limit non-enforcement; Letta "no native trigger" (inferred from schema
  absence) and exact context-window ordering; OpenAI `truncation:auto` middle-drop
  (thin docs) and enterprise residency legal page (403 to fetch); Claude Code no
  crypto identity/audit (inferred from absence in docs).
