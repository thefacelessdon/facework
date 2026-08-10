---
id: FVI-400
title: Motion Signature
version: 0.1.1
status: canonical
authority: canonical-reference-implementation
parents: [FVS-700, FVS-800, FVI-001, FVI-200, FVI-300]
created: 2026-08-06
---

# FVI-400 — Motion Signature

## Decision

The canonical Facework motion signature is **Exchange Resolve**: two legible
counterparts enter relation, establish the shared interval, and settle without
merging. It is a temporal expression of the Coherence Mark, not a logo reveal effect.

The signature has four phases:

```text
Available → Approach → Exchange → Resolve
```

The identity remains recognizable before, during, and after motion. Coherence is
shown as maintained relationship, not perfect fusion or cosmetic tidiness.

## Purpose

Exchange Resolve may be used to:

- introduce Facework at a genuine threshold;
- confirm that two or more system states have entered a coherent relationship;
- bridge a loading state into an available state;
- close a film, presentation, or interactive narrative;
- demonstrate the motion behavior of the Coherence Mark.

It must not loop beside sustained reading, replace progress information, or
celebrate ordinary interface actions.

## Choreography

### 1 — Available

Both halves are present but offset from the shared axis. Opacity is reduced, not
zero. The initial condition remains perceptible and does not imply creation from
nothing.

### 2 — Approach

Counterparts move toward the axis over the first 55% of the duration. Travel is
short and horizontal. No rotation, elastic overshoot, blur, or depth effect is
permitted.

### 3 — Exchange

The lowest directional bands pass the attention threshold while the central
interval remains open. A restrained Flow signal may appear at the axis when the
context actually represents healthy transmission.

### 4 — Resolve

Both halves reach their canonical position and full opacity. Motion decelerates
into the final state. The result holds long enough to be recognized; it does not
immediately repeat.

## Timing

| Token | Value | Purpose |
|---|---:|---|
| `--rr-motion-immediate` | 120 ms | local acknowledgement |
| `--rr-motion-quick` | 180 ms | hover or focus support |
| `--rr-motion-standard` | 300 ms | small reconfiguration |
| `--rr-motion-signature` | 520 ms | Exchange Resolve |
| `--rr-motion-hold` | 900 ms | minimum resolved-state hold |
| `--rr-motion-ambient` | 8 s | rare non-task living state |

The signature uses `--rr-ease-settle` = `cubic-bezier(0.22, 1, 0.36, 1)`, the
Reading Room settle curve. It may be extended to 600 ms for large-format film or
projection, but not shortened below 420 ms: below that threshold the phases
become a generic slide.

The signature always settles to the resting open-center mark — the final frame
is the canonical open-center geometry, never a filled node.

## Spatial values

- Initial half offset: 8% of mark width per side.
- Maximum scale change: 2%; canonical signature uses none.
- Initial opacity: 0.48–0.64 according to background contrast.
- Axis signal: maximum diameter equals 0.5x and maximum visible duration is 180
  ms.
- Final geometry must be identical to the canonical static mark.

## Sequencing with the logotype

When the full signature appears, the Coherence Mark resolves first. Register becomes
available 80–120 ms after the mark begins resolving, using a short opacity change
with no letter-by-letter animation. The name is one identity object, not a title
to be typed on.

In route transitions where Facework is already established, the static lockup
remains static.

## Interaction rules

- Play automatically only at a genuine entry or state threshold.
- Replay requires an explicit control in evaluative or educational contexts.
- Do not replay on hover.
- Do not bind the signature directly to unrestricted scroll position.
- Do not delay navigation or content availability until animation completes.
- Focus moves according to the destination, never according to the moving mark.

## Sound

No canonical sound signature is established. Motion must be complete without
audio. Any future sonic work requires an independent derivation and must respect
silent, captioned, and reduced-sensory contexts.

## Reduced motion

Reduced motion is a canonical alternate expression:

1. render the Coherence Mark in its resolved geometry immediately;
2. use no travel, drawing, pulse, or sequential letter appearance;
3. if state change needs acknowledgement, use an instantaneous visual state or
   a dissolve no longer than 120 ms;
4. preserve the same accessible name and final information;
5. stop every ambient identity loop.

The supplied CSS and animated SVG implement `prefers-reduced-motion: reduce`.

## Performance

Screen implementations animate only transform and opacity. The static SVG is
available before animation begins, so failure to run CSS or JavaScript does not
remove identity. The reference implementation introduces no animation library,
layout measurement, network dependency, or runtime font dependency.

## Anti-patterns

- butterfly flapping or literal insect behavior;
- particles or random lines converging into the mark;
- elastic bounce, overshoot, or dramatic zoom;
- drawing each band as an ornamental flourish;
- constant breathing near reading content;
- using animation as the only indication of completion;
- letter-by-letter logotype assembly;
- autoplay on every route or component mount;
- a reduced-motion mode that merely makes the same travel faster.

## Reference files

- `motion/coherence-mark-exchange-resolve.svg` — self-contained animated SVG.
- `motion/exchange-resolve.css` — canonical motion tokens and classes.
- `motion/reference.html` — interactive implementation and reduced-motion notes.
- `motion/storyboard.svg` — four-phase temporal specification.

## Evaluation

| Dimension | Result | Evidence |
|---|---|---|
| Meaning | pass | Motion shows counterpart relationship and maintained interval. |
| Structure | pass | Four phases map to one controlled 520 ms sequence. |
| Coherence | pass | Final frame is the canonical static mark. |
| Necessity | pass | Motion is limited to thresholds and system-state transitions. |
| Accessibility | pass | Reduced motion preserves state without travel. |
| Performance | pass | Transform and opacity only; no runtime dependency. |
| Traceability | pass | Derived from FVS-700, FVS-800, and the Coherence Mark. |
