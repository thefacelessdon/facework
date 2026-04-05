---
name: fw-consonance
version: 3.0.0
description: |
  Consonance: Phase 7 of the Facework Protocol (Integrity — with /fw-entropy
  and /fw-sovereignty). Verify that strategy, narrative, architecture,
  operations, and product behavior remain aligned across audiences and
  stakeholders. Runs after Activation (Phase 6), before Integration (Phase 8).
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

# /fw-consonance — Verify Alignment

**Phase 7 of the Facework Protocol (Integrity — with /fw-entropy and /fw-sovereignty).**
Entry: LaunchPlan and working interfaces exist (Phase 6 gate).
Exit: ConsonanceCheck with no unresolved high-severity contradictions.
Co-skills: /fw-entropy and /fw-sovereignty run alongside this phase.

You are running cross-layer contradiction analysis.
This primitive ensures outputs from earlier phases still harmonize when combined.

## Cultural Physics Foundation

A system can pass local checks and still fail globally.
Consonance catches dissonance between what is promised, what is built,
what is operated, and what is experienced.

Consonance is the anti-fragmentation primitive.

## Step 0: Read Existing Artifacts

Before running alignment checks, scan the project for all phase outputs:
- All artifacts from Phases 1–6 — this skill needs the full picture
- Prior consonance checks or cross-reference audits
- Known contradictions or watch items from earlier phases

Read `define/PROJECT-CONTEXT.md` if it exists. Read the `track:` field and adapt
alignment checks to the track:

| Track | Consonance emphasis |
|-------|---------------------|
| Creator | Identity ↔ interfaces alignment. Does the built thing feel like the person? Taste contract ↔ actual output. |
| Cultural Brand | Brand narrative ↔ product behavior. Editorial voice ↔ commerce experience. Community promise ↔ actual governance. |
| Athlete / Public Figure | Public persona ↔ system behavior. Endorsement positioning ↔ owned brand. Audience expectation ↔ delivery. |
| Agency / Studio | Methodology promise ↔ delivery reality. Pricing model ↔ actual cost structure. Client expectation ↔ handoff quality. |
| Platform / Product | Full depth. Strategy ↔ architecture ↔ operations ↔ interfaces. Every layer checked against every other. |

If no PROJECT-CONTEXT.md exists or no track is set, default to Platform / Product (full depth).

Summarize what you found. Consonance requires reading everything — skip nothing.

## Step 1: Gather Layer Inputs

Collect artifacts from:
- Semantics (meaning),
- Frequency/Current (governance and decisions),
- Stability/Flow (architecture and operations),
- Resonance/Taste (product expression and quality).

If a layer artifact is missing, mark as a blocking gap.

## Step 2: Run Pairwise Alignment Checks

Check:
1. strategy vs product behavior,
2. narrative vs economics/ownership,
3. playbooks vs actual user/operator flows,
4. taste standards vs shipped interactions.

For each pair, record pass/watch/fail with evidence.

## Step 3: Stakeholder Consonance

Evaluate whether major stakeholder groups interpret the system coherently:
- source communities,
- operators/builders,
- partners/institutions,
- end users.

Name where interpretations diverge and why.

## Step 4: Contradiction Register

Create contradiction entries with:
- contradiction statement,
- impacted layers,
- severity,
- correction owner,
- correction deadline.

No contradiction should remain unlabeled.

## Step 5: Consonance Gate

Before marking complete:
- no unresolved high-severity contradiction,
- all watch items have owners and timelines,
- re-test protocol exists,
- outputs are ready for launch/handoff without narrative or behavioral conflict.

## Output (Three-Tier Progressive Disclosure)

**Tier 1 — Narrative (always produced):**
Deliver a 5–7 sentence summary: "Here's where layers align and where they
contradict." Cover the most critical misalignments, stakeholder consonance
highlights, and recommended next action.

**Tier 2 — Summary artifact:**
Write `define/consonance-summary.md` containing:
- Contradiction count by severity (critical / high / medium / low)
- Alignment score (0–100) with brief justification
- Stakeholder consonance table (group × interpretation alignment)
- Track-specific findings (if track was read from PROJECT-CONTEXT.md)

**Tier 3 — Full artifact:**
Produce the complete ConsonanceCheck with YAML frontmatter:

```yaml
---
artifact: ConsonanceCheck
phase: consonance
track: <track from PROJECT-CONTEXT.md or "platform-product">
version: <protocol version>
---
```

Include:
- `Consonance scorecard`
- `Contradiction register`
- `Correction sequence`
- `Owner assignment`
- `Re-test protocol`
- `Consonance gate result`

Conclude with:
"Consonance validated. All Phase 7 (Integrity) checks complete. Run /fw-coherence to package for handoff."
