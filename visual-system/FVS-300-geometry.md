---
id: FVS-300
title: Facework Geometry
version: 0.1.0
status: normative
authority: normative
parents: [FVS-100, FVS-200]
---

# FVS-300 — Geometry

Geometry makes visual relationships measurable. Its purpose is not mathematical
decoration; it is reliable structure across media and scale.

## Base unit

The canonical spatial unit is **4 units (4u)** at implementation scale. Common
intervals use a deliberate progression:

```text
1u  2u  3u  4u  5u  6u  8u  10u  12u  16u  24u  32u
4   8   12  16  20  24  32  40   48   64   96   128 px (screen reference)
```

The pixel values are reference values, not universal units. Print, spatial, and
high-density media translate the ratios to their native measurement systems.

Use adjacent intervals for subtle hierarchy and wider jumps for structural
separation. Avoid arbitrary values when a declared interval serves the same need.

## Grid

### Large fields

- Twelve columns for adaptable editorial and system compositions.
- Six columns when content width or implementation complexity makes twelve
  columns performative rather than useful.
- Outer margins are fluid and must protect the field, not merely satisfy a pixel
  value.
- Full-bleed elements require an explicit structural reason.

### Small fields

- Four columns are the default.
- Content may collapse to one reading column.
- Responsive change preserves hierarchy and dependency order rather than desktop
  position.

### Reading measure

- Running prose: target 50–75 characters per line.
- Technical or metadata text may be narrower.
- Measure is evaluated with the actual typeface, size, language, and medium.

## Axes

Every composition declares:

1. a primary reading axis;
2. an alignment datum;
3. any intentional secondary axis;
4. the conditions under which axes collapse or transform.

Left-aligned reading is the default for Latin-script editorial work. Centering
is reserved for singular statements, marks, diagrams, or ceremonial moments.
Right alignment must have a data, comparison, or directional purpose.

## Proportion

Facework uses proportional families rather than one sacred ratio:

- **1:1** for equivalence, modules, and state indicators;
- **1:2** for clear dependency, split fields, and bilateral relationships;
- **2:3 / 3:2** for editorial fields and figure-ground balance;
- **3:5 / 5:3** for dominant/supporting relationships;
- **1:√2** for documents intended to scale while preserving proportion.

Choose a proportion because it expresses the relationship. Do not retrofit
meaning onto a favored ratio.

## Boundary and radius

Boundaries clarify ownership, state, containment, or grouping. A box is not a
default solution to weak spacing.

Radius is restrained:

- **0** for diagrams, rules, document structures, and strict boundaries;
- **2–4u** for interactive controls or approachable content modules;
- **full** only for circular indicators, avatars, toggles, or categorical pills.

Mixed radii within one component family require a semantic explanation.

## Line

Lines perform one of four jobs: connect, divide, measure, or indicate direction.

- Hairlines are optically tested in the target medium.
- Connection lines terminate clearly and do not pass ambiguously through nodes.
- Dividers do not replace sufficient space.
- Directional lines communicate origin and destination.

## Bilateral geometry

Bilateral form is an important Facework hypothesis, not a mandatory layout.
When used, it must communicate a meaningful relationship around an axis:
counterforce, reflection, negotiation, convergence, or transformation.

Perfect symmetry communicates stability. Controlled deviation communicates
life, pressure, or change. Decorative mirroring without relational meaning is
non-conforming.

## Responsive transformation

At a breakpoint, preserve in order:

1. meaning and task;
2. reading and focus order;
3. hierarchy;
4. essential comparison;
5. touch target and legibility;
6. visual resemblance.

Columns may stack, diagrams may change representation, details may move behind
progressive disclosure, and bilateral fields may become sequential. Nothing
essential may vanish solely because the viewport is small.

## Geometric anti-patterns

- floating objects without a shared datum;
- twelve columns used when a single reading column is the real structure;
- centered compositions with no singular focal purpose;
- arbitrary spacing used to repair weak hierarchy;
- grids visible as decoration rather than inferred through alignment;
- diagrams whose line crossings create false relationships;
- literal scaling that destroys legibility.
