---
id: stage-gate-monitoring
name: "Stage-Gate Monitoring"
domain: delivery
trigger: scheduled
schedule: "0 9 * * MON"
ownership: agent
tags: [monitoring, ops]
# v1.4.0
sponsors: ["harper@face.works"]
model_tier: standard
---

# Stage-Gate Monitoring

Periodically check active engagements against stage criteria, flag drift,
and produce a status update with red/yellow/green per gate.

## When this fires

**Scheduled — Monday 09:00 UTC, weekly.**

Cron: `0 9 * * MON`

## Inputs

None — the skill enumerates active engagements automatically via Linear.

## Outputs

| Name | Type | Path |
|---|---|---|
| `weekly_status` | file_path | `outputs/weekly-status/{yyyy}-{ww}.md` |

`{yyyy}` is the four-digit year; `{ww}` is the ISO week number.

## Dependencies

- **Capabilities:** `gate_evaluator`
- **Memory reads:** `wiki/clients/**/define/decisions/**`,
  `wiki/clients/**/status/**`
- **Memory writes:** `outputs/weekly-status/`
- **Context bundles loaded:** `soul`, `stage-criteria`
- **Integrations:** linear, slack

## Escalation

Any red flag posts to `#engagement-health` Slack channel via the Slack
integration. Founder reviews on Monday afternoon.

## Source playbook

`examples/face.works/define/playbooks/03-stage-gate-monitoring.md`
