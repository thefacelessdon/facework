---
id: FVA-100
title: face.works Public Knowledge Interface
version: 1.1.0
status: reference
parents: [FVA-000, FVS-700, FVS-900]
---

# FVA-100 — Website

The website is the public interface to a living discipline, not a marketing
funnel, portfolio, or exposed repository. Its governing metaphor is **the
Reading Room**: *Facework doesn't decorate — it reads.* Every surface is a
reading of a real system — what it carries, whether it holds under pressure, and
what survives its author — never a brochure or a dashboard.

## Two registers, one system

The site is two states of one record, not a theme toggle:

| Register | Ground | State | Home mode |
|---|---|---|---|
| **The Record** | warm paper (light) | settled / issued readings | The Work |
| **The Field** | warm obsidian (dark) | live / under observation | The Practice + the Lorenz Field |

Both registers share one hue family, one status vocabulary, and one type
system. Publishing a reading is the crossing from Field to Record. Registers are
implemented as the `.rr` (Record) and `.rr-field` (Field) scopes; primitives
resolve through register-neutral aliases so a block reads correctly in either.

## Information architecture — the two-mode spine

Public navigation is a two-mode spine with one clear entry each, plus About and
the operating records. Nothing floats: every path resolves to one mode.

| Public entry | Route | Canonical role |
|---|---|---|
| **The Work** | `/` | the published thinking + research, presented as issued readings — the front door and the reason to return |
| **The Practice** | `/engage` | how to work with Facework: what it is, the method, what you get, what it costs, and the proof behind it |
| **About** | `/about` | the practitioner and institution behind the work |

**The Work** (Record register) is the home surface. It opens with the current
reading, then recent readings across the record, then a browse-by-type index.
Its type sub-surfaces are reached from that index rather than promoted to
top-level navigation:

| Sub-surface | Route | Role |
|---|---|---|
| Field Notes | `/field-notes` | living observations across theory, discipline, and practice |
| Models | `/models` | Cultural Physics and other ways of seeing |
| Frameworks | `/frameworks` | Coherence Design, specifications, standards, and protocols |
| Experiments | `/experiments` | hypotheses, prototypes, and protocol iterations (incl. the Lorenz Field) |
| Conversations | `/conversations` | dialogue that refines the discipline |
| Library | `/library` | reading, listening, watching, artifacts, references, and lineage |

**The Practice** (Field register) is the `/engage` hub — one path that answers
*what it is, what it costs, and what you get.* Proof and Cases (`/proof`,
`/cases`) fold into this mode as its evidence, not as separate destinations. The
Lorenz **Field** lives inside The Work as the flagship live experiment (it *is*
the Field/Trace instrument); it is documented in `FVA-610-facework-field.md`.

A claim may still reveal its related model, framework, standard, application, and
evidence without requiring the reader to understand repository taxonomy first —
lineage is exposed through the reading, not through a mirrored folder tree.

## Composition and hierarchy

The reading — not the card — is the unit: a mono record-label eyebrow → title →
body → instrument → verdict. Surfaces prefer a single reading column with
hairline-ruled rows and squared panels over card grids; repeated equal cards are
used only where content is truly tabular. Section heads carry a mono
record-label and an index *only where order is real* (Field Note 027, phase 3 of
5), never as decoration. Self-adjusting grids use `repeat(auto-fit, minmax(…,
1fr))`; sustained reading stays at a ~68ch measure. Corners are square; color
appears only where a real state exists.

## Typography

Three self-hosted faces (`@fontsource`, no CDN), three registers of voice:

- **Reading** — Literata Variable — body and article/reading titles.
- **Structure** — Schibsted Grotesk Variable — display, section heads, nav, UI.
- **Record** — Spline Sans Mono Variable — labels, IDs, metadata, verdicts, and
  Field instruments.

Serif *reads*, grotesque *structures*, mono *certifies*. The earlier neutral-sans
reading voice (Inter / Public Sans) and the JetBrains mono direction are
superseded by this trio.

## Color and accent

OKLCH only, on the namespaced `--rr-*` tokens. Monochrome-first: **color only
classifies.** There is a single brand accent — **Verdigris**
(`oklch(0.55 0.075 190)` as fill on paper, lifted to `oklch(0.740 0.085 190)` on
the Field) — which marks the active / attended state and links only. Primary
CTAs are **ink**, never colored. The reserved status palette (settled / attention
/ exposure / archive) is permanently spoken-for and never becomes a brand color.
The earlier single Clarity-blue signal is retired.

## Mark and lockup

The identity lockup leads with the **Coherence Mark** — the governing equation
drawn, viewBox `0 0 230 176`, with an **open center** (coherence is the
relationship, never a filled node) — followed by the **Register** wordmark, the
custom monoline logotype (viewBox `0 0 560 80`, real letterforms, not a font).
The mark rests in ink on the Record and inherits signal-light on the Field via
`currentColor`. The earlier filled-center-dot mark (240×160) and Schibsted-text
wordmark are superseded.

## Accessibility and print

All controls are keyboard operable, at least 44 pixels high, and retain visible
focus. State is signaled by more than color (shape law: square = open, circle =
settled). On small screens comparisons become sequences and metadata moves
before the content it qualifies. `prefers-reduced-motion` renders the settled
state instantly. Print removes navigation while preserving titles, metadata,
URLs, and lineage.

Reference: the shipped face.works prototype
(`examples/face.works/prototype/`) — see `DESIGN.md` and
`src/app/reading-room.css` for the enforceable contract.
