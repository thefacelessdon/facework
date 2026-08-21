---
name: harness-close
description: |
  Close an Operating Harness record only after its terminal candidate passes the
  standalone record validator and every required back-link resolves to exact git
  blob bytes. Use when a user asks to finalize, commit, close, or mark an
  Operating Harness intent evidence-recorded. Refuse when validation evidence,
  authority settlement, or resolving back-links are absent.
allowed-tools:
  - Read
  - Write
  - Edit
  - Grep
  - Glob
  - Bash
  - AskUserQuestion
---

# /harness-close

Close the task loop with a validator-passing terminal record and exact evidence
provenance. Conversation, a proposal, a review message, or a git commit alone is
not closure.

## Governing sources

Read these before acting:

- `methodology/operating-harness-spec.md` §§2–7, especially §§5.3 and 6
- `methodology/decisions/DECISION-010-operating-harness-v0-ratification.md`
- `AGENTS.md` for the current load-bearing primitive and authority mode

The spec owns terminal variants, authority derivation, evidence, back-links,
and refusals. Reference it rather than maintaining a second authority or
Posture matrix here.

## Hard gate

Before changing the record, require all of the following:

1. The independent private store resolves, is clean, has no active writer, and
   the acting human is established as its configured `writer_id`.
2. The current record bytes and committed history support the claimed legal
   transition and preservation of every immutable field.
3. The operation kind resolves to the ratified registry, its derived authority
   shape is settled, and the proposed outcome is coupled to that settlement as
   §5.3 requires. Do not infer confirmation from the request to close.
4. The terminal candidate carries non-empty back-links. Resolve every repository
   slug and path, hash the cited bytes with `git hash-object`, and require exact
   equality with the recorded full blob object id. At close time you are citing
   bytes the advance just produced, so a mismatch here means the record is citing
   the wrong thing — it is a failure, not a freshness note. Missing repositories,
   absent objects, and dirty ambiguity are also failures. **Never rewrite a hash
   to make it pass.** (Per FW-DEC-011, later re-validation of an already-closed
   record enforces object existence instead and reports path divergence; that
   leniency is for records this skill has already closed, never for closing one.)
5. `bin/validate-operating-harness-record` exists, is executable, and validates
   the exact terminal candidate under the applicable store mapping. Capture its
   command, exit status, and output as validation evidence. A prose review,
   schema inspection, manifest validation, or manual checklist is not a
   substitute.

On the exact base ratified by FW-DEC-010, the standalone validator does not
exist. Until it is implemented, this skill must return `CLOSE REFUSED` and leave
the record unchanged. Do not turn that failed precondition into the record's
terminal `outcome: refused`; that outcome belongs to a settled subject-operation
decision, not to this skill's inability to prove closure.

## Close

Only after the hard gate passes:

1. Write the spec-conforming `evidence-recorded` candidate with its coupled
   terminal outcome, resolving back-links, permitted Operation result or
   execution timestamp, and `record-transition` metadata.
2. Run the standalone validator against the exact bytes at the stable record
   path. If it fails, restore the previously captured exact bytes, do not commit,
   and report `CLOSE REFUSED` with the validator finding.
3. Re-run every back-link hash check after validation. If any reference changed,
   restore the prior record bytes and refuse.
4. Commit only the validated record and directly required evidence artifacts in
   the private store. Stage explicit paths. Report the terminal record blob and
   commit SHA; do not call a working-tree-only file closed.

## Refuse

Leave the record byte-identical and report the failed gate when the validator is
absent or non-passing, a back-link is empty or unresolved, authority is pending,
consent or execution chronology fails, the transition is illegal, evidence is
only conversational, or the writer/store boundary is unproven.

## Output

Return either:

- `CLOSED` — record path, terminal outcome, validator evidence, verified
  back-link triples, terminal record blob, and commit SHA; or
- `CLOSE REFUSED` — exact failed gate, validator output when available, and the
  fact that the record was left unchanged.
