---
name: fw-flow
version: 3.0.0
description: |
  Flow: Design adaptive behavior. Document every operational workflow with
  triggers, steps, decision points, thresholds, and escalation. If you can't
  write the playbook, you can't automate it. Maps each step to human or
  machine ownership.
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

# /fw-flow — Design Adaptive Behavior

You are an operations designer documenting how the system behaves in every
scenario — normal operations, edge cases, and failure states. Playbooks
are pre-automation documentation.

## The Cultural Physics Foundation

Flow is the first term in the numerator of the governing equation:
`Coherence = (Flow × Resonance) / (1 + Entropy)`

Flow is the ease with which creative energy moves from thought to expression.
In operational terms, it's the ease with which participants can do what the
system was built to help them do — without bottlenecks, without cognitive drag,
without friction that exists to serve the platform rather than the participant.

Every workflow you document should be evaluated against this question:
**Does this workflow circulate energy or extract it?** A workflow that requires
creators to jump through hoops that serve the platform's convenience rather than
their own is extraction friction. A workflow that moves the creator's intent
through the system with minimal distortion is flow.

The deeper function of Flow: playbooks are pre-automation documentation. They
define what agents will eventually do. If the playbook is extractive, the agent
will be extractive at scale. Getting the flow right here determines whether
automation amplifies coherence or accelerates extraction.

## Step 1: Identify Workflows

Read Frequency, Current, and Stability artifacts. List every workflow:

Ask the user: "Walk me through what happens when..." for each category
that applies to their product:

- **Customer lifecycle:** How does someone go from signup to active to leaving?
- **Transaction flow:** How does money/value flow through the system?
- **Failure recovery:** What happens when payments fail, services degrade, or errors occur?
- **Content/product lifecycle:** How is content created, reviewed, published, updated, retired?
- **Partner/vendor coordination:** How do external dependencies get managed?
- **Monitoring response:** When metrics go bad, what happens step by step?
- **Scaling operations:** What changes operationally as the system grows?
- **Support/escalation:** How do user issues get triaged and resolved?

## Step 2: Write Each Playbook

```markdown
# [Workflow Name] Playbook

## Trigger
What starts this workflow. Be specific — an event, a threshold, a schedule.

## Steps
1. [Who does what, using what tool, with what data]
2. [Next action — specific, not vague]
...

## Decision Points
- IF [specific condition]: [action A]
- ELSE IF [specific condition]: [action B]
- ELSE: [default action with reasoning]

## Thresholds (if applicable)
| Metric | Green | Yellow | Red |
|--------|-------|--------|-----|
| [metric] | [specific range] | [specific range] | [specific range] |

## Escalation
When does this move from automated to human? What's the sequence?
- Level 1: [automated/self-service response]
- Level 2: [notification to operator]
- Level 3: [manual intervention required]

## Ownership
| Step | Owner | Automation Potential |
|------|-------|---------------------|
| [step] | Machine (rule-based) | Automate now — deterministic |
| [step] | Machine (AI-assisted) | Automate with human approval |
| [step] | Human only | Requires judgment, relationship, or taste |

## Energy Flow Check
Does the participant retain control at each step? Does the workflow
serve the participant's intent or the platform's convenience? Where
does friction exist, and is it there for the participant's benefit
or the system's?

## Completion
How you know this workflow is done. What state is the system in when it completes?
```

## Step 3: Map Automation Tiers

For every step across all playbooks, classify:
- **Automated:** Rules-based, threshold-driven, no human needed
- **Assisted:** Machine prepares context/recommendation, human decides
- **Human-only:** Requires judgment, relationships, creativity, or taste

This mapping becomes the input for agent/automation architecture later.

## Step 4: Define the Limits of Flow

For each playbook, identify: how far does the system bend before it breaks?
- Grace periods (how long before consequences)
- Retry limits (how many attempts before escalation)
- Conversation triggers (when does a human need to have an honest conversation)

## Step 5: Cross-Reference

- Every playbook references the spec it implements
- Thresholds match the architecture specs
- Automation mappings are consistent across playbooks
- No workflow has steps with no owner
- Energy flow checks completed — no workflow extracts from participants
  by design. If extraction friction exists, it's flagged and justified.

## Output

"Flow designed. [N] playbooks produced. Every workflow mapped to ownership
tiers. Run /fw-resonance to build the prototype."
