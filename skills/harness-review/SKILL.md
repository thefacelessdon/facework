---
name: harness-review
description: |
  Review Operating Harness options through read-only diagnostic and tableau
  analysis. Use when a user asks to score, critique, compare, advance, revise, or
  cull options carried by an Operating Harness record. Do not use to persist a
  transition, confirm authority, execute an operation, or close a record.
allowed-tools:
  - Read
  - Grep
  - Glob
  - Bash
  - AskUserQuestion
---

# /harness-review

Return a re-diffable option assessment. This skill reads and reasons; it does
not mutate an Operating Harness record or any subject surface.

## Governing sources

Read these before reviewing:

- `methodology/operating-harness-spec.md` §§2–5.4 and §7
- `methodology/decisions/DECISION-010-operating-harness-v0-ratification.md`
- `AGENTS.md` for the current load-bearing primitive and authority mode

Use the operation registry and record grammar in the spec as the single source
of truth. Do not copy authority or Posture definitions into the assessment, and
do not accept authored authority fields from a record as evidence.

## Review

1. Resolve the private store, repository mapping, record path, and current git
   bytes without modifying them. Refuse an uncommitted or ambiguous input unless
   the user explicitly asks for a provisional review labelled as such.
2. Determine which review shape applies from the record:
   - For proposal-path review, read the record's Constraints and Options tables
     at `options-generated` or `tableau-reviewed`.
   - For standalone `score-allocation` or `critique-option`, resolve the exact
     external Options snapshot named by `options_snapshot_ref`, verify its full
     blob object id, and resolve option ids only inside that snapshot.
3. Test each option against the recorded constraints, node context, allocation,
   prior rulings, consent boundary, and evidence. Surface unsupported claims and
   missing inputs before ranking the options.
4. Return a canonical Tableau review table using §5.4's exact columns and value
   grammar. Recommend exactly one `advance` only when the evidence supports it;
   otherwise return findings and say the record is not ready to transition.
   Never manufacture an advancing row merely to satisfy the next state.
5. Keep the result diagnostic. Do not edit the record, write a review artifact,
   add an Operation result, select an authority mode, create a gate/review block,
   confirm a proposal, contact a collaborator, or run the proposed operation.
   A separately authorized carrier write is required to persist any result.

## Refuse

Return a diagnostic refusal, with no file changes, when:

- the record or cited snapshot does not resolve to exact committed bytes;
- ids are missing, duplicated, or resolve outside their permitted table;
- the request asks review to change state or to count its own analysis as
  execution evidence;
- the candidate action is absent from the ratified registry; or
- a Sovereignty decision is being treated as settled without the human ruling
  required by canon.

## Output

Lead with `advance`, `revise`, or `cull` findings, then provide the canonical
Tableau review table, evidence gaps, snapshot triple reviewed, and the explicit
statement: `Diagnostic only — no state changed.`
