# Capability-grounded protocol artifacts — learnings from GAMUT frontend ↔ backend alignment

**Date:** 2026-04  
**Type:** Facework learnings — protocol evolution input  
**Status:** Active  
**Primary source:** GAMUT ops learnings after aligning the frontend with Corey’s capability-layer backend (`gamut-ops/documents/learnings-capability-architecture-2026-04-01.md`)

**Related:** `methodology/gamut-ecosystem-facework-evolution.md` (Facework’s role in the GAMUT ecosystem — optionality, character, sovereignty).

---

## 1. What happened (the empirical trigger)

After the GAMUT **frontend was aligned** with **Corey’s backend** (capability layer, not feature layer), **two large interfaces** — **moment operations** and **moment-scoped fulfillment** — shipped in **a single commit** (~77 files, ~26.7k lines). They were **not on the original roadmap**.

They became possible because:

1. **Capabilities** already existed (products, orders, fulfillment, tenant isolation, events).
2. A **world model contract** already existed (**DataSource** + event vocabulary + intelligence schema).
3. The **intelligence layer** could already **compose** those capabilities (e.g. agent context, participation tracking).
4. **Interfaces** were therefore **compositions** of what was already real — not greenfield UI invented against a vague spec.

**Lesson for Facework:** When protocol runs **skip or abstract away** the capability substrate, downstream artifacts default to **generic prototypes**. When protocol runs **anchor** to a real capability contract (the backend standard), artifacts can become **specific solutions and interfaces** for that product, service, or community — because composition has something **real** to compose.

---

## 2. Theory — what the protocol should optimize for

### 2.1 The dependency chain (strict order)

```
Capabilities (backend standard, atomic, tenant-safe, event-backed)
        ↓
World model (company: what the system can do; customer: what happened + why)
        ↓
Intelligence (policy-constrained composition of capabilities into solutions)
        ↓
Interfaces (product-specific surfaces — not “a demo,” the actual delivery)
```

**Facework’s current risk:** Phases often produce **narrative and UI-shaped demos** (especially under **Resonance**) **before** the project has a **locked capability map** and **contract** comparable to a **DataSource + schema + migration sequence**. That optimizes for **story**, not for **composition**.

**Proposed shift:** Early protocol artifacts should **materialize the capability layer** (or explicitly bind to an existing one) so that **Frequency / Stability** outputs are not only “business truth” but **operational primitives**: what exists, what’s isolated, what events exist, what the system may infer, what it must not.

### 2.2 World model is not a slide — it is anchored to capabilities

In the GAMUT pattern:

- **Company model:** “What can this system do?” answered by a **single interface contract** (operations by domain), implemented as **demo + live** against the **same** shape.
- **Customer model:** “What is happening and why?” answered by **events → signals → decisions → outcomes** (closed loop), not by ad-hoc tables.

The protocol should treat **world model** as **derivable from** (and **testable against**) those layers — not as a free-form ontology written in isolation.

### 2.3 Composition is the bridge to “your” product

**Together or individually**, teams can **compose** the capabilities the backend standard delivers into:

- **Solutions** — specific composed behaviors for a context (e.g. a campaign gate, a fulfillment path, a community moment).
- **Interfaces** — the **actual** screens, APIs, and partner touchpoints **for that** product, service, or community — **not** a interchangeable prototype that could belong to any startup.

Generic prototypes are a **failure mode** when:

- Capabilities are unnamed or hypothetical.
- The world model contract is missing, so every UI guess invents new backend shape.
- “Resonance” is interpreted as **shipping lookalike UI** instead of **proving composition** against declared primitives.

**Success mode:** The same protocol run that used to end in a **generic demo** instead ends in a **composition proof**: “This interface only calls these capability operations; these events are emitted; this intelligence step is gated thus.” Product specificity comes from **which** capabilities are entitled, **which** domains are in scope, and **which** policies apply — not from a new stack every time.

---

## 3. Corey’s backend standard (the reference grammar)

These patterns are the **concrete standard** protocol artifacts should **cite, extend, or explicitly diverge from** (with rationale):

| Element | Role |
|--------|------|
| **Tenant-scoped from Day 1** | `tenant_id` + RLS — every capability inherits sovereignty structurally. |
| **Append-only normalized events** | Single memory of what happened (`type`, `source`, `domain`, `entity_id`, `tenant_id`, `payload`). |
| **DB-enforced constraints** | CHECK, FKs, uniqueness — invalid states impossible at rest. |
| **Atomic RPCs where coordination matters** | Row locks, reserve/release flows — application is not the source of truth for race conditions. |
| **Migration sequence** | Events → tenants → org/audit → domain capabilities → intelligence loop → composition layers → composed surfaces (see source doc for GAMUT’s 000–006 ordering). |
| **DataSource-before-implementation** | Contract first; **demo** and **live** both implement it — parallel work and honest “empty” demos. |
| **Reasoning storage** | Signals, decisions, outcomes, playbook feedback — **world model** that compounds; otherwise it’s “just a database.” |

**Protocol implication:** **Stability** (and **Frequency** where economics touch operations) should **require** a **capability audit artifact** that maps to this grammar — or a **documented exception list** (why this product does not need events, tenants, etc.). Silence is not neutral; it defaults to prototype drift.

---

## 4. How Facework phases should re-stack (conceptual)

This does not replace `PROTOCOL.md`; it **informs** how phases **produce artifacts**:

| Phase | Capability-grounded emphasis |
|-------|------------------------------|
| **Semantics / Field / Taste** | Still define meaning, dynamics, quality — but **tie nouns to future capability domains** where possible (what entities, what boundaries). |
| **Frequency** | Governing truth includes **which capabilities exist or must exist** for the model to be honest (revenue, rights, **and** operational primitives). |
| **Stability** | Specs **are** the capability map + migration story + contract surface — not only boxes in a diagram. |
| **Flow** | Playbooks **reference** capability IDs / event types / states that **already have** a home in the schema story. |
| **Resonance** | **Composition test:** does the “prototype” **only** use declared operations and events? If it needs new primitives, the gap is **Stability**, not more UI. |
| **Entropy / Sovereignty / Consonance** | Audit **extraction and lock-in** against **capability optionality** (can partners exit with data? can inference cross boundaries?). |
| **Coherence** | Handoff + index + **contract SHA** — same as GAMUT’s `BACKEND_HANDOFF` lesson: **artifact replaces hierarchy**. |

---

## 5. Deliverables to add or sharpen (summary)

Aligned with the GAMUT learnings doc’s **proposed Facework additions**, but reframed for **this** thesis:

1. **Capability audit** — Single artifact: primitives, isolation, events, intelligence loop presence or waiver.
2. **World model contract** — Explicit “company operations” surface (even if typed IDL or OpenAPI-ish), plus customer-model loop or waiver.
3. **Handoff protocol template** — Canonical sources, phases, exit criteria, verification — **before** large UI alignment work.
4. **Composition test (Resonance gate)** — No interface ships as “done” unless it **maps** to declared capabilities; otherwise backlog **capability gap**.
5. **Product-specific interface charter** — For each major surface: entitled capabilities, domains, policies, and **non-goals** — distinguishes **your** product from a generic demo.

---

## 6. One-sentence thesis

**The Facework protocol should generate artifacts bottom-up from the capability standard the backend establishes (or inherits), so the world model is real, intelligence can compose, and interfaces become specific solutions — not generic prototypes that evaporate when real data and tenancy show up.**

---

## References (GAMUT repo)

- `gamut-ops/documents/learnings-capability-architecture-2026-04-01.md` — full pattern, migration table, handoff protocol, proposed additions.
- [Block — From Hierarchy to Intelligence](https://block.xyz/inside/from-hierarchy-to-intelligence) — enterprise articulation of the same four-layer sequence.
- `gamut-platform` — migrations, `DataSource` pattern, intelligence schema (see References section of source doc for paths).

---

*Portable: applies to any project using Facework where a capability layer exists or will exist. If there is no backend (pure strategy), the capability audit becomes an explicit **waiver** or **deferred** record — still a protocol artifact, not an omission.*
