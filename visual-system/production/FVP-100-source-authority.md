---
id: FVP-100
title: Design Source Authority
version: 0.1.0
status: normative-for-integration
parents: [FVP-000, FVS-000]
---

# FVP-100 — Design Source Authority

## Active authority

| Source | Role |
|---|---|
| `visual-system/FVS-*` | constitutional and normative visual behavior |
| `visual-system/identity/FVI-*` | canonical identity decisions and assets |
| `visual-system/applications/FVA-*` | application translation requirements |
| `visual-system/applications/shared/` | reference implementation tokens |
| `.impeccable.md` | current audience, personality, and aesthetic context |

## Implementation candidates

| Source | Role |
|---|---|
| `examples/face.works/prototype/` | maintained public runtime candidate |
| `visual-system/applications/*/reference/` | behavior and composition references |

Implementation candidates demonstrate decisions; they do not govern them.

## Historical evidence

| Source | Classification | Constraint |
|---|---|---|
| `original site exploration reference/` | historical / superseded | may supply provenance, never defaults |
| `Primitive Pattern design brief/` | visual research evidence | no direct runtime influence without a new derivation |
| `examples/face.works/design-infrastructure/` | pre-FVS implementation evidence | retained for protocol history; not a token source for the public runtime |
| `original site exploration reference/runtime-components/PatternField.tsx` | retired first-pass device | removed from the public runtime |
| `original site exploration reference/runtime-components/PrimitivesBar.tsx` | retired first-pass navigation device | removed from the public runtime |
| `original site exploration reference/runtime-components/artboards-page.tsx` | retired first-pass artboard route | removed from the public runtime |

## Conflict rule

The highest-authority, most-specific current source governs. Historical
material may explain how Facework arrived here, but it cannot vote on current
design decisions.
