---
name: fw-coherence
version: 4.3.0
description: |
  Coherence: Phase 8 of the Facework Protocol (Integration). Final phase.
  Package everything so someone can clone the repo and start building on Day 1
  without a meeting. README, review brief, project tracker, engineering guide,
  clean repo. In v1.1.0 (toolkit v0.0.5), also validates the four Runtime
  Ports cross-manifest references (§9.7) before declaring handoff ready. In
  v1.2.0 (toolkit v0.0.6), emits the HarnessBundle markdown export (§10) for
  runtimes that ingest file-based bundles. Closes with diagnostic — coherence
  scorecard, retro, and methodology evolution. Runs after Integrity (Phase 7).
allowed-tools:
  - Read
  - Write
  - Edit
  - Grep
  - Glob
  - Bash
  - AskUserQuestion
  - Agent
---

# /fw-coherence — Integrate Into a Unified Whole

**Phase 8 of the Facework Protocol (Integration). Final phase.**
Entry: SovereigntyMap and ConsonanceCheck exist; all critical gaps addressed (Phase 7 gate).
Exit: HandoffPackage; coherence scorecard; DiagnosticReport (with YAML frontmatter); coherence-summary.md; methodology updated.

You are packaging everything from previous phases so a new participant can
enter the system and build from it without the original builder present.
If they can — the system is coherent. If they can't — it isn't.

## The Cultural Physics Foundation

Coherence is the output of the governing equation:
`Coherence = (Flow × Resonance) / (1 + Entropy)`

This is where everything integrates. Flow has been designed, resonance has been
built, entropy has been reduced. Coherence is the proof that the system holds
its shape when handed to someone who wasn't there when it was built.

But coherence in Cultural Physics means more than clean documentation. It means
the system is transmissible to the community it was built for — not just to
engineers, but to the people whose energy it's designed to sustain. If a creator
can look at the handoff package and understand what this system does for them,
how it protects their interests, and how they maintain control — that's coherence.

The deepest test: **can the community this was built for operate this without
depending on the original builder?** Not just "can an engineer implement from
these specs" — but can the people this serves achieve true independence through
this system? That's the difference between technical coherence and cultural coherence.
This phase demands both.

## Step 0: Read Existing Artifacts

Before packaging, scan the project for everything produced across all phases:
- All artifacts from Phases 1–7 — Coherence needs the complete picture
- Existing README, CLAUDE.md, or orientation documents
- Prior handoff packages or onboarding docs
- Git history to understand the build arc
- Read `define/PROJECT-CONTEXT.md` if it exists. Extract the `track:` field.
  Adapt all handoff packaging to the track (see Track-Specific Emphasis below).
  If no PROJECT-CONTEXT.md exists, ask the user which track applies before proceeding.

This step IS the audit — Coherence reads everything. Step 1 structures what you find.

### Track-Specific Emphasis

The `track:` field from PROJECT-CONTEXT.md determines what "handoff-ready" means:

| Track | Coherence emphasis |
|-------|-------------------|
| **Creator** | Handoff = the creator themselves can maintain and evolve. README oriented to solo operator. Engineering guide focused on "how to update your site/store/content." Diagnostic focuses on identity coherence. |
| **Cultural Brand** | Handoff = new team member can build on this. Full README + review brief + engineering guide. Diagnostic focuses on brand coherence across touchpoints. |
| **Athlete / Public Figure** | Handoff = manager/agent team can operate. README oriented to non-technical operators. Playbooks are the key artifact. Diagnostic focuses on sovereignty and extraction. |
| **Agency / Studio** | Handoff = new team member can deliver to clients. Methodology docs are the key artifact. Engineering guide = delivery playbook. Diagnostic focuses on operational coherence. |
| **Platform / Product** | Full depth. Complete handoff package. Engineering guide must enable new developer on Day 1. Diagnostic covers all dimensions. |

Apply this emphasis throughout Steps 2–8. For example, a Creator track may skip
the Review Brief (Step 3) if the creator is the only builder, while an Agency track
should weight the Project Tracker (Step 4) toward client delivery workflows.

## Step 1: Audit What Exists

Read the full project directory. Catalog:
- All specs (from /fw-stability and /fw-entropy)
- All playbooks (from /fw-flow)
- All decision records (from /fw-current)
- All governance docs (from /fw-frequency)
- The working interfaces (from /fw-resonance)
- Any engineering guides already written
- **Runtime Ports (v1.1.0):** the four port manifests (from /fw-stability):
  `define/skill-manifest.yaml`, `define/memory-map.yaml`,
  `define/context-manifest.yaml`, `define/integration-manifest.yaml`. These
  are the machine contracts a runtime ingests — they MUST be present and
  cross-references MUST resolve for handoff to be runtime-ready.
- **HarnessBundle (v1.2.0):** if `runtime_ports.bundle.path` is declared,
  the markdown bundle directory (`harness-bundle/` by default) with
  required files per evidence_level. Emitted in Step 6c.

## Step 2: README

Create README.md at project root:
- What this is (2-3 sentences — no jargon)
- Who this serves and how (the energy source, not just "target market")
- The business model (key numbers only)
- Architecture overview (directory structure)
- Technology stack (table)
- How to run locally (copy-pasteable commands)
- Key documents index (links to specs, playbooks, guides)
- Current status (what's done, what's next)

## Step 3: Review Brief (if handoff to another builder)

Create REVIEW-BRIEF.md:
- Read order with time estimates (orientation → architecture → code → playbooks)
- What feedback is needed (provide structured template)
- Key decisions that are LOCKED (don't relitigate — read the decision records)
- Ownership model summary (who controls what — so the builder doesn't accidentally
  introduce extraction patterns the decisions phase explicitly rejected)
- Repo structure quick reference

## Step 4: Project Tracker

Create a tracker showing all work items:
- Completed work (what's been done)
- Pending work organized by priority
- Each pending item should have enough context to start without asking questions:
  - What to do (steps)
  - What to read first (file paths)
  - What files to create or modify
  - What depends on what
  - How to verify it's done

## Step 5: Engineering Guide

Ensure the platform directory has a CLAUDE.md (or equivalent):
- Architecture overview
- Code conventions and naming
- Data patterns (how queries work, how auth works)
- Ownership patterns (how data portability works, how exit works)
- How to add a new feature (step by step)
- Test expectations (what must be tested, how to run)
- Canonical numbers (where rates/thresholds come from — never hardcode)

## Step 6: Git Hygiene

- .gitignore covers secrets, node_modules, env files
- No sensitive files in the repo
- Commit history has descriptive messages
- Push to GitHub (ask user: public or private?)
- Set up collaborator access if needed

## Step 6b: Build Brief

Produce a one-page synthesis oriented to the builder (human or agent). The Build
Brief extracts from existing phase artifacts — it is not new research. This is
the artifact someone opens when they sit down to implement.

Write to `define/build-brief.md`:

```markdown
# Build Brief: [Feature/Project Name]

## Problem (from Frequency)
One paragraph. What user, what pain, what evidence level.

## Approach (from Stability)
What to build. 3-5 bullet points. Specific components, not concepts.

## What to Skip
Explicit list of things that were considered and deferred.
Each with one-line rationale.

## Premises (from Current decisions)
Numbered list of assumptions the build depends on.
If any premise is wrong, the build changes.

## Success Criteria
Measurable. Include a kill signal: what would tell you to stop.

## Dependencies
What must exist before building starts.
Ordered: do this first, then this, then this.
```

The Build Brief differs from the HandoffPackage: the HandoffPackage helps
someone understand the project. The Build Brief helps someone build the
next thing. Different audience, different artifact.

**When to skip:** If the project is thesis-level with no validated demand,
the Build Brief may be premature. Produce it when there's a concrete build
ahead.

## Step 6c: Emit Harness Bundle (v1.2.0)

If the manifest declares `runtime_ports.bundle.path` (v1.2.0), emit the
markdown bundle that file-based runtimes (Open Claw, Glass-style internal
tools, others) will ingest. The bundle is **derived** from the four
Runtime Port YAML manifests (§9) plus the existing artifacts —
`SignalThesis`, `TasteContract`, `DecisionLedger`, `WedgeSpec`,
`ProjectContext`. The YAML manifests remain the source of truth; the
bundle is regeneratable from them.

**Conformance by `project.evidence_level`** (PROTOCOL.md §10.4):

| Evidence level | Bundle |
|---|---|
| Validated | MUST emit the full bundle |
| Signaled | SHOULD emit: CLAUDE.md, soul.md, identity.md, purpose.md, skills/ |
| Thesis | MAY emit minimal: CLAUDE.md + skills/ |

### 6c.1 — Bundle location

Default path: `harness-bundle/` relative to the project root. The path is
declared in the main manifest as `runtime_ports.bundle.path`.

### 6c.2 — File generation order

Generate in this order so dependencies resolve cleanly:

1. **`boundary.md`** — extract `MemoryMap.boundary` block as a
   declarative contract. Runtimes read this first at install time.
2. **`identity.md`** — pull `ProjectContext` (tenant, track, audience,
   evidence_level, stage) as a scannable factual block.
3. **`soul.md`** — compile `SignalThesis` (means / does-not-mean) +
   `TasteContract` quality bar + Frequency decisions (governing truth).
   Voice of the tenant world, not protocol prose.
4. **`purpose.md`** — numbered list of locked premises from
   `DecisionLedger` + `WedgeSpec` (audience / offer / channel / economic
   logic) + stage criteria from PROTOCOL.md §8.
5. **`memory.md`** — render `MemoryMap.structure[]` as a tree plus
   `indexing[]`, `retention[]`, and `conventions`. Exclude the boundary
   block (lives in `boundary.md`).
6. **`tools.md`** — per-integration setup from `IntegrationManifest`,
   with auth pointers (NOT secret values), rate limits, failover. Trust
   boundary distribution summary at the end.
7. **`skills/{id}.md`** — one file per skill in `SkillManifest.skills[]`.
   YAML frontmatter (id, trigger, ownership, tags) + body sections
   (description, when this fires, inputs, outputs, dependencies,
   escalation, source playbook link).
8. **`CLAUDE.md`** — top-level navigation written LAST, listing all
   above files with one-line purpose for each. YAML frontmatter declares
   `manifest_version`, `generated_at`, `source_manifest`.

### 6c.3 — Generation method

For v1.2.0, emission is **manual** — walk the user through producing each
file from the source artifacts. Automation (a script that reads the four
YAMLs and renders all bundle files) is deferred until the format
stabilizes against ≥2 reference runtimes.

### 6c.4 — Read-only contract

The bundle is one-way export. Tenant edits to bundle files do not
propagate back to the YAML manifests. If content needs to change, edit
the source artifact (SignalThesis, TasteContract, etc.) and regenerate.
Document this in `CLAUDE.md` for the runtime operator.

### 6c.5 — Validation

After emission, run `bin/validate-manifest`. It checks:
- Bundle directory exists at declared path
- Required files present per evidence_level
- One `skills/{id}.md` file for each skill in SkillManifest
- `boundary.md` is present and non-empty

If validation fails, the HandoffPackage is incomplete — do not declare
coherence until the bundle passes.

## Step 7: Coherence Test

Before marking complete, ask yourself:

**Technical coherence:**
- Can someone clone this repo and run the interfaces in under 5 minutes?
- Can they find any spec within 30 seconds using the README?
- Can they understand the business model in one read of the business model doc?
- Can they start building a feature using only the engineering guide?
- Are there any numbers that appear in multiple places with different values?

**Runtime coherence (v1.1.0):**
- Does `bin/validate-manifest` pass cleanly? Run it now if you haven't —
  this is the gate that catches stale port references.
- Do the four Runtime Port manifests cross-reference cleanly (§9.7)?
  - Skill `reads_memory`/`writes_memory` paths exist in `MemoryMap`
  - Skill `context_load` IDs exist in `ContextManifest`
  - Skill `integrations` ↔ Integration `used_by` resolves bidirectionally
  - Skill `depends_on_capabilities` resolves to entries in `CapabilityMap`
- Is `MemoryMap.boundary` block present and explicit?
- Does the `IntegrationManifest` contain zero raw secrets — only `SecretRef`
  pointers?
- Does the project's `evidence_level` match what the ports declare? A
  Validated project MUST emit all four; the validator hard-fails otherwise.

**Cultural coherence:**
- Can the community this was built for understand what the system does for them?
- Does the ownership model protect the people generating the energy?
- Could a new builder accidentally introduce extraction patterns? If so, are there
  guardrails in the engineering guide and specs to prevent it?
- Does the system enable independence — or does it create a new dependency?

If any answer is no — fix it before declaring coherence.

## Step 8: Diagnostic — Measure and Evolve

The protocol closes by measuring what happened and feeding learnings back into
the practice. This is the mechanism that makes Facework self-reinforcing.

### Walk Each Primitive

For each of the 12 primitives, ask the user (via AskUserQuestion, one at a time):

**Semantics:** "Did the canonical language hold? Were there naming contradictions?"
**Field:** "Did the social dynamics play out as mapped? Any surprises?"
**Taste:** "Did the quality bar hold through the build? Where did it slip?"
**Frequency:** "Did the governing truth hold? Were the economics right?
Did any number change during the build? Did the extraction check surface anything?"
**Current:** "Did the decisions hold? Were any revisited? Were there dilemmas
you wish you'd surfaced earlier?"
**Flow:** "Did the playbooks match reality? What workflows played out differently?"
**Stability:** "Were the specs accurate? Which ones needed rework? For
v1.1.0 projects: did the four Runtime Ports stay in sync with the specs,
or did they drift? Were skill/playbook/capability cross-references hard to
keep aligned?"
**Resonance:** "Was demo mode useful? Did the interfaces carry the frequency
of the community it was built for?"
**Entropy:** "What did the review catch that would have been a production incident?"
**Sovereignty:** "Did the ownership model hold? Any lock-in risks that slipped through?"
**Consonance:** "Were there cross-layer contradictions the review missed?"
**Coherence:** "Could the builder start from the handoff? What was missing?"

### Produce Coherence Scorecard

Score three dimensions from evidence, not aspiration.

**Flow (1-5):** How easily does energy move through the system?
```
1 — Participants face constant friction; the system fights them
2 — Major bottlenecks exist; workarounds are common
3 — Core paths work smoothly; edge cases create drag
4 — Energy moves freely through most of the system
5 — The system feels invisible; participants do what they came to do
```

**Resonance (1-5):** Does the system connect with its intended community?
```
1 — The community wouldn't recognize this as built for them
2 — Functional but generic; could be for anyone
3 — Clear awareness of the community; some authentic touches
4 — The community would say "this gets us"
5 — Someone from the community sees it and says "that's for me" before reading docs
```

**Structural Integrity (1-5):** How strong is the system's foundation?
```
1 — Critical extraction patterns; high dependency; silent failures everywhere
2 — Known extraction friction; several unresolved structural gaps
3 — Minor extraction risks documented; some structural debt remains
4 — Ownership model enforced; few gaps; dependencies documented
5 — Self-sustaining; participants control their current; system maintains itself
```

**Computing the score:**
```
Entropy = 6 - Structural Integrity
Coherence = (Flow × Resonance) / (1 + Entropy)
```

**Interpreting the score:**
```
0.2 – 1.0   RED          Incoherent. Stop building, fix the foundation.
1.0 – 2.5   AMBER        Holds but fragile. Operational for MVP.
2.5 – 5.0   GREEN        Coherent. Ready for handoff and scaling.
5.0 – 12.5  DEEP GREEN   Self-reinforcing. Rare — the target, not the baseline.
```

Present recommended scores to the user via AskUserQuestion and let them adjust.

### Scorecard Output

```
┌─────────────────────────────────────────────────────────┐
│              COHERENCE SCORECARD                        │
│              [Project Name] — [Date]                    │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Flow:                [1-5] ████░  [assessment]        │
│  Resonance:           [1-5] ████░  [assessment]        │
│  Structural Integrity:[1-5] ████░  [assessment]        │
│                                                         │
│  Entropy = 6 - SI = [value]                            │
│  Coherence = (F × R) / (1 + E) = [score]              │
│  Zone: [RED / AMBER / GREEN / DEEP GREEN]              │
│                                                         │
│  Verdict: [one sentence]                                │
│  Key finding: [the single most important learning]     │
│  Carry forward: [what the next project must do]        │
└─────────────────────────────────────────────────────────┘
```

### Write Retro

Save to methodology/retros/:
- Project name, date, duration, phases completed
- Per-primitive learnings (what worked, what didn't, what was missing)
- Coherence scorecard
- Methodology updates proposed
- Top 3 things to carry forward

### Update Methodology

Propose specific changes based on retro findings. For each:
- "Add to methodology: [new pattern]. Should we add this?"
- "Remove from methodology: [unnecessary step]. Should we remove this?"
- "Modify in methodology: [adjusted step]. Should we update this?"

Apply approved changes. Update CHANGELOG.md with version bump.

## Output — Three-Tier Progressive Disclosure

### Tier 1 — Narrative (shown in conversation)

Present 5–7 sentences covering:
- **Coherence verdict:** Is this system transmissible? Can someone start without the builder?
- **Strongest dimension:** Which primitive held best and why.
- **Weakest dimension:** Where the system is most fragile.
- **One forward-looking recommendation:** What the next project or next phase should prioritize.

This is the only output shown directly. Keep it human, direct, and decisive.

### Tier 2 — Summary Card (written to `define/coherence-summary.md`)

Write a summary card containing:
- **Coherence scorecard** (Flow, Resonance, Structural Integrity scores + computed Coherence score and zone)
- **Handoff readiness verdict:** Can someone start building from this without the original builder? Yes/No + 1-sentence explanation.
- **Cultural coherence verdict:** Can the community this was built for operate this? Yes/No + 1-sentence explanation.
- **Top 3 methodology learnings** from this run (what the practice should carry forward).
- **Track:** The project track from PROJECT-CONTEXT.md, so future readers know which emphasis was applied.

### Tier 3 — Machine Artifact (HandoffPackage + DiagnosticReport)

The HandoffPackage (README, review brief, project tracker, engineering guide) is
already produced in Steps 2–6. For v1.1.0 projects, the four Runtime Port
manifests (`define/{skill,memory-map,context,integration}-manifest.yaml`) are
part of the HandoffPackage — they are how the next operator's runtime
ingests the world without rebuilding context. For v1.2.0 projects, the
markdown HarnessBundle (`harness-bundle/`) emitted in Step 6c is also part
of the HandoffPackage — it's the file-based view runtimes like Open Claw
and Glass-style harnesses read directly.

Write the DiagnosticReport with YAML frontmatter:
```yaml
---
artifact: DiagnosticReport
phase: coherence
track: [from PROJECT-CONTEXT.md]
version: [protocol version from this run]
scores:
  flow: [1-5]
  resonance: [1-5]
  structural_integrity: [1-5]
  entropy: [computed]
  coherence: [computed]
  zone: [RED / AMBER / GREEN / DEEP GREEN]
handoff_ready: [true/false]
cultural_coherence: [true/false]
date: [YYYY-MM-DD]
---
```

Below the frontmatter, include the full per-primitive walkthrough answers,
the coherence scorecard visual, the retro, and methodology proposals.

```
Project → /fw-coherence → Handoff + Diagnostic → Methodology Update
   ↑                                                        |
   └──── Next project uses updated practice ←───────────────┘
```

Every project makes the practice better. Every run is a version bump.
