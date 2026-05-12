---
id: go-to-market-pulse
name: "Go-to-Market Pulse"
domain: sales
trigger: scheduled
schedule: "0 6 * * *"
ownership: agent
tags: [intel, daily]
# v1.4.0
sponsors: ["harper@face.works"]
model_tier: standard
---

# Go-to-Market Pulse

Daily scan of pipeline, prospects, content signals, and competitor
activity. Produces a one-page brief for the founder's morning review.

## When this fires

**Scheduled — every day at 06:00 UTC.**

Cron: `0 6 * * *`

## Inputs

None — the skill autonomously scans declared sources.

## Outputs

| Name | Type | Path |
|---|---|---|
| `morning_brief` | file_path | `outputs/morning-brief/{yyyy-mm-dd}.md` |

`{yyyy-mm-dd}` is the ISO date for the day the brief runs.

## Dependencies

- **Capabilities:** `signal_scan`, `pipeline_query`
- **Memory reads:** `wiki/prospects/**`, `wiki/competitors/**`
- **Memory writes:** `outputs/morning-brief/`
- **Context bundles loaded:** `soul`, `identity`, `sales-criteria`
- **Integrations:** linear, twitter-x, github

## Notes

If Twitter/X is rate-limited, the social signal section of the brief is
skipped (see `tools.md` failover). The brief is still produced with the
other sources.

If Linear or GitHub is unavailable, the skill posts a status note
instead of a brief — failover is to communicate the gap, not to
silently degrade.

## Source playbook

`examples/face.works/define/playbooks/05-go-to-market.md`
