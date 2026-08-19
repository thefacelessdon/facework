---
id: FW-DEC-004
title: Re-deriving visual-system/applications/shared/tokens.css from FVS-600/FVS-500
date: 2026-08-19
status: resolved
authority: canonical
ratified_by: Harper (harper@face.works) — decision delegated to the agent, 2026-08-19
---

# FW-DEC-004 — Application token layer re-derivation

> **Status: RESOLVED at 0.0.53.** Harper delegated the ruling ("make the most
> coherent call on the questions"). The evidence below is unchanged; the rulings
> are recorded at the end.

## The problem

`visual-system/applications/shared/tokens.css` is the shared token layer for the
FVS application references. It is entirely on the **pre-0.0.32 system**: the
retired clarity-blue accent scheme, and the retired type stack.

`bin/validate-tokens` does not catch it. Check (a) compares `tokens.css` to
`tokens.json` — **only to each other**, never to FVS-600 — so two copies of a
superseded palette agree and pass (recorded at 0.0.51).

## Evidence — every token, with live consumer counts

Counts are `var(--fw-*)` references across `visual-system/` and
`examples/face.works/prototype/public/`, excluding worktrees and node_modules.

### Dead — 8 tokens, zero consumers

| Token | Value | Uses |
|---|---|---|
| `--fw-resonance` | `#ffd089` | 0 |
| `--fw-entropy` | `#e66f70` | 0 |
| `--fw-boundary` | `#b69ae8` | 0 |
| `--fw-field-raised` | `#1a1917` | 0 |
| `--fw-muted-inverse` | `oklch(43% .012 95)` | 0 |
| `--fw-rule-inverse` | `oklch(78% .01 95)` | 0 |
| `--fw-ink-print` | `#333` | 0 |
| `--fw-measure` | `68ch` | 0 |

**No design judgment required.** Three of these (`resonance`, `entropy`,
`boundary`) are the retired accent scheme; the rest are unreferenced.

### Live neutrals — direct FVS-600 counterparts exist

| `--fw-*` | Value | Uses | FVS-600 counterpart | Value |
|---|---|---|---|---|
| `paper` | `#fafaf8` | 11 | `--rr-paper` | `oklch(0.967 0.008 85)` |
| `paper-quiet` | `#f4f3ee` | 4 | `--rr-surface` | `oklch(0.936 0.010 84)` |
| `rule` | `#e5e3dc` | 28 | `--rr-rule` | `oklch(0.800 0.013 82)` |
| `muted` | `#6b6861` | 21 | `--rr-meta` | `oklch(0.515 0.012 80)` |
| `graphite` | `#2c2b27` | 3 | `--rr-body` | `oklch(0.305 0.012 68)` |
| `ink` | `#1a1917` | 25 | `--rr-ink` | `oklch(0.175 0.012 55)` |
| `field` | `#11110f` | 1 | `--rr-field` | `oklch(0.185 0.008 70)` |
| `rule-dark` | `#34322d` | 1 | `--rr-field-line` | `oklch(0.340 0.010 70)` |
| `muted-dark` | `#9c9890` | 2 | `--rr-field-mute` | `oklch(0.630 0.013 78)` |
| `signal-light` | `#f4f3ee` | 2 | `--rr-field-text` | `oklch(0.920 0.012 85)` |

These are role-for-role matches, but **the values are not equivalent** — the
`--rr-*` set is a different, OKLCH-derived palette, not a re-encoding of these
hexes. Adopting it changes the rendered result. That is a visual decision, which
is why this is a ruling and not a refactor.

### The live accent — `--fw-clarity` (`#8fafff`), 10 uses

FVS-600 line 63 names this exact value as retired: *"Verdigris supersedes the
retired clarity-blue accent; the earlier `#8FAFFF` 'clarity' value … no longer
part of the system."* It is still doing **two different jobs**:

| Job | Where | Role |
|---|---|---|
| `:focus-visible` outline | `tokens.css:39`, `prototype/public/field/tokens.css:32` | brand / interaction |
| `.skip` link background | `web/reference/styles.css:4`, `product/reference/styles.css:3` | brand / interaction |
| `.trace-panel` / `.detail` left border | `web:33`, `product:16` | brand emphasis |
| `.about` section background | `web:67` | brand emphasis |
| `.signal` dot | `web:13` | **status** |
| `.state.canonical::before` | `web:60` | **status** |

Under FVS-600's rules those two roles **must separate**: verdigris marks brand
and links; status colors mark genuine state. There is precedent for exactly this
split — 0.0.34 applied it to the FVA-400 social templates ("verdigris for brand
emphasis, status colors only for genuine state").

`--fw-flow` (`#62dfae`, 1 use) is a `.label` color in
`product/reference/styles.css:9` — cosmetic, not state.

### Fonts — also superseded (out of the ruling's stated scope, but adjacent)

| `--fw-*` | Current value | Canonical (FVS-500 / `reading-room.css`) | Uses |
|---|---|---|---|
| `font-structural` | `"Berkeley Mono", "JetBrains Mono", …` | `--rr-font-record` → `"Spline Sans Mono Variable"` | 24 |
| `font-reading` | `Inter, "Helvetica Neue", …` | `--rr-font-reading` → `"Literata Variable"` | 3 |

0.0.32 de-provisioned Inter and JetBrains from FVS-500 and stripped them from the
prototype. This file kept them. `validate-tokens` check (c) passes because the
references *are* sourced from tokens — it never checks the token's value.

## What requires Harper's ruling

1. **Adopt the FVS-600 values, or re-encode the current hexes into OKLCH?**
   Adopting FVS-600 changes rendered output on the reference pages. Re-encoding
   preserves appearance but keeps a palette FVS-600 does not declare.
2. **How does `--fw-clarity` split?** Recommendation: verdigris for the four
   brand/interaction uses, and the status set (`--rr-settled` / `--rr-attention`)
   for `.signal` and `.state.canonical`. The specific status colour per marker is
   a judgment call — `.state.canonical` may be `settled`, but that is a reading of
   intent, not a fact in the source.
3. **Do the fonts come with it?** They are the same class of drift and 27 uses;
   splitting them into a separate pass is defensible but leaves the file
   half-migrated.
4. **Does check (a) become authority-checking?** Once the values derive from
   FVS-600, the validator could compare `tokens.css` against FVS-600 directly
   instead of against `tokens.json`. That closes the 0.0.51 finding permanently.

## Recommended default (a recommendation, not a decision)

Delete the 8 dead tokens; adopt FVS-600 values for the 10 neutrals; split
`clarity` per the 0.0.34 precedent; bring the fonts in the same pass since
leaving 27 references on retired families reproduces the exact drift this closes;
then extend check (a) to compare against FVS-600 so the layer cannot drift again.

Accessibility note: `:focus-visible` currently uses the retired accent in two
files. Whatever replaces it must be verified for contrast against both grounds —
`--rr-verdigris` and `--rr-verdigris-field` exist as the AA-tiered pair.

## Not doing

No token values changed. Nothing in this record is applied.


---

# The rulings (0.0.53)

## Q1 — Adopt FVS-600's values. Do not re-encode.

The token layer exists to *derive* from canon. Re-encoding the current hexes into
OKLCH would preserve an appearance while keeping a palette FVS-600 does not
declare — which is the "two copies agreeing with each other" defect this pass
exists to remove. These files are **reference implementations of the spec**;
rendering what the spec produces is the point, so changed output is the correct
outcome rather than a cost.

## Q2 — `--fw-clarity` splits by role, and FVS-600 states the rule

FVS-600: verdigris *"marks the active / attended state and links, and supplies
fills and marks."* Status colors *"classify state; they are explicitly not brand."*
That sentence pair decides every use:

| Use | Ruling | Why |
|---|---|---|
| `:focus-visible` outline (2 files) | `--rr-verdigris` | interaction/attended state |
| `.skip` link background (2 files) | `--rr-verdigris` | link |
| `.trace-panel` / `.detail` border | `--rr-verdigris` | brand emphasis (a mark) |
| `.about` background | `--rr-verdigris` | brand emphasis |
| `.signal` — "System status: Foundation active" | `--rr-verdigris` | FVS-600 assigns the **active** state to verdigris by name |
| `.state.canonical::before` | `--rr-settled` | classifies a *record* as settled/owned — the status axis |
| `--fw-flow` → `.sync span` dot | `--rr-settled` | a sync-healthy marker; preserves the green |

`.state.developing` stays `transparent`. The existing grammar is
presence/absence — a filled dot means canonical, an empty one means developing.
Making it amber would be a **design change**, not a re-derivation, and is out of
scope for this ruling.

**Dark-register correction found while implementing.** `field/reference/` is the
Field ground, and FVS-600 supplies `--rr-verdigris-field` (`oklch(0.740 0.085
190)`) precisely because base verdigris is tuned for paper. Its `--signal` now
uses the lifted tier.

## Q3 — Fonts come in the same pass

`Berkeley Mono` / `JetBrains Mono` / `Inter` were de-provisioned from FVS-500 at
0.0.32 and stripped from the prototype then; this layer kept them across 27
references. Leaving them would reproduce the exact drift the pass closes, and the
repo's own history says a promised second pass is where drift lives.

## Q4 — Check (a) becomes authority-checking

`bin/validate-tokens` check (a) now parses FVS-600's two colour tables and
requires every colour token in `tokens.css` to be **declared by FVS-600 with the
same value**, with `tokens.json` agreeing. A token FVS-600 does not declare is
now a named failure (`undeclared palette`) rather than a silent pass. This closes
the 0.0.51 finding permanently instead of documenting it.

## Accessibility — verified, not assumed

The focus indicator changed colour, so contrast was computed (OKLCH → sRGB →
relative luminance), against WCAG 2.2 SC 1.4.11's 3:1 bar for non-text UI:

| Pair | Ratio | |
|---|---:|---|
| verdigris focus ring on paper | 4.25:1 | PASS |
| verdigris focus ring on field (dark) | 3.99:1 | PASS |
| verdigris-field on field (the lifted tier now used) | 8.39:1 | PASS |
| settled status dot on paper | 4.00:1 | PASS |

## Implementation note — a bug this pass introduced and caught

The first migration pass used `var\(--fw-([a-z-]+),\s*([^)]+)\)`, whose `[^)]+`
stops at the first `)` — which sits *inside* `oklch(...)`. That produced 15
malformed declarations of the form `var(--rr-field, oklch(...)))`. Caught by
reading the output rather than trusting the substitution, repaired, and verified
by paren/brace balance across all 6 CSS files. Recorded because the class of
error (a regex that assumes flat parentheses in nested CSS functions) will recur.

## Deliberately not done

The `.state.developing` marker stays transparent (design change, not
re-derivation). `visual-system/CHANGELOG.md` still references `--fw-*` names in
its historical entries; those are dated records and are left as written.
