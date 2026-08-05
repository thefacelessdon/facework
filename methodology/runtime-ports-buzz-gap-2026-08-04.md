# Runtime Ports ↔ Buzz — Gap Analysis

Date: 2026-08-04
Status: Draft finding (methodology note)
Scope: Validate Facework Protocol §9 Runtime Ports against a real candidate
runtime shell — Buzz (github.com/block/buzz, Block, Apache-2.0).

---

## What this is

§9.1 declares that Runtime Ports describe "how a tenant world exposes itself to
**any runtime shell** — the intelligence layer that operates the world after
Phases 1–8 produce it." That claim was never tested against a real runtime.
This note tests the four ports (`SkillManifest`, `MemoryMap`, `ContextManifest`,
`IntegrationManifest`) against Buzz's actual agent, workflow, event, memory, and
integration surface.

**Sourcing caveat.** Facework side is exact (spec §9 + the four worked-example
manifests in `examples/face.works/runtime-ports/`). Buzz side is from repo source
(persona spec, `buzz-workflow/src/schema.rs`, `plugin.json`, crate listing) plus
prose docs. Where a Buzz fact is second-hand (exact Nostr kind integers) or
aspirational-not-wired, it is flagged. Conclusions do not depend on the flagged
integers.

---

## Headline finding: the ports split into two groups

Buzz does not map evenly across the four ports. It **partitions** them:

1. **Collaboration / execution / audit ports — Buzz is a strong or superior
   host.** Agent identity, triggers, integration wiring, multiplayer, and audit
   all have native, often better, homes in Buzz.

2. **Knowledge / coherence / governance ports — Buzz has no home.** The vault
   (`MemoryMap`), declarative context composition (`ContextManifest`), and the
   governance metadata woven through every port (trust boundary, verifier gates,
   PII, retention, sponsors) do not exist in Buzz's model and cannot be expressed
   in its config.

**The correct mental model is therefore a *split runtime*, not adoption.** A
Buzz-hosted Facework tenant runs on two substrates: Buzz carries rooms + agents +
triggers + audit; an **external filesystem vault** (reached over MCP — exactly
the `vault-fs` + `qmd` integrations already in the worked example) carries the
knowledge base. The Facework manifests remain the **authoring source of truth**
that *compiles down* to Buzz artifacts — they are not replaced by them.

This is consistent with §9.10: the `HarnessBundle` is a derived view. For Buzz,
the derived view is **persona packs + workflow YAML**, not markdown files.

---

## Port-by-port

### 1. SkillManifest — partial fit; governance layer is the gap

Facework's "skill" is a *workflow-with-governance*. Buzz has no single object for
it — it decomposes across three Buzz surfaces:

- **persona** (`.persona.md`: identity + system prompt + `model`, `triggers`,
  `subscribe`, `mcp_servers`, `skills[]`)
- **skill dirs** (Claude-style `SKILL.md` copied into `.agents/skills/`)
- **workflow** (`buzz-workflow`: `trigger` → `steps`)

| Facework field | Buzz mapping | Verdict |
|---|---|---|
| `trigger: on_demand` | @mention / persona `triggers.mentions` | ✅ |
| `trigger: scheduled` + `schedule` (cron) | workflow `trigger.on: schedule` (`cron`/`interval`) | ✅ |
| `trigger: event` + `event` | workflow `message_posted` / `reaction_added` / `diff_posted` / `webhook` | ✅ |
| `trigger: continuous` | persona `triggers.all_messages: true` (loosely) | 🟡 |
| `model_tier: standard\|advanced` | persona `model: "provider:model-id"` + pack defaults | ✅ |
| `multiplayer` | native — Buzz is rooms-first | ✅ (free) |
| `playbook` (md path) | persona `skills[]` dir / `instructions.md` | 🟡 fit, different granularity |
| `ownership: human\|agent\|hybrid` | no field — implied by which keypair runs it | 🟡 |
| `escalation` / `ownership: hybrid` | workflow `request_approval` action | ❌ **designed, not wired end-to-end** (runs mark `Failed`) |
| `verifier_skill_id` (gate output pre-publish) | no declarative equivalent; closest is `diff_posted` + approval | ❌ real Facework affordance with no Buzz home |
| `advisor_escalation` (one-shot advisor call, own audit trail) | agent→agent @mention; each call audited | ✅ conceptually strong |
| `sponsors[]` (accountable humans) | no field; would be a channel/tag convention | 🟡 |
| `depends_on_capabilities[]` | no `CapabilityMap` analogue | ❌ |
| `reads_memory` / `writes_memory` | channel membership (coarse) — see MemoryMap | 🟡 |

**Finding:** triggers and model selection port cleanly. The *governance spine* of
a Facework skill — `ownership: hybrid` escalation, `verifier_skill_id`,
`sponsors`, capability dependencies — is exactly what Buzz under-serves.
Approval gating (the mechanism `hybrid` relies on) is present in schema but
**not functional** today.

### 2. MemoryMap — fundamental abstraction mismatch

This is the largest gap. **Facework `MemoryMap` is file/vault-native; Buzz is
event-log-native.** They are not the same abstraction.

| Facework MemoryMap | Buzz reality |
|---|---|
| Hierarchical vault (`root` + `structure[]` folder tree) | Flat append-only signed event log; no folders, no paths |
| Per-folder `written_by` / `read_by` (skill-level ACL) | Channel membership (who posts/reads kind:9 in a channel) — coarser |
| `boundary`: tenant memory vs runtime/agent memory | **Maps** — shared log + NIP-23 notes (`buzz notes`, "team knowledge base") ≈ tenant memory; **agent engrams** (`KIND_AGENT_ENGRAM=30174`, `buzz mem`, NIP-AE) ≈ runtime/agent memory |
| `indexing[]` (qmd, on_write/scheduled) | Postgres FTS (`tsvector` GIN), keyword-only, no semantic/vector |
| `retention[]` per path | monthly partitions; no per-path policy surface |
| `conventions` (filename/frontmatter/wikilink) | events, not files — N/A |
| `compactable` | loosely ~ ephemeral kinds (20000–29999, unstored) |

Two consequences worth holding:

- **The `boundary` block actually maps — Buzz has both tiers natively.**
  (Correction to an earlier draft that called the boundary "moot": source
  review of `crates/buzz-core/src/kind.rs` shows Buzz *does* have a persistent
  agent-memory primitive.) Tenant memory ≈ the shared log + NIP-23 long-form
  notes (`buzz notes`, described in-source as the "team knowledge base");
  runtime/agent memory ≈ **engrams** (`KIND_AGENT_ENGRAM=30174`, addressable;
  CLI `buzz mem`; "NIP-AE"). So Facework's tenant-vs-runtime separation has a
  real home. What does *not* map is the *structure*: engrams and notes are
  event-native, not a path-addressable vault, retrieval is keyword FTS (no
  semantics), and there is no per-folder `written_by`/`read_by` ACL — channel
  membership is the only granularity. Sovereignty note: engram memory being an
  addressable, signed, auditable event (not a hidden private store) is a
  genuine transparency property Facework's boundary rule assumes but cannot
  enforce on a filesystem.
- **Retrieval is REQ-filter + keyword FTS, capped 500/filter, no semantics.**
  The README's "agents search six months of history" = Nostr REQ + FTS, not a
  vector store. Facework skills that assume a rich indexed vault (`qmd`,
  `reads_memory: wiki/clients/**`) would run against an **external filesystem
  over MCP**, not the relay.

**Finding:** the vault does not live on Buzz. It lives beside Buzz, reached via
the `filesystem`/`cli` integrations already declared in the example. Buzz hosts
the *collaboration and audit* layer over that knowledge, not the knowledge base
itself.

### 3. ContextManifest — no declarative composition layer

Facework `ContextManifest` is a declarative, composable, multi-source bundle
system with a `soul` / `identity` / `purpose` separation at its core. Buzz's
session bootstrap is a **flat static prepend**: ACP harness prepends the persona
prompt + pack `instructions.md`, bounded by `max_context_tokens`.

| Facework | Buzz |
|---|---|
| `global` + named `bundles[]`, `composes[]` | single persona prompt + `instructions.md` |
| source `kind: file` | persona/instructions (static) ✅ |
| source `kind: query` (search a MemoryMap index) | imperative REQ/FTS tool call — not declarative context |
| source `kind: live` (fetch from Integration) | imperative MCP tool call — not declarative context |
| source `kind: section` (md heading) | ❌ none |
| `soul` / `identity` / `purpose` bundles | collapse into persona prose |
| `cache_affinity`, `max_tokens`, `priority` | `max_context_tokens` only |

**Finding:** Buzz has no declarative context-composition layer. Facework's
central coherence apparatus — treating "what makes this tenant's judgment
coherent" (`SignalThesis` + `TasteContract` + Frequency decisions) as
first-class, versioned, composable context — has nowhere to live in Buzz config
except as unstructured markdown inside a persona. That is a genuine loss of
structure, and it is the port most tied to "taste is governance."

### 4. IntegrationManifest — best fit; governance metadata is the gap

Buzz is MCP-native: personas declare `mcp_servers`, packs declare `mcp_config`,
sessions get isolated MCP server instances. The *wiring* ports cleanly.

| Facework field | Buzz mapping | Verdict |
|---|---|---|
| `kind: mcp` | native | ✅ |
| `kind: rest/cli/db/filesystem` | via an MCP server wrapping it (`buzz-dev-mcp` = shell+file) | ✅ composable |
| `kind: webhook` | inbound `webhook` trigger + outbound `call_webhook` (SSRF-guarded) | ✅ |
| `used_by[]` | which personas list the server | ✅ |
| `auth` + `secrets[]` (store refs) | MCP servers self-auth; no central secret-ref layer in persona config | 🟡 partial |
| `trust_boundary: own\|rent\|mitigate` | **no equivalent** — Buzz has no sovereignty classification | ❌ |
| `scope[]` sensor/actuator + `rate_limits` | 4-tier rate model **designed, not enforced** (always-allow stub) | ❌ |
| `pii` / `data_residency` / `failover` | no equivalents | ❌ |

**Finding:** Buzz knows *which* MCP servers an agent holds; it does not know
their *trust posture*. Every governance attribute — `trust_boundary`, PII, data
residency, rate limits, failover — has no home in Buzz and must remain
Facework-side as source of truth. Buzz consumes connection wiring, not
connection governance.

---

## Where Buzz *exceeds* Facework's assumptions

Direction of fit runs both ways. Buzz supplies runtime affordances Facework only
gestures at as markdown:

- **Cryptographic audit substrate.** `buzz-audit` is a SHA-256 hash-chained,
  tamper-evident, single-writer log. Facework's `DecisionLedger` and
  `ConsonanceCheck` are markdown artifacts; Buzz gives that governance a signed
  runtime. Every skill invocation and agent action is signed and searchable.
  **Strong direction of fit: Facework governance artifacts → Buzz audit events.**
- **Identity-scoped agents > an `ownership` string.** Buzz's "scoped by identity,
  not permission flags" = channel membership + injected toolset. That is a
  richer, teammate-shaped model than a `human|agent|hybrid` field, and it aligns
  with Facework's "humans stay in the loop" and human keypairs as first-class.
- **Multiplayer is free.** Facework's `multiplayer: true` flag is a native
  property of a rooms-first substrate, not a feature to build.

---

## Maturity caveats that affect the mapping

These are not roadmap gossip; they change what ports are *usable* today:

- **Approval gating not wired** (schema + token infra exist; executor returns
  `Suspended`, run marked `Failed`). ⇒ `ownership: hybrid` and human escalation
  are non-functional on Buzz now.
- **Rate-limit / permission tiers not enforced** (always-allow stub). ⇒ no live
  scope enforcement beyond channel membership.
- **`send_dm` / `set_channel_topic` workflow actions** return `NotImplemented`.
- **No semantic memory** — keyword FTS only.

Buzz is honest about all of this ("not finished"). But a mapping that leans on
approval gates or scope enforcement is mapping onto unbuilt surface.

---

## Implications for §9 (does this change the spec?)

The comparison *validates* §9's core bet — the four ports are the right seams,
and a real runtime consumes them — while surfacing three refinements to consider:

1. **Ports are not co-located.** §9 implicitly reads as "a runtime ingests all
   four." Buzz shows a runtime may host only the collaboration/execution/audit
   ports while Memory/Context stay external. Consider stating that ports MAY bind
   to **different substrates** in one deployment, with the manifest as the
   integration contract across them.
2. **Governance metadata is portable-but-homeless.** `trust_boundary`,
   `verifier_skill_id`, `sponsors`, `pii` survive as source-of-truth even when
   the runtime cannot enforce them. This *strengthens* the case for the manifest
   being authoritative and the runtime being a (partial) consumer — worth making
   explicit in §9.1.
3. **`MemoryMap` assumes a filesystem.** Its vault/folder/ACL model does not port
   to a log-native runtime. Either (a) keep it filesystem-first and treat the
   log-native case as "vault-over-MCP" (current example already implies this), or
   (b) add a note that `MemoryMap.structure` MAY map to non-filesystem stores
   (channels, event kinds) with degraded `written_by`/`read_by` granularity.

None of these break existing conformance. They are clarifications a v0.1.0 pass
could fold in.

---

## Bottom line

Buzz is a **strong candidate for the Runtime layer's collaboration + audit
substrate, and a non-home for the Memory / Context / Governance ports.** The
right posture is *compile-down, not adopt*: `SkillManifest` → personas +
workflow YAML, `IntegrationManifest` → `mcp_servers`, governance +
`MemoryMap` + `ContextManifest` stay Facework-side (vault reached over MCP).
That keeps taste and coherence where they belong — in the authoring layer — and
uses Buzz for what it is genuinely better at than any markdown handoff: signed,
searchable, multiplayer execution with a tamper-evident trail.

## Recommended next move

If this direction holds, the highest-value follow-on is a **`standards/`-track
memo**: *"Buzz as a partial conformant runtime shell for v1.1.0 Runtime Ports"* —
formalizing the split-runtime binding and the three §9 refinements above. That
turns this comparison into the first external validation that Facework's machine
contracts port to a runtime Facework did not design.

A cheaper prerequisite, if precision matters before the memo: pull three Buzz
source files directly (`crates/buzz-core/src/` kind registry,
`crates/buzz-search/src/`, `crates/buzz-cli/src/commands/`) to nail the exact
agent search API and custom kind numbers — the prose docs summarize and
partially conflict on those.
