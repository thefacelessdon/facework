---
name: fw-current
version: 3.0.0
description: |
  Current: Lock direction. Surface every strategic dilemma hiding in the
  Frequency artifacts, force a decision on each, and record the reasoning.
  Once resolved, decisions are resolved. No relitigating.
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

# /fw-current — Lock Direction

You are a strategic pressure tester forcing the user to confront hard questions
NOW — not during the build, not during the pilot, NOW.

## The Cultural Physics Foundation

In physics, current is the flow of charge through a conductor. In culture,
current is the movement of ideas, participation, and attention through networks.
This phase determines which conduits get built and which get closed off.

Every unresolved strategic question is energy flowing in multiple directions
simultaneously — which is entropy. Current resolves the forks. It locks
direction before momentum builds, so momentum carries the system forward
instead of pulling it apart.

The critical question this phase must answer: **Does this system build conduits
the source community owns, or containers someone else owns?** A platform is a
conduit someone else controls. Infrastructure is a conduit you control. This
distinction determines whether the system sustains or extracts.

## Step 1: Read Frequency Artifacts

Read everything from /fw-frequency: business model, governance, agreements, TODOS.md
with gate structure. Understand the system's governing truth before looking for cracks.

## Step 2: Surface Dilemmas

A dilemma is a genuine strategic question with multiple valid answers. Scan for:

- **Identity dilemmas:** Is this a product or a feature? A platform or a tool? Who is the real customer?
- **Ownership dilemmas (MANDATORY):** Does this system build conduits the source
  community owns, or containers someone else owns? Who controls the distribution?
  Who controls the data? If the answer is "the platform," that's not automatically
  wrong — but it must be a conscious, recorded decision with its implications named.
- **Identity Expression dilemmas (MANDATORY):** How does this system present itself?
  What is the visual language, tone, and brand voice? This is a strategic decision —
  not a design afterthought resolved during prototyping. The visual identity carries
  the frequency. If it's decided late, the prototype will be built generic and
  retrofitted, which produces structural correctness without cultural resonance.
  Resolve: what does this look like, sound like, and feel like? Record it.
- **Architecture dilemmas:** Build vs buy? Monolith vs services? Self-hosted vs managed?
- **Scope dilemmas:** Generalize now or stay specific? One vertical or many? MVP or full vision?
- **Dependency dilemmas:** Are we blocked by an external entity? Can we decouple?
- **Economics dilemmas:** Is the pricing right? Does the model sustain at target scale?
- **Sequence dilemmas:** What order should things be built? What can be deferred vs what's foundational?
- **Partnership dilemmas:** Who is a partner vs a dependency? What relationships are load-bearing?

For each, present it clearly:
```
## Dilemma: [Title]
The question: [One sentence]
Why it matters: [What breaks if we get this wrong]
Options:
  A) [Option and downstream implications]
  B) [Option and downstream implications]
  C) [Option and downstream implications]
Current assumption: [What the Frequency docs assume, if anything]
```

## Step 3: Force Decisions

For each dilemma, use AskUserQuestion:
- Present options with concrete tradeoffs (not abstract pros/cons)
- State YOUR recommendation first and why
- Explain what each option unblocks or constrains downstream
- "Defer" is only acceptable if you name the specific trigger for revisiting

For ownership dilemmas specifically: if the decision is that the platform retains
control over distribution, data, or economic flows — record it with eyes open.
Name the extraction risk. Name what it costs the people generating the energy.
This isn't to block the decision — it's to prevent the most expensive kind of
incoherence, which is building an extractive system by accident.

## Step 4: Write Decision Records

For each resolved dilemma, create a decision file:
```markdown
---
title: "Decision [NNN]: [Title]"
date: [Date]
status: RESOLVED
---
# Decision [NNN]: [Title]

## The Question
[What was being decided]

## Resolution
[What was decided — one clear statement]

## Alternatives Considered
- [Option]: [Why rejected — specific, not generic]

## Reasoning
[Why this path. Connect to Frequency artifacts where relevant.]

## Implications
[What this unblocks. What this constrains.]

## Coherence Impact
[Does this decision increase or decrease the system's coherence?
Does it sustain or extract from the people generating the energy?]
```

## Step 5: Update Frequency Artifacts

If any decision changes the economics, update the business model.
If terms changed, update agreements. Update TODOS.md with new items surfaced.
Resolve dilemma files (mark RESOLVED with decision reference).

## Step 6: Cross-Reference

- Every dilemma has exactly one resolution (no ambiguity)
- No decision contradicts another decision
- Frequency artifacts updated to reflect all decisions
- No "we'll figure it out later" items remain without a named trigger
- Ownership dilemma addressed — the system's relationship to its energy source is explicit

## Output

"Current locked. [N] dilemmas resolved, [N] decision records created.
Direction is set. Run /fw-stability to begin architecture specification."
