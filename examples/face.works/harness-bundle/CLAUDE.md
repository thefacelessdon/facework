---
manifest_version: "1.4.0"
generated_at: "2026-05-12T00:00:00Z"
source_manifest: "examples/face.works/runtime-ports/"
tenant: "face.works"
track: "agency_studio"
evidence_level: "validated"
cache_affinity: stable
---

# Face.works — Harness Bundle

This is the harness-readable bundle for the Face.works tenant world.
A runtime reads this file first to navigate the rest of the bundle.

## Order to read

1. **`boundary.md`** — read FIRST. Defines what writes to tenant memory vs runtime memory. Failing to respect this rule causes the two memory systems to compete.
2. **`identity.md`** — who this tenant is, the track, the audience.
3. **`soul.md`** — why this exists. Signal thesis + taste contract.
4. **`purpose.md`** — locked strategic direction.
5. **`memory.md`** — vault structure, indexing, conventions.
6. **`tools.md`** — external integrations and their auth posture.
7. **`skills/`** — callable workflows, one file per skill.

## What this is

Face.works is an agency/studio that delivers the Facework Protocol as a
practice (GAMUT). This bundle exposes Face.works as an operational tenant
world any runtime can pick up and operate.

## Source of truth

This bundle is **derived** from the four Runtime Port YAML manifests at
`examples/face.works/runtime-ports/`. The YAML files are authoritative —
to update content, edit the manifests and regenerate the bundle.

Direct edits to bundle files do NOT propagate back to the YAML manifests.
Round-trip editing is not supported in v1.2.0.

## Bundle conformance

Generated under PROTOCOL.md v1.2.0 conformance. `evidence_level=validated`
requires the full bundle (CLAUDE.md, soul, identity, purpose, memory,
tools, boundary, plus one file per skill in `skills/`). All required files
present.

## Skills inventory

- `prospect-qualification` — Score inbound prospects (on_demand, hybrid)
- `engagement-delivery` — Run a full Facework engagement (on_demand, hybrid)
- `stage-gate-monitoring` — Weekly health check on active engagements (scheduled, agent)
- `engagement-closure` — Produce handoff + diagnostic + archive (event, hybrid)
- `gamut-audit` — Audit a tenant against the GAMUT rubric (on_demand, hybrid)
- `go-to-market-pulse` — Daily pipeline + signal brief (scheduled, agent)

## Integrations

Linear, GitHub, Gmail, Notion, Slack, Twitter/X, plus local vault filesystem
and QMD search. See `tools.md`.
