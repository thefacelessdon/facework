---
name: fw-field
version: 3.1.0
description: |
  Field: Phase 2 of the Facework Protocol. Map cultural physics — status
  dynamics, norms, incentives, and adoption loops that determine how the system
  behaves under real social pressure. Runs after Semantics (Phase 1), before
  Taste (Phase 3).
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

# /fw-field — Map Cultural Physics

**Phase 2 of the Facework Protocol.**
Entry: SignalThesis exists with meaning boundaries (Phase 1 gate).
Exit: AudienceFieldMap with key actors, incentives mapped, and initial entry vector selected.

You are mapping the social field that will shape system behavior.
This primitive converts "market" assumptions into explicit cultural dynamics.

## Cultural Physics Foundation

Products do not launch into neutral space.
They enter fields with existing status hierarchies, trust networks, rituals,
gatekeepers, and extraction history.

Field mapping reduces blind spots that specs and dashboards cannot reveal.

## Step 0: Read Existing Artifacts

Before asking questions, scan the project for prior work that informs field mapping:
- SignalThesis from Phase 1
- Existing audience research, user personas, or market analysis
- Community maps, stakeholder analyses, or ecosystem documentation
- Competitor analyses or landscape reviews
- Any prior field work, ethnographic notes, or community observations

Summarize what you found. Do not re-ask questions these artifacts already answer.

## Step 0.5: Read ProjectContext

Check for `define/PROJECT-CONTEXT.md` (produced by fw-semantics). If it exists, read
it and adapt: skip questions already answered, calibrate depth to the detected
track (e.g., a B2B tool needs less ritual mapping, more institutional actor focus).
If it does not exist, proceed normally.

## Step 1: Define Field Participants

Identify:
- source communities (energy generators),
- intermediaries (curators, distributors, gatekeepers),
- institutional actors (platforms, policy, partners),
- and extractive actors (value-capture without source reinvestment).

## Step 2: Status & Incentive Model

Map:
- who gains status from adoption,
- who loses status from adoption,
- who monetizes behavior change,
- who bears the highest transition cost.

If incentives and stated mission diverge, mark as a structural risk.

## Step 3: Norms & Rituals

Document:
- default rituals in the target culture,
- taboo violations to avoid,
- symbolic cues that signal authenticity or extraction,
- expected participation patterns.

Do not reduce this to demographics; keep it behavioral and relational.

## Step 4: Adoption & Resistance Dynamics

Define:
- first-adopter profile,
- trust transfer path,
- resistance vectors,
- inflection point where behavior normalizes.

Include time horizons and dependency assumptions.

## Step 5: Extraction Risk Map

For each growth path, ask:
- does upside flow back to source communities?
- does control centralize as scale increases?
- does participation become dependent without ownership?

Rank risks: low, medium, high.

## Step 6: Field Gate

Before marking complete:
- field participants are explicitly mapped,
- incentives align with stated mission,
- adoption assumptions are testable,
- extraction risks are named with mitigations.

If not, revise before moving to Frequency or Stability decisions.

## Output — Three-Tier Artifact Structure

### Tier 1: Narrative (shown in conversation)

Present the findings conversationally. This is what the user actually reads.
Max 5-7 sentences. Frame it as:

> "Here's who's in the room and what moves them."

Cover:
- The key actors and their real incentives (not the polite version)
- The sharpest adoption dynamic (what makes or breaks entry)
- The biggest extraction risk
- One forward-looking thread to Taste (what quality must look like given this field)

Where field actors or dynamics map naturally to future capability domains, name
them. E.g., if "curation" emerges as a key intermediary behavior, note it as a
likely capability domain. This threads architecture through from Phase 2.

### Tier 2: Summary Card (written to file)

Write a scannable reference card to `define/field-summary.md`:
- Actor map (table: actor type | who | incentive | risk level)
- Entry vector (1-2 sentences)
- Key dynamics (3-5 bullet points)
- Top extraction risks (ranked)

~10 lines max. No prose — just the locked answers.

### Tier 3: Machine Artifact (written to file)

Write the full AudienceFieldMap to `define/AudienceFieldMap.md` with YAML frontmatter:

```yaml
---
artifact: AudienceFieldMap
phase: field
version: 1.0
status: locked
capability-domains: []  # nouns that map to future system capabilities
---
```

Body contains the complete structured output:
- Field participant map
- Status and incentive model
- Norm and ritual analysis
- Adoption and resistance model
- Extraction risk map
- Field gate result

Conclude with:
"Field mapped. Run /fw-taste to define quality governance and design language."
