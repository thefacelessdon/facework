---
id: design-eye-evaluator
name: "Design Eye Evaluator"
domain: quality
trigger: on_demand
ownership: agent
tags: [quality, design, gate]
# v1.4.0
sponsors: ["harper@face.works"]
multiplayer: true
model_tier: standard
---

# Design Eye Evaluator

Gate output against the TasteContract. Returns pass/fail + dimension
scores + grounded feedback referencing specific contract clauses and
on/off-brand example entries. Called by output-producing skills before
publishing.

## When this fires

On demand — invoked by any output-producing skill (or directly) before
publishing an artifact. Other skills (page builders, content
generators) register this evaluator as a post-step.

## Inputs

| Name | Type | Required | Description |
|---|---|---|---|
| `artifact_path` | file_path | yes | Path to the artifact under review |
| `artifact_type` | string | yes | `html` / `image-description` / `text` / `doc` |
| `severity_threshold` | string | no | `must` (default) / `should` / `info` |

## Outputs

| Name | Type | Path |
|---|---|---|
| `evaluation_report` | file_path | `outputs/design-evals/{artifact_type}/{yyyy-mm-dd}-eval.md` |

Verdict + scored dimensions + grounded feedback referencing TasteContract
clauses and example library entries.

## Dependencies

- **Capabilities:** `taste_evaluation` (DesignInfrastructure provides
  the rubric, components, and examples — the runtime executes the LLM
  call)
- **Memory reads:** `wiki/protocol-reference/**`
- **Memory writes:** `outputs/design-evals/`
- **Context bundles loaded:** `soul`, `taste`, `design-infrastructure`
- **Integrations:** vault-fs

## Notes

DesignInfrastructure (PROTOCOL.md §11) provides the data — the Reading Room
grounding set (0.0.80):
- `examples/face.works/prototype/src/app/reading-room.css` — token source of
  truth; findings cite `--rr-*` names and resolve values here
- `examples/face.works/design-eye/components.yaml` — component contracts and
  taste-clause ids, derived from `prototype/DESIGN.md` and FVS-200
- `examples/face.works/design-eye/examples/on-brand-examples.md` (`ON-n`) and
  `off-brand-anti-examples.md` (`OFF-n`)

The superseded `design-infrastructure/` tokens, components, and examples are
retained evidence only; the Skill never loads them. `bin/validate-design-eye`
fails protocol-check if any evaluator wiring points back at them or cites a
token or clause that does not exist.

The Skill's playbook spells out the 6-step evaluation flow (load
context → classify → score dimensions → check component contracts →
compare to examples → verdict → output). See
`examples/face.works/design-infrastructure/design-eye-spec.md`.

## Source playbook

`examples/face.works/design-infrastructure/design-eye-spec.md`
