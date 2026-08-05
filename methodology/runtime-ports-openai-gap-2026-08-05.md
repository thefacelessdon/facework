# Runtime Ports ↔ OpenAI hosted runtime — Gap Analysis (third runtime, the sovereignty-failing corner)

Date: 2026-08-05
Status: Draft finding (methodology note)
Scope: Third validation of Facework Protocol §9 + §9.11, against a runtime chosen
because it **fails the sovereignty port by construction** — OpenAI's hosted agent
surface (Responses API + Conversations API + vector stores + the open-source
Agents SDK). Completes §9.2's three-reference-tenant set.
Companion: `methodology/runtime-ports-buzz-gap-2026-08-04.md`,
`methodology/runtime-ports-letta-gap-2026-08-05.md`,
`standards/source/fs400-runtime-buzz-validation-2026-08-04.md`.

---

## The different question

Buzz and Letta were both sovereignty-clean (Apache-2.0, self-hostable), so
sovereignty only ever bit *integrations inside* the tenant. This third runtime
inverts the test: it is a **hosted, closed runtime** where the shell itself —
models, execution sandboxes, vector stores, stored state, and the audit log — is
100% OpenAI cloud and cannot be self-hosted; only the orchestration client (Agents
SDK) is open source. The question is not "which ports does it host?" but **"does
Facework correctly catch a runtime that violates the ownership thesis?"**

Answer: **partly — and the gap it exposes is the finding.** Facework catches
rented *integrations* (`IntegrationManifest.trust_boundary`, the Phase-7
`SovereigntyMap` gate) but is **silent on a rented runtime shell.** A tenant could
bind all four ports to a fully-hosted OpenAI runtime and pass every port-level
gate while never accounting for the fact that the entire substrate is rented with
maximal blast radius.

---

## Headline

- **Sovereignty: fails by construction.** Not self-hostable; closed hosted runtime;
  org/API-key identity with zero cryptographic agent identity; mutable non-signed
  audit; portability limited to raw-data export, not runtime relocation. Genuine
  mitigations exist (training-off by default, ZDR for approved customers, regional
  residency) — so it is `rent` *with mitigations*, not unmitigable.
- **Port wiring: strong where Letta/Buzz were, in a hosted form.** Skills
  (function calling + a versioned `/v1/skills` SKILL.md registry — a striking
  near-match to Facework's own `SkillManifest` + playbook), Connections
  (first-class MCP), semantic memory (vector stores + `file_search`).
- **Same structural gaps as the others.** No native triggers (request/response
  only, like Letta). No declarative context composition (imperative, like Buzz).
  No tenant-vs-agent memory boundary primitive (weaker than Letta). Governance
  metadata homeless (like both).
- **§9.2's three-tenant bar is now met** — with a caveat (FS-400.6 below) that must
  land before Runtime Ports go universal-MUST.

Live illustration of the lock-in risk, not hypothetical: OpenAI's own **Assistants
API sunsets 2026-08-26** (this month) and the hosted **Agent Builder** is
deprecated (unavailable 2026-11-30), migration path "export to code, self-
orchestrate." The vendor itself demonstrates that the hosted agent artifact is
disposable and non-durable.

---

## Port-by-port (OpenAI, contrasted with Buzz + Letta)

### SkillManifest — strong wiring, hosted; same trigger/governance gaps
- Function calling (JSON-schema tools, `strict` structured outputs) + **hosted
  `/v1/skills`**: versioned bundles of files + a `SKILL.md` manifest (front matter
  + instructions), `default_version`/`latest_version`. This is convergent
  evidence that the "versioned skill bundle" abstraction Facework's `SkillManifest`
  + `playbook` encodes is a real, independently-arrived-at shape.
- **Triggers:** none native — request/response only (like Letta; unlike Buzz).
- **Governance gate (`ownership: hybrid`/approval):** split — function tools have
  **no** built-in approval; **MCP tools have `require_approval`** (`always`/`never`
  /filtered). So the enforceable-gate finding (FS-400.4) holds a third time: a gate
  is partially hostable, via MCP approval.

### MemoryMap — present, semantic, but boundary-less and rented
- Conversations API (persistent state) + **vector stores + `file_search`**
  (embeddings + keyword) → semantic index binds natively (like Letta, unlike
  Buzz's keyword FTS).
- **`boundary` (tenant vs agent): no home** — no tenant-vs-agent memory primitive;
  org/project scoping of vector stores isn't even clearly documented. Weaker than
  Letta (shared vs per-agent blocks) and Buzz (engrams). And the sovereignty-
  critical fact: the entire store lives on rented infra with 30-day default
  retention (Conversations persist until deleted; ZDR forces `store=false`).
- No path structure; `retention` maps to the 30-day TTL / ZDR knobs, not per-path
  policy.

### ContextManifest — imperative only (like Buzz, unlike Letta)
- Context is assembled by sending input items; **no declarative composition**.
  `truncation: auto` drops middle items on overflow. Tool Search loads tools on
  demand (a token optimization, not a context DSL). This port stays authoring-side
  — only Letta, of the three, hosts it.

### IntegrationManifest — strong MCP wiring; auth thin; metadata homeless
- **First-class MCP** (tool type `mcp`, `server_url`/`server_label`,
  `require_approval`). Rich hosted-tool set (web search, code interpreter, shell,
  computer use, image gen).
- **Auth:** per-request OAuth pass-through — OpenAI explicitly **does not store**
  the `authorization` token — so there is no server-side credential vault; secrets
  are re-supplied each call.
- **Governance metadata** (`trust_boundary`, `pii`, `rate_limits`): no home — third
  runtime to agree it is inherently authoring-layer.

### Identity & audit — weak (like Letta, not Buzz)
- Identity: Organization → Project → API key. **No cryptographic agent identity**,
  no signing. An "agent" is a client-side SDK object; the outside world cannot
  verify it independently of OpenAI's account system.
- Audit: **Tracing** (LLM calls, tool/handoff/guardrail spans), on by default,
  stored in OpenAI's Traces dashboard, redirectable to third-party processors.
  **Mutable, not signed** — no tamper-evidence. Only Buzz, of the three, gives
  `DecisionLedger`/`ConsonanceCheck` a cryptographic runtime home.

---

## The sovereignty analysis: does the spec reject it?

Trace Facework's ownership machinery against a fully-hosted runtime:

- **Design Principle** names it: "Sovereignty by design (audience, data,
  distribution, **infrastructure**)." So the runtime's infrastructure is in scope
  *philosophically*.
- **`IntegrationManifest.trust_boundary` (own|rent|mitigate)** classifies
  *integrations* — tools the tenant reaches. Not the runtime.
- **Phase-7 `SovereigntyMap` gate** classifies *dependencies* own/rent/mitigate;
  every `rent` needs a mitigation path; high-blast-radius integrations (`db`,
  `filesystem` write) must be `own` or carry an explicit waiver.
- **§9.11** models ports binding to substrates but does **not** require the
  *substrate itself* to be sovereignty-classified.

**The gap:** nothing in the spec classifies **the Runtime Shell itself** as a
dependency. A tenant can bind all four ports to OpenAI, pass every port-level gate
(skills validate, integrations resolve, no raw secrets, MemoryMap has a semantic
index), and never record that the substrate holding all memory, executing every
skill, and storing the audit is rented, closed, and non-relocatable. Facework does
not reject this — it is silent on it. It catches a rented *tool* but not a rented
*runtime*.

The correct behavior is **not** to forbid renting — Facework forbids *silent*
renting. Renting the entire runtime is the largest ownership decision a tenant can
make; by the Sovereignty loop (COS §VII) it must be an explicit, documented human
ruling, not a default.

---

## New finding — FS-400.6: the Runtime Shell is itself a SovereigntyMap dependency

A **Runtime Shell that is not self-hostable is a `rent` dependency with maximal
blast radius** — it is the substrate for all four ports at once (all memory, all
execution, all stored state, the audit log). Phase-7 MUST therefore classify the
shell itself in the `SovereigntyMap` and, for a non-self-hostable shell, require an
**explicit waiver with a mitigation path**:

- **Exit plan** — can tenant state be exported and the tenant relocated to another
  shell? (OpenAI: raw data exports yes; runtime relocation no — vector stores,
  hosted skills, containers, traces are non-portable.)
- **Data posture** — retention (30-day default / ZDR), training (off by default /
  opt-in), residency (regional, gated behind approval).
- **Owner ruling** — a human Sovereignty-loop decision on record, not a silent
  adoption.

Corollary refinement to the **"runtime-provided guarantees"** concept (§9.11): a
guarantee can be a **liability**. OpenAI's hosted state and tracing are
observability *guarantees* that are simultaneously ownership *liabilities* (mutable,
hosted, non-portable). A conformance profile should record not only what a shell
*provides* but where state/audit live, and whether the tenant can leave with them.

This is the first runtime of the three where the spec's *rejection* behavior was
tested rather than its *fit*. It does not (and should not) reject; it should force
the decision into the open. FS-400.6 makes it do so.

---

## Three-runtime synthesis (§9.2 bar met)

| | Buzz | Letta | OpenAI hosted |
|---|---|---|---|
| Corner | collaboration/audit | memory/context | hosted/rented |
| `MemoryMap` | ❌ event-native, keyword | ✅ semantic + shared/RO blocks | 🟡 semantic, **no boundary**, rented |
| `ContextManifest` | ❌ imperative | ✅ blocks = declarative | ❌ imperative |
| `SkillManifest` | 🟡 strong triggers | 🟡 governance spine | 🟡 `/v1/skills` + fn-calling |
| triggers | ✅ workflow engine | ❌ sleep-time only | ❌ request/response |
| `IntegrationManifest` wiring | ✅ MCP | ✅ MCP | ✅ MCP |
| identity | ✅ keypairs | ❌ DB IDs | ❌ org/API-key |
| audit | ✅ hash-chained | ❌ mutable | ❌ mutable traces |
| sovereignty | ✅ self-host | ✅ self-host | ❌ **fails by construction** |

Confirmed across all three (now high-confidence):

1. **Descriptive governance metadata** (`trust_boundary`/`pii`/`rate_limits`) is
   **homeless on all three** → definitively authoring-layer (FS-400.4).
2. **Enforceable gates** are partially hostable on all three (OpenAI MCP
   `require_approval`; Letta HITL + tool rules; Buzz approval events) → the
   gate-vs-metadata split (FS-400.4) holds universally.
3. **Native triggers** exist only on Buzz → a collaboration-runtime feature, not a
   universal port capability.
4. **Declarative context composition** exists only on Letta → the rarest port to
   host; default binding is authoring-side.
5. **Crypto identity + tamper-evident audit** exist only on Buzz → two of three
   lack it; these are runtime-provided guarantees, not port requirements.
6. **Semantic memory** on Letta + OpenAI; keyword-only on Buzz.

**Bar met, with a caveat.** §9.2 wanted three reference tenants before Runtime
Ports go universal-MUST. Three now exist, spanning both sovereignty-clean corners
and the sovereignty-failing corner. The ports held across all three. The one thing
that must land before universal-MUST is **FS-400.6** — otherwise the spec would
bless a fully-rented runtime without an ownership accounting, which contradicts
its own first principle.

---

## Provenance

- Facework: `PROTOCOL.md` §1 (Design Principles), §9, §9.11, Phase 7
  (`SovereigntyMap`).
- OpenAI (developers.openai.com/api/docs + openai.github.io/openai-agents-python,
  Aug 2026): Deprecations (Assistants sunset 2026-08-26; Agent Builder 2026-11-30);
  Conversation state; Responses/Conversations API; File search + vector stores;
  Skills (`/v1/skills`); MCP connectors; Function calling; Your data (retention/
  training/ZDR/residency); Agents SDK (handoffs/guardrails/sessions/tracing).
- Flagged reported-not-verified: `truncation: auto` middle-drop (thin docs +
  community reports); enterprise residency legal page returned 403 (residency
  sourced from the developer "Your data" guide).
