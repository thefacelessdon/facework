# Runtime Ports ↔ Letta — Gap Analysis (second runtime, opposite corner)

Date: 2026-08-05
Status: Draft finding (methodology note)
Scope: Second validation of Facework Protocol §9 Runtime Ports + §9.11 against a
runtime chosen to be strong exactly where Buzz was weak — Letta (formerly MemGPT;
github.com/letta-ai/letta, Apache-2.0).
Companion: `methodology/runtime-ports-buzz-gap-2026-08-04.md` (first runtime),
`standards/source/fs400-runtime-buzz-validation-2026-08-04.md` (FS-400 input).

---

## Why Letta

Buzz was a collaboration/execution/audit runtime: it hosted `SkillManifest`
triggers, `IntegrationManifest` wiring, cryptographic identity, and a
tamper-evident audit log — and had **no home** for `MemoryMap` structure or
`ContextManifest` composition. Letta is the deliberate inverse: a **memory-first
runtime** whose entire product is managing what sits in the context window. If
§9.11's split-runtime model is right, Letta should light up precisely the ports
Buzz couldn't host, and go dark on the ones Buzz aced. It does. That inversion is
the finding.

---

## Headline: the partition inverts, and no single runtime hosts all four

| Port | Buzz | Letta |
|---|---|---|
| `MemoryMap` | ❌ event-native, no structure, keyword FTS | ✅ **best fit** — semantic archival (pgvector), shared + read-only blocks, org/agent boundary |
| `ContextManifest` | ❌ flat persona prepend, no composition | ✅ **native** — blocks ARE declarative, budgeted, labeled context units |
| `SkillManifest` | 🟡 strong triggers, weak governance spine | 🟡 **weak triggers**, strong governance spine (HITL + tool rules) |
| `IntegrationManifest` | ✅ MCP wiring; governance homeless | ✅ MCP wiring; governance homeless |
| identity | ✅ per-agent keypairs | ❌ DB string IDs, no crypto |
| audit | ✅ SHA-256 hash-chained, tamper-evident | ❌ mutable Postgres log, no tamper-evidence |

**Two runtimes, complementary, neither complete.** A full Facework tenant could
run Letta for memory/context/reasoning and Buzz for collaboration/triggers/audit,
with the manifest as the contract between them. That is §9.11's split-runtime
binding, now demonstrated from both sides with a concrete complementary pair.

---

## Port-by-port (Letta, contrasted with Buzz)

### MemoryMap — Letta's strongest port (Buzz's weakest)

Letta's three-tier hierarchy maps closely to what `MemoryMap` describes:

- **Core memory = memory blocks**, "pinned to the system prompt." Block fields:
  `label`, `description`, `value`, `limit` (char budget), `read_only`. These are
  named, budgeted, addressable knowledge units — the vault's units, minus the
  folder tree.
- **Archival memory = semantic search over embedded passages (pgvector).** This
  is exactly what Buzz lacked (Buzz was keyword FTS only). `MemoryMap.indexing[]`
  (the qmd/RAG layer) binds **natively** here.
- **Recall memory = persisted message history.**

Where it binds and where it doesn't:

- **`boundary` (tenant vs agent memory) — structurally present.** Org → User →
  Agent tenancy + **shared memory blocks** (attach one block to many agents,
  real-time) ≈ tenant knowledge; per-agent blocks + recall ≈ agent memory.
  Stronger than Buzz's engrams (real-time shared state). **But see the boundary
  finding below — Letta breaches it by default.**
- **`structure[]` (path tree) — partial.** Blocks are label-addressed and
  archival is tag-organized; there is no nested folder-path model. Facework's
  `wiki/clients/{id}/...` hierarchy flattens to labels + tags.
- **`written_by`/`read_by` (per-skill ACL) — coarser.** Letta has `read_only`
  per block and per-agent attach/detach, but no per-skill write attribution.
- **`retention[]` — via compaction**, not path policy. Letta auto-summarizes
  (sliding-window / all / self-compact) rather than archive-after-N-days per
  folder. Maps to `compactable`, not to path-based retention.
- **`conventions` (filename/frontmatter/wikilink)** — N/A; blocks aren't files.

**Net:** the semantic index + shared/read-only blocks are the opposite-corner
strength Buzz couldn't offer. Structure degrades from paths to labels+tags.

### ContextManifest — Letta's native home (Buzz had none)

This is the sharpest inversion. Buzz had no declarative context composition;
Letta's whole architecture *is* one.

- **Memory blocks pinned to the system prompt = declarative context.** You attach
  blocks; they compose the window. That is `ContextManifest`'s model, in the
  product.
- **`soul` / `identity` / `purpose` bundles → labeled blocks.** A block has a
  `label`, `description`, `value`, and `limit` — a named, budgeted context unit.
  `max_tokens` → block `limit`. Near one-to-one.
- **`load[]` source kinds:** `file` → block value / attached folder ✅;
  `query` → `archival_memory_search` / folder semantic search (first-class, though
  still tool-invoked at runtime) ✅-ish; `live` → MCP call at runtime (imperative,
  same as Buzz) 🟡; `section` → no equivalent ❌.
- **`composes[]` (bundle inheritance) → no equivalent.** Blocks are a flat
  attached set; they don't inherit. Gap.
- **The Agent File (`.af`)** serializes blocks + system prompt + tools + model
  config + tool rules + MCP servers into a portable definition — Letta's closest
  analogue to a combined Context+Skill manifest, and a real interop surface.
- **Compaction** is the runtime-provided guarantee behind `max_tokens`: Letta
  actively manages the budget (the original MemGPT flush); Facework only declares
  the hint.

**Net:** `soul`/`identity`/`purpose` map cleanly onto labeled blocks; the port
that had nowhere to live on Buzz is native here. Gap: no bundle composition, no
section-load.

### SkillManifest — weak triggers, strong governance spine (inverse of Buzz)

- **Triggers — weaker than Buzz.** Letta is request/response. `on_demand` ✅.
  `scheduled` / `event` / `continuous` → **no native cron / webhook / event
  engine**. The only background mechanism is **sleep-time agents** (idle /
  turn-count), a partial `continuous`. Buzz's workflow trigger engine
  (message/reaction/diff/schedule/webhook) has no Letta equivalent.
- **Governance spine — stronger than Buzz.** `ownership: hybrid` / `escalation`
  bind to Letta's **human-in-the-loop tool approval** ("block execution of tools
  before execution") — which *works*, unlike Buzz's unwired approval. And **tool
  rules** (`InitToolRule`, `TerminalToolRule`, `ContinueToolRule`, `ChildToolRule`,
  `ParentToolRule`, `ConditionalToolRule`, `MaxCountPerStepToolRule`) are an
  execution-ordering governance layer that *exceeds* the spec — `verifier_skill_id`
  binds to a `ChildToolRule`/`ConditionalToolRule` or a HITL gate.
- **`model_tier`** → agent model config ✅. **`multiplayer`** → shared blocks +
  groups + agent-to-agent messaging (`send_message_to_agent_and_wait_for_reply`,
  tag-broadcast) ✅. **`playbook`** → tool source/docstring (different
  granularity). **`sponsors`** → no field.

**Net:** Letta hosts the governance *gates* Buzz couldn't (approval, verifier via
tool rules) but lacks Buzz's *trigger* breadth.

### IntegrationManifest — identical conclusion to Buzz

MCP-native (Streamable HTTP / SSE / stdio); folders/sources bind `kind:
filesystem`; `used_by` → attached agents; auth delegated to MCP servers or env-var
secrets. And the governance metadata — `trust_boundary`, `pii`, `data_residency`,
`rate_limits` — has **no home**, exactly as on Buzz (`MaxCountPerStepToolRule` is
the nearest thing, a per-step call cap). **Two runtimes now agree the governance
metadata is homeless.**

### Identity & audit — Letta weak (Buzz strong)

- **Identity:** DB-assigned string IDs (`agent-…`); **no keypairs, no signing**
  (confirmed — `secret.py` encrypts stored env vars, it is not agent identity).
- **Audit:** message/step history + observability traces (`step_metrics`,
  `run_metrics`, `llm_trace`) — replayable, but a **mutable Postgres log with no
  tamper-evidence, no hash chain, no signing.** So Letta **cannot** give
  `DecisionLedger`/`ConsonanceCheck` the cryptographic runtime home Buzz offered.

### Sovereignty

Apache-2.0, self-hostable on Postgres+pgvector, core fully functional
self-hosted. Sovereignty-clean, though softer than Buzz's "relay you own" thesis:
the standalone Docker image is being de-emphasized toward local mode / App Server,
and Letta Cloud carries templates/RBAC/scaling gravity. See the boundary finding
for a sharper sovereignty concern.

---

## Two new findings this comparison surfaces

### A. The memory boundary is a runtime *behavior*, not just a structure

Letta **has** the tenant/agent boundary structurally (shared vs per-agent blocks)
but **violates it by default**: **sleep-time agents autonomously consolidate
message history into shared memory blocks** with no human action.
`MemoryMap.boundary.rule` states runtimes MUST NOT auto-promote tenant content
without explicit user action. So Letta is a runtime that can *structurally*
satisfy the boundary while *behaviorally* breaching it.

This is the Sovereignty-loop floor (COS §VII, methodology/loop-model.md) applied
to memory: an agent rewriting shared/tenant memory without a human ruling is the
floor breached from below — the same class as the 14th & Co ADR-015 counterfeit,
now in the memory tier. **Refinement:** `MemoryMap.boundary` conformance needs a
check on runtime *behavior* (does autonomous memory editing cross the tenant/agent
line?), not only structure. Read-only blocks and disabling sleep-time write-access
to tenant blocks are the mitigations a conformant binding would declare.

### B. Governance splits into enforceable gates vs descriptive metadata

FS-400.4 currently treats all governance as one "declared vs enforced" axis. Two
runtimes show governance actually splits into two kinds with different homes:

- **Enforceable gates** — `verifier_skill_id`, `escalation`, `ownership: hybrid`.
  A capable runtime **can host** these: Letta does (HITL approval + tool rules);
  Buzz partially (approval events, executor unwired). These bind to real runtime
  mechanisms.
- **Descriptive metadata** — `trust_boundary`, `pii`, `data_residency`,
  `rate_limits`. **Neither** runtime hosts these; they are inherently
  authoring-layer.

**Refinement:** FS-400.4 should name this split. "Declared vs enforced" is the
right axis for descriptive metadata; enforceable gates get a third state —
*enforced by the runtime's own mechanism* — and a conformance profile should say
which gate binds to which mechanism.

---

## What this does to FS-400 (two data points now)

The Buzz→Letta pair validates the §9.11 concepts from both sides:

- **FS-400.2 Partial conformance** — confirmed twice; both runtimes are partial,
  in complementary directions.
- **FS-400.3 Split-runtime binding** — now backed by a concrete complementary
  pair: Letta (MemoryMap + ContextManifest + governance gates) + Buzz
  (SkillManifest triggers + identity + audit), manifest as the contract.
- **FS-400.4 Authoring source-of-truth** — strengthened and refined: the
  descriptive governance metadata is homeless in *both* runtimes (inherently
  authoring-layer), while enforceable gates split off as runtime-hostable (finding
  B).
- **Runtime-provided guarantees** — differ by runtime and should be cataloged, not
  port-required: Buzz gives tamper-evident audit; Letta gives context compaction +
  tool-rule sequencing + semantic retrieval.

Toward §9.2's three-reference-tenants bar: **this is the second.** A third —
ideally a hosted/rented runtime that fails the sovereignty port (e.g. OpenAI
Assistants) — would complete the set and test the ports against a runtime that
breaches ownership by construction.

---

## Provenance

- Facework: `PROTOCOL.md` §9, §9.11; `examples/face.works/runtime-ports/*.yaml`.
- Letta (docs.letta.com + letta-ai/letta@main): memory blocks + tiers
  (`schemas/passage.py`, memory-blocks docs); tool rules (`schemas/tool_rule.py`);
  Agent File (`schemas/agent_file.py`); MCP (`schemas/mcp.py`); folders/sources
  (`schemas/folder.py`, `source.py`); tenancy (`schemas/identity.py`, org/user);
  compaction (guides/agents/compaction); sleep-time agents; HITL tool approval.
- Flagged partial: exact context-window component ordering (JS-rendered docs);
  "no native trigger" is inferred from schema absence; precise Cloud-only feature
  matrix not published.
