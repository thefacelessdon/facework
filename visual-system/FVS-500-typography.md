---
id: FVS-500
title: Facework Typography
version: 0.1.1
status: normative
authority: normative
parents: [FVS-100, FVS-300, FVS-400]
---

# FVS-500 — Typography

Typography is the principal carrier of Facework's knowledge. It must support two
simultaneous registers: the precision of a specification and the humanity of a
strategist's notebook. The type system carries this with **three faces, three
voices** — serif *reads*, grotesque *structures*, mono *certifies*.

## Typographic roles

The system is a **locked trio** of three variable families, each self-hosted via
`@fontsource` (no CDN, CSP-safe) and bound to a semantic token. Each family serves
one voice; a fourth face is introduced only if evidence shows these three cannot
carry a required cultural or emotional register.

### Reading voice

A humanist serif carries sustained prose, explanatory text, article and reading
titles, and accessibility-critical long-form content. This is the reading room:
the thinking speaks.

**Family:** `"Literata Variable", Georgia, serif`
**Token:** `--rr-font-reading`

### Structure voice

A grotesque sans serif carries display type, section and structural headings,
navigation, interface copy, and UI labels. This is the publication: the system
speaks, with editorial authority.

**Family:** `"Schibsted Grotesk Variable", system-ui, sans-serif`
**Token:** `--rr-font-structure`

Display type uses this family at larger optical scale; there is no separate
display face.

### Record voice

A monospaced face carries identifiers, eyebrows and record labels (the `.fig`
eyebrow), metadata, verdicts, tabular data, system states, and Field instruments.
This is the record: it certifies, and it holds numbers in tabular figures.

**Family:** `"Spline Sans Mono Variable", ui-monospace, monospace`
**Token:** `--rr-font-record`

Monospace is identity-bearing, but it is not required for every word. Long-form
reading stays in the Reading voice; the Record voice marks and certifies, it does
not narrate.

## Hierarchy

Locked screen scale (as shipped in the reference implementation):

| Role | Size | Leading | Family / weight |
|---|---|---:|---|
| Display | `clamp(2.5rem, 6vw, 4.5rem)`, ls −0.02em | 1.02 | Structure (Schibsted) 800 |
| Reading title (H1) | `clamp(1.9rem, 4vw, 2.9rem)`, balance | 1.1 | Reading (Literata) 600 |
| Section head | `clamp(1.4rem, 2.4vw, 1.7rem)`, ls −0.005em | 1.15 | Structure (Schibsted) 600 |
| Body | `1.0625rem`, measure 68ch | 1.65 | Reading (Literata) 400 |
| Record label (`.fig`) | `0.6875rem`, uppercase, ls 0.1em | — | Record (Spline Sans Mono) 500 |
| Data / verdict | `0.8125rem`, tabular figures | — | Record (Spline Sans Mono) |

Maintain at least a 1.25 ratio between steps. Sizes on content headings are fluid
`clamp()` ranges; dense UI uses fixed rem. Print and spatial media derive their
scale from viewing distance and measure. Light-on-dark text — the Field register —
adds 0.05–0.1 to line-height (body goes from 1.65 to 1.72) to hold legibility on
the dark ground.

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

## Validation status

The font stack is **locked** as of the 0.0.29–0.0.31 identity. The three families —
Literata (Reading), Schibsted Grotesk (Structure), Spline Sans Mono (Record) — are
self-hosted via `@fontsource` variable packages, shipped in the reference
implementation, and are not to be re-opened without a new locked decision. None is
a reflex default, and none is shared with adjacent runs (e.g. 14th & Co's
Archivo/Azeret).

Still open: cross-medium rendering of the trio in print, slides, diagrams, and
spatial media has not yet been validated by FVR. The roles, tokens, and behavioral
requirements above are normative in all media; only the per-medium optical tuning
(measure, leading, optical size) remains to be studied.
