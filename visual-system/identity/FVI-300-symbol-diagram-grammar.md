---
id: FVI-300
title: Symbol and Diagram Grammar
version: 0.1.0
status: canonical
authority: canonical-reference-implementation
parents: [FVS-200, FVS-300, FVS-400, FVS-600, FVI-001]
created: 2026-08-06
---

# FVI-300 — Symbol and Diagram Grammar

## Decision

Facework diagrams use a small semantic grammar rather than a branded icon style.
The grammar distinguishes **what exists**, **what contains**, **what relates**,
and **what changes**. Visual character comes from consistent construction,
interval, and line behavior—not from decorating every concept with a unique
symbol.

Axis Exchange remains the identity mark. It is not a generic diagram node.

## Base geometry

- Construction grid: 24 × 24 units.
- Primary stroke: 1.5 units at native size.
- Terminals: square for structure; round only for observations and measured
  points.
- Default corners: zero radius.
- Minimum gap between unrelated strokes: 3 units.
- Default node field: 16 × 16 units inside the 24-unit canvas.
- Lines remain optically consistent after scaling; do not mix weights to imply
  importance unless the legend declares that variable.

## Canonical symbols

### Observation

A filled point inside an open ring. It means a recorded or measured condition.
The ring is the observation frame; the point is the evidence. It does not mean
user, location, or notification.

### Artifact

An open square with a short registration rule. It means a durable knowledge
object with identity and metadata: note, model, framework, standard, or record.

### Boundary

Four open corners. It means declared scope, ownership, protection, or constraint.
It does not mean selection unless the interface explicitly supplies that state.

### Connection

A direct line between two terminal points. It means a known relationship without
directional dependence.

### Dependency

A direct line with one arrow terminal. It means the destination depends on or is
produced from the origin. Reading order follows the arrow.

### Exchange

Two opposing directional lines separated by an interval. It means reciprocal
transfer, negotiation, or feedback. It must not be used for a one-way handoff.

### Transformation

Two state brackets separated by a directional axis. It means the same entity has
changed state while retaining lineage. It does not mean two unrelated objects.

## Node grammar

Symbols identify kind; labels identify meaning. Never ask an unfamiliar symbol
to carry a domain concept alone.

| Object | Shape | Required adjacent information |
|---|---|---|
| Observation | observation symbol | source or observation label |
| Artifact | artifact symbol | title or canonical ID |
| Actor | ordinary label; no person icon by default | role or owner |
| State | label plus state token | state name in words |
| System | boundary around children | system name and scope |
| Unknown | open dashed boundary | explicit “unknown” or question label |

## Relationship grammar

Connections touch the objects they relate. Lines do not pass through unrelated
nodes. Crossings require a bridge, junction, or reroute; an unexplained crossing
is non-conforming.

Labels sit nearest the relationship they qualify. A legend is required whenever
line, pattern, size, or color encodes a variable not evident in ordinary reading.

## Line semantics

| Line | Meaning |
|---|---|
| Solid | asserted or currently active relationship |
| Dashed | proposed, inferred, conditional, or unavailable relationship |
| Dotted | reference, context, or indirect association |
| Double | reciprocal exchange; use only with directional terminals |

Line style never substitutes for a label when the distinction affects a
decision.

## Hierarchy and reading

Diagrams declare one primary reading axis. Left-to-right is the default for
process and lineage in Latin-script contexts; top-to-bottom is preferred when
depth or sequence is the dominant variable.

Use alignment, distance, and containment before color. Every diagram should
remain interpretable in monochrome and when printed at its intended size.

## State color

Semantic accents follow FVS-600:

- Clarity identifies explained or available structure.
- Resonance identifies meaningful fit or amplification.
- Flow identifies active healthy transmission.
- Entropy identifies contradiction, failure, risk, or degradation.
- Boundary identifies protected or explicitly limited scope.

Color applies to the smallest sufficient carrier: a point, line, label, or local
field. Pair it with a word, symbol, position, or pattern. Do not recolor all nodes
to make a diagram appear energetic.

## Identity relationship

The grammar shares four behaviors with Axis Exchange: paired forces, open
intervals, direct strokes, and visible direction change. It does not reuse the
mark's silhouette. The mark may appear as publisher identity outside the diagram
field, never as shorthand for “coherence achieved.”

## Labels and typography

- Labels are live text whenever the medium allows.
- Sentence case is the default.
- Canonical IDs, values, and states use the structural type role.
- Explanatory labels use the reading type role.
- Labels do not follow curved paths.
- Minimum screen label size is 12 CSS pixels; critical labels target 14 pixels or
  larger.

## Accessibility

Every diagram requires:

1. a title stating the subject;
2. a short description stating the primary relationship or finding;
3. a text alternative containing the consequential nodes and relationships;
4. sufficient contrast for lines, labels, and state carriers;
5. a non-color signal for every encoded state;
6. logical reading order in source and exported formats.

Complex interactive diagrams also require keyboard navigation or an equivalent
structured text/table view.

## Anti-patterns

- generic icon sets mixed without semantic reconciliation;
- the Coherence Mark used as a success state;
- unlabeled arrows whose relationship must be guessed;
- line crossings that imply false junctions;
- color-coded categories without text or pattern;
- containers used as decoration;
- every node receiving a different pictogram;
- flowcharts that preserve software internals instead of human meaning;
- diagrams rendered too small to inspect their evidence.

## Reference files

- `diagram/symbol-library.svg` — canonical symbol sheet.
- `diagram/symbols/` — seven production-ready symbol SVGs.
- `diagram/lineage-map.svg` — canonical knowledge-lineage example.
- `diagram/grammar-test.svg` — monochrome, state, and ambiguity tests.

## Evaluation

| Dimension | Result | Evidence |
|---|---|---|
| Meaning | pass | Every shape and line has one declared semantic role. |
| Structure | pass | All symbols share a 24-unit grid and stroke system. |
| Coherence | pass | Identity behavior is shared without copying the mark. |
| Necessity | pass | Seven symbols cover the irreducible grammar. |
| Legibility | pass | Symbols survive monochrome and small-scale testing. |
| Accessibility | pass | Text alternatives and redundant state encoding are required. |
| Traceability | pass | Derived from FVS-200, 300, 400, 600, and FVI-001. |
