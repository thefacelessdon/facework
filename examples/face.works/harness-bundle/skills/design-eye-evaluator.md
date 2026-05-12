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

DesignInfrastructure (PROTOCOL.md §11) provides the data:
- `tokens.json` — structured design tokens
- `components.yaml` — primitives with machine-readable contract rules
- `examples/on-brand-examples.md` and `examples/off-brand-anti-examples.md`

The Skill's playbook spells out the 6-step evaluation flow (load
context → classify → score dimensions → check component contracts →
compare to examples → verdict → output). See
`examples/face.works/design-infrastructure/design-eye-spec.md`.

## Source playbook

`examples/face.works/design-infrastructure/design-eye-spec.md`
