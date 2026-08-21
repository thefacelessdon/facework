---
id: FW-DEC-009
title: The Operating Harness carrier shape, authority bindings, and private-store posture are ratified for v0
date: 2026-08-21
status: resolved
authority: canonical
ratified_by: Harper (harper@face.works) — explicit direct ruling, 2026-08-21
---

# FW-DEC-009 — Operating Harness v0 ratification

## Finding

The Operating Harness carrier shape has independent structural clearance, but
its operation-authority bindings and storage choices remained explicitly
RECOMMENDED/open. That separation did its job: the agent could repair and
falsify structure without deciding who may act, who writes, or where private
records live.

The human has now ruled those open choices. This decision records the ruling; it
does not claim that a validator, repository, directory, or runtime enforcer has
been built.

## Decision

For Operating Harness **v0**, Harper ratifies:

1. **The 21 authority bindings as written** in
   [`methodology/operating-harness-spec.md`](../operating-harness-spec.md) §3:
   18 subject-operation rows plus the three carrier checks. Their mode, channel,
   payload, enforcer name, and gate status are fixed as that registry states.
   `record-transition` remains the separately classified `carrier-write` action,
   outside `AuthorityMode`.
2. **Single-writer mode** for the private operating store.
3. **`writer_id: harper`** as the v0 writer identity. Only that identity may
   perform `record-transition`; other concurrent sessions are read-only. A
   future writer handoff requires a separate human ruling and the clean-handoff
   procedure in the carrier spec.
4. **`personal/` as an independent, access-controlled private git repository.**
   It is not content of the public Facework repository even when its checkout is
   nested beneath that repository's working directory.
5. **`personal/operating/` as the record directory.** From the private
   repository root, Operating Harness record paths begin at `operating/`.

These five rulings are one v0 settlement. None may be described as a structural
inference from the adversary pass; they are human authority decisions made after
that pass.

## Structural warrant

The append-only
[`methodology/operating-harness-adversary-findings-2026-08-21.md`](../operating-harness-adversary-findings-2026-08-21.md)
records an independent exact-byte **STRUCTURAL PASS** for spec blob
`7d5689956d0759c531b39208fae42d2631e322e2`. The pass found no remaining P0 or
P1 and expressly left authority and storage NOT RULED. That is the correct
sequence: independent review cleared the carrier grammar; this human ruling now
settles the choices the review had no authority to make.

## Enforcement status — unchanged

Ratification is not implementation.

- No standalone Operating Harness record schema exists.
- `bin/validate-operating-harness-record` does not exist.
- No Operating Harness operation has a running automatic authority enforcer.
- The three ratified carrier checks remain **Unwired**.
- Berd still has no `event` or `continuous` trigger for record transitions.
- `personal/` is **not created or initialized by this decision**.
- `personal/operating/` is **not created by this decision**.

Until the private repository and validator exist, the Operating Harness is
ratified carrier doctrine, not a built Operational layer. The carrier names each
gate; it does not make the named enforcer run.

## Consequences

1. The carrier spec status becomes **ratified for v0**, while continuing to say
   plainly that it is unwired and unenforced.
2. §3's registry is no longer proposed. It is the v0 authority registry.
3. The intended private root configuration is:

   ```yaml
   write_policy:
     mode: single-writer
     writer_id: harper
   repositories:
     private-operating: "."
   ```

4. Public-repo-relative prose may say `personal/operating/`; record-internal
   paths use `operating/...` from the independent private repository root.
5. Before anyone initializes `personal/` as a repository, the parent public
   checkout must ignore `/personal/`. That prerequisite is implementation work,
   not a reopened storage ruling.
6. Multi-writer CAS/merge remains deferred. This decision does not select a
   future writer or authorize a writer handoff.

## Not decided here

- How or when to build the standalone schema and validator.
- How to supply a machine-readable schedule surface for Berd Automations.
- How to mechanically detect a recommendation recorded as a Sovereignty ruling.
- Whether a later version should support multiple writers.

## Revisit trigger

Reopen this decision only if v0 evidence shows one of the ratified bindings is
unsafe or unworkable, the private-repository boundary cannot be maintained, or
single-writer operation blocks the first worked flow. A future change appends a
new ruling; it does not silently reinterpret this one.
