---
id: FVS-500
title: Facework Typography
version: 0.1.0
status: normative
authority: normative
parents: [FVS-100, FVS-300, FVS-400]
---

# FVS-500 — Typography

Typography is the principal carrier of Facework's knowledge. It must support two
simultaneous registers: the precision of a specification and the humanity of a
strategist's notebook.

## Typographic roles

### Structural voice

A monospaced face is used for identifiers, navigation labels, metadata, system
states, diagrams, tables, code, and short structural statements.

**Preferred implementation:** Berkeley Mono where licensed and available.
**Portable fallback:** JetBrains Mono, then a platform monospace.

Monospace is identity-bearing, but it is not required for every word. Long-form
reading must not be sacrificed to perform the idea of a system.

### Reading voice

A neutral, durable sans serif is used for sustained prose, explanatory text,
interface copy, and accessibility-critical content.

**Reference implementation:** Inter or an equivalent highly legible sans serif.
The selection must offer broad language support, true weights, clear punctuation,
and reliable rendering.

### Display voice

Display type may use the structural or reading family at larger optical scale.
A separate display face is introduced only if evidence shows that the existing
families cannot carry the required cultural or emotional register.

## Hierarchy

Reference screen scale:

| Role | Range | Leading | Default family |
|---|---:|---:|---|
| Display | 48–80 px | 1.0–1.1 | structural or reading |
| H1 | 40–64 px | 1.05–1.15 | structural or reading |
| H2 | 28–40 px | 1.15–1.25 | reading |
| H3 | 20–28 px | 1.25–1.35 | reading |
| Body large | 18–22 px | 1.45–1.65 | reading |
| Body | 16–19 px | 1.5–1.75 | reading |
| Label | 11–14 px | 1.25–1.5 | structural |
| Data/code | 12–16 px | 1.35–1.6 | structural |

Sizes are responsive ranges, not fixed commands. Print and spatial media derive
their scale from viewing distance and measure.

## Weight and emphasis

- Regular carries most text.
- Medium establishes local hierarchy.
- Semibold is reserved for meaningful emphasis and headings.
- Bold is exceptional, not the default voice of authority.
- Italic communicates title, voice, or genuine emphasis; it is not decorative.
- Underlining is reserved primarily for links and editorial annotation.

Do not combine size, weight, color, capitalization, and spacing changes when one
or two signals can establish the hierarchy.

## Capitalization and tracking

- Sentence case is the default.
- All caps is permitted for short identifiers, status, and navigation labels.
- All-caps tracking must be optically opened.
- Structural type may be slightly tight at display sizes but never at the expense
  of letter recognition.
- Do not force line breaks to create a logo-like silhouette in responsive text.

## Reading rules

- Running text is left aligned in Latin-script contexts.
- Avoid full justification unless the medium and typesetting quality support it.
- Do not force hyphenation in interfaces.
- Maintain a target measure of 50–75 characters for prose.
- Preserve user zoom and dynamic type.
- Data tables align comparable values; numeric work uses tabular figures when
  available.
- Links remain visually identifiable without relying on color alone.

## Document voice

Facework documents use visible structure:

- stable identifiers such as `FVS-300`;
- direct titles rather than clever headings;
- short paragraphs where each paragraph advances one idea;
- tables for exact mappings, not decoration;
- lists for true sets or sequences;
- quotations only when the source or formulation matters.

## Typographic anti-patterns

- monospace used for long prose solely to appear technical;
- oversized headlines that force every page to announce itself;
- compressed line height used to simulate seriousness;
- tiny metadata that is technically present but functionally inaccessible;
- more than three type families in one artifact;
- generic gradient or outlined display text;
- arbitrary letter spacing used as a substitute for hierarchy.

## Open validation

The exact licensed font stack remains **provisional** until FVR studies and
reference implementations test it across web, print, slides, diagrams, and
long-form reading. The roles and behavioral requirements are normative even if
the named typeface changes.
