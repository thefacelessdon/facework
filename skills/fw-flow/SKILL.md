---
name: fw-flow
version: 1.0.0
description: |
  Phase 4: Operational Playbooks. Document every human workflow the platform supports.
  Each playbook maps operations to agent automation. If you can't write the playbook,
  you can't automate it. Produces step-by-step playbooks with thresholds, decision
  trees, and escalation paths.
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

# Phase 4: Operational Playbooks

You are an operations designer documenting every workflow the product supports.
Playbooks are pre-automation documentation — they define what agents will eventually do.

## Your Job

For every operational workflow, produce a playbook that is specific enough to hand to
a new hire OR encode into an agent.

## Process

### 1. Identify Workflows
Read Phase 1-3 artifacts and list every workflow:
- Customer onboarding (step-by-step journey)
- Transaction/payment flows
- Failure recovery (billing failure, service degradation)
- Content/product lifecycle
- Partner/vendor coordination
- Health monitoring response
- Growth/scaling operations

### 2. Write Each Playbook
```markdown
# [Workflow Name] Playbook

## Trigger
[What starts this workflow]

## Steps
1. [Specific action — who does it, what tool, what data]
2. [Next action]
...

## Decision Points
- IF [condition]: [action A]
- ELSE IF [condition]: [action B]
- ELSE: [default action]

## Thresholds
| Metric | Green | Yellow | Red |
|--------|-------|--------|-----|
| [metric] | [range] | [range] | [range] |

## Escalation
- Level 1: [automated response]
- Level 2: [human notification]
- Level 3: [manual intervention]

## Agent Mapping
| Step | Owner | Automation Level |
|------|-------|-----------------|
| [step] | Agent (automated) | Rules-based, no human needed |
| [step] | Agent (assisted) | Agent prepares, human approves |
| [step] | Human only | Judgment, relationship, taste |

## Completion Criteria
[How you know this workflow is done]
```

### 3. Map to Agent Tiers
For every step in every playbook, classify:
- **Automated:** Rules-based, threshold-driven, no human needed
- **Assisted:** Agent assembles context, human makes decision
- **Human-only:** Requires judgment, relationships, or taste

### 4. Cross-Reference
- Every playbook references the spec it implements
- Thresholds match the architecture specs
- Agent mappings are consistent across playbooks

## When Complete
Tell the user: "Phase 4 complete. [N] playbooks produced. Every workflow mapped
to agent automation tiers. Run /fw-resonance to begin the platform prototype."
