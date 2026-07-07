---
title: "The Facework Loop Model"
status: Design Note (provisional — promote to theories/ once formalized)
date: 2026-07-01
relates: theories/the-coherence-operating-system.md, skills/OPERATING_SKILLS.md, PROTOCOL.md
---

# The Facework Loop Model

*A design note. The primitives answer **what** forces to establish and **in what
order**. This note adds the axis they were quiet on: **at what timescale** each
kind of iteration runs, and **what signal closes it.***

---

## Why this exists

The AI-engineering field converged in mid-2026 on one overloaded word — *the
loop* — meaning at least four different things (execution, task, product,
system), with an unnamed fifth (oversight) on top. The taxonomy is useful, but
its sharpest rigor is a single sentence:

> A loop without its closing signal doesn't converge. It just runs until
> something external stops it.

Facework has been running this stack for years without naming it. Every protocol
run — internal (HUE Unlimited, Club Volley, GAMUT) and external (Her Set Her
Sound, Banng and The Gang, 14th & Co, Hop in Real Estate, Create the Odds, Perry
Publishing & Broadcast, Chefnic, and others) — exercised all five loops. The
methodology improving across those runs *is* a system loop. This note names what
was already operating, so the loops can be tuned deliberately instead of by feel.

Loops are a **lens over** the primitives, not a replacement (Constitution
Article XII — no addition shall duplicate an existing concept). Two axes:

- **Coherence axis** (primitives → protocol → gates): what holds, and in what order.
- **Temporal axis** (loops): at what cadence it iterates, and what closes it.

They compose. A fully autonomous execution loop can run inside a human-gated
product loop.

---

## The five loops

| Loop | What iterates | Timescale | Facework analog | Closing signal (an artifact Facework already produces) |
|---|---|---|---|---|
| **Execution** | Steps within one task | minutes | The **Runtime** executing a Skill. Facework does not own this loop — it *declares the ports* (Skills, Memory, Context, Connections) the runtime plugs into. | Tool results, environment feedback (runtime-owned) |
| **Task** | One artifact against one spec | hours | A single `/fw-*` phase producing its artifact | The **phase gate** — pass/fail evidence. This *is* the spec-compliance signal. |
| **Product** | A live system and its backlog | continuous | **Postures** — the operating modes that maintain coherence after setup | `ConsonanceCheck`, `Entropy` report, `contract-sync` drift, `evidence-debug`, QA/review outcomes |
| **System** | The practice itself | days–weeks | Phase 8 **Coherence** → diagnostic → retro → methodology evolution | The coherence scorecard + retro + `CHANGELOG` ("each project makes the practice better") |
| **Oversight** | What is worth doing at all | ongoing | **You** + the **Constitution** and **Frequency** that set the governing truth | Sovereignty (Article VIII). Exit: yours to call. |

**Reframes this makes canonical:**
- **Postures are the product-loop operating modes.** The eight operating skills
  (`/mvp-cut`, `/beta-hardening`, `/scale-readiness`, `/contract-sync`,
  `/decision-log`, `/weekly-upgrade`, `/evidence-debug`, `/launch-ops`) are how
  the product loop stays closed.
- **The Phase 8 diagnostic + retro is the system loop.** It is the mechanism by
  which the practice improves itself. It has been running across every project.
- **The Protocol establishes coherence; the loops keep it converging.** Protocol
  is the one-pass sequence; the loops are the recurring engines at each timescale.

---

## Closing signals — the discipline

The reason to adopt the loop lens is not vocabulary. It is convergence. A loop
whose exit is not named and wired does not self-close — it runs until tokens,
patience, or a human runs out. (This is the "agents running with no visible
endpoint" failure: real, expensive, and the direct problem this model solves.)

Facework's advantage is that its closing signals already exist as artifacts. The
work is to **wire each loop to its signal explicitly**, per run:

- **Task loop** → the phase gate is the exit. If the gate criteria aren't
  testable, the task loop can't close. (This is why gates must be concrete.)
- **Product loop** → Postures fire on their signals: drift → `contract-sync`,
  broken behavior → `evidence-debug`, growth pressure → `scale-readiness`. No
  signal, no posture, no closure.
- **System loop** → the diagnostic scorecard and retro close it. A run that
  skips the diagnostic leaves the system loop open — the practice doesn't learn
  from it.
- **Oversight loop** → its exit is human judgment against Frequency and the
  Constitution. It has no automatic exit *by design* — that is where agency lives.

---

## The autonomy dial (per loop)

Autonomy is not one setting. It is a separate dial on **each** loop. This extends
Facework's existing **evidence-level calibration** (Validated / Signaled / Thesis
— which scales *depth*) with a second axis that scales *how much the human is in
the mid-loop*.

A loop's dial is set by: **evidence level × change risk × available oversight
bandwidth.**

| Loop | Default posture | Why |
|---|---|---|
| **Execution** | High autonomy | Runtime-owned; human appears at boundaries (approve plan, review result). |
| **Task** | Medium–high | Agent produces the artifact; the gate (and optional Cold Read) judges done-ness. Human writes the spec/gate. |
| **Product** | Configurable checkpoints | Set by risk. High-risk changes keep a human in review; low-risk maintenance can run on posture signals. |
| **System** | Low autonomy | Methodology changes are consequential (Article XII). The retro *proposes*; the human *ratifies*. |
| **Oversight** | Human only | Sovereignty floor (Article VIII). Not a quality decision — an ownership one. |

**The sovereignty floor is the point.** The field's loudest debate — full
autonomy vs. "there is no auto" — argues on taste and quality. Facework answers
it on ownership: the human keeps the oversight loop because control of the
current is the whole thesis (Cultural Physics — when those who generate the
energy don't control the infrastructure, the energy is extracted). Delegating the
oversight loop is not a productivity choice; it is the extraction pattern
returning by another name.

---

## Validated vs. aspirational

- **Validated by real runs:** the model *describes* how Facework has operated
  across the projects named above. The system loop is observable in the
  `CHANGELOG` and `methodology/retros/`.
- **Aspirational:** *automating* the system loop (autoresearch-style — an outer
  loop that edits prompts, harnesses, and evals on its own). Defer to explicit
  design, and keep a human at the last checkpoint (even Meta's Brain2Qwerty and
  Anthropic's internal factory do). Do not build a self-modifying methodology
  harness before it earns its own gate.

---

## Boundaries

- **Not a replacement for the primitives.** Loops are temporal; primitives are
  structural. Keep them distinct or the two models blur into one muddy one.
- **Fan-out (MapReduce) is not a loop.** Dispatch → gather → validate is a
  pipeline with no feedback. It is a topology you can deploy *inside* any loop
  (e.g. parallel review agents), not a loop of its own.
- **Open question:** where the per-loop autonomy defaults are declared — project
  `ProjectContext`, the manifest, or a Postures config. To resolve when this
  note is promoted from design to canon.
