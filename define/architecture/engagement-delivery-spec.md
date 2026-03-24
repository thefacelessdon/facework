---
title: "Engagement Delivery Specification"
type: Technical Architecture
version: 1.0
status: Working Draft
date: 2026-03-23
---

# Engagement Delivery Specification

## Context

A Facework engagement is the unit of revenue at MVP. A creator or cultural
brand pays $10K–$25K for a fully architected, protocol-conformant system.
This spec defines exactly what that engagement produces, how it's sequenced,
and what the quality bar is.

The engagement runs the Facework Protocol build sequence adapted to the
creator's specific domain. The output is theirs — permanently, in open
formats, with no dependencies on Facework.

## Architecture

### Engagement Lifecycle (Agent-Native)

```
INTAKE          GOVERN           PRESSURE         SPECIFY
(Day 0)     →   (Day 1)      →  (Day 1-2)    →   (Days 2-3)
Discovery       Agent: /fw-freq  Agent: /fw-curr   Agent: /fw-stab
Constraints     Human: validates Human: facilitates Human: domain
Scope confirm   extraction check creator decisions  accuracy review

PLAYBOOK        PROTOTYPE        HARDEN           HANDOFF
(Days 3-4)  →   (Days 4-6)   →  (Days 6-7)   →   (Day 7-8)
Agent: /fw-flow Agent: builds    Agent: audits     Agent: packages
Human: validates Human: steers   Human: decides    Human: validates
realism          frequency/taste  tradeoffs         coherence
```

**Operating model:** The /fw-* skill stack runs the protocol. The human
provides taste, judgment, relationship, and extraction checks. The agent
generates, cross-references, and enforces consistency. Creator participates
in 6-8 review sessions (30-60 min each) across the engagement.

### Engagement Variants

| Variant | Duration | Price Range | Scope |
|---------|----------|-------------|-------|
| **Full Protocol** | 5-8 days | $15K–$25K | All 8 phases, complete artifact stack |
| **Foundation Only** | 3-5 days | $10K–$15K | Phases 1-4 (Govern → Playbooks). No prototype. |

Foundation Only is valid when the creator has an engineer ready to build
and needs the architecture, not the prototype. Full Protocol is the default.

## Deliverables by Phase

### Phase 1: Governance & Foundation (Frequency)

| Deliverable | Format | Required |
|-------------|--------|----------|
| Business model | Markdown | Yes |
| Energy source identification | Section in business model | Yes |
| Ownership & control structure | Section in business model | Yes |
| Rate/pricing structure | Section in business model | If applicable |
| Fund governance | Standalone doc | If segregated funds exist |
| Agreement template | Markdown | Yes |
| Exit guarantee | Markdown | Yes |
| Verification protocol | Markdown | If access control needed |
| Gate structure | Markdown (TODOS.md) | Yes |

**Phase gate:** All governance docs internally consistent. Extraction check
passed. No contradictions between business model and agreements.

### Phase 2: Strategic Pressure Testing (Current)

| Deliverable | Format | Required |
|-------------|--------|----------|
| Dilemma register | Markdown per dilemma | Yes (min 5 dilemmas surfaced) |
| Decision records | Markdown per decision | Yes (all dilemmas resolved) |
| Ownership dilemma | Decision record | Yes (mandatory) |

**Phase gate:** All dilemmas resolved. No "defer" without named trigger.
Ownership model explicitly decided. No contradictions between decisions.

### Phase 3: Architecture Specification (Stability)

| Deliverable | Format | Required |
|-------------|--------|----------|
| Architecture specs | Markdown per system | Yes (1 per major system) |
| Data model / schema | SQL or TypeScript types | Yes |
| ASCII diagrams | Embedded in specs | Yes (data flow, state machines) |
| API dependency register | Markdown table | If external APIs used |
| Ownership enforcement | Section per spec | Yes |

**Phase gate:** Every spec implementable without clarifying questions. Every
rate/threshold traces to canonical source. Cross-reference check passed.

Minimum spec count varies by domain:
- Simple product (1-2 systems): 2-4 specs
- Complex product (multi-system): 6-12 specs
- Infrastructure product (GAMUT-level): 8-15 specs

### Phase 4: Operational Playbooks (Flow)

| Deliverable | Format | Required |
|-------------|--------|----------|
| Playbooks per workflow | Markdown | Yes (1 per identified workflow) |
| Automation mapping | Table in each playbook | Yes |
| Energy flow check | Section in each playbook | Yes |

**Phase gate:** Every playbook has trigger, steps, decision points, thresholds,
escalation path, completion criteria, and energy flow check. Every workflow
maps to human or machine owner.

### Phase 5: Platform Prototype (Resonance)

*Full Protocol engagement only.*

| Deliverable | Format | Required |
|-------------|--------|----------|
| Working prototype | Code repository | Yes |
| Typed schema | TypeScript / SQL | Yes |
| DataSource adapter | Code (demo + live interface) | Yes |
| Demo data | JSON/TypeScript fixtures | Yes |
| Test suite | Vitest / Jest / equivalent | Yes |
| Design Language Spec | Markdown | Yes |
| Design system tokens | CSS/Tailwind/equivalent | Yes |

**Design Language Spec** must include:
- Typography system (typefaces, sizes, weight rules)
- Color system (palette mapped to states/meaning, accent rules)
- Grid + layout rules (column system, spacing, allowed structures)
- Motion principles (easing, tempo, what motion communicates)
- Iconography/symbol system (if applicable — mapped to domain concepts)
- Tone + textual rules (voice, allowed/disallowed language patterns)

The spec is derived FROM the creator's frequency, not imposed on it. A creator
in music should produce a different design language than a creator in fashion.
The protocol provides the structure; the creator's identity provides the content.

**Phase gate:** Prototype runs in demo mode. All tests pass. Schema matches
specs. Demo mode is permanent (never removed). Design Language Spec produced.
Prototype carries the frequency of the community it serves.

### Phase 6: Technical Spine Hardening (Entropy)

*Full Protocol engagement only.*

| Deliverable | Format | Required |
|-------------|--------|----------|
| Eng review findings | Markdown | Yes |
| Implementation specs | Markdown per system | If gaps found |
| Tool registry | Markdown/YAML | If agents/tools used |
| Code quality fixes | Committed code | If issues found |
| Ownership enforcement spec | Markdown | If extraction gaps found |

**Phase gate:** All critical gaps addressed. No unresolved high-severity
issues. Extraction review complete.

### Phase 7: Handoff & Packaging (Coherence)

| Deliverable | Format | Required |
|-------------|--------|----------|
| README | Markdown | Yes |
| Review brief | Markdown | Yes |
| Project tracker | Markdown with context packets | Yes |
| Engineering CLAUDE.md | Markdown | Yes (for prototype engagements) |
| Clean repository | Git | Yes |

**Phase gate:** A new builder can clone the repo and start Day 1 without
a meeting. Coherence test: someone who wasn't there can build from this.

## Handoff Format

All deliverables conform to the exit guarantee:

```
{project}-ops/
├── CLAUDE.md                    (strategic context for AI sessions)
├── TODOS.md                     (gate structure + tracked items)
├── README.md                    (orientation, stack, how to run)
├── architecture/
│   ├── business-model/
│   │   └── business-model.md    (canonical numbers)
│   └── specs/
│       ├── {system-1}.md
│       ├── {system-2}.md
│       └── ...
├── documents/
│   ├── governance/
│   │   ├── exit-guarantee.md
│   │   └── {other governance}.md
│   └── agreements/
│       └── {agreement templates}.md
├── decisions/
│   ├── 001-{decision}.md
│   └── ...
├── playbooks/
│   ├── {workflow-1}.md
│   └── ...
└── review/
    ├── review-brief.md
    └── project-tracker.md
```

If prototype included:
```
{project}/
├── src/                         (prototype code)
├── tests/                       (test suite)
├── package.json                 (or equivalent)
└── CLAUDE.md                    (engineering guide)
```

Both repositories delivered to the creator's own GitHub/GitLab account.
No Facework-owned repos for client work.

## Quality Bar

### Minimum Quality (every engagement)
- [ ] All phase gates pass
- [ ] Extraction check passed (documented)
- [ ] Cross-reference check: no contradictions between documents
- [ ] Every number traces to a canonical source
- [ ] Exit guarantee test: system works if Facework disappears
- [ ] Handoff test: a new builder could start without a meeting

### Full Protocol Additional
- [ ] Prototype runs in demo mode
- [ ] All tests pass
- [ ] Eng review completed with findings addressed
- [ ] Design carries the frequency of the community served

## Acceptance Criteria

The engagement is complete when:
1. All phase gates pass for the engagement variant
2. All deliverables transferred to the creator's own accounts
3. Creator confirms they can navigate the handoff package
4. Extraction check documented with pass/fail evidence
5. No Facework dependencies remain in any deliverable

## Edge Cases

| Scenario | Detection | Handling |
|----------|-----------|----------|
| Creator's idea is extractive | Extraction check in Phase 1 | Surface it. If they won't change the model, decline the engagement. |
| Scope expands mid-engagement | Phase 2 dilemmas multiply | Price the expansion. No scope creep without pricing adjustment. |
| Creator wants to skip phases | "Just build it" pressure | Explain the gate structure. Offer Foundation Only variant. Don't skip. |
| Technical domain outside expertise | Phase 3 spec complexity | Bring in a domain expert as a subcontractor. Disclose to creator. |
| Creator goes silent mid-engagement | No response for 5+ business days | Pause the clock. Deliverables-to-date transferred. Resume or close. |
| Prototype tech stack mismatch | Creator's engineer uses different stack | Specs are stack-agnostic. Prototype is a reference, not the production code. |
