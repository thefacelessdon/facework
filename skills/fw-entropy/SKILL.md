---
name: fw-entropy
version: 4.1.0
description: |
  Entropy: Phase 7 of the Facework Protocol (Integrity — with /fw-sovereignty
  and /fw-consonance). Reveal structural weakness. Systematic review across
  architecture, code quality, test coverage, performance, and reliability.
  Generative — produces new specs, not just critique. Runs after Activation
  (Phase 6), before Integration (Phase 8).
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

**Phase 7 of the Facework Protocol (Integrity — with /fw-sovereignty and /fw-consonance).**
Entry: LaunchPlan and working interfaces exist (Phase 6 gate).
Exit: Resolved issues, critical gap fixes, SovereigntyMap, and ConsonanceCheck.
Ordering within Phase 7 (0.0.70): **run `/fw-consonance` first, then `/fw-entropy`,
then `/fw-sovereignty`.** Consonance and Sovereignty are co-skills of the same phase,
not sequential phases — but the order inside the phase is no longer arbitrary.

**Why Entropy comes after Consonance.** A reconciliation pass is not free. Making two
artifacts agree requires choosing values, and **the agreement gets paid for somewhere
— usually in a number nobody was watching.** Entropy is the only primitive that
prices such a number. Run alongside, it audits a model that is about to change under
it; run after, it audits the model that actually exists and can price what the
reconciliation cost.

Earned when a Consonance pass resolved a document conflict with a phrase that set an
operating parameter as a side effect, and Entropy — running afterward — found it had
capped the system's conversion rate at a third of the alternative. **Coherence passes
can introduce entropy.**

You are a senior architect finding every gap between "what's specified" and
"what's needed to build." Entropy is generative — you don't just find problems,
you produce the specs that fix them.

## The Cultural Physics Foundation

Entropy is the denominator of the governing equation:
`Coherence = (Flow × Resonance) / (1 + Entropy)`

In physics, entropy is the natural tendency toward disorder and energy loss.
In culture, entropy is the fatigue, chaos, and extraction that drain creative
ecosystems. In a product, entropy is every structural weakness where energy
leaks — silent failures, unhandled edge cases, contradictions between specs,
and extraction patterns baked into the architecture.

Entropy is not failure. **Entropy is the most valuable information in the system.**
It tells you exactly where coherence is missing. The 5 silent failure modes you
find in review are 5 production incidents you prevented. The extraction pattern
you catch in the data flow is a community's trust you preserved.

This phase introduces a domain that the previous version did not carry:
**extraction entropy** — friction and structural weakness that exists because
the system takes from its participants rather than serving them. This is the
highest-entropy pattern in creative infrastructure, and it must be surfaced
alongside technical entropy.

## Step 0: Read Existing Artifacts

Before scoping the review, scan the project for prior work:
- All artifacts from Phases 1–6 (SignalThesis through working interfaces)
- **`ConsonanceCheck` — read it first.** Consonance runs before this phase (see
  ordering above). Its contradiction register is your baseline: **do not
  re-discover its findings**, and **do read what it *decided* while reconciling**
  (its Step 4.5 log), because a parameter set to resolve a conflict is exactly the
  kind of value this phase exists to price.
- Prior audit reports, security reviews, or code quality assessments
- Incident logs, bug reports, or known issue trackers
- Performance benchmarks or load test results
- Dependency audit results or supply chain reviews

Read `define/PROJECT-CONTEXT.md` if it exists. Read the `track:` field and adapt
audit depth to the track:

| Track | Entropy emphasis |
|-------|-----------------|
| Creator | Light technical audit, heavy extraction audit. Platform dependency risks. Content portability gaps. Audience ownership gaps. |
| Cultural Brand | Standard technical, heavy extraction + brand integrity. Editorial pipeline gaps. Community governance gaps. |
| Athlete / Public Figure | Heavy extraction audit. Agent/league lock-in. NIL rights gaps. Revenue stream fragility. |
| Agency / Studio | Heavy operational entropy. Delivery methodology gaps. Client concentration risk. Pricing model stress test. |
| Platform / Product | Full depth all categories. Architecture gaps, code quality, test coverage, performance, extraction patterns, capability gaps. |

If no PROJECT-CONTEXT.md exists or no track is set, default to Platform / Product (full depth).

Summarize what you found. Prior audits set the baseline — don't re-discover known issues.

## Step 1: Scope the Review

Read all artifacts from previous phases. Determine which review domains
apply to this product:

**Always applicable:**
- Architecture review (system design, boundaries, data flow)
- Code quality review (organization, DRY, error handling)
- Test review (coverage mapping, missing tests)
- Extraction review (does the architecture serve or extract from participants?)

**If the product has external integrations:**
- API integration review (confirmed vs unconfirmed, fallback modes)

**If the product has AI/LLM components:**
- Prompt engineering review (structured output, eval strategy)
- Context management review (token budgets, retrieval strategy)

**If the system converts people into limited positions:**
- Capacity denominator (Step 2.5) — is the ceiling set by the bar or by supply?

**If the product will scale:**
- Performance review (N+1 queries, caching, rate limits, cost modeling)

## Step 2: Review Each Domain

For each applicable domain, identify up to 8 issues. For each issue:

1. Describe the problem with specific file/line references
2. Present 2-3 options (including "do nothing" where reasonable)
3. State your recommendation FIRST — "Do B. Here's why:"
4. Use AskUserQuestion — one issue per question, never batch
5. The user's decision gets encoded into the output

**For the extraction review specifically:** Walk the data flow and economic
flow of the system. At each point where value moves, ask:
- Does the participant retain ownership and control?
- Could the system function if the participant left with their data?
- Is there friction that serves the platform but not the participant?
- Are there lock-in patterns (proprietary formats, no export, no portability)?

Extraction patterns are entropy. They create dependency, which creates fragility,
which creates collapse risk. Surface them with the same rigor as technical debt.

## Step 2.5: Capacity denominators (0.0.70)

**If the system converts people into a limited number of positions — residents into
seats, applicants into cohorts, members into roles, contributors into maintainers —
compute the denominator before auditing the selection criteria.**

```
CAPACITY   = positions the system can actually supply over a window
THROUGHPUT = people it cycles through in the same window
CEILING    = CAPACITY / THROUGHPUT
```

Then ask the question the arithmetic makes available:

- **Is the ceiling set by the quality bar, or by supply?** If supply, **the bar is
  not the binding constraint**, and every hour spent perfecting it is spent on the
  wrong lever.
- **Which term is a free variable?** Capacity is usually fixed by something
  structural. Throughput is usually a **choice** — cohort size, intake cadence,
  programme length — and therefore the actual lever.
- **Can a participant see the ceiling?** If the system knows its own supply and the
  participant does not, **that asymmetry is the extraction**, independent of anyone's
  intent. Publish it or fix it.

**Why this is a step.** In the run that earned it, four phases treated a readiness
bar as the load-bearing artifact and specified it with real care. Entropy computed
the denominator and found conversion was capped at 17–34% by **venture supply**,
which does not increase when you run more cohorts — so tripling intake tripled the
denominator and held the numerator constant. **12–15 of every 18 participants could
not convert for reasons unrelated to their performance, and no artifact counted
positions-available against people-eligible.** The bar was never the constraint.

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
- **If extraction gaps found:** Ownership enforcement spec
  (data portability, export formats, exit automation)

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
- Issues found per domain (including extraction review)
- Critical gaps (silent failures) identified and fixed
- New specs produced
- NOT-in-scope list (considered and deferred, with reasoning)
- What-already-exists list (reusable assets identified)

## Output (Three-Tier Progressive Disclosure)

**Tier 1 — Narrative (always produced):**
Deliver a 5–7 sentence summary: "Here's where the system is weak and what to fix."
Cover the most critical findings, extraction audit result, and recommended next action.

**Tier 2 — Summary artifact:**
Write `define/entropy-summary.md` containing:
- Gap count by severity (critical / high / medium / low)
- Top 3 critical issues with one-line descriptions
- Extraction audit result (pass / watch / fail)
- Track-specific findings (if track was read from PROJECT-CONTEXT.md)

**Tier 3 — Full artifact:**
Produce the complete EntropyAudit with YAML frontmatter:

```yaml
---
artifact: EntropyAudit
phase: entropy
track: <track from PROJECT-CONTEXT.md or "platform-product">
version: <protocol version>
---
```

Include all domain reviews, failure mode analysis, implementation artifacts produced,
and the full issue register.

Conclude with:
"Entropy surfaced. [N] issues resolved, [N] critical gaps fixed,
[N] new specs produced. Run /fw-sovereignty next to validate ownership and autonomy."
