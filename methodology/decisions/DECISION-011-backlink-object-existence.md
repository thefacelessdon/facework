---
id: FW-DEC-011
title: A back-link is verified by object existence, not by current path content
date: 2026-08-21
status: resolved
authority: canonical
ratified_by: Harper (harper@face.works) — explicit direct ruling, 2026-08-21
---

# FW-DEC-011 — Back-link verification is object existence

## Finding

Release 0.0.76 corrected stale enforcement labels in
[`methodology/operating-harness-spec.md`](../operating-harness-spec.md). That
edit invalidated a **closed** Operating Harness record, which cited the previous
bytes of that file as evidence of its advance:

```
[error] operating-harness/2026-08-21-001-ratify-and-land-v0.md:
        back_links[0].blob does not match the cited bytes
```

Nothing was wrong with the record. The cited blob `2bde96c0` still exists in the
canon repository; what changed is the content at that path, changed by a later
release for good reasons.

The defect was in what the check *meant*. Back-link verification conflated two
different questions:

1. **Did the advance produce exactly these bytes?** — the record's actual
   provenance claim. Permanently answerable: the blob object exists.
2. **Are those bytes still the current content at that path?** — a freshness
   claim the record never made.

The validator enforced (2) and reported the result as a failure of (1). The
structural consequence: **every closed record decays to invalid as the evidence
it cites legitimately evolves.** The cheapest repair for that is to rewrite the
recorded hash — which §5.3 rule 6 forbids absolutely, and which is the same
failure mode `validate-tokens` exists to prevent one layer out. A rule whose
enforcement generates pressure to break it is mis-specified.

## Decision

**Object existence is the enforced test; path divergence is reported.**

1. **Enforced.** The `repository` slug resolves, `path` resolves to a file inside
   that repository, and the cited blob id is **either** the current bytes at that
   path **or** an existing blob object in that repository. A cited id that is
   neither is refused: bytes that cannot be shown to have existed cannot be
   evidence.
2. **Reported, not fatal.** When the object exists but the path has moved on, the
   validator emits a `[note]` naming both ids and stating that provenance holds
   and the evidence has moved. The record stays valid.
3. **Close time keeps equality.** `harness-close` still requires the cited bytes
   to be the current bytes, because at closure you are citing what the advance
   just produced; a mismatch there means the record cites the wrong thing. The
   leniency above is for records already closed, never for closing one.
4. **One exception, on a stated principle.** `options_snapshot_ref` requires
   exact equality with current path bytes, because the validator *reads* that
   file to resolve option ids. The rule generalises: **strict equality where the
   validator must read the cited bytes; object existence where it needs only
   provenance.**
5. **A recorded hash is never rewritten** to make either outcome go away. That
   prohibition is unchanged and is the reason this ruling exists.

## Consequences

- Closed records survive canon evolving. `operating-harness/001` validates again,
  with a note.
- **Byte-drift detection is weakened, deliberately.** Before this ruling,
  editing a cited file made a record fail. Now it produces a note. What remains
  enforced is the stronger claim — the cited bytes existed — and what is given up
  is a freshness signal the record never asserted. Anyone wanting drift to be
  fatal should note that it was fatal for three hours and cost a valid record.
- Two new deterministic cases: a closed record whose evidence moved (passes with
  a note) and a back-link citing a phantom object (refused).

## What this does not decide

- **Object existence is not permanence.** `git gc` can drop unreachable objects.
  A blob reachable from any commit is safe, and every blob cited so far was
  committed, but the guarantee is git's, not the carrier's. An immutable
  substrate would be a different and larger change.
- It does not change any authority binding. 18 of 21 remain human-gated or
  no-gate by design.
- It does not decide whether records should cite tags, vendored copies, or
  another immutable reference instead of paths. That option stays open and would
  supersede the leniency here rather than extend it.

## Provenance

Found by re-validating the whole store after a release, not by review — the same
way the 0.0.74 offset defect was found, and the second time in one day that
running the instrument on real material beat reading it. Recorded in
`methodology/retros/012-the-first-real-input.md` as the standing rule: *a gate is
not validated until it has run on material it did not author.*
