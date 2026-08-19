---
name: fw-sovereignty
version: 3.1.0
description: |
  Sovereignty: Phase 7 of the Facework Protocol (Integrity — with /fw-entropy
  and /fw-consonance). Enforce infrastructure autonomy through ownership clarity,
  portability guarantees, dependency controls, and exit integrity. Runs after
  Activation (Phase 6), before Integration (Phase 8).
allowed-tools:
  - Read
  - Write
  - Edit
  - Grep
  - Glob
  - Bash
  - AskUserQuestion
  - Agent
---

# /fw-sovereignty — Enforce Control Boundaries

**Phase 7 of the Facework Protocol (Integrity — with /fw-entropy and /fw-consonance).**
Entry: LaunchPlan and working interfaces exist (Phase 6 gate).
Exit: SovereigntyMap with dependencies classified as own/rent/mitigate; extraction review passed.
Co-skills: /fw-entropy and /fw-consonance are the other two legs of Phase 7.
**Run this leg LAST (0.0.70)** — ownership questions sharpen once Consonance has
reconciled the layers and Entropy has found which parts are load-bearing.

You are validating whether the system preserves agency under scale pressure.
This primitive turns sovereignty from principle into enforceable requirements.

## Cultural Physics Foundation

Without sovereignty checks, systems drift toward control centralization and
participant dependency. This is where extraction often re-enters after good
intentions in early phases.

Sovereignty asks: who controls the current, and what survives exit?

## Step 0: Read Existing Artifacts

Before auditing sovereignty, scan the project for prior work:
- All artifacts from Phases 1–6 (SignalThesis through working interfaces)
- Ownership decisions from Phase 4 (DecisionLedger)
- Exit guarantee from Phase 4 (Frequency governance docs)
- Dependency registers from Phase 5 (SystemArchitecture)
- Existing vendor agreements, API terms, or platform policies

Read `define/PROJECT-CONTEXT.md` if it exists. Read the `track:` field and adapt
audit depth to the track:

| Track | Sovereignty emphasis |
|-------|---------------------|
| Creator | Platform dependency classification. Content rights audit. Audience portability. Revenue control. Exit cost from each platform. |
| Cultural Brand | Distribution control. Editorial independence. Community data ownership. Commerce platform dependency. |
| Athlete / Public Figure | Agent/management contracts. League/federation obligations. Endorsement exclusivity. Post-career asset ownership. |
| Agency / Studio | Methodology ownership. Client IP boundaries. Tool dependency. Team knowledge portability. |
| Platform / Product | Full depth. Data sovereignty, vendor lock-in, API dependency, infrastructure portability, cross-tenant inference boundaries. |

If no PROJECT-CONTEXT.md exists or no track is set, default to Platform / Product (full depth).

Summarize what you found. Sovereignty builds on ownership decisions — don't relitigate them.

## Step 1: Ownership & Control Audit

Map for each critical layer:
- data ownership,
- distribution control,
- decision authority,
- economic claim rights.

Flag ambiguous ownership as critical until resolved.

## Step 2: Portability & Exit Audit

Verify:
- export paths for key data and operational state,
- exit procedures that do not require custom intervention,
- continuity of participant identity and economic history.

If exit is punitive or unclear, mark fail.

## Step 2.5: Succession of obligations (0.0.70)

For **every participant protection in the system, ask one question: who inherits
this if the person holding it leaves?**

Separate protections into two kinds and treat them differently:

| Kind | Example | Survives a departure? |
|---|---|---|
| **Instrument** | equity, a contract, a vested claim, a written agreement | **Yes** — the instrument is the successor |
| **Practice** | findings returned before they travel upward, a disclosure made in the first meeting, a refusal to ship something that harms a contributor | **No, unless a successor is named** |

**Every practice-based protection MUST name a custodian, and the custodian MUST be a
role rather than a person.** Two constraints on the choice:

- **It cannot be the role that changes hands.** If the protection exists because the
  operator performs it, naming the operator as custodian is circular.
- **Prefer a role that already touches the practice.** A custodian who is inheriting
  something they already do is nearly free; one inheriting a new duty is a request.

Then specify the **handover**: what transfers, and the rule that makes it real —
**a handover is complete on the custodian's confirmed receipt, not on the document
being written.** An unacknowledged handover is the same failure in a new folder.

**Why this is a step.** In the run that earned it, every protection for the two
participants with no economic stake was conduct performed by one named human, and
**nothing in thirty-nine artifacts named who inherited any of it.** The retention
policy said those records were *"governed by the agreement with each"* — and an
agreement needs a party to honour it. This is how extraction re-enters a well-meant
system: **not by decision, by turnover.** And the people who would discover the
protections had lapsed are the ones with no standing to say so.

## Step 3: Dependency Risk Tiering

List external dependencies and assign tiers:
- Tier 1: replaceable with low disruption,
- Tier 2: replaceable with moderate migration cost,
- Tier 3: critical lock-in risk.

For Tier 3, define fallback and migration posture.

## Step 4: Sovereignty Requirements

Define launch-blocking requirements:
- ownership clauses that must be present,
- portability guarantees that must be testable,
- dependency controls required before scale expansion.

Attach owner and verification method for each requirement.

## Step 5: Sovereignty Gate

Before marking complete:
- no unresolved critical ownership ambiguity,
- every practice-based protection names a custodian role and a handover (Step 2.5),
- the four pre-gate checks pass (PROTOCOL.md §6.1),
- exit integrity proven at least at process level,
- Tier 3 dependencies have mitigation plans,
- launch criteria include sovereignty checks.

## Output (Three-Tier Progressive Disclosure)

**Tier 1 — Narrative (always produced):**
Deliver a 5–7 sentence summary: "Here's what you own, what you rent, and where
you're exposed." Cover the most critical ownership gaps, exit risks, and
recommended next action.

**Tier 2 — Summary artifact:**
Write `define/sovereignty-summary.md` containing:
- Dependency table (own / rent / mitigate) for each critical layer
- Exit cost summary per major dependency
- Extraction risk rating (low / moderate / high / critical)
- Track-specific findings (if track was read from PROJECT-CONTEXT.md)

**Tier 3 — Full artifact:**
Produce the complete SovereigntyMap with YAML frontmatter:

```yaml
---
artifact: SovereigntyMap
phase: sovereignty
track: <track from PROJECT-CONTEXT.md or "platform-product">
version: <protocol version>
---
```

Include:
- `Ownership and control matrix`
- `Portability and exit audit`
- `Dependency risk tiers`
- `Sovereignty requirements`
- `Sovereignty gate result`

Conclude with:
"Sovereignty validated. Run /fw-consonance next to verify cross-system alignment."
