---
name: harness-open
description: |
  Open an Operating Harness record by capturing one operating intent and binding
  it to an exact node-context snapshot in the ratified private store. Use when a
  user asks to open, start, or context-bind an Operating Harness record. Do not
  use for Runtime HarnessBundle generation, Design Harness work, option review,
  or terminal closure.
allowed-tools:
  - Read
  - Write
  - Edit
  - Grep
  - Glob
  - Bash
  - AskUserQuestion
---

# /harness-open

Create the smallest valid beginning of one Operating Harness record without
turning carrier maintenance into subject-operation authority.

## Governing sources

Read these before acting:

- `methodology/operating-harness-spec.md` §§1–5.4 and §7
- `methodology/decisions/DECISION-010-operating-harness-v0-ratification.md`
- `AGENTS.md` for the current load-bearing primitive and authority mode

The spec owns lifecycle, record grammar, operation derivation, refusal
boundaries, and canonical serialization. FW-DEC-010 owns the v0 store and writer
rulings. Reference those sources; do not restate or amend their authority or
Posture definitions in the record.

## Preconditions

1. Resolve the independent private repository and its `operating-store.yaml`.
   Never create records in the public Facework repository, and never initialize
   `personal/` or `personal/operating/` as a side effect of this skill.
2. Confirm the store is clean, the configured write policy is the ratified v0
   policy, and the acting human is the configured `writer_id`. Do not infer the
   human's identity from the agent, shell user, repository owner, or request
   wording. If identity is not established, stop before writing and return the
   proposed intent and missing confirmation.
3. Refuse when another write is active, the repository mapping is ambiguous, a
   source path escapes the private store, or the node/context source cannot be
   resolved to exact bytes.

## Open the record

1. Read the node registry entry, source material, prior rulings, consent status,
   and any prior Operating Harness record relevant to the claim. Ask only for
   missing facts that change the record: node, one operating claim, intent
   source, allocation, or context source.
2. Create one stable record path using the filename and directory convention in
   §5.1. Capture one intent only. Compute the context snapshot's full git blob
   object id from the cited bytes and resolve its repository slug through
   `operating-store.yaml`.
3. Write and commit the `intent-captured` form first. Use the fixed frontmatter
   and body homes from §5; keep fields forbidden at that state absent. The first
   transition is carrier history, not evidence that the subject operation was
   authorized or executed.
4. Advance and commit `context-bound` only after the exact context and allocation
   are available. Preserve every immutable field byte-for-byte and change only
   what §5.3 permits for the transition.
5. Choose the path from the operation kind only when the user has supplied one:
   for the proposal path, keep `operation` absent at `context-bound`; for the
   observation path, admit only a registry-listed diagnostic or emergent kind
   with its complete payload. Never author `mode`, `channel`, `enforcer`, a gate,
   a review, or a subject-operation result. Never invent an operation kind to
   make the record advance.
6. If the opening was manually prompted or an expected carrier check is absent,
   add the applicable Enforcer-gap row using §5.4's vocabulary. Do not describe
   an unwired check as enforced.

## Refuse

Leave the store unchanged and report the exact failed precondition when:

- the writer identity or private-store boundary is unproven;
- the intent mixes multiple operating claims;
- the node, source, context snapshot, repository slug, or blob identity does not
  resolve;
- the requested state skips a legal lifecycle transition;
- the request authors authority fields or asks a diagnostic operation to change
  state; or
- preserving prior record bytes cannot be established from committed history.

## Output

Report the record path, resulting state, intent source, context snapshot triple,
transition commit SHA, and any Enforcer-gap entry. Say explicitly that opening a
carrier record does not authorize or execute its subject operation.
