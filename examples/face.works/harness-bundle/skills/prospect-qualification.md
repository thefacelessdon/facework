---
id: prospect-qualification
name: "Prospect Qualification"
domain: sales
trigger: on_demand
ownership: hybrid
tags: [revenue, intake]
# v1.4.0
sponsors: ["harper@face.works"]
multiplayer: true
model_tier: standard
---

# Prospect Qualification

Score an inbound prospect against engagement criteria (signal fit, stage
readiness, sovereignty posture, economic floor) and produce a structured
qualification report with a go/no-go recommendation.

## When this fires

On demand — invoked when a new inbound prospect arrives via Gmail or
direct intake. Not scheduled, not event-driven.

## Inputs

| Name | Type | Required | Description |
|---|---|---|---|
| `prospect_name` | string | yes | Tenant or prospect identifier |
| `source` | string | no | Where the prospect came from (referral, inbound, outbound) |

## Outputs

| Name | Type | Path |
|---|---|---|
| `qualification_report` | file_path | `wiki/prospects/{prospect_name}/qualification.md` |

Structured assessment with score and recommendation.

## Dependencies

- **Capabilities:** `crm_query`, `signal_assessment` (from CapabilityMap)
- **Memory reads:** `wiki/prospects/**`, `wiki/case-studies/**`
- **Memory writes:** `wiki/prospects/{prospect_name}/`
- **Context bundles loaded:** `soul`, `identity`, `sales-criteria`
- **Integrations:** linear, gmail

## Escalation

Founder review if score is borderline (5–7 of 10).

## Source playbook

`examples/face.works/define/playbooks/01-prospect-qualification.md`
