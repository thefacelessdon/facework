---
id: FVR-102
title: Information Architecture
version: 0.1.0
status: initial-synthesis
authority: evidentiary
---

# FVR-102 — Information Architecture

## Question

How do public and technical systems make complexity navigable without pretending
the complexity is absent?

## Reference field

Transit maps, airport wayfinding, museum systems, technical manuals, standards,
UNIX documentation, request-for-comments documents, indexes, and library
classification.

## Observations

1. Reliable systems provide landmarks before detail.
2. Stable naming reduces the cost of moving between artifacts.
3. Different audiences need different entry points into the same underlying
   architecture.
4. Overview and detail are connected by persistent identifiers and predictable
   paths.
5. Good abstraction omits information deliberately and states what kind of truth
   the representation preserves.
6. Redundancy can increase safety and orientation when it reinforces important
   state through position, language, shape, and color.

## Extracted principles

### Human entry, canonical substrate

Public navigation should answer human questions while canonical metadata
preserves the underlying ontology. Facework can say “Models” publicly while
recording Theory and specific source IDs beneath it.

### Landmarks before routes

People need to know which kind of place or artifact they are in before choosing
a next action.

### Progressive disclosure follows dependency

Show detail when it becomes useful to the task or argument. Hiding complexity
for visual cleanliness is not progressive disclosure.

### Stable identifiers create continuity

Names, versions, states, and cross-references allow a knowledge system to evolve
without making older references meaningless.

## Limits and cautions

- A transit map's abstraction is appropriate for routing, not for geographic
  truth; every abstraction preserves some relationships and distorts others.
- Classification systems may encode institutional bias.
- Excessive cross-linking can replace argument with endless navigation.
- Technical-document aesthetics can signal authority without earning it.

## FVS impact

- Supports dependency order in FVS-400.
- Supports lineage navigation and human/canonical layering in FVS-700.
- Supports stable IDs and status metadata across all FVS documents.
- Rejects exposing repository folders as the public website's navigation.
