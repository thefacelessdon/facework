---
id: FVS-800
title: Facework Motion
version: 0.1.0
status: normative
authority: normative
parents: [FVS-100, FVS-200, FVS-700]
---

# FVS-800 — Motion

Motion reveals relationships through time. Facework motion behaves like a system
finding, maintaining, or changing state—not like a layer of entertainment added
after composition.

## Valid purposes

Motion must perform at least one purpose:

1. preserve spatial continuity;
2. explain cause and effect;
3. indicate state change;
4. direct attention to new consequence;
5. reveal assembly, dependency, or transformation;
6. communicate rhythm, transmission, or stabilization.

If removing motion leaves comprehension and orientation unchanged, the motion is
probably decorative and should be reduced or removed.

## Motion vocabulary

### Appear

An element becomes available without implying travel from an unrelated place.
Use opacity with small spatial or scale change, not dramatic entrance.

### Connect

A relationship becomes visible between existing elements. Origin and destination
remain perceptible.

### Transfer

Attention, energy, or state moves from one object to another. Direction and
consequence are explicit.

### Resolve

Noise, offset, or fragmentation settles into a more coherent state. Resolution
must not imply that every real system reaches perfect order.

### Reconfigure

Modules change arrangement while preserving identity and orientation.

### Pulse

A restrained periodic change communicates living state, recurrence, or incoming
signal. Pulse is never used to manufacture urgency.

## Tempo

Reference durations:

| Class | Range | Use |
|---|---:|---|
| Immediate | 80–140 ms | press, toggle, local acknowledgement |
| Quick | 140–220 ms | hover, focus support, small state change |
| Standard | 220–360 ms | panel, route, module reconfiguration |
| Deliberate | 360–600 ms | explanatory assembly or system resolution |
| Ambient | 4–16 s cycle | subtle living state with no task dependency |

Duration adapts to distance, mass, complexity, and platform. Larger spatial
change generally takes longer. No interface should feel delayed to perform calm.

## Easing

The default curve is controlled and non-elastic:

```text
cubic-bezier(0.2, 0.8, 0.2, 1)
```

Use deceleration for arrival, acceleration for departure, and symmetric curves
for reversible state changes. Bounce, overshoot, and spring behavior require a
physical or semantic justification.

## Pattern behavior

Protocol visualizations may begin in noise, separation, or instability and move
toward legibility. They must preserve the initial condition long enough to be
understood and avoid presenting “coherence” as cosmetic tidiness.

The Coherence Mark may assemble or stabilize, but no canonical animation is
approved until the mark itself is derived and ratified.

## Reduced motion

The reduced-motion expression is designed, not omitted as an afterthought.

- Replace large travel with instant state or restrained dissolve.
- Stop ambient loops.
- Preserve state, sequence, and causality through non-motion signals.
- Never require animation to understand progress or change.
- Avoid flashing and unsafe frequency ranges in every mode.

## Performance

Motion must not delay input, destabilize layout, or consume disproportionate
device resources. Prefer composited properties in screen implementations and
test on representative low-power devices.

## Motion anti-patterns

- every element entering independently on scroll;
- parallax that changes reading order or causes discomfort;
- looping motion near sustained prose;
- elastic easing as a generic personality layer;
- fake progress;
- transitions that obscure destination or move focus unexpectedly;
- “coherence” shown as random lines converging without a meaningful model.
