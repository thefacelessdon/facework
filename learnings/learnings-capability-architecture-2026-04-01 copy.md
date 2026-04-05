# From Hierarchy to Intelligence: What GAMUT Taught Us

**Date:** 2026-04-01
**Author:** Stedmon
**Type:** Learnings document — portable across projects
**Status:** Active
**Catalyst:** [Block — From Hierarchy to Intelligence](https://block.xyz/inside/from-hierarchy-to-intelligence) (Dorsey & Botha, March 2026)

---

## The Observation

After aligning the GAMUT frontend with Corey's backend work, two entirely new interfaces — moment operations and moment-scoped fulfillment — were composed in a single commit (77 files, ~26.7k lines). These interfaces weren't on the original roadmap. They became possible because the backend had been built as a capability layer, not a feature layer.

The Block article articulates at enterprise scale the same pattern we discovered at two-person scale: when you build capabilities, a world model, and an intelligence layer before you build interfaces, the interfaces compose themselves. Speed comes from architecture, not headcount.

---

## The Pattern: Four Layers, Strict Sequence

Build in this order. Violating the sequence creates rework.

### 1. Capabilities (atomic primitives with no UI)

What they are: the building blocks that are hard to build and maintain. They have reliability, compliance, and performance targets. They have no interfaces of their own. In GAMUT, this is tenant isolation (RLS), products, orders, payouts, splits, campaigns, health scores, creative profiles, agent commerce config.

The standard Corey set:

- **Tenant-scoped from Day 1.** Every table has `tenant_id` with row-level security via `current_setting('app.current_tenant_id', true)`. This means any new capability or interface automatically inherits data sovereignty. You never have to retrofit isolation.
- **Event-sourced.** An append-only `events` table normalizes all system activity — external webhooks and internal actions alike — into a unified schema: `type`, `source`, `domain`, `entity_id`, `tenant_id`, `payload`. The event log is the system's memory.
- **Constraint-enforced at the database level.** CHECK constraints on status enums, foreign keys between related entities, composite uniqueness where it matters. The schema prevents invalid states rather than relying on application logic to avoid them.
- **RPC functions for operations that must be atomic.** `reserve_fulfillment_units` uses `FOR UPDATE` row locks to prevent overselling. `release_fulfillment_units` and `record_fulfillment_redemption` maintain inventory integrity. The database is the coordination mechanism, not the application.

Principle: **capabilities are infrastructure, not features.** If you find yourself building a capability in response to a specific interface request, you're already behind. Capabilities should exist before anyone asks for them.

### 2. World Model (the system's understanding of itself and its customers)

What it is: two complementary models. The company model knows what the system can do (its capabilities, their status, their contracts). The customer model knows what's actually happening (events, derived signals, patterns over time).

In GAMUT, this is:

- **Company model:** The `DataSource` interface. A TypeScript interface that declares every operation the platform can perform, organized by domain: `creators`, `operator`, `creativeNetwork`, `agentCommerce`, `onboarding`, `supplyChain`, `editorial`, `dashboard`, `marketing`, `campaigns`, `momentOps`, `momentFulfillment`, `intelligence`. This is the system's self-knowledge — what it can and cannot do.
- **Customer model:** Migration 004 — `signals`, `decisions`, `playbook_scores`, `execution_outcomes`, `agent_performance`, `resource_allocations`. These tables form a closed feedback loop. Signals are derived from events. Decisions reference signals. Outcomes track back to decisions. Playbook scores update from outcomes. The model gets smarter with every cycle.

The DataSource adapter pattern (`demo | supabase`) is the world model's most important property: **it can be queried before the real data exists.** This means interfaces can be built against the model's contract, not against the live data. Two people (or a person and an AI) can work in parallel because the model is the shared truth, not a database.

Principle: **store reasoning, not just state.** Most backends store what happened. The intelligence migration stores *why* the system decided what it decided, *what* resulted, and *how* effective the approach was. This is the compounding asset. Everything else is commodity infrastructure.

### 3. Intelligence Layer (composes capabilities into solutions)

What it is: the system that decides when and how to combine capabilities for specific customers at specific moments. In GAMUT, this is the agent system — 18 automated tasks (rules-based) and 35 LLM-assisted tasks (human-in-the-loop), with a lifecycle state machine (SHADOW → LIVE → DEGRADED / PAUSED / DISABLED) and MCP tool boundaries that prevent agents from accessing data except through declared interfaces.

Critical properties:

- **Lifecycle-gated activation.** Agents don't go live immediately. Shadow mode (minimum 7 days for rules, 14 for LLM) means the intelligence layer observes before it acts. This prevents the system from making decisions with insufficient understanding.
- **Signal suppression by phase.** Commerce signals (trending, velocity) are suppressed during onboarding because the data window is too small. Health signals (billing, sync) are active from Day 1. The intelligence layer knows when its own model is unreliable.
- **Cooldown periods prevent feedback loops.** The same agent cannot act on the same creator + signal within one hour. This prevents oscillation when Agent A's output triggers Agent B triggers Agent A.
- **Fallback to manual when capabilities are unavailable.** Every agent with an unconfirmed external API has a manual-input fallback. The DataSource interface has `api` and `manual` implementations. Same rules, different data source. Intelligence degrades gracefully instead of halting.

Principle: **intelligence that can't explain itself is liability, not leverage.** Every decision is logged with confidence, risk level, strategy, and the signal IDs that triggered it. Every outcome is tracked back to the decision. The system is auditable by design.

### 4. Interfaces (where intelligence makes contact with reality)

What they are: delivery surfaces through which composed solutions reach people. They are important, but they are not where the value is created. In GAMUT, the interfaces are:

- **Creator dashboard** — lifecycle-aware (first-visit → onboarding → active → mature), role-gated (creator, editorial, operator, admin, supply chain)
- **Operator dashboard** — pipeline, health, agents, creators, financial
- **Public surfaces** — fund dashboard, opportunities board, moments listing
- **Moment interfaces** — live ops, recap, deliverables, fulfillment + redemption
- **Agent commerce** — per-creator chat with moment-enriched context
- **Shopify storefronts** — DTC channel via embedded app

The moments layer is the proof of the pattern. It was composed after the backend alignment because the capabilities (products, orders, fulfillment), the world model (DataSource contract, event system), and the intelligence layer (agent chat with moment context, participation tracking) already existed. The interface was the easy part.

Principle: **interfaces are compositions, not creations.** If building a new interface requires building new capabilities, you have a capability gap — and that gap is your real roadmap. The interface just revealed it.

---

## The Backend Standard (What Corey Built)

These are the specific patterns that made velocity possible. They constitute a backend standard for any project that needs to move at the speed of AI.

### Migration Sequence

| Order | What | Why First |
|-------|------|-----------|
| 000 | Events (append-only store) | Everything that happens becomes a queryable fact |
| 001 | Tenants + tenant settings | Data sovereignty before any domain tables exist |
| 002 | Organizations + audit logs | Multi-org hierarchy + compliance trail from Day 1 |
| 003 | Commerce domain (creators, products, orders, payouts, campaigns, health, editorial, creative network) | Atomic capabilities — no UI, just reliability targets |
| 004 | Intelligence (signals, decisions, playbooks, outcomes, agent performance, resource allocations) | The feedback loop that makes the system learn |
| 005 | Agent commerce (config, chat sessions, product access) | The composition layer that connects capabilities to customers |
| 006 | Moment ops + fulfillment (live state, opportunities, submissions, deliverables, participation, capacity, orders + atomic RPCs) | A new composed interface that proves the architecture works |

### Non-Negotiable Backend Properties

1. **Every table has `tenant_id` with RLS.** No exceptions. This makes isolation structural, not behavioral.
2. **Events are normalized and append-only.** External webhooks and internal actions use the same schema. The event log is the single source of truth for "what happened."
3. **Intelligence tables form a closed loop.** Signals → decisions → outcomes → playbook scores → back to signals. If your backend doesn't store its own reasoning, it's a database, not a world model.
4. **Status fields use CHECK constraints, not application validation.** The database prevents invalid states. The application doesn't have to.
5. **Operations that must be atomic use database-level locks.** `FOR UPDATE` on inventory rows, RPC functions for reserve/release/redeem. The database is the coordination mechanism.
6. **The DataSource interface is defined before implementation.** Both `demo` and `supabase` implementations conform to the same contract. This enables parallel development and permanent demo mode.

---

## The Handoff Protocol (What Replaced Hierarchy)

Two people coordinated complex backend-to-frontend alignment without meetings, standups, or a project manager. The coordination mechanism was a document: `BACKEND_HANDOFF.md`.

### What Made It Work

1. **Canonical sources in priority order.** When two documents conflict, the priority list resolves it: (1) pre-backend audit, (2) frontend-backend contract, (3) DataSource interface, (4) runtime schema types. No ambiguity.
2. **Current state snapshot.** What works, what doesn't, what's missing. Written as facts, not opinions.
3. **Phased execution with exit criteria.** Each phase has objective, testable conditions for completion. No "I think it's done."
4. **Risk register.** Known ways the handoff can fail: contract drift, queue topology mismatch, type mismatch at DB boundary, default-allow route guard. Named risks are manageable risks.
5. **Verification checklist.** `npm run build`, route rendering, no demo imports in production paths, contract-code match. Machine-verifiable where possible.
6. **Issue structure template.** Every backend ticket has: problem statement, scope, acceptance criteria, out-of-scope, dependencies, verification steps. This prevents the two most common coordination failures: silent scope creep and ambiguous completion.

### The Protocol Pattern (Generalizable)

For any two-person (or person-and-AI) handoff:

```
1. Lock the contract (single baseline commit SHA)
2. Define canonical sources with priority order
3. Snapshot current state as facts
4. Sequence execution into phases with exit criteria
5. Name risks explicitly
6. Define machine-verifiable completion checks
7. Use issue templates with scope + out-of-scope
```

This pattern works because it replaces the information-routing function of management with a shared artifact. The artifact is the world model of the collaboration. Both parties read from it, update it, and verify against it. No status meetings required.

---

## The Block Connection

Dorsey's thesis: companies move fast or slow based on information flow. Hierarchy impedes information flow. AI can replace what the hierarchy does — route information, pre-compute decisions, maintain alignment — if you build the right foundation: capabilities, a world model, an intelligence layer, and interfaces.

What we learned building GAMUT validates this at the smallest scale:

| Block (10,000 people) | GAMUT (2 people) | Shared principle |
|------------------------|-------------------|------------------|
| Capabilities are atomic financial primitives with no UI | Migrations 000-003 + 005 are atomic commerce primitives with no UI | Capabilities before interfaces |
| World model = company operations + customer signal | DataSource interface + intelligence migration (signals, decisions, outcomes) | Store reasoning, not just state |
| Intelligence layer composes capabilities into solutions at specific moments | Agent system + moment-scoped fulfillment composition | Composition over construction |
| Interfaces are delivery surfaces, not value creators | Dashboard, moments, agent chat are compositions of existing capabilities | Interfaces reveal capability gaps |
| "When the intelligence layer can't compose because the capability doesn't exist, that failure signal is the future roadmap" | `pre-backend-audit.md` is literally a list of missing capabilities generating the roadmap | Reality generates the backlog |
| Three roles: IC (deep specialist), DRI (cross-cutting owner), Player-coach (builds + develops people) | Corey (capability layer IC), Stedmon (cross-cutting DRI for moments), handoff protocol (replaces coordination overhead) | Roles follow from architecture, not org charts |

### The Key Insight

Block is building this at enterprise scale with massive transaction data as their "honest signal." We're building it at two-person scale with cultural commerce as ours. The architecture is the same. The scale is different. The speed advantage is the same.

Most companies using AI are giving everyone a copilot — making the existing structure work slightly better without changing it. Building the capability layer, world model, and intelligence layer first is structurally different. It means the AI (and the humans) compose solutions from real capabilities rather than generating code against a blank canvas.

---

## Principles for Future Projects

### Architecture

1. **Build capabilities before interfaces.** Define atomic primitives with tenant isolation, event sourcing, and constraint enforcement before any UI exists.
2. **Store reasoning, not just state.** Intelligence tables (signals, decisions, outcomes, playbook scores) are the compounding asset. A backend that only stores state is a database. A backend that stores reasoning is a world model.
3. **The DataSource pattern is a speed multiplier.** Define the interface contract first. Implement demo and live separately. This enables parallel development, permanent demo mode, and AI-assisted development against a known contract.
4. **Use database-level coordination for atomic operations.** Row locks, RPC functions, CHECK constraints. The database prevents invalid states. The application doesn't have to.
5. **Migration sequence matters.** Events → Tenants → Capabilities → Intelligence → Composition. This order ensures each layer builds on a solid foundation.

### Coordination

6. **Replace hierarchy with shared artifacts.** Handoff documents with canonical sources, priority order, phased execution, exit criteria, and risk registers replace the information-routing function of management.
7. **Machine-verifiable completion.** If "done" can't be checked with a command (`npm run build`, `rg` for forbidden imports, route rendering), it's not defined clearly enough.
8. **Name risks explicitly.** Unknown risks cause chaos. Named risks are actionable. The risk register is the most underrated coordination tool.
9. **Scope + out-of-scope in every ticket.** Silent scope creep is the primary failure mode when two people work asynchronously. Explicit out-of-scope prevents it.

### Intelligence

10. **Lifecycle-gate everything.** Shadow mode before live. Signal suppression when data is insufficient. Cooldown periods to prevent feedback loops. The intelligence layer must know when its own model is unreliable.
11. **Fallback gracefully.** Every intelligent operation should have a manual fallback. The system degrades to human input, not to failure.
12. **Composition over construction.** New interfaces should compose existing capabilities, not build new ones. If you need new capabilities for a new interface, that's a capability gap — and the gap is the roadmap.
13. **Reality generates the backlog.** The pre-backend audit (what's missing) and the intelligence layer's failure signals (what couldn't be composed) are more honest roadmap inputs than any planning session.

---

## For Facework Protocol Integration

These learnings map to Facework phases:

| Facework Phase | Learning Integration |
|----------------|---------------------|
| **Frequency** (governing truth) | The capability layer IS the governing truth. Define atomic primitives, their constraints, and their contracts before anything else. The DataSource interface is a Frequency artifact. |
| **Stability** (architectural foundation) | The migration sequence (events → tenants → capabilities → intelligence → composition) is a Stability spec. Every project should have this sequence defined before code. |
| **Flow** (adaptive behavior) | The intelligence layer's lifecycle state machine (SHADOW → LIVE → DEGRADED) is a Flow pattern. The handoff protocol (contract → phases → exit criteria → verification) is a Flow artifact. |
| **Resonance** (working prototype) | The demo mode of the DataSource adapter IS permanent Resonance. The system demonstrates itself without live infrastructure. This should be a Resonance requirement for every project. |
| **Entropy** (structural weakness) | The pre-backend audit pattern (gap inventory with severity) should be an Entropy deliverable. Every project should produce a "what's missing" document that generates the roadmap from reality. |
| **Coherence** (integration) | The handoff protocol and document index (`_index.md`) are Coherence artifacts. The principle: someone can clone the repo and start building on Day 1 without a meeting. |

### Proposed Facework Additions

1. **Capability Audit** — a new deliverable in Stability or Entropy that maps atomic primitives, their contracts, their isolation properties, and their intelligence feedback loops. Format: migration sequence + DataSource interface + intelligence schema.
2. **Handoff Protocol Template** — a new deliverable in Flow that defines the coordination artifact for asynchronous handoffs. Format: canonical sources + current state + phases + exit criteria + risk register + verification.
3. **Composition Test** — a new quality gate in Resonance. Can a new interface be composed from existing capabilities without building new backend? If not, the capability layer is incomplete.
4. **Reasoning Storage Requirement** — a new constraint in Stability. Every project's backend must store signals, decisions, and outcomes, not just entity state. The intelligence layer is not optional.

---

## References

- [Block — From Hierarchy to Intelligence](https://block.xyz/inside/from-hierarchy-to-intelligence) (Dorsey & Botha, March 2026)
- `gamut-platform/docs/architecture/platform-system-layer.md` — Events → Signals → Agents → Surfaces
- `gamut-platform/docs/architecture/system-layer-diagram.md` — Full system layer with error taxonomy
- `gamut-platform/src/lib/datasource/migrations/004_intelligence.sql` — Intelligence feedback loop schema
- `gamut-platform/src/lib/datasource/migrations/006_moment_ops_fulfillment.sql` — Composition proof
- `BACKEND_HANDOFF.md` — The coordination artifact that replaced hierarchy
- `gamut-ops/documents/corey-review-brief-2026-03-30.md` — The commit that proved the pattern
