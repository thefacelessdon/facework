---
id: gamut-audit
name: "GAMUT Audit"
domain: proof
trigger: on_demand
ownership: hybrid
tags: [proof, sales-asset]
---

# GAMUT Audit

Audit a tenant world against the GAMUT practice rubric — coherence across
strategy, taste, architecture, operations, and product. Outputs a proof
artifact used in go-to-market.

## When this fires

On demand — invoked when Face.works needs to produce a public proof
artifact (e.g., when applying a tenant to demonstrate GAMUT credibility,
or auditing Face.works' own infrastructure for self-proof).

## Inputs

| Name | Type | Required | Description |
|---|---|---|---|
| `target_tenant` | string | yes | The tenant being audited (can be a client OR Face.works itself) |

## Outputs

| Name | Type | Path |
|---|---|---|
| `gamut_proof` | file_path | `wiki/audits/{target_tenant}/gamut-proof.md` |

## Dependencies

- **Capabilities:** `protocol_validator`, `coherence_scorecard`
- **Memory reads:** `wiki/audits/**`
- **Memory writes:** `wiki/audits/{target_tenant}/`
- **Context bundles loaded:** `soul`, `taste`, `gamut-rubric`
- **Integrations:** github

## Notes

GAMUT audits run against the open Facework Protocol. The audit is what
makes the engagement a "GAMUT engagement" — see `purpose.md` premise 2.
An un-audited engagement is not GAMUT, even if Face.works delivered it.

## Source playbook

`examples/face.works/define/proof/gamut-audit.md`
