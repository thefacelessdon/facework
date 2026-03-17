---
title: "Facework × Build Methodology: The Connective Tissue"
type: Internal — Methodology Theory
author: Stedmon
date: March 2026
---

# Facework × Build Methodology

The GAMUT build methodology is not a project management system that happens to be
well-organized. It is Facework applied to product creation. Every phase of the
methodology maps to a force in the Primitive Stack. Every output is an architectural
form from the Facework system.

This document makes the mapping explicit — not to retrofit meaning, but to reveal
what was already operating beneath the surface.

---

## The Primitive Stack as Build Phases

The 7 forces of the Primitive Stack are not metaphors for the build phases.
They ARE the build phases. Each phase activates a specific force.

```
PRIMITIVE STACK              BUILD METHODOLOGY               WHAT IT PRODUCES
─────────────────────────────────────────────────────────────────────────────────

FREQUENCY                    Phase 1: Governance              The irreducible signal.
The irreducible signal       & Foundation                     Before anything is built,
of the identity — what                                       extract what this system
remains when performance,    Business model, rates,           IS at its core. Economics,
aspiration, and noise        agreements, exit guarantees,     constraints, rights. The
fall away.                   verification, gates.             truth the system will
                                                             carry forward.

CURRENT                      Phase 2: Strategic               The directional force.
The directional force        Pressure Testing                 Surface every question
that moves the identity                                      that could change the
through time. Trajectory,    CEO reviews, dilemma             trajectory. Resolve them
momentum, orientation.       resolution, decision records.    now. Lock direction before
                                                             momentum builds.

STABILITY                    Phase 3: Architecture            The foundational
The foundational             Specification                    infrastructure. 10 specs,
infrastructure that                                          6,500 lines, every system
supports weight, scale,      Data isolation, payout           defined before a single
and pressure.                validation, sync models,         line of code. This is the
                             health monitoring, APIs.         architecture that will
                                                             carry weight.

FLOW                         Phase 4: Operational             The adaptive intelligence.
The adaptive intelligence    Playbooks                        9 playbooks that map how
of the system — how it                                       the system responds to
responds to change without   Onboarding, marketing,           every scenario without
losing itself.               billing failure, low-velocity,   losing itself. Thresholds,
                             creative ops, supply chain.      decision trees, escalation.

RESONANCE                    Phase 5: Platform                The transmission force.
The force that allows the    Prototype                        A working prototype that
system to transmit meaning                                   SHOWS what the system is.
and create movement          Demo mode, lifecycle-aware       Not a pitch. Not a slide.
outside itself.              rendering, typed schema,         A living artifact that
                             public pages.                    creates understanding
                                                             without explanation.

ENTROPY                      Phase 6: Technical               The diagnostic force.
The breakdown force —        Spine Hardening                  22 issues surfaced.
friction, contradiction,                                     5 silent failure modes
misalignment that expose     Eng review across 5 domains,     caught. Every fracture
structural weakness.         failure mode analysis,           point identified before
Entropy is diagnostic        critical gap fixes.              it could become a
truth.                                                       collapse under pressure.

COHERENCE                    Phase 7: Handoff                 The integrating force.
The structural logic that    & Packaging                      Everything unified into
integrates every part into                                   a system that holds its
a unified whole.             README, review brief,            shape when handed to
                             project tracker, context          someone who wasn't there
                             packets, engineering guide.       when it was built.
```

---

## The Engines as Architectural Forms

Facework's engines aren't just theoretical constructs. They're the exact
combinations that produced each category of GAMUT output.

### Identity Architecture (Coherence + Frequency)
**What it is in Facework:** The internal spine — the architecture of truth.
**What it was in GAMUT:** Phase 1 + Phase 2 combined.

The business model IS frequency extraction — finding the irreducible economic
truth ($149/month, 9/3/3 split, 170 accounts = self-sustainability). The
decision records ARE coherence — ensuring every resolved question strengthens
the center rather than contradicting it.

**Artifacts produced:**
- Business Model (frequency: what the economics ARE)
- Fund Governance (coherence: how the system stays aligned)
- Decision Records (coherence: resolved contradictions documented forever)
- Creator Agreement (frequency + coherence: the truth the relationship is built on)

### Narrative Architecture (Coherence + Resonance + Flow)
**What it is in Facework:** How truth becomes communicable.
**What it was in GAMUT:** Phase 5 + Phase 7 combined.

The prototype IS resonance — it transmits understanding without the builder
present. The review brief IS narrative architecture — it structures how someone
else enters the system. The handoff package IS flow — the adaptive intelligence
that allows the system to be inhabited by someone new without losing itself.

**Artifacts produced:**
- Platform prototype (resonance: the system demonstrates itself)
- Review brief (narrative: structured comprehension for an outsider)
- Engineering CLAUDE.md (flow: the builder adapts to the system, not vice versa)
- Platform Narrative (resonance: the pitch that works in any vertical conversation)

### System Architecture (Coherence + Stability + Current)
**What it is in Facework:** The logic of behavior — workflows, rituals, and
mechanisms that allow identity to act with integrity.
**What it was in GAMUT:** Phase 3 + Phase 4 combined.

The architecture specs ARE stability — 6,500 lines of foundational infrastructure.
The playbooks ARE current — directional workflows that keep the system moving
with intent. Together, they form the system architecture: the complete logic
of how GAMUT behaves.

**Artifacts produced:**
- 10 architecture specs (stability: the foundation)
- 9 operational playbooks (current: the direction of behavior)
- Agent operations architecture (stability + current: machines that maintain coherence)

### Ecosystem Architecture (Coherence + Frequency + Resonance + Current)
**What it is in Facework:** The expansion of identity into a shared logic.
Multiple participants inhabiting the same system without dilution.
**What it was in GAMUT:** The handoff to Corey. The review brief. The
engineering guide. The context packets.

This is the most remarkable mapping. GAMUT's handoff system is explicitly
designed so that another human can inhabit the same system — build from
the same specs, follow the same conventions, maintain the same coherence —
without the original builder present. That IS ecosystem architecture.

**Artifacts produced:**
- Handoff package (ecosystem: someone else enters the system)
- Context packets (ecosystem: shared understanding per work item)
- CLAUDE.md files (ecosystem: Claude Code inhabits the same system coherently)

### Diagnostic Architecture (Coherence + Entropy)
**What it is in Facework:** The revelation of structural truth. Exposing fractures.
**What it was in GAMUT:** Phase 6. The eng review.

The eng review IS diagnostic architecture. It exists to surface entropy — the
friction, contradiction, and misalignment that would otherwise become collapse
points in production. The 5 critical gaps it found (missed webhooks, stale data,
hallucination, realtime drops, stuck agents) are textbook entropy: structural
weaknesses exposed by diagnostic truth.

**Artifacts produced:**
- 22 resolved issues (entropy identified and addressed)
- 5 critical gap fixes (entropy that would have been silent failure)
- Failure mode analysis (diagnostic: every codepath's collapse scenario)

### Scaling Architecture (Coherence + Flow + Current)
**What it is in Facework:** How the system behaves when accelerated or expanded.
**What it was in GAMUT:** The agent system itself.

53 agents (18 automated + 35 LLM-assisted) are the scaling architecture.
They maintain coherence at scale — the same rules, the same thresholds, the
same quality gates — without requiring proportional human headcount. The
agent system IS how GAMUT's identity holds its shape under expansion.

The 5-state lifecycle (SHADOW → LIVE → DEGRADED → PAUSED → DISABLED) is
literally a coherence governor for machine behavior.

**Artifacts produced:**
- Agent implementation spec (scaling: coherence under expansion)
- Phase-in sequence (current: ordered growth)
- Token cost modeling (flow: adaptation within constraints)

---

## The Methodology IS Coherence Practice

Here's the core insight: the build methodology doesn't "use" Facework.
The build methodology IS Facework applied to product creation.

Every principle from the Facework document maps to a methodology behavior:

| Facework Principle | Methodology Behavior |
|--------------------|---------------------|
| "Identity is not expression. Identity is architecture." | Specs before code. Architecture before prototype. |
| "Build the architecture, and the identity will make itself known." | Demo mode: build the system, the UX reveals itself through lifecycle phases. |
| "Systems are being asked to carry more weight than their coherence allows." | Gate structure: don't advance past a gate until coherence is established. |
| "Anything not coherent will eventually contradict itself." | Cross-reference checks: every number traces to one canonical source. |
| "Coherence does not demand sameness. It demands integrity." | Vertical generalization: The Current and Club Volley share infrastructure but differ in expression. |
| "Entropy is not failure; it is diagnostic truth." | Eng review: entropy is surfaced intentionally, not discovered accidentally. |
| "Each new layer strengthens the previous one." | Phase sequencing: each phase's output is the next phase's input. |
| "A coherent identity gains self-reinforcement." | The retro loop: methodology evolves, each project strengthens it. |

---

## The Retro as Diagnostic Architecture

The `/build-retro` skill IS Diagnostic Architecture (Coherence + Entropy)
applied to the methodology itself.

After each project:
1. Surface entropy (what didn't work, what was missing)
2. Reveal structural truth (which phases need adjustment)
3. Update the architecture (evolve the methodology)
4. Log the change (changelog = diagnostic history)

This makes the methodology self-reinforcing — the Facework long game:
"Each new layer strengthens the previous one."

---

## Why This Matters for Collaboration

When you bring this to a collaboration, you're not bringing a project
management tool. You're bringing a coherence practice.

**What most people bring to collaboration:**
- An idea (frequency without stability)
- A pitch (resonance without architecture)
- Energy (current without coherence)

**What you bring:**
- A system that extracts frequency before building
- A method that resolves contradictions before they compound
- Specs that create stability before code
- Playbooks that design flow before operations
- Prototypes that demonstrate resonance without explanation
- Diagnostics that surface entropy before collapse
- Handoffs that enable ecosystem without dilution

This is not a workflow. This is a coherence practice for building things.
That's the connective tissue. That's why it works.

---

## Command Mapping: Primitives as Build Commands

The build methodology commands should use Facework's primitive vocabulary.
Not "phase-1" through "phase-7" — those are generic. The primitives are specific,
memorable, and carry the theory's meaning:

```
/fw-frequency     Phase 1: Extract the irreducible signal
/fw-current       Phase 2: Establish direction, resolve contradictions
/fw-stability     Phase 3: Build the architectural foundation
/fw-flow          Phase 4: Design adaptive behavior
/fw-resonance     Phase 5: Make it transmissible (prototype)
/fw-entropy       Phase 6: Reveal structural weakness
/fw-coherence     Phase 7: Integrate into a unified whole
/fw-diagnostic    Retro: Measure, evolve, strengthen
```

The `fw-` prefix marks them as Facework commands. The primitive name
tells you what force you're activating. The output is the architectural
form that force produces.

---

## Repo Structure

This practice should be its own repository:

```
facework/
├── README.md                    ← What Facework is, how to install
├── methodology/
│   ├── build-methodology.md     ← The 7-phase system (living document)
│   ├── CHANGELOG.md             ← Version history across projects
│   └── retros/                  ← Per-project retrospectives
│       ├── RETRO-TEMPLATE.md
│       └── 001-gamut-retro.md
├── theory/
│   ├── facework-practice.md     ← The full Facework theory document
│   └── connective-tissue.md     ← This document — theory↔methodology mapping
└── skills/
    ├── fw-frequency/SKILL.md
    ├── fw-current/SKILL.md
    ├── fw-stability/SKILL.md
    ├── fw-flow/SKILL.md
    ├── fw-resonance/SKILL.md
    ├── fw-entropy/SKILL.md
    ├── fw-coherence/SKILL.md
    └── fw-diagnostic/SKILL.md
```

Install: clone the repo, symlink skills into `~/.claude/skills/`.
Use: open any project directory, type `/fw-frequency` to begin.
