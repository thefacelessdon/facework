---
id: engagement-closure
name: "Engagement Closure"
domain: delivery
trigger: event
event_name: "engagement.scale_exit"
event_source: "linear"
ownership: hybrid
tags: [delivery, lifecycle]
---

# Engagement Closure

Produce the HandoffPackage, run the DiagnosticReport, capture lessons,
and archive the engagement.

## When this fires

**Event-driven** — fires when a Linear engagement transitions to
`engagement.scale_exit` (i.e., the client exits Scale stage or the
engagement is otherwise terminated).

Event source: `linear`
Event name: `engagement.scale_exit`

## Inputs

The skill reads the client_id from the event payload — no manual inputs.

## Outputs

| Name | Type | Path |
|---|---|---|
| `handoff_package` | file_path | `wiki/clients/{client_id}/handoff/` |
| `diagnostic_report` | file_path | `wiki/clients/{client_id}/diagnostic.md` |
| `archive_entry` | file_path | `archive/clients/{yyyy}/{client_id}/` |

## Dependencies

- **Capabilities:** `diagnostic_synthesis`, `archival`
- **Memory reads:** `wiki/clients/{client_id}/**`
- **Memory writes:** `wiki/clients/{client_id}/handoff/`,
  `archive/clients/`
- **Context bundles loaded:** `soul`, `identity`, `taste`,
  `delivery-standard`
- **Integrations:** github, linear, notion

## Source playbook

`examples/face.works/define/playbooks/04-engagement-closure.md`
