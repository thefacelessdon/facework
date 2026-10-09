---
id: FW-DEC-012
title: "Workspace" names the ways-of-working layer, and the ask is its primitive
date: 2026-10-09
status: proposed
authority: canonical-pending
ratified_by: pending — Harper ruled the direction directly on 2026-10-09 ("3.0 is a Facework pattern with HUE as the first tenant"); the definition below is drafted for his ratification
---

# FW-DEC-012 — "Workspace" is the ways-of-working layer; the ask is its primitive

## Finding

"Workspace" already means four different things across the nodes:

| Where | What it means there |
|---|---|
| 14th & Co, `design-docs/workspace-v2-spec.md` | a data spine with two projections |
| HUE, `hue-ops/architecture/workspace-layer-architecture-spec.md` (2.0) | the operational system: pipeline → proposal → production |
| GAMUT, `/workspace` | a product surface |
| PROTOCOL §9.11 | the runtime's working area |

A pattern named "Workspace 3.0" can't ship until the word means one thing.

The live evidence that forced the ruling came from HUE on 2026-10-09: **18 open asks out to people, 16 of them recorded nowhere but chat threads, handoff notes and agent memory.** Two of them had already produced conflicting beliefs about a live client link. The system layer (2.0) was sound. What was missing was any record of *who has been asked to do what, and whether it happened*.

## Ruling (proposed)

1. **A Workspace is the ways-of-working layer a tenant runs on top of its system.** It has four parts:
   - the **ask ledger**;
   - a **front door** for each person;
   - a **connections checklist** for each person;
   - a set of **activity guides**.

   The system (records, surfaces, pipelines) is not the Workspace. The Workspace is how people and agents work together around it.
2. **The ask is the primitive.** An ask is a request from one person to another to do something. It closes only on a **closing signal**: the thing was done or sent back, never merely seen. This is the loop model's rule ("a loop without its closing signal doesn't converge") applied to a single request.
3. **One record shape, two projections.**
   - *Waiting on others* is the asks I sent (HUE Today).
   - *Waiting on me* is the asks sent to me (the Facework command center).

   They are the same record viewed from the other end.
4. **Derive before record.** Where the tenant's system already stamps the act (a link opened, an agreement signed), the ask is derived from those stamps. A stored ask exists only for requests the system can't see (chat, guides, email, conversation).
5. **Signal integrity is a precondition.** An ask list built on stamps that can't tell the recipient from the sender, or that can't tell "sent" from "opened", is refused. A tenant fixes those stamps before shipping the list.
6. **Agents propose and record; people decide and send.** An agent creates and closes asks on a person's behalf. It never treats "seen" as done and never closes an ask without a signal.

## What this does not decide

- **Where a tenant stores asks.** HUE uses its own store (Sanity, private ids). The Operating Harness v0 carrier (FW-DEC-010) is single-writer and private, so it is not the store for a three-person team. Only its lifecycle state names are reused.
- **Whether the pattern becomes canon.** It stays a methodology note until a validating run: HUE as the first tenant, with lost asks measured before and after.
- **The command center's code.** Its source was not reachable on 2026-10-09, so the shared record shape is checked against its brief, not its code.

## Supersedes

Nothing. The other meanings of "workspace" stay valid inside their own repos, and new Facework text uses "Workspace" only in this sense.
