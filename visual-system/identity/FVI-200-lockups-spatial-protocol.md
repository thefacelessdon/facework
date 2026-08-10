---
id: FVI-200
title: Identity Lockups and Spatial Protocol
version: 0.1.1
status: canonical
authority: canonical-reference-implementation
parents: [FVS-300, FVS-400, FVI-001, FVI-100]
created: 2026-08-06
---

# FVI-200 — Identity Lockups and Spatial Protocol

## Decision

Facework uses a responsive signature system with four expressions: **primary**,
**stacked**, **word**, and **mark**. They are alternate configurations of one
identity, not separate logos. Selection follows available space, established
context, and legibility.

The canonical signatures remain the production SVGs established in FVI-001 and
FVI-100. This protocol defines when and how they occupy a field.

## Governing unit

The identity unit **x** is the open central interval of the Coherence Mark — the gap
the four strands sweep toward but never close. All signature spacing derives from
x as a ratio, so it holds at any scale.

The locked mark uses the `230 × 176` open-center geometry shipped in
`coherence-mark/coherence-mark.svg`; x is measured from that production asset. The
superseded `240 × 160` derivation construction fixed x at 22 units — that figure
is historical; the ratios in the table below are unchanged.

| Relationship | Canonical value | Tolerance |
|---|---:|---:|
| Mark-to-word gap | 1.7x | ±0.15x for optical correction |
| Primary clear space | 1x | minimum |
| Word-only clear space | 0.75x | minimum |
| Stacked vertical gap | 1.25x | ±0.15x |
| Descriptor separation | 1.5x | minimum |

Tolerance exists for optical correction across media. It is not permission to
compress the identity until it fits.

## Configuration hierarchy

### Primary signature

The Coherence Mark precedes Register on one horizontal axis. This is the default when
the available width is at least seven times the mark width and the rendered
height is at least 24 CSS pixels.

Use for navigation headers, title blocks, end frames, signage, document covers,
and first identity encounters.

### Stacked signature

The Coherence Mark centers above Register. Use in square and portrait fields, on
ceremonial openings, and where the primary signature would be undersized. The
minimum rendered height is 48 CSS pixels.

### Word signature

Register appears alone when the Coherence Mark is already visible in the same field,
when a narrow horizontal measure favors the name, or when repeated mark use would
become ornamental. Minimum height is 18 CSS pixels.

### Mark signature

The Coherence Mark appears alone only where Facework is named through adjacent text,
established interface convention, or accessible labeling. Below 32 CSS pixels,
use the micro mark.

## Responsive selection

Choose the first configuration that passes all applicable conditions:

```text
Can primary render at ≥24 px with ≥1x clear space?
  yes → primary
  no  → Is the field square/portrait and ≥48 px high?
          yes → stacked
          no  → Is Facework named or already established nearby?
                  yes → word or mark according to the available axis
                  no  → use ordinary accessible text: “Facework”
```

Responsive behavior may change configuration. It must not scale a preferred
configuration below its minimum.

## Alignment

- Align the primary signature to the composition's declared datum.
- Optical centering governs mark-to-word alignment; do not force a shared
  baseline.
- The stacked signature is internally centered but may sit on a left-aligned
  composition axis as one object.
- Do not center surrounding prose because the signature is centered internally.
- When the mark sits in a grid cell, align its visible mass rather than its SVG
  viewBox edge.

## Clear space

Clear space protects recognition and relational integrity. No text, rule, image
edge, control, or competing mark may enter the protected zone.

Field edges may enter the zone only when the identity is intentionally cropped
as an environmental-scale composition. A cropped signature may never be the
only identifying instance.

Background texture may continue beneath the zone if it remains visually quiet
and does not create false continuations of the mark.

## Co-branding

Partnership marks are separated by a neutral rule or at least 2x. Equal status
uses equal optical area, not equal bounding-box dimensions. Ownership and
reading order must be stated by the composition.

Do not:

- join the Coherence Mark to another organization's mark;
- recolor one identity to imitate the other;
- use the central interval as a container for a partner mark;
- imply endorsement through scale or proximity;
- create a permanent combined mark without a separate identity decision.

## Descriptor architecture

Descriptors are live typography, never embedded in the production logo:

```text
FACEWORK
Coherence operating system
```

The logotype and descriptor are separated by at least 1.5x. The descriptor uses
the structural type role at 18–25% of the logotype cap height, sentence case by
default. Product, program, and office names remain content, not extensions of
Register.

## Placement

Preferred zones are structural corners and declared axes. The identity may
occupy a singular center only at an opening, threshold, or conclusion.

Avoid habitual watermark placement, repeated corner stamping, or large faint
marks behind content. Presence must have a communicative role.

## Background and color

- Ink on Paper and Signal Light on Field are canonical.
- The mark and wordmark share one foreground color.
- Photographic placement requires a locally quiet field and verified contrast.
- Do not place the signature inside an invented badge, tile, lozenge, or holding
  shape unless that boundary belongs to the interface or object itself.

## Production requirements

- Preserve the original viewBox and aspect ratio.
- Never redraw, typeset, shear, outline, condense, expand, or rearrange a
  production signature.
- Inline SVG may inherit `currentColor`; external image files render in their
  encoded default.
- Accessible text or an accessible name is required when the signature is the
  only identity link.
- Raster exports require target-size review; do not treat a large export scaled
  by the browser as validation.

## Conformance tests

An implementation passes when it preserves:

1. one approved configuration;
2. the minimum rendered size;
3. the x-derived protected zone;
4. single-color unity;
5. the declared composition axis;
6. accessible naming;
7. separation from partner identities and interface controls.

## Reference files

- `logotype/facework-lockup-horizontal.svg` — primary signature.
- `logotype/facework-lockup-stacked.svg` — stacked signature.
- `logotype/facework-logotype.svg` — word signature.
- `coherence-mark/coherence-mark.svg` — core mark signature.
- `coherence-mark/coherence-mark-micro.svg` — micro mark signature.
- `lockups/construction-grid.svg` — x-unit and alignment construction.
- `lockups/responsive-system.svg` — configuration decision reference.
- `lockups/placement-zones.svg` — spatial placement examples.

## Evaluation

| Dimension | Result | Evidence |
|---|---|---|
| Meaning | pass | Configuration follows context and recognition need. |
| Structure | pass | All spacing derives from the mark's central interval. |
| Coherence | pass | Four expressions behave as one identity system. |
| Necessity | pass | No badges, decorative repetition, or forced extensions. |
| Accessibility | pass | Text fallback and accessible naming are explicit. |
| Responsiveness | pass | Identity changes configuration before losing legibility. |
| Traceability | pass | Rules derive from FVS-300, FVS-400, FVI-001, and FVI-100. |
