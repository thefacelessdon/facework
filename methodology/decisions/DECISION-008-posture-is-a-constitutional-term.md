---
id: FW-DEC-008
title: "Posture" names the 8 standing operating modes and nothing else — the 12 primitives-as-stances are the two-layer check
date: 2026-08-21
status: resolved
authority: canonical
ratified_by: Harper (harper@face.works) — ruling delegated to the agent, 2026-08-21
---

# FW-DEC-008 — "Posture" is a constitutional term

## Question

GAMUT's `.claude/rules/75-collaboration-postures.md` (in force since 2026-04-23)
carries a discipline Facework does not have: the 12 primitives adopted as
**real-time stances**, each with a trigger question, checked before any
consequential action, paired with an authority mode. That discipline was ported
into `AGENTS.md` at this release.

GAMUT calls those 12 stances **collaboration-postures**. Facework already uses
**Postures** for the 8 operating skills. Porting the word alongside the
discipline would give Facework two meanings for one term — so the question had to
be ruled before the port could land: are Postures the 8 operating skills, the 12
primitives-as-stances, or both under one definition?

## Decision

**Neither "both" nor a rename of the eight. `Posture` keeps exactly one meaning,
and the imported discipline gets no new noun at all.**

1. **`Posture` = one of the 8 standing operating modes** (`/mvp-cut`,
   `/beta-hardening`, `/scale-readiness`, `/contract-sync`, `/decision-log`,
   `/weekly-upgrade`, `/evidence-debug`, `/launch-ops`). Unchanged. This is
   **constitutional**, not conventional — see the evidence below.
2. **The imported discipline is named for its mechanism, not a role: the
   two-layer check.** Layer 1 is the **load-bearing primitive**; layer 2 is the
   **authority mode**. The 12 items keep the name they already have in canon —
   *primitives*.
3. **"Collaboration-posture" does not import.** It is a Rule-75 term. Where the
   two systems must talk, the mapping is: *GAMUT Rule-75 collaboration-posture ≡
   Facework load-bearing primitive.*
4. **Bare "posture" is ambiguous in this repo and must be qualified** outside the
   three homes below, because two of the three senses are machine-enforced and a
   reader cannot tell which one a sentence means.

## Evidence — the ruling is constitutional, not stylistic

`CONSTITUTION.md` Article V is titled **"The Protocol and Postures Principle"**
and reads (lines 57–62):

> The Protocol defines the sequence through which the primitives are applied to
> **establish** coherence. Postures are the standing operating modes through which
> coherence is **maintained** after it is established. […] The primitives shall
> not [evolve].

That settles it two ways at once:

- `Posture` is a **defined constitutional term** with a stated extension — the
  standing operating modes. It is not a loose descriptor available for reuse.
- The 12 primitives adopted as live stances are the primitives *being applied*,
  which Article V assigns to the **Protocol** side of the split, not the Posture
  side. Calling them Postures would put the establishing half of Article V inside
  the word Article V reserves for the maintaining half.

Article XII then forbids the merge independently: *"No addition shall duplicate an
existing concept."* Two names for the 12 primitives is duplication; one word for
two concepts is worse.

## The sense map — three senses already, two of them machine-enforced

The briefed collision was two senses. It is three, and the strongest ones are not
prose:

| Sense | Extension | Where it is enforced |
|---|---|---|
| **Posture** (Article V) | one of the 8 standing operating modes | `CONSTITUTION.md` Article V; `skills/OPERATING_SKILLS.md`; COS §VII |
| **`sovereigntyPosture`** | `own` / `rent` / `mitigate` | `facework.manifest.schema.json` `$defs/sovereigntyPosture`, referenced by `shell_sovereignty.{harness,state,model}` and `harness_options[].posture`; `bin/validate-manifest:463` `valid_posture = %w[own rent mitigate]` |
| **`data_posture`** | `retention` / `training` / `residency` | `facework.manifest.schema.json:411,430` — **required** inside `sovereigntyWaiver`; PROTOCOL.md §9.11/§9.12 |

Adding GAMUT's collaboration-posture would have made a fourth, and it would have
been the only one with no enforcement anywhere — a prose sense competing with two
schema-checked ones for the same word, in the file that lands in every context
window of every session. That is the drift Article XII names.

Facework has no need for the noun. GAMUT needed "collaboration-posture" because it
was importing the 12 into a rules system that had no other word for them. Facework
owns the word *primitive* and has since the Constitution.

## Why not the alternatives

**Rename the 8 Postures, adopt "Posture" for the 12 stances.** Rejected. It edits
a constitutional article to accommodate an import from a downstream system —
authority running backwards (`AGENTS.md` rule 3). It also invalidates Article V's
title, `skills/OPERATING_SKILLS.md`, COS §VII, `methodology/loop-model.md`, and
eight shipped skills, for a naming preference.

**Keep both senses; disambiguate at use site** — GAMUT's own resolution for its
three. Rejected *for Facework*. GAMUT's convention works because GAMUT's senses
each carry a rule number (`Rule 70 form-posture`, `Rule 75 collaboration-posture`,
`GAM-117 behavioral-posture`) and its rules files are read by agents already
holding that frame. Facework's carrier is `AGENTS.md`, which is injected into
**every session on every harness** (`methodology/runtime-ports-berd-gap-2026-08-18.md`).
A section that must first teach a four-way vocabulary disambiguation before it can
state its rule is not a section that fires mid-work — it is a glossary. The port's
whole value is that it is fast.

**Invent a fresh noun for the 12 stances** (e.g. "Stances", "Modes"). Rejected
under Article XII: it duplicates *primitive*, which already names them, and adds a
term the Constitution would then not cover.

## Consequences — landed in this release

1. `AGENTS.md` gains **§ The two-layer check — before any consequential action**:
   the 12 primitives with trigger questions, the four authority modes, layer order,
   the sharpening rule, and the Rule-75 governing sentence carried verbatim and
   attributed.
2. `AGENTS.md` five-layer section now cites Article V on the establish/maintain
   split and points here.
3. `AGENTS.md` skills list states that the 12-as-stances are not additional
   Postures.
4. `skills/OPERATING_SKILLS.md` carries the sense map and the non-import of
   "collaboration-posture".

## Stated boundary — the four authority modes are unenforced, deliberately

`ship-gate` / `runtime-active` / `diagnostic` / `emergent` are imported operating
vocabulary. Their source of truth is outside this repo (Design Harness v0.2.2 §12,
via Harper's `personal/define/canonical-language.md` §"Authority modes"), they have
**no** slot in `PROTOCOL.md`, **no** definition in
`facework.manifest.schema.json`, and **nothing** in `bin/validate-manifest` checks
them. That is correct and must not be "fixed": a mode is an agent's self-report
about its own authority in the current turn, and no validator can see a turn. The
declare/define/enforce trio applies to schema features. It does not apply here and
must not be invented for it — `AGENTS.md` says so at the point of use.

One consistency note in favour of the import: the `diagnostic` mode (read-only,
narrates, touches no live state) matches `canonical-language.md` §B's existing
prohibition on loose "Diagnostic" — *"only for true read-only operations"*. The
imported mode tightens that rule rather than colliding with it. Distinct from
**Diagnostic** the meta-loop (`/fw-coherence` Step 8, `methodology/retros/`), which
`AGENTS.md` states explicitly is not a per-action stance.

## Revisit trigger

Reopen if any of:

- a Posture (one of the eight) is found to fire per-action rather than on a drift
  signal, which would mean the Article V split does not hold in practice and the
  two mechanisms are one,
- the four authority modes acquire a schema slot or a validator — at which point
  the declare/define/enforce trio *does* apply and this record's boundary section
  is wrong,
- a fourth machine-enforced `*_posture` field enters the schema, which would make
  qualification-at-use-site unworkable and force a rename of one of the three.
