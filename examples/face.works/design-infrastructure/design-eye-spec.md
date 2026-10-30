# Design Eye Evaluator — Playbook (face.works)

> **Grounding (0.0.80).** This playbook sits in `design-infrastructure/` only
> because that is its registered path. It does **not** load that directory's
> `tokens.json`, `components.yaml` or `examples/` — those are superseded,
> retained evidence. It grades against the Reading Room grounding set in
> `examples/face.works/design-eye/`, and `bin/validate-design-eye` fails
> protocol-check if that ever changes.

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
- `taste` — full design language (`prototype/DESIGN.md`) and TasteContract rubric
- `design-infrastructure` — the Reading Room grounding set:
  - `prototype/src/app/reading-room.css` — **token source of truth**. Every
    `--rr-*` name a finding cites must be defined here; resolve values here.
  - `design-eye/components.yaml` — component contracts and taste-clause ids
  - `design-eye/examples/on-brand-examples.md` (`ON-n`) and
    `design-eye/examples/off-brand-anti-examples.md` (`OFF-n`)

Primitives (`--rr-*` role tokens) resolve per register: `.rr` is The Record,
`.rr-field` is The Field (DESIGN.md §3). Grade an artifact in the register it
declares.

Without this context loaded, do not proceed. The evaluator is grounded in
declared infrastructure, not invented criteria. Never take a value from the
superseded set beside this file — it is not the face.works system.

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
`contract.must_not[]` rules in `design-eye/components.yaml`, then check the
artifact against every `taste_clauses[]` entry that applies. Specifically:

- Are the artifact's colors, faces, spacing, and motion consumed through the
  component's declared `tokens_used` (`--rr-*` names)? Flag any raw literal
  (hex, `oklch()`, font-family string, `ms` duration, `cubic-bezier`) that
  bypasses a token, and any register-specific token (e.g. `--rr-paper`) used
  where a role token (`--rr-ground`) belongs.
- Does the artifact violate any `must_not` rule? List the violations.
- Does the artifact satisfy all `must` rules for the components it uses?

This is the **mechanical** check — clear pass/fail per rule.

## Step 4 — Compare to examples library

Reference `design-eye/examples/on-brand-examples.md` and
`design-eye/examples/off-brand-anti-examples.md`. For each finding:

- Cite the nearest on-brand example by id (`ON-n`) the artifact resembles
  or should resemble.
- Cite the nearest off-brand anti-example by id (`OFF-n`) the artifact may
  be drifting toward.

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

- <component id>: must violations — <list, or "none">
- <component id>: must_not violations — <list, or "none">
- Taste clauses breached: <clause ids, or "none">

## Reference

- Closest on-brand example: <ON-n — title>
- Closest anti-example to avoid: <OFF-n — title>

## Required corrections (if fail)

1. <specific actionable correction tied to a contract clause>
2. ...
```

## Step 7 — Don't be vague

Every finding cites a specific contract clause or example. "Looks a bit
off" is not a finding. "Section title set in --rr-font-record instead of
--rr-font-structure — violates section-head `must` (clause: mono-certifies),
drifting toward OFF-4" is.

## When to skip

Never. The evaluator runs whenever called. If the artifact can't be
loaded or the design-infrastructure context isn't available, return an
error report — do not approximate. A finding that cites a token not defined
in `reading-room.css` is itself an evaluator error.
