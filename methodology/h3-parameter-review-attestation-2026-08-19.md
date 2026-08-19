# H3 parameter review — Canon Keeper attestation

**Written:** 2026-08-19. **Status:** review attestation, not outcome evidence.
**Object reviewed:** the four H3 parameters and the leverage-comparison design.

## What this record is

This is a dated transcription and scope statement made by the Canon Keeper from
the machine-local Berd session named in the H3 pre-registration. It makes the
review verdict citable in the repository. It does **not** make the underlying Berd
session independently downloadable, and it does not claim to satisfy the public
evidence standard for an H2 checkpoint resolution.

“Independent review” here means a separate review session and persona from the
sessions that authored commits `a921043f4dda` and `3a2e7dacabd9`. It does not mean
that a second reader can independently reproduce the private session transcript.

## Session metadata attested

Read-only inspection on 2026-08-19 used:

`berdctl session get --session-id 20260819_29 --messages 12 --json`

The returned metadata recorded:

- session: `20260819_29`
- title: `Review four proposed pre-registration`
- created: `2026-08-19T16:44:36Z`
- updated: `2026-08-19T17:00:21Z`
- harness: `codex-acp`
- agent: `/Users/facelessdon/.agents/agents/pushback.md`
- working tree: `h3-parameter-review`
- message count: 31

The reviewer was Berd's bundled, machine-global **Pushback** persona. Its declared
role is critical review of an existing draft or decision; its metadata says it is
good for catching what an agreeable review glosses over. It is not tracked in
this repository.

## Why this is not attributed to the Facework Adversary

The human handoff designated the completed Pushback review as the independent
review for this release. The reason that persona was selected instead of the
repo-tracked Adversary was not recorded, so this attestation does not invent one.
The Facework Adversary did **not** perform the parameter review, and none of its
refusal-by-default or public-evidence properties are claimed for the verdict.

The distinction matters. Pushback critiqued proposed parameters before any data
contact. The tracked Adversary remains the enforcement persona for H3 checkpoints
and any later claimed result.

## Attested review scope

The session was instructed to stay pre-data: inspect the H3 spec and relevant
commit history, judge the proposed thresholds, make no edits, connect no data
source, and inspect no candidate or outcome data. The final response records that
no files were edited.

## Attested verdict

Pushback accepted all four judgment calls:

- L1: **4.0×**
- L2: **1.5×**
- absolute adverse-event-rate gap: **15 percentage points**
- relative risk: **1.75×**

It required L1 to use mean fiscal-year-end gross debt divided by mean annual
EBITDA over three years, and L2 to use aggregate EBIT divided by aggregate gross
interest over three years, with the edge cases, common-universe exclusion,
cross-jurisdiction definitions, and lease treatment now appended to the H3 spec.

It rejected raw superiority over leverage cohorts as a pass gate and required the
incremental-value test against both the unconditional base rate and controls
matched on sector, revenue quartile, flag year, and joint L1/L2 status. Both point
thresholds and confidence-interval conditions must pass for each comparator.

In its last pre-data ruling, Pushback fixed the remaining interval-method choice:
Newcombe hybrid-score Method 10 without continuity correction for risk difference,
and the Katz log interval for relative risk with 0.5 added to all four 2×2 cells
when any cell is zero. Those formulas and failure rules are appended to the H3
spec rather than left only in this attestation.

## Evidence limit

This file is a public, dated attestation once merged. The session itself remains a
local Berd record controlled by the author. A reader who cannot access that local
session can verify what this repository claims the verdict was, but cannot verify
the transcript independently. The tracked Adversary remains the repository's
designated enforcement persona for any later H3 result, with the evidence rules
applicable at that checkpoint; this attestation does not pre-resolve or weaken
them.
