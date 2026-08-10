---
id: FVI-100
title: Facework Logotype
version: 0.1.1
status: canonical
authority: canonical-reference-implementation
parents: [FVS-300, FVS-500, FVS-900, FVI-001]
created: 2026-08-06
---

# FVI-100 — Facework Logotype

## Decision

**Register** is selected as the canonical Facework logotype at version 0.1.0.

Register is a custom uppercase construction. It is not typeset from a commercial
font and carries no runtime font dependency. The name remains completely
legible, but its proportion, `W`, open counters, and calibrated stroke system
create an ownable relationship with the Coherence Mark.

This decision establishes the visual logotype. It does not change how the proper
name is capitalized in prose and does not constitute legal trademark clearance.

**Restored (decision A).** Register is the canonical logotype and the
record-voice wordmark that leads the primary horizontal lockup: Coherence Mark,
then Register. The 0.0.29 redesign, which substituted plain Schibsted-Grotesk
text for the custom letterforms in the nav, is **superseded** — the wordmark is
the real Register SVG (font-independent monoline paths), implemented in the
`FaceworkWordmark` runtime component and `public/identity/facework-lockup-horizontal.svg`.

## Name architecture

| Form | Meaning | Use |
|---|---|---|
| **Facework** | Canonical proper name | Prose, titles, speech, metadata |
| **FACEWORK** | Canonical logotype | Identity lockups and wordmark applications |
| **face.works** | Domain and public interface | URLs, navigation context, email, site-specific labels |

Rules:

- Never write `Face Work`, `Faceworks`, or `FaceWorks`.
- The uppercase logotype does not require uppercase prose.
- `face.works` does not replace the proper name in constitutional, legal, or
  scholarly references.
- The domain may be typeset in the structural typeface; it is not a second custom
  wordmark.

## Design context

The selection began with three creator-established voice words:

- **calm** — controlled, unhurried, and clear;
- **exacting** — structurally accountable and precise;
- **alive** — capable of tension and adaptation without visual noise.

The physical reference is a durable field instrument label crossed with a public
standard: made to be read, inherited, and used—not admired as a typographic
performance.

## Typeface research

Four relevant systems were reviewed:

### Berkeley Mono

The closest tonal match. Its foundry describes it through 1970s machine-readable
type, Bell Labs, control panels, and calibrated precision. That territory is
authentically close to Facework, but using it unchanged would make the identity
dependent on a recognizable commercial typeface already visible across technical
and AI brands. The installed file is a trial and cannot become a distributed
production asset.

### Diatype Mono

Warm, sharp, and informed by pre-digital typesetting machinery. It offers useful
humanity, but as a wordmark it remains a font selection rather than an owned
construction.

### Input Mono

Highly flexible and explicitly built from a bitmap grid with proportional,
monospaced, and multiple-width systems. Its configurability makes it valuable for
interface typography but too code-specific as the identity's primary signature.

### Söhne Mono

Controlled and highly developed, with a broad weight system. It carries the
authority needed for supporting typography, but its neo-grotesque neutrality does
not create enough proprietary signal in the name alone.

Sources:

- [Berkeley Mono — U.S. Graphics Company](https://usgraphics.com/products/berkeley-mono)
- [Diatype — Dinamo Typefaces](https://abcdinamo.com/typefaces/diatype)
- [Input — David Jonathan Ross](https://input.djr.com/)
- [Söhne Mono — Klim Type Foundry](https://klim.co.nz/fonts/soehne-mono/)

## Why custom construction

Facework's visual specification prioritizes ownership, continuity, and artifacts
that outlive their tools. A font-dependent logotype would create three avoidable
constraints:

1. identity changes when font files, licensing, or rendering changes;
2. a familiar typeface contributes its existing associations to the name;
3. the most important name-bearing artifact remains less ownable than the system
   around it.

Register resolves those constraints without inventing decorative glyphs.

## Letterform system

### Construction

The source uses a `560 × 80` viewBox and a shared eight-unit monoline stroke.
Letterforms are variable-width rather than monospaced. Curves are confined to
`C`, `O`, and the upper bowl of `R`; the rest of the system uses direct structural
strokes.

### F

Establishes the reading edge and structural baseline. The middle arm is shorter
than the top arm to create an immediate direction into the name.

### A

The sharp apex provides controlled tension against the open curves. Its crossbar
sits slightly above optical center to avoid a passive triangular counter.

### C

The broad open counter keeps the word from becoming sealed or institutional in
the bureaucratic sense. Its terminals establish a visible interval.

### E

Repeats the `F` logic and closes the first syllabic field: `FACE`.

### W

The signature letter. Two outer forces descend and redirect toward a raised
interior axis before expanding again. It echoes the behavior of the Coherence Mark
without inserting the mark into the word.

The `W` is the transition between `FACE` and `WORK`: identity meeting practice.

### O

The only closed counter. It stabilizes the active `W` and provides a quiet center
in the second field.

### R

Begins as a stable vertical and bowl, then changes direction through the leg. It
introduces motion without turning the wordmark into italic or speed typography.

### K

Ends with divergence from one stem into two directions. The terminal remains
open, allowing the name to conclude with possibility rather than closure.

## Relationship to the Coherence Mark

The mark and wordmark share behavior rather than shapes:

- open intervals instead of solid centers;
- direct strokes under controlled tension;
- a change of direction near the center;
- balance without static symmetry;
- monochrome operation;
- reduction without dependence on fine detail.

The wordmark must not inherit the mark's four bands or butterfly silhouette.
Repetition would turn a relationship into a motif.

## Lockup system

### Primary horizontal

The Coherence Mark precedes Register. The lockup uses a mark-to-word gap approximately
equal to one quarter of the mark width. The mark and cap field are optically
centered, not baseline aligned.

Use for headers, covers, title cards, signage, and primary identity moments.

### Stacked

The Coherence Mark is centered above Register. Use where the field is narrow, square,
or ceremonial. Do not use the stacked lockup as a generic centered-page device.

### Word only

Use when the mark is already present nearby, the audience already knows the
identity, or horizontal space makes the primary lockup impractical.

### Mark only

Governed by FVI-001. Use in interface chrome, avatars, favicons, stamps, or
contexts where the name is established through adjacency or convention.

## Scale

| Asset | Minimum screen height | Below minimum |
|---|---:|---|
| Register wordmark | 18 px | Use typeset name or mark according to context |
| Primary horizontal lockup | 24 px | Use micro mark plus accessible text |
| Stacked lockup | 48 px | Use horizontal or mark-only expression |

Minimums assume high-quality screen rendering. Production methods must be tested
independently for fill-in, stroke loss, and material spread.

## Clear space

For word-only use, maintain at least the height of the `F` middle arm above,
below, and beside the wordmark.

For lockups, maintain at least one central interval from the Coherence Mark on every
outer side. More space is preferred in covers, signage, and institutional use.

## Color

Register and the Coherence Mark always share one foreground color inside a lockup.
Canonical base expressions are Ink on Paper and Signal Light on Field.

Do not:

- color individual letters;
- assign separate colors to `FACE` and `WORK`;
- use gradient, outline, extrusion, shadow, or transparency effects;
- use state color unless the entire identity artifact is legitimately carrying
  that state.

### SVG color behavior

Production SVGs use `currentColor`. Inline SVG and CSS-mask implementations can
therefore inherit their container's foreground color. An SVG loaded through an
external image element does not inherit page color and renders in its encoded
default, Ink. Use an inline instance, a mask, or an explicitly approved inverse
export when placing the identity on Field; do not edit individual paths.

## Typography relationship

The logotype is not a typeface and must never be used to construct headlines or
interface text. Supporting typography should contrast through function:

- structural type handles identifiers, metadata, navigation, and diagrams;
- reading type handles sustained prose;
- Register appears only as the Facework identity.

This prevents the entire system from becoming logo-shaped.

## Candidate evaluation

| Candidate | Ownership | Legibility | Mark fit | Authority | Humanity | Result |
|---|---:|---:|---:|---:|---:|---|
| Historic typeset | 1 | 5 | 3 | 4 | 2 | lineage only |
| Register | 5 | 5 | 5 | 5 | 4 | **selected** |
| Ledger | 5 | 4 | 4 | 5 | 2 | too severe |
| Interval | 5 | 4 | 3 | 3 | 3 | open-axis motif overapplied |
| Berkeley typeset | 2 | 5 | 4 | 5 | 4 | system-type candidate, not logo |

Scores are comparative design judgments on a five-point scale.

## Accessibility

SVG assets include accessible titles and descriptions. In interfaces:

- use `aria-hidden="true"` when visible adjacent text already names Facework;
- provide an accessible name when the asset is the only identity link;
- do not rely on recognition of the custom letterforms for navigation labels;
- preserve sufficient foreground contrast;
- use ordinary text for legal names, URLs, email addresses, and critical actions.

## Production files

- `logotype/facework-logotype.svg` — canonical wordmark.
- `logotype/facework-lockup-horizontal.svg` — primary lockup.
- `logotype/facework-lockup-stacked.svg` — stacked lockup.
- `logotype/candidate-board.svg` — round-one comparison and lineage.
- `logotype/tests/lockup-test.svg` — paper, field, name, and arrangement tests.
- `logotype/tests/scale-test.svg` — descending-size test.
- `logotype/candidates/` — preserved design exploration.

## Evaluation

| Dimension | Result | Evidence |
|---|---|---|
| Meaning | pass | The name remains primary; custom behavior supports rather than replaces it. |
| Structure | pass | Shared stroke system, calibrated widths, and explicit transition at `W`. |
| Coherence | pass | Mark and wordmark share behavior without copying form. |
| Necessity | pass | No decorative glyph substitutions or arbitrary effects. |
| Legibility | pass | Recognizable through the 18 px test minimum. |
| Continuity | pass | Preserves the historic uppercase technical register. |
| Traceability | pass | Derived from FVS-300, FVS-500, FVS-900, and FVI-001. |
| Accessibility | pass | Monochrome SVG plus ordinary-text usage rules. |
| Durability | pass | Font-independent vector paths and strokes. |

## Open gates

- formal wordmark and name trademark review;
- physical production tests for print, vinyl, embroidery, and engraving;
- final supporting-type license decision under the typography program;
- implementation into the face.works prototype after token reconciliation.
