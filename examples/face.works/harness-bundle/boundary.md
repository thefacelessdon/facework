# Face.works — Memory Boundary (Read This First)

There are two memory layers in this system. They are not the same and
they do not mirror each other. **The rule below governs which is which.**

## The two layers

| Layer | Lives at | Owned by |
|---|---|---|
| **Tenant memory** | `vault/` (project root) | The tenant — Face.works |
| **Runtime memory** | `~/.claude/projects/<sanitized-cwd>/memory/` | The runtime — Claude Code (or equivalent) |

## The rule

> Tenant memory holds the tenant world's operational knowledge —
> prospects, clients, audits, content, decisions. Runtime memory holds
> the agent's cross-session continuity — preferences, ways of working,
> runtime state.
>
> **Skills MUST write tenant content to `vault/`.** Operational records,
> research outputs, content, decisions — these belong in tenant memory.
>
> **Runtimes MUST NOT auto-promote tenant content into runtime memory
> without explicit user action.** A research note about a competitor
> never gets quietly copied into runtime preferences. A client decision
> never gets folded into "ways the user works."
>
> The "one system of record" rule applies WITHIN each layer
> independently — there is one canonical tenant memory and one canonical
> runtime memory; they coexist but do not mirror each other.

## What lives in tenant memory

- Operational records (clients, prospects, audits)
- Research (competitors, market signals)
- Decisions (engagement-level)
- Content (briefs, reports, case studies)

## What lives in runtime memory

- Agent preferences
- Cross-project patterns and feedback
- Runtime state and session continuity

## Why this matters

When the two layers compete, they corrupt each other:

- A runtime that promotes tenant content into its own memory makes the
  tenant content invisible from outside the runtime. The handoff
  breaks — the next operator can't see what got promoted.
- A tenant that bleeds into runtime memory makes the runtime drift —
  client X's strategic call becomes a "way the user works," which then
  applies to client Y. The boundary collapses.

The cost of getting this wrong shows up months later as opaque
behavior. Holding the boundary upfront prevents the failure mode.

## What a runtime should do at install time

1. Read this file.
2. Confirm the vault root (`vault/`) exists or create it.
3. Confirm runtime memory is configured at the canonical path for this
   project.
4. Do not copy or mirror content across the boundary at install.
5. Add operational handlers so that future writes go to the correct
   layer based on this rule, not on convenience.
