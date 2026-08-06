---
id: FVS-700
title: Facework Interaction
version: 0.1.0
status: normative
authority: normative
parents: [FVS-100, FVS-200, FVS-400]
---

# FVS-700 — Interaction

Interaction makes the structure responsive to human attention and action. A
Facework interface should feel discoverable, calm, and exact—not inert and not
performative.

## Interaction principles

### Orientation before action

People must understand where they are, what is present, and what an action will
affect before being asked to act.

### State is visible

Default, hover, focus, active, selected, loading, success, warning, error,
disabled, and empty states are distinct when relevant. State changes use more
than color alone.

### The interface reveals lineage

Knowledge artifacts expose appropriate links to sources, dependencies, related
models, applications, evidence, status, and version. Depth is available without
forcing every reader to see everything at once.

### Progressive disclosure follows dependency

Hide detail when it is not yet useful, not merely to make a screen appear clean.
The path from overview to detail must remain predictable and reversible.

### Actions preserve agency

Consequential actions communicate scope, consequence, reversibility, and current
state. Destructive or externally consequential actions require appropriate
confirmation.

## The knowledge path

The core Facework interaction is traversal through lineage:

```text
Observation → Field Note → Model → Framework → Standard → Application → Evidence
```

Each artifact should expose its immediate upstream and downstream relationships
when those relationships exist. Public labels may remain human—“Derived from,”
“Related,” “Applied in,” “Evidence”—while metadata preserves canonical IDs.

## Navigation

- Persistent global navigation answers where major bodies of knowledge live.
- Local navigation answers where the reader is within the current body.
- Breadcrumbs show conceptual lineage, not merely URL folders.
- Back behavior returns people to a meaningful prior context.
- Deep links preserve the referenced state or section.
- Search results expose artifact type, status, date, and relevant lineage.

## Controls

- Minimum pointer target: 44 × 44 CSS pixels where the platform permits.
- Keyboard focus is visible and never removed without a stronger replacement.
- Control labels describe the action or destination.
- Icons do not replace unfamiliar concepts without labels.
- Loading feedback appears only after a perceptible delay and communicates
  progress when progress can be known.
- Disabled controls explain the dependency when the reason is not obvious.

## Reading interactions

Annotations, citations, definitions, and related artifacts should be accessible
without destabilizing the reading position. Hover-only disclosure is
non-conforming because it excludes touch and keyboard users.

Inline links remain visibly links. Footnotes and sidenotes preserve a route back
to their origin. Expandable sections announce state to assistive technology.

## Errors and empty states

An error identifies what happened, what remains safe, and what the person can do
next. It does not blame the user or expose meaningless implementation language.

An empty state distinguishes among:

- nothing exists yet;
- nothing matches the current view;
- access is unavailable;
- data failed to load;
- the state is intentionally complete.

## Accessibility requirements

- semantic structure and landmarks;
- logical source and focus order;
- full keyboard operation;
- visible focus;
- accessible names and state announcements;
- text resizing and reflow without loss;
- no essential hover-only content;
- no timed interaction without control or extension;
- alternatives for motion, images, diagrams, audio, and video as appropriate.

## Interaction anti-patterns

- cursor effects that compete with reading;
- scroll hijacking;
- hidden navigation as a default on large screens;
- interaction required to reveal essential context;
- links styled as ordinary text;
- animations used as the only confirmation of change;
- “smart” behavior that changes established controls without explanation;
- interfaces that expose the internal repository structure instead of a human
  information architecture.
