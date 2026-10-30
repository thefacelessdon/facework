# face.works design-eye grounding (Reading Room)

The data the `design-eye-evaluator` Skill grades against (PROTOCOL.md §11).
This set replaced `../design-infrastructure/` as the evaluator's grounding in
0.0.80; that directory's tokens, components and examples are retained,
unchanged, as evidence. Only the playbook there was edited, to repoint it here.

| File | Role (§11) |
|---|---|
| `components.yaml` | Component contracts (`must` / `must_not`) and the stable taste-clause ids findings cite |
| `examples/on-brand-examples.md` | `ON-n` — real face.works surfaces that pass, annotated |
| `examples/off-brand-anti-examples.md` | `OFF-n` — the DESIGN.md bans made concrete, annotated |
| `evals/` | Evaluation reports kept as evidence (first: `2026-10-29-home.md`) |

The playbook is `../design-infrastructure/design-eye-spec.md` (its registered
path in `runtime-ports/skill-manifest.yaml`); the Skill card is
`../harness-bundle/skills/design-eye-evaluator.md`.

## Authority — this set derives, it does not decide

| Concern | Source of truth |
|---|---|
| Token names and values | `../prototype/src/app/reading-room.css` (`--rr-*`) |
| Token JSON mirror (manifest `design_infrastructure.tokens`) | `../../../visual-system/applications/shared/tokens.json`, checked by `bin/validate-tokens` |
| Taste contract, bans | `../prototype/DESIGN.md` §11 |
| Visual primitives | `../../../visual-system/FVS-200-primitives.md` |
| Layer order | `methodology/decisions/DECISION-002` — `visual-system/` is Implementation-layer, subordinate to canon |

If this set and a source disagree, the source wins and this set is wrong.

## Rules

1. **Reference tokens, never copy them.** Contracts cite `--rr-*` names. No
   color, easing, duration, or font-family literal appears in
   `components.yaml` or the on-brand examples. (Anti-examples may quote a
   literal *as the drift*.)
2. **Every cited token exists.** Each `--rr-*` name in this set, the playbook,
   or the Skill card must be defined in `reading-room.css`.
3. **Every cited id resolves.** `clause: …` ids and component ids used in the
   examples, playbook, and Skill card must be declared in `components.yaml`.
4. **Nothing points back.** The evaluator's wiring (playbook, Skill card,
   `facework.manifest.yaml`, the `design-infrastructure` context bundle) must
   not load the superseded `tokens.json` / `components.yaml` / `examples/`.

`bin/validate-design-eye` enforces all four and runs in `make protocol-check`;
`tests/design-eye/run` proves it refuses each class of drift.

## Known gaps (not enforced here)

- `reading-room.css` defines `--rr-settled-text`, `--rr-settled-field`,
  `--rr-attention-text`, `--rr-exposure-text`; `tokens.json` has no
  counterpart, and `bin/validate-tokens` does not compare reading-room colors
  to FVS-600. The evaluator resolves against `reading-room.css`, so this does
  not affect grading, but the JSON mirror is incomplete.
- `reading-room.css` still hard-codes several durations (e.g. index hover,
  Trace draw-in) instead of `--rr-motion-*`. The evaluator flags this as a
  `structural-motion` finding; fixing it is site work.
