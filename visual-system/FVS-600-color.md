---
id: FVS-600
title: Facework Color
version: 0.1.1
status: normative
authority: normative
parents: [FVS-100, FVS-400]
---

# FVS-600 — Color

Color communicates field, emphasis, and state. It is never required to make a
weak structure interesting. **Color only classifies; it never decorates.**

All values are expressed in **OKLCH only** — no hex, no sRGB. Tokens are
namespaced `--rr-*`. As lightness approaches the ground or the ink, reduce
chroma. Never pure black or white; no gradients; no glow.

## Neutral fields

Facework supports two coordinated registers — two states of one system, not two
personalities. **The Record** (light) is the surface of the Work; **The Field**
(dark, warm obsidian) is the surface of the Practice. The same relationships hold
in both; the dark register is not a mechanical inversion of the light.

### The Record — light

Used for reading, documents, archives, evidence, and sustained attention.

| Token | Value (OKLCH) | Purpose |
|---|---|---|
| `--rr-paper` | `oklch(0.967 0.008 85)` | page ground |
| `--rr-surface` | `oklch(0.936 0.010 84)` | raised panel / worksheet fill |
| `--rr-rule` | `oklch(0.800 0.013 82)` | hairline rules, borders |
| `--rr-meta` | `oklch(0.515 0.012 80)` | metadata + secondary text |
| `--rr-body` | `oklch(0.305 0.012 68)` | reading body |
| `--rr-ink` | `oklch(0.175 0.012 55)` | ink, marks, **primary CTAs** |
| `--rr-verdigris` | `oklch(0.55 0.075 190)` | brand accent — fills / marks |
| `--rr-verdigris-text` | `oklch(0.47 0.070 190)` | accent **as text** on paper (AA) |

### The Field — dark (warm obsidian)

Used for immersive diagrams, system states, projection, and controlled
threshold moments.

| Token | Value (OKLCH) | Purpose |
|---|---|---|
| `--rr-field` | `oklch(0.185 0.008 70)` | ground |
| `--rr-field-panel` | `oklch(0.235 0.009 70)` | raised panel |
| `--rr-field-raised` | `oklch(0.270 0.010 70)` | secondary raised surface |
| `--rr-field-line` | `oklch(0.340 0.010 70)` | 1px borders |
| `--rr-field-text` | `oklch(0.920 0.012 85)` | primary text and line |
| `--rr-field-mute` | `oklch(0.630 0.013 78)` | secondary text |
| `--rr-verdigris-field` | `oklch(0.740 0.085 190)` | accent lifted for ≥4.5:1 on the field |

The two registers express the same relationships. The Field is not a separate
personality, and the Record is not a diluted version of the brand.

## Brand accent

There is exactly **one brand accent: verdigris** (hue ~190) — coherence that
holds and ages, a patina. It marks the *active / attended* state and links, and
supplies fills and marks. Verdigris supersedes the retired clarity-blue accent;
the earlier `#8FAFFF` "clarity" value and any prior ochre brand accent are no
longer part of the system.

Rules:

1. **Primary CTAs are ink (`--rr-ink`), never verdigris and never colored.**
   Verdigris marks state and links; it does not become the button.
2. Never more than one accent per bounded section.
3. Verdigris (hue ~190) is clear of every status hue, so the brand accent can
   never be mistaken for a reading's own verdict.
4. Large accent backgrounds require tested contrast and genuine necessity.
5. Hover is not assigned a new color unless the state itself changes.

## Status colors — classification only

Status colors **classify state; they are explicitly not brand and not
decoration.** They are permanently spoken-for and never promoted to accents.
Each has a fill tier, an AA text tier for use as text on paper, and, where
present, a field-lifted tier for legibility on the dark register.

| State | Fill (OKLCH) | Text tier — paper (AA) | Field-lifted tier | Meaning |
|---|---|---|---|---|
| Settled (green) | `oklch(0.56 0.12 150)` | `oklch(0.49 0.12 150)` | `oklch(0.72 0.10 150)` | settled / owned |
| Attention (amber) | `oklch(0.70 0.13 75)` | `oklch(0.52 0.12 72)` | — | needs attention |
| Exposure (red) | `oklch(0.58 0.19 30)` | `oklch(0.48 0.17 30)` | — | weak / at risk |
| Archive (violet) | `oklch(0.50 0.13 300)` | — | — | archived / wayfinding |

Rules:

1. A status color appears only because that state is present.
2. Color never carries essential meaning alone. Pair it with language, shape,
   position, pattern, or iconography.
3. Semantic red is reserved for exposure and risk — never ordinary emphasis.

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
