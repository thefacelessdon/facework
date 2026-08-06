---
id: FVS-600
title: Facework Color
version: 0.1.0
status: normative
authority: normative
parents: [FVS-100, FVS-400]
---

# FVS-600 — Color

Color communicates field, emphasis, and state. It is never required to make a
weak structure interesting.

## Neutral fields

Facework supports two coordinated modes.

### Paper mode

Used for reading, documents, archives, evidence, and sustained attention.

| Token role | Reference value | Purpose |
|---|---|---|
| Paper | `#FAFAF8` | primary field |
| Paper quiet | `#F4F3EE` | secondary field |
| Rule | `#E5E3DC` | boundary and division |
| Muted | `#6B6861` | secondary text |
| Graphite | `#2C2B27` | body and supporting structure |
| Ink | `#1A1917` | primary text and high consequence |

### Field mode

Used for immersive diagrams, system states, projection, and controlled
threshold moments.

| Token role | Reference value | Purpose |
|---|---|---|
| Field | `#11110F` | primary dark field |
| Field raised | `#1A1917` | secondary field |
| Rule dark | `#34322D` | boundary and division |
| Muted dark | `#9C9890` | secondary text |
| Signal light | `#F4F3EE` | primary text and line |

Modes express the same relationships. Dark mode is not a separate personality,
and paper mode is not a diluted version of the brand.

## Semantic accents

Accents communicate state. Reference values are starting points subject to
contrast and medium testing.

| State | Reference value | Meaning |
|---|---|---|
| Clarity | `#8FAFFF` | identified, explained, or available |
| Resonance | `#FFD089` | meaningful amplification or fit |
| Flow | `#62DFAE` | active movement, progress, or healthy transmission |
| Entropy | `#E66F70` | contradiction, failure, risk, or degradation |
| Boundary | `#B69AE8` | ownership, protected scope, or explicit limit |

Rules:

1. Accent appears because a state is present.
2. One dominant accent governs a bounded composition; multiple accents are
   permitted in analytic views where comparison is the purpose.
3. Color never carries essential meaning alone. Pair it with language, shape,
   position, pattern, or iconography.
4. Large accent backgrounds require tested contrast and semantic necessity.
5. Hover is not assigned a new semantic color unless the state itself changes.

## Brand accent versus state

The earlier design-infrastructure implementation uses ochre `#A37E3F` as a
brand accent. FVS treats it as a candidate expression of **Resonance**, not an
universal decorative accent. Existing implementations may retain it while token
reconciliation is tested.

## Contrast

- Text and essential graphics must satisfy WCAG AA at minimum.
- Critical controls and small text should target stronger contrast where the
  palette permits.
- Muted does not mean low-contrast enough to become optional to perception.
- Contrast is tested in actual context, including state, size, weight, display,
  print process, and color-vision variation.

## Data and diagrams

Categorical palettes must remain distinguishable in grayscale and common forms
of color-vision deficiency. Sequential values use ordered lightness. Diverging
values use a meaningful midpoint. Decorative rainbow scales are not used.

## Color anti-patterns

- accent applied to make an empty section feel active;
- gradients with no data, spatial, or state meaning;
- black-and-white purity used to avoid necessary hierarchy;
- semantic red applied to ordinary emphasis;
- disabled states made illegible;
- dark mode produced by mechanically inverting paper mode;
- more semantic categories than an audience can reliably distinguish.
