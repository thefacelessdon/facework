---
name: fw-taste
version: 3.2.0
description: |
  Taste: Phase 3 of the Facework Protocol. Define and enforce quality criteria
  that preserve signal fidelity and contextual integrity across narrative,
  interaction, and system behavior. Runs after Field (Phase 2), before Strategy
  Lock (Phase 4). Produces TasteContract and DesignLanguageSpec (DESIGN.md).
  In v1.3.0 (toolkit v0.0.7), also emits DesignInfrastructure (§11) for
  track-relevant tracks — tokens, component primitives, design-eye evaluator
  Skill, and examples library that makes the TasteContract LLM-callable.
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

# /fw-taste — Set The Quality Bar

**Phase 3 of the Facework Protocol.**
Entry: AudienceFieldMap exists with actors and incentives mapped (Phase 2 gate).
Exit: TasteContract with testable criteria and DesignLanguageSpec (DESIGN.md).

You are formalizing taste as a governance layer.
This primitive prevents aesthetic drift, shallow mimicry, and low-fidelity
execution hidden behind velocity.

## Cultural Physics Foundation

Taste is not personal preference in this system.
Taste is a quality filter that determines whether outputs reinforce or dilute
the cultural signal.

Without explicit taste criteria, speed optimizes for generic output.

## Step 0: Read Existing Artifacts

Before asking questions, scan the project for prior work that informs taste:
- SignalThesis and AudienceFieldMap from prior phases
- Existing brand assets, visual identity, or design systems
- Reference works or inspirations the creator has cited
- Existing product or prototype with aesthetic decisions already made
- Community aesthetic norms documented in the field map

Summarize what you found. Do not re-ask questions these artifacts already answer.

## Step 0.5: Read ProjectContext

Check for `define/PROJECT-CONTEXT.md` (produced by fw-semantics). If it exists, read
it and adapt: skip questions already answered, calibrate depth to the detected
track (e.g., a developer tool needs less aesthetic exploration, more behavioral
coherence focus). If it does not exist, proceed normally.

## Step 1: Define Taste Standard

Use AskUserQuestion to define:
- references that represent desired quality,
- references that represent failure modes,
- non-negotiable qualities (clarity, rhythm, integrity, voice),
- and context-specific anti-patterns.

## Step 2: Build Rubric

Create a rubric with scoring dimensions:
1. signal fidelity,
2. contextual integrity,
3. compositional clarity,
4. behavioral coherence,
5. durability under scale.

Each dimension needs pass/fail indicators, not just adjectives.

## Step 3: Evaluate Artifacts

Assess candidate artifacts across:
- narrative/copy,
- interaction and UI behavior,
- workflow or system behavior.

Provide score and evidence for each dimension.

## Step 4: Reject & Correct

For low-scoring artifacts:
- state rejection reason tied to rubric dimensions,
- provide concrete correction path,
- and define re-review threshold.

No vague "make it better" feedback.

## Step 5: Taste Gate

Before marking complete:
- rubric exists and is reusable,
- rejection criteria are explicit,
- at least one artifact has been scored end-to-end,
- corrections are actionable and testable.

If any fail, iterate rubric and examples.

## Step 6: Emit Design Infrastructure (track-relevant)

For tracks where design fidelity is load-bearing, emit the four
DesignInfrastructure components defined in PROTOCOL.md §11. This turns
the TasteContract from governance documentation into an active layer the
runtime calls.

**Conformance by track** (§11.7):

| Track | Conformance |
|---|---|
| Creator | SHOULD emit (brand fidelity is load-bearing) |
| Cultural Brand | MUST emit (brand IS the product) |
| Athlete / Public Figure | SHOULD emit |
| Agency / Studio | MAY emit (delivery-shaped, brand secondary) |
| Platform / Product | SHOULD emit (UI consistency is operational) |

Read `define/PROJECT-CONTEXT.md` for `track`. If unset, ask the user
before emitting.

### 6.1 — Tokens → `define/design-infrastructure/tokens.json`

Structured design tokens. Canonical top-level vocabulary:
`color`, `type`, `space`, `radius`, `motion`. Within each, choose values
that reflect the TasteContract just locked. JSON format for widest tool
compatibility.

### 6.2 — Components → `define/design-infrastructure/components.yaml`

Minimum viable component primitives. Each component declares: `id`,
`name`, `purpose`, `variants[]`, `states[]`, `tokens_used[]`,
`contract.must[]`, `contract.must_not[]`.

The contract rules are machine-readable — the design-eye-evaluator
consumes them when grading output.

### 6.3 — Design-eye spec → `define/design-infrastructure/design-eye-spec.md`

The playbook the `design-eye-evaluator` Skill executes. Defines:
- Input shape (artifact + type + optional severity threshold)
- Evaluation rubric (criteria pulled from TasteContract Step 2)
- Output shape (pass/fail + dimension scores + grounded feedback)
- How to evaluate per artifact_type (html, image-description, text, doc)

### 6.4 — Examples library → `define/design-infrastructure/examples/`

Two required markdown files:
- `on-brand-examples.md` — concrete cases that pass the TasteContract,
  with annotated rationale
- `off-brand-anti-examples.md` — cases that fail, with annotations of
  which contract clauses they violate

LLM-readable. The evaluator pulls these as reference data when grading.

### 6.5 — Register evaluator in manifest

Declare in `facework.manifest.yaml` (bump `protocol_version` to `1.3.0`):

```yaml
design_infrastructure:
  tokens:     "define/design-infrastructure/tokens.json"
  components: "define/design-infrastructure/components.yaml"
  examples:   "define/design-infrastructure/examples/"
  evaluator_skill_id: "design-eye-evaluator"
```

When `/fw-stability` runs Phase 5, it picks up the
`evaluator_skill_id` and includes a `design-eye-evaluator` entry in
the SkillManifest. The Skill's playbook field points at the
design-eye-spec.md emitted here.

### 6.6 — Gate

DesignInfrastructure emission gate:
- Four files (or paths) present per §11.1
- Tokens file parses as JSON
- Components file parses as YAML
- Each component's `tokens_used[]` resolves to a path in tokens.json
- Examples files exist and are non-empty

Run `bin/validate-manifest` after emission to confirm structural validity.

## Output — Three-Tier Artifact Structure

### Tier 1: Narrative (shown in conversation)

Present the findings conversationally. This is what the user actually reads.
Max 5-7 sentences. Frame it as:

> "Here's what good looks like for your thing."

Cover:
- The quality bar in concrete terms (not adjectives — examples)
- The sharpest anti-pattern to avoid
- The non-negotiable that would kill the signal if violated
- One forward-looking thread to Strategy Lock (what this quality bar implies for economics)

Where taste criteria map naturally to future capability domains, name them.
E.g., if "editorial voice" emerges as a non-negotiable quality, note it as a
likely capability domain. This threads architecture through from Phase 3.

### Tier 2: Summary Card (written to file)

Write a scannable reference card to `define/taste-summary.md`:
- 5 taste criteria (table: dimension | pass example | fail example)
- Non-negotiables (3 max, one line each)
- Top anti-patterns (ranked)

One table, ~10 lines max. No prose — just the locked answers.

### Tier 3: Machine Artifact (written to file)

Write the full TasteContract to `define/TasteContract.md` with YAML frontmatter:

```yaml
---
artifact: TasteContract
phase: taste
version: 1.0
status: locked
capability-domains: []  # nouns that map to future system capabilities
---
```

Body contains the complete structured output:
- Taste standard
- Scoring rubric (with pass/fail indicators per dimension)
- Artifact scorecard
- Rejection reasons
- Correction directives
- Taste gate result

Conclude with:
"Taste calibrated. Run /fw-frequency and /fw-current to lock strategy and economics."

### Tier 3b: DesignInfrastructure (v1.3.0, track-relevant)

If Step 6 emitted DesignInfrastructure, the additional files at
`define/design-infrastructure/` are part of the Phase 3 output:

- `tokens.json` — design tokens
- `components.yaml` — primitives with machine-readable contract rules
- `design-eye-spec.md` — evaluator playbook
- `examples/on-brand-examples.md` and `examples/off-brand-anti-examples.md`

The `design_infrastructure` block in `facework.manifest.yaml` declares
the paths and links to the evaluator skill ID. `/fw-stability` will
register the evaluator skill at Phase 5 SkillManifest emission.
