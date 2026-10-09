---
title: "Workspace 3.0 — the ways-of-working pattern"
status: DESIGN NOTE (not canon). Ruling FW-DEC-012 proposed. First tenant: HUE Unlimited (Decision 015, 2026-10-09).
date: 2026-10-09
relates: methodology/decisions/DECISION-012-workspace-is-ways-of-working.md, methodology/loop-model.md, methodology/operating-harness-spec.md, PROTOCOL.md §9.3 §9.5 §9.6 §10
---

# Workspace 3.0

*A design note. 2.0 gave a tenant its **system**: the records and surfaces work moves through. 3.0 adds **how people and agents work together around that system**. What closes it: nobody's ask gets lost.*

## Findings first

- **The failure is the lost ask.** HUE, 2026-10-09: 18 open asks out to people, 16 recorded only in chat threads, handoffs and agent memory. The oldest was 25 days old with no reply. Two had produced conflicting beliefs about a live client link.
- **The system already knew half of it.** Briefs opened, agreements signed, pods submitted and rooms opened were all stamped on records. Nothing turned those stamps into "who are we waiting on".
- **The stamps were lying.** There was no "sent" stamp, and a team member opening a recipient's link wrote the recipient's "opened" stamp. Any list built on those stamps would have been confidently wrong.
- **The guides already had a shape.** Both HUE guides (the CRM sweep and the review onboarding) converged on the same shape without a spec: why first, click-by-click, one channel, the agent as operator, "text the owner" at the end.

## The four parts

| Part | What it is | Facework concept it maps onto |
|---|---|---|
| **Ask ledger** | Every outbound request, tracked until its closing signal | Loop model (closing signal); Operating Harness lifecycle state names (§1–§3) |
| **Front door** | One page per person: what's waiting on me, what I'm waiting on, my guides | Generated like the HarnessBundle from the ContextManifest (§9.5, §10) |
| **Connections checklist** | What each person must have connected: sign-in, channels, agent connectors, review access | Generated from the IntegrationManifest (§9.6) |
| **Activity guides** | One guide per recurring activity (review, run a production, pipeline, comms) | WorkflowPlaybooks with a SkillManifest entry (§9.3); "text the owner" = `escalation` / `sponsors[]` |

This is not a ninth Posture (FW-DEC-008). It is a lens over existing ports, the same way the loop model is a lens over the primitives.

## The ask record

The minimum shape a tenant stores (for requests its system can't see) or derives (from its own stamps):

| Field | Meaning |
|---|---|
| `from` | who asked (a person; an agent asking on someone's behalf records that person) |
| `to` | who was asked |
| `ask` | the request in one plain sentence ("Pick Ian's next collage subject") |
| `why` | why it's theirs, one line |
| `via` | link kind or channel (brief link, Slack thread, guide, email) + a source pointer one tap away |
| `sentAt` | when it actually went out (not when it was drafted) |
| `due` | optional |
| `lastSignAt` | last real sign of movement (an open, a reply), shown, never treated as closure |
| `state` | `open` · `pushed_back` · `not_now` (with a date) · `handed_off` (to whom) · `closed` |
| `closedAt` / `closedBy` / `closingSignal` | attributed closure: what proved it was done |

Responses available to the recipient match the command center's: **accept, push back, not now (until when), hand off (to whom)**.

## Rules

1. **Derive before record.** Store an ask only when the system can't see the request.
2. **Integrity before list.** Fix "sent" and "whose open" before showing any waiting list.
3. **Closing signal, not "seen".** An open is a sign of life, not closure.
4. **One asker, one recipient, one signal.** Anything with more is a project, not an ask.
5. **Agents record, people send.** An agent drafting or sending on someone's behalf creates the ask at send time and closes it when the signal arrives. It does not keep the ask in its own memory.
6. **Nothing disappears silently.** No delete and no undated snooze.

## First tenant: HUE (validating run)

HUE's build order, from Decision 015:
1. signal integrity;
2. derived "Waiting on others" on Today;
3. the `ask` record, seeded with the 18;
4. the front door and connections checklist;
5. the guides, with the review guide as guide 1.

**Promotion bar.** Re-run the 2026-10-09 inventory after two weeks of use. The note is promoted to canon when the asks found *only* outside the ledger fall from 16 of 18 to at most 2, and no live link has two conflicting beliefs about whether it was sent. If HUE passes and a second tenant (14th & Co or the command center itself) adopts the same record shape, fold the note into `theories/the-coherence-operating-system.md`.

## Open

- The command center's source wasn't reachable on 2026-10-09. Its "Waiting on me" items should be checked against this record shape once it is.
- How a stored ask and a derived ask for the same request de-duplicate (e.g. a Slack ask to "sign the NDA" when the brief link already tracks the NDA). The working answer is that the derived ask wins and the stored one closes with `closingSignal: superseded`. This is untested.
- Cross-tenant asks (HUE asking Spotify) never enter the other tenant's ledger. Consent rules (FW-DEC-010) apply before that changes.
