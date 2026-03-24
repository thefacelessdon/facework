# Stage Gate Monitoring Playbook

How you track Facework's progress through MVP → Beta → Scale.

**Operating model:** Agent gathers and computes. Human interprets and
decides. The monthly review should take 30-45 minutes, not 2 hours —
because the agent does the data collection.

## Trigger

Monthly review — first Monday of each month.

## Steps

### 1. Agent Prepares the Dashboard (Agent — automated)

Agent gathers and computes:

```
REVENUE
───────
Revenue this month:              $____
Trailing 3-month average:        $____
Months at/above $5K floor:       __/3
Months since first engagement:   __

PROOF
─────
Completed protocol runs:         __/3
Conformance levels:              [project: Level __]
Public references:               __/1

NO-GO LINE STATUS
─────────────────
Hard triggers:                   [none/approaching/triggered]
Soft triggers:                   [none/approaching/triggered]
Energy transfer status:          [author-only/creator-emerging/creator-driven]
```

### 2. Human Reviews and Interprets (Human — 15 min)

The agent can compute the numbers. It cannot judge:
- Is the revenue trend real or a one-time spike?
- Are the completed runs genuinely protocol-conformant, or did you
  cut corners under time pressure?
- Is the energy transfer happening, or are you rationalizing?
- Are the no-go lines approaching and you're ignoring the signal?

**Be honest with yourself.** The agent provides the mirror.
The human decides what they see.

### 3. Stage Assessment (Agent computes → Human validates)

```
MVP EXIT CRITERIA (compound gate)
─────────────────────────────────
Revenue: $5K+/month × 3 consecutive    [Met / __ months of 3]
Proof: 3 runs + 1 public reference     [Met / __ of 3, __ of 1]

BOTH required → Beta entry.
```

### 4. Next Month Actions (Human — 15 min)

1-3 specific actions for the coming month.
Agent can suggest based on gaps; human decides priorities.

## Decision Points

- **IF both gates met:** Prepare Beta. Start studio outreach. Begin
  licensing terms. The agent skills become the product.
- **IF hard no-go triggered:** Stop. Run /fw-diagnostic on Facework.
  The agent can help analyze what's not working; the human decides
  what to change.
- **IF demand exceeds revised capacity (2-4/month):** This is the
  Beta signal arriving early. Consider whether studio licensing
  should accelerate.

## Thresholds

| Metric | Healthy | Concerning | Critical |
|--------|---------|------------|----------|
| Monthly revenue | ≥$10K | $5K–$10K | <$5K |
| Engagement pipeline | 1-2 in progress | None scheduled | None for 3+ months |
| Energy transfer | Creator-driven proof | Still author-only | No transfer after 12mo |

## Ownership (Agent-Native)

| Step | Agent Does | Human Does |
|------|-----------|------------|
| Data collection | Gathers revenue, proof, trigger status | — |
| Dashboard | Computes and formats | — |
| Interpretation | — | Honest self-assessment |
| Stage assessment | Computes gate status | Validates |
| Action planning | Suggests based on gaps | Decides priorities |

## Energy Flow Check

This playbook is a 30-minute self-diagnostic, not a 2-hour reporting ritual.
The agent does the work of collecting and computing so the human's time is
spent on judgment, not data entry.

## Completion

Monthly review documented. Actions set. 30-45 minutes total.
