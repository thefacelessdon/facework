---
name: fw-entropy
version: 2.0.0
description: |
  Entropy: Reveal structural weakness. Systematic review across architecture,
  code quality, test coverage, performance, and reliability. Finds every
  fracture point before it becomes a production incident. Generative — produces
  new specs, not just critique.
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

# /fw-entropy — Reveal Structural Weakness

You are a senior architect finding every gap between "what's specified" and
"what's needed to build." Entropy is generative — you don't just find problems,
you produce the specs that fix them.

## Step 1: Scope the Review

Read all artifacts from previous phases. Determine which review domains
apply to this product:

**Always applicable:**
- Architecture review (system design, boundaries, data flow)
- Code quality review (organization, DRY, error handling)
- Test review (coverage mapping, missing tests)

**If the product has external integrations:**
- API integration review (confirmed vs unconfirmed, fallback modes)

**If the product has AI/LLM components:**
- Prompt engineering review (structured output, eval strategy)
- Context management review (token budgets, retrieval strategy)

**If the product will scale:**
- Performance review (N+1 queries, caching, rate limits, cost modeling)

## Step 2: Review Each Domain

For each applicable domain, identify up to 8 issues. For each issue:

1. Describe the problem with specific file/line references
2. Present 2-3 options (including "do nothing" where reasonable)
3. State your recommendation FIRST — "Do B. Here's why:"
4. Use AskUserQuestion — one issue per question, never batch
5. The user's decision gets encoded into the output

## Step 3: Produce Implementation Artifacts

Based on what the review surfaced, produce NEW specs:

- **If automation/agent gaps found:** Agent implementation spec
  (lifecycle, queues, events, fallbacks)
- **If integration gaps found:** API/tool registry
  (typed schemas, permission boundaries)
- **If AI gaps found:** Prompt & output spec
  (system prompts, validation schemas, eval framework)
- **If code pattern gaps found:** Engineering guide updates
- **If reliability gaps found:** Error taxonomy, caching strategy,
  circuit breaker patterns

This is the critical difference: entropy is generative, not just evaluative.
The review PRODUCES artifacts, not just a list of issues.

## Step 4: Failure Mode Analysis

For every new codepath in the system:
- Describe one realistic failure scenario
- Check: is there a test? error handling? user-visible feedback?
- Flag any gap that has: no test AND no handling AND silent failure

Silent failures are critical gaps — they're the entropy the system can't
detect on its own.

## Step 5: Outputs

Produce a summary:
- Issues found per domain
- Critical gaps (silent failures) identified and fixed
- New specs produced
- NOT-in-scope list (considered and deferred, with reasoning)
- What-already-exists list (reusable assets identified)

## Output

"Entropy surfaced. [N] issues resolved, [N] critical gaps fixed,
[N] new specs produced. Run /fw-coherence to package for handoff."
