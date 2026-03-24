---
title: "Protocol Conformance Model"
type: Technical Architecture
version: 1.0
status: Working Draft
date: 2026-03-23
---

# Protocol Conformance Model

## Context

"Facework Protocol Conformant" must mean something specific and verifiable.
This spec defines what gets checked, how it's scored, and what passes.
This is the model GAMUT will be retroactively audited against (Decision 003)
and the criteria all future engagements must meet.

The conformance model maps to the Protocol spec (PROTOCOL.md) lifecycle
phases and canonical objects, but adds the operational rigor needed to
actually verify compliance.

## Architecture

### Conformance Levels

```
LEVEL 1: PHASE-COMPLETE          LEVEL 2: GATE-PASSED
Artifacts exist for              All phase gates pass
all required phases              with documented evidence

         ↓                                ↓

LEVEL 3: SOVEREIGNTY-VERIFIED    LEVEL 4: FULLY CONFORMANT
Extraction check passed          All of the above +
Ownership model implemented      cross-reference check +
Exit guarantee enforceable       coherence test passed
```

**Level 4 is the certification target at Scale.**
**Level 3 is the minimum for any Facework engagement.**
**Levels 1-2 are diagnostic — useful for auditing existing systems.**

### Conformance vs. Protocol Phases

```
PROTOCOL PHASE          CONFORMANCE REQUIREMENT         CANONICAL OBJECT
─────────────────────────────────────────────────────────────────────────
Phase 0: Intake         Problem statement bounded        IntakeRecord
Phase 1: Semantics      Signal defined + anti-          SignalThesis
                        distortion documented
Phase 2: Field          Actors + incentives mapped       AudienceFieldMap
Phase 3: Taste          Testable quality criteria        TasteContract
Phase 4: Strategy       Decisions locked with            DecisionLedger
         Lock           reasoning + coherence impact     WedgeSpec
Phase 5: Architecture   Specs implementable without      SystemArchitecture
         + Flow         questions + playbooks owned      WorkflowPlaybooks
Phase 6: Activation     Launch sequenced + roles         LaunchPlan
                        assigned
Phase 7: Integrity      Dependencies classified +        SovereigntyMap
                        cross-artifact alignment         ConsonanceCheck
Phase 8: Evolution      Lessons captured + method        DiagnosticReport
                        updated
```

## Data Model

### Conformance Audit Record

```typescript
interface ConformanceAudit {
  project: string;
  auditDate: string;              // ISO 8601
  auditor: string;
  auditType: 'self' | 'peer' | 'certification';

  phases: PhaseAudit[];
  extractionCheck: ExtractionCheckResult;
  crossReferenceCheck: CrossReferenceResult;
  coherenceTest: CoherenceTestResult;

  level: 1 | 2 | 3 | 4;          // highest level achieved
  overallResult: 'pass' | 'conditional' | 'fail';
  conditions: string[];           // if conditional, what must be fixed
  notes: string;
}

interface PhaseAudit {
  phase: number;                  // 0-8
  phaseName: string;
  artifactExists: boolean;
  canonicalObject: string;        // which canonical object this maps to
  gateItems: GateItem[];
  gatePassed: boolean;
  evidence: string;               // what was checked, what was found
  gaps: string[];                 // specific deficiencies
}

interface GateItem {
  description: string;
  required: boolean;
  status: 'pass' | 'fail' | 'not-applicable';
  evidence: string;
}

interface ExtractionCheckResult {
  energySourceIdentified: boolean;
  conduitOrContainer: 'conduit' | 'container' | 'mixed';
  exitTestPassed: boolean;
  proportionalityTestPassed: boolean;
  overallPassed: boolean;
  concerns: string[];
}

interface CrossReferenceResult {
  numberConsistency: boolean;     // all numbers trace to canonical source
  documentConsistency: boolean;   // no contradictions between docs
  specConsistency: boolean;       // specs don't contradict each other
  ownershipConsistency: boolean;  // architecture implements ownership model
  overallPassed: boolean;
  inconsistencies: string[];
}

interface CoherenceTestResult {
  handoffTestPassed: boolean;     // new builder can start without meeting
  exitTestPassed: boolean;        // system works if Facework disappears
  frequencyCarried: boolean;      // output reflects community served
  overallPassed: boolean;
  notes: string;
}
```

## Rules & Logic

### Phase-by-Phase Gate Criteria

#### Phase 0: Intake
- [ ] Problem/opportunity statement is explicit and bounded
- [ ] Target audience identified
- [ ] Known constraints documented
- [ ] Existing assets inventoried

#### Phase 1: Semantics
- [ ] Signal thesis includes "means" and "does-not-mean" sections
- [ ] Distortion risks documented (how the signal gets corrupted)
- [ ] Canonical language defined

#### Phase 2: Field
- [ ] Key actors and their incentives mapped
- [ ] Attention flows documented (where energy goes)
- [ ] Entry vector selected (where you start)

#### Phase 3: Taste
- [ ] Testable acceptance criteria (not subjective)
- [ ] On-brand and off-brand examples provided
- [ ] Quality governance is structural, not personality-dependent

#### Phase 4: Strategy Lock
- [ ] All strategic dilemmas surfaced and resolved
- [ ] Decision records include reasoning and alternatives rejected
- [ ] Ownership dilemma explicitly addressed
- [ ] Coherence impact assessed per decision
- [ ] Wedge has: audience, offer, channel, economic logic
- [ ] No unresolved contradictions

#### Phase 5: Architecture + Flow
- [ ] One spec per major system
- [ ] Every spec implementable without clarifying questions
- [ ] Every number traces to a canonical source
- [ ] Data models defined (schemas, types)
- [ ] ASCII diagrams for non-trivial flows
- [ ] Edge cases documented with handlers
- [ ] Operational playbooks for every workflow
- [ ] Each playbook has: trigger, steps, decisions, thresholds, escalation
- [ ] Automation mapping (human vs machine owner per step)
- [ ] Energy flow check per playbook

#### Phase 6: Activation
- [ ] Launch roles assigned
- [ ] Sequencing documented
- [ ] Metrics defined (required vs nice-to-have)
- [ ] Rollback conditions defined

#### Phase 7: Integrity
- [ ] Dependencies classified as own/rent/mitigate
- [ ] Cross-artifact alignment verified (no contradictions)
- [ ] Exit guarantee enforceable
- [ ] Sovereignty map complete

#### Phase 8: Evolution
- [ ] Lessons captured with concrete method updates
- [ ] What worked, what didn't, what was missing
- [ ] Changelog updated

### Extraction Check Criteria

The extraction check is the sovereignty verification layer. It runs
independently of the phase gates.

```
EXTRACTION CHECK (4 tests — all must pass for Level 3+)
─────────────────────────────────────────────────────────

1. ENERGY AUDIT
   Can you name who generates the value?         [Y/N]
   Are they stakeholders, not just users?         [Y/N]
   Evidence: _______________

2. CURRENT OWNERSHIP
   System builds conduits or containers?          [conduit/container/mixed]
   If container: conscious decision recorded?     [Y/N/NA]
   Evidence: _______________

3. EXIT TEST
   Value generators can leave with their work?    [Y/N]
   Data in portable formats?                      [Y/N]
   No punitive exit terms?                        [Y/N]
   Evidence: _______________

4. PROPORTIONALITY TEST
   Economic model returns value proportionally?   [Y/N]
   Creator/participant gets larger long-term value? [Y/N]
   Evidence: _______________

RESULT: [PASS / CONDITIONAL / FAIL]
CONDITIONS (if any): _______________
```

### Cross-Reference Check

```
CROSS-REFERENCE CHECK (5 tests)
─────────────────────────────────

1. NUMBER CONSISTENCY
   Every number in specs traces to business model    [Y/N]
   No hardcoded values that should reference source  [Y/N]

2. DOCUMENT CONSISTENCY
   Agreement terms match business model economics    [Y/N]
   Exit terms cover all realistic scenarios          [Y/N]

3. SPEC CONSISTENCY
   No spec contradicts another spec                  [Y/N]
   Shared data models use consistent types           [Y/N]

4. OWNERSHIP CONSISTENCY
   Architecture implements ownership decisions       [Y/N]
   Data isolation matches sovereignty model          [Y/N]

5. GATE CONSISTENCY
   All gate items are actionable and verifiable      [Y/N]
   No "aspirational" gate items                      [Y/N]

RESULT: [PASS / FAIL]
INCONSISTENCIES: _______________
```

### Coherence Test

```
COHERENCE TEST (3 tests)
─────────────────────────

1. HANDOFF TEST
   New builder can start from handoff without meeting?  [Y/N]
   Evidence: _______________

2. EXIT TEST
   System operates if Facework disappears?              [Y/N]
   Evidence: _______________

3. FREQUENCY TEST
   Output reflects the community it serves?             [Y/N]
   Someone from that community would say "this is for me"? [Y/N]
   Evidence: _______________

RESULT: [PASS / FAIL]
```

### Scoring

| Level | Requirements | Use |
|-------|-------------|-----|
| Level 1: Phase-Complete | All required canonical objects exist | Diagnostic only |
| Level 2: Gate-Passed | All phase gates pass with evidence | Diagnostic only |
| Level 3: Sovereignty-Verified | Level 2 + extraction check + cross-reference | Minimum for Facework engagement |
| Level 4: Fully Conformant | Level 3 + coherence test | Certification target (Scale) |

A system at Level 3 is "built right." A system at Level 4 is "built right
and provably transferable."

## Ownership & Control

The conformance model itself is part of the open protocol. Anyone can
audit their own system against these criteria. The commercial layer is:
- Facework running the audit (paid)
- The "Facework Protocol Conformant" mark (earned through formal audit)
- Dispute resolution for contested audits (Scale stage)

## Edge Cases

| Scenario | Handling |
|----------|----------|
| System passes phases 0-5 but has no launch plan (Phase 6) | Level 2 maximum. Common for pre-launch systems. Not a failure — just incomplete. |
| Extraction check reveals container model | Not automatic failure. Must be a conscious, recorded decision with implications named. Level 3 possible if decision is deliberate. |
| Cross-reference finds minor inconsistency | Conditional pass. Document the inconsistency and its fix path. |
| System was built before protocol existed | Retroactive audit is valid (see Decision 003 re: GAMUT). Score what exists, document gaps. |
| Phase gate partially passes | Gate does not pass. All items must clear. Document which items fail and what's needed to fix. |

## Acceptance Criteria

This spec is correct when:
1. GAMUT can be audited against it and receive a clear level score
2. A new Facework engagement can use it as a checklist
3. No ambiguity in what "pass" means for any gate item
4. The extraction check is specific enough to produce different results
   for extractive vs. non-extractive systems
