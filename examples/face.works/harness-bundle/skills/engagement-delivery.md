---
id: engagement-delivery
name: "Engagement Delivery"
domain: delivery
trigger: on_demand
ownership: hybrid
tags: [revenue, core]
# v1.4.0
sponsors: ["harper@face.works"]
multiplayer: true
model_tier: standard
verifier_skill_id: design-eye-evaluator
advisor_escalation: gamut-audit
---

# Engagement Delivery

Run a full Facework engagement from kickoff through diagnostic. Produces
the canonical Define folder for the client (signal thesis, taste contract,
workflow playbooks, capability map, etc.) plus the prototype repo.

## When this fires

On demand — invoked when a qualified prospect signs and pays. Engagement
clock starts at first payment (see `purpose.md` premise 8).

## Inputs

| Name | Type | Required | Description |
|---|---|---|---|
| `client_id` | string | yes | Client tenant identifier |
| `engagement_stage` | string | yes | MVP / Beta / Scale |

## Outputs

| Name | Type | Path |
|---|---|---|
| `define_folder` | file_path | `wiki/clients/{client_id}/define/` |
| `prototype_repo` | file_path | `wiki/clients/{client_id}/prototype/` |

## Dependencies

- **Capabilities:** `protocol_runtime`, `gamut_audit`, `artifact_generation`
- **Memory reads:** `wiki/clients/{client_id}/**`, `wiki/protocol-reference/**`
- **Memory writes:** `wiki/clients/{client_id}/define/`,
  `wiki/clients/{client_id}/prototype/`
- **Context bundles loaded:** `soul`, `identity`, `taste`,
  `delivery-standard`
- **Integrations:** github, linear, notion

## Escalation

Stage-gate failure escalates to founder for go/no-go.

## Source playbook

`examples/face.works/define/playbooks/02-engagement-delivery.md`
