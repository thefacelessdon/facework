# Design Eye Evaluator — Playbook (face.works)

The `design-eye-evaluator` Skill executes this playbook. It gates output
against the Face.works TasteContract, returning pass/fail + grounded
feedback. Runtime calls this skill before publishing artifacts.

## Inputs

| Name | Type | Required | Description |
|---|---|---|---|
| `artifact_path` | file_path | yes | Path to the artifact under review |
| `artifact_type` | string | yes | `html` / `image-description` / `text` / `doc` |
| `severity_threshold` | string | no | `must` (default) — fail on any must violation; `should` — fail on any contract violation; `info` — never fail, return feedback only |

## Step 0 — Load context

Load the standard context bundles plus the design-infrastructure bundle:

- `soul` — TasteContract quality bar
- `taste` — full design language (DESIGN.md) and TasteContract rubric
- `design-infrastructure` — tokens.json + components.yaml + examples library

Without this context loaded, do not proceed. The evaluator is grounded in
declared infrastructure, not invented criteria.

## Step 1 — Classify the artifact

Identify what the artifact is and which components it should embody:

| artifact_type | What to evaluate |
|---|---|
| `html` | Rendered page output — typography, color, spacing, components used vs declared |
| `image-description` | Visual artifact described in text — composition, color, hierarchy |
| `text` | Prose only — voice, tone, typographic conventions |
| `doc` | Mixed document — text + layout + structure |

If `artifact_type` doesn't match the artifact, surface this in the report
and proceed with the closest match.

## Step 2 — Evaluate dimensions

Score each dimension 1–5 against the TasteContract rubric (Phase 3, Step 2):

1. **Signal fidelity** — does the artifact carry the frequency of the
   audience? Off-brand artifacts often fail here even when technically
   correct.
2. **Contextual integrity** — does the artifact fit its placement and
   the surrounding system?
3. **Compositional clarity** — typographic hierarchy, color hierarchy,
   spatial rhythm. Is the eye guided?
4. **Behavioral coherence** — for interactive artifacts: do interactions
   match declared component states?
5. **Durability under scale** — would this artifact still hold at 10x
   instances? At handoff to a non-designer?

For each dimension, score AND provide evidence — a specific clause from
the TasteContract or a specific example from `examples/` that the
artifact aligns or conflicts with.

## Step 3 — Check component contract rules

For each component used in the artifact, check the `contract.must[]` and
`contract.must_not[]` rules in `components.yaml`. Specifically:

- Are declared `tokens_used` references the actual tokens the artifact
  consumes? (Detect off-token color/spacing.)
- Does the artifact violate any `must_not` rule? List the violations.
- Does the artifact satisfy all `must` rules for the components it uses?

This is the **mechanical** check — clear pass/fail per rule.

## Step 4 — Compare to examples library

Reference `examples/on-brand-examples.md` and
`examples/off-brand-anti-examples.md`. For each finding:

- Cite the nearest on-brand example the artifact resembles or should
  resemble.
- Cite the nearest off-brand anti-example the artifact may be drifting
  toward.

## Step 5 — Verdict

Compute pass/fail against `severity_threshold`:

- `must` (default): fail if any `must` contract rule is violated OR any
  dimension scores ≤ 2.
- `should`: fail if any contract rule (must or must_not) is violated OR
  any dimension scores ≤ 2.
- `info`: never fail; return feedback only.

## Step 6 — Output

Write the evaluation report to
`outputs/design-evals/{artifact_type}/{yyyy-mm-dd}-{slug}.md`:

```markdown
---
artifact: design-evaluation
artifact_path: <input artifact_path>
artifact_type: <input artifact_type>
verdict: pass | fail | info
overall_score: <average of 5 dimensions>
severity_threshold: <input>
evaluated_at: <ISO timestamp>
---

# Design Evaluation — {artifact_path}

## Verdict: <pass | fail>

<one-paragraph summary>

## Dimension scores

| Dimension | Score (1–5) | Evidence |
|---|---|---|
| Signal fidelity | <s> | <evidence> |
| Contextual integrity | <s> | <evidence> |
| Compositional clarity | <s> | <evidence> |
| Behavioral coherence | <s> | <evidence> |
| Durability under scale | <s> | <evidence> |

## Component contract findings

- <Component>: must violations — <list, or "none">
- <Component>: must_not violations — <list, or "none">

## Reference

- Closest on-brand example: <link to entry in on-brand-examples.md>
- Closest anti-example to avoid: <link to entry in off-brand-anti-examples.md>

## Required corrections (if fail)

1. <specific actionable correction tied to a contract clause>
2. ...
```

## Step 7 — Don't be vague

Every finding cites a specific contract clause or example. "Looks a bit
off" is not a finding. "Heading uses type.family.body instead of
type.family.display — violates heading component contract" is.

## When to skip

Never. The evaluator runs whenever called. If the artifact can't be
loaded or the design-infrastructure context isn't available, return an
error report — do not approximate.
