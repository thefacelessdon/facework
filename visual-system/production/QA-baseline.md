# Production Integration Baseline Audit

Date: 2026-08-06
Target: `examples/face.works/prototype/` before FVA-100 integration

## Audit Health Score

| # | Dimension | Score | Key finding |
|---|---|---:|---|
| 1 | Accessibility | 2/4 | small navigation and primitive labels; active route is visual only |
| 2 | Performance | 1/4 | the hero canvas recalculates every pixel and allocates new buffers every frame |
| 3 | Responsive design | 3/4 | layouts adapt, but dense mobile navigation and tiny controls remain |
| 4 | Theming | 2/4 | pre-FVS hex palette and hard-coded visualization colors remain active |
| 5 | Anti-patterns | 1/4 | mono-only voice, neon-on-dark palette, rounded card grids, decorative canvas |
| **Total** | | **9/20** | **Poor — major integration required** |

## Anti-pattern verdict

**Fail.** The runtime is recognizably derived from the superseded “protocol
microsite” direction. Its visual authority comes from technical costume and a
decorative animated field rather than the Open Ledger relationships established
in FVA-100.

## Findings

### P1 — Release checks do not pass

`npm run lint` stops on `PatternField.tsx`, so the production build cannot be
reached through the release command chain. Remove the retired visualization
from the shell and restore a zero-error lint/build path.

### P1 — Hero animation is computationally excessive

`PatternField.tsx` allocates image and float buffers, evaluates every pixel,
and performs multiple wave calculations on every animation frame. This drains
mobile CPU and battery for a decorative background. Retire it from the public
interface; reserve generated fields for the explicitly entered FVA-610
experiment.

### P1 — Runtime design sources conflict with FVS

`globals.css` activates pure black/white, the older neon state palette, an
eight-pixel-only spacing system, and mono typography for all reading. Replace
these with the FVA Open Ledger roles and current FVS tokens.

### P1 — Information architecture conflicts with FVA-100

The active navigation exposes System, Proof, Status, and Engage. FVA-100
requires human-facing paths through Field Notes, Models, Frameworks, Cases,
Conversations, Experiments, Library, and About. Preserve the legacy routes as
deep reads, but move the public shell to the approved architecture.

### P2 — Repeated card containers flatten hierarchy

Home, System, Proof, Status, and Engage repeatedly use rounded bordered cards.
This makes unlike information appear equivalent and weakens the intended
standard/notebook rhythm. Replace repeated containers with ledgers, rules,
sequences, and open intervals.

### P2 — Navigation state is not programmatically exposed

The active navigation item changes color but does not use `aria-current`.
Mobile and keyboard users receive weaker orientation than sighted desktop
users.

## Positive findings

- Semantic page landmarks and heading structures are generally present.
- The content already distinguishes theory, discipline, practice, and proof.
- TypeScript completes without errors.
- Existing routes contain useful material worth preserving as deep reads.
- Most primary layouts already collapse to one column on small screens.
