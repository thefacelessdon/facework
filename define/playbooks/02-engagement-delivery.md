# Engagement Delivery Playbook

How a paid creator engagement runs from kickoff to handoff.
Implements the Engagement Delivery Spec.

**Operating model:** Human + agent. The /fw-* skill stack runs the protocol.
The human provides taste, judgment, relationship, and extraction checks.
This is how GAMUT was built in 4 days — the agent generates, cross-references,
and enforces consistency. The human steers direction and makes decisions.

## Trigger

Creator agreement signed + first payment received + kickoff scheduled.

## Steps

### Day 0: Kickoff / Intake

**Duration:** 2-3 hours
**Owner:** Human (relationship + discovery — agent cannot substitute)

1. Walk the creator through the process — what each phase produces,
   how the human+agent model works, what their participation looks like
2. Run discovery conversation (the 5 questions from /fw-frequency)
3. Document intake record
4. Confirm scope (variant, timeline, deliverables)

**Gate:** Problem/opportunity statement is explicit and bounded.

### Day 1: Governance & Foundation (Frequency)

**Duration:** 3-6 hours
**Owner:** Agent runs /fw-frequency → Human steers + validates

1. **Agent:** Run /fw-frequency with discovery inputs. Produces business model,
   extraction check, ownership structure, gate structure, exit guarantee
2. **Human:** Review extraction check findings — this requires cultural
   intelligence and domain knowledge the agent doesn't have
3. **Creator:** Review business model, confirm numbers, validate extraction
   check. 1 session (30-60 min)
4. **Agent:** Cross-reference all governance docs for consistency

**What the agent does that used to take days:**
- Generates internally consistent governance documents from discovery inputs
- Cross-references every number across documents automatically
- Flags contradictions between business model and agreements
- Produces the exit guarantee templated to this specific creator's domain

**What only the human can do:**
- Validate the extraction check (requires understanding the creator's culture)
- Confirm the business model reflects the creator's actual economics
- Judge whether the governance artifacts carry the right frequency

**Gate:** All governance docs consistent. Extraction check passed.

### Day 1-2: Strategic Pressure Testing (Current)

**Duration:** 2-4 hours
**Owner:** Agent runs /fw-current → Human + Creator decide

1. **Agent:** Surface dilemmas from governance artifacts (min 5),
   present each with options, tradeoffs, and recommendation
2. **Human:** Validate that the right dilemmas were surfaced — agent
   may miss domain-specific tensions
3. **Creator:** Makes the decisions. Agent presents options, human
   adds context, creator decides. 1-2 sessions.
4. **Agent:** Write decision records with reasoning and coherence impact.
   Update Frequency artifacts if decisions change economics.

**What the agent does:** Finds contradictions, surfaces dilemmas from
the document structure, drafts decision records, maintains consistency.

**What only the human can do:** Judge whether a dilemma is real or
manufactured. Add dilemmas the agent can't see (relationship dynamics,
cultural context, market intuition).

**Gate:** All dilemmas resolved. No contradictions.

### Days 2-3: Architecture Specification (Stability)

**Duration:** 4-8 hours
**Owner:** Agent runs /fw-stability → Human reviews domain accuracy

1. **Agent:** Identify systems needing specs from playbooks and business model.
   Generate one spec per major system with data models, ASCII diagrams,
   business rules, edge cases, ownership enforcement, acceptance criteria.
2. **Agent:** Cross-reference all specs against business model and decisions.
   Flag external API dependencies as confirmed/unconfirmed.
3. **Human:** Review specs for domain accuracy — the agent produces structurally
   sound specs but may miss domain-specific edge cases
4. **Creator:** Review specs. They know their business. 1 session.

**This is where agent leverage is highest.** GAMUT produced 10 specs (6,500+
lines) because the agent generates comprehensive specs from context. The human's
job is catching what the agent can't know — domain quirks, unstated assumptions,
cultural context.

**Gate:** Every spec implementable without clarifying questions.

### Days 3-4: Operational Playbooks (Flow)

**Duration:** 3-6 hours
**Owner:** Agent runs /fw-flow → Human validates realism

1. **Agent:** List every workflow from specs and business model. Generate
   playbook per workflow with triggers, steps, decision points, thresholds,
   automation mapping, energy flow check.
2. **Human:** Validate that the playbooks reflect how this creator actually
   works — not how a generic business would work
3. **Agent:** Cross-reference playbooks against specs
4. **Creator:** Walk through playbooks. 1 session.

**Critical:** Playbooks produced by the agent for creator engagements
must ALSO be agent-readable. These playbooks become the operating system
for the creator's own human+agent workflow. Every step should indicate
whether it's human-judgment, agent-native, or human-steered-agent.

**Gate:** Every workflow has a playbook. Every step has an owner (human,
agent, or human-steered-agent).

### Days 4-6: Platform Prototype (Resonance)

*Full Protocol engagement only. Skip for Foundation Only.*

**Duration:** 6-12 hours
**Owner:** Agent builds → Human steers frequency

1. **Agent:** Define typed schema from architecture specs. Build DataSource
   adapter (demo + live interface). Create demo data. Generate prototype
   UI with lifecycle-aware rendering.
2. **Human:** Steer the design to carry the frequency of the creator's
   community. The agent builds fast but defaults to generic SaaS aesthetic.
   The human's job is ensuring it feels like "this is for my people."
3. **Agent:** Write test suite. Establish design system tokens.
4. **Creator:** Review prototype. The frequency test is theirs:
   "Does this feel like mine?" 1 session.

**Agent builds the prototype in hours, not weeks.** The human's value is
taste — ensuring the prototype doesn't just work but resonates.

**Gate:** Prototype runs in demo mode. All tests pass. Creator confirms frequency.

### Days 6-7: Technical Spine Hardening (Entropy)

*Full Protocol engagement only.*

**Duration:** 2-4 hours
**Owner:** Agent audits → Human decides on tradeoffs

1. **Agent:** Run systematic review across specs + prototype. Surface issues
   with options and recommendations per issue.
2. **Human:** Decision-maker on tradeoffs — which issues to fix now, which
   to document as known limitations.
3. **Agent:** Fix critical issues in code and specs. Produce implementation
   specs for underspecified systems. Run ownership enforcement review.

**Gate:** All critical gaps addressed. Extraction review passed.

### Day 7-8: Handoff & Packaging (Coherence)

**Duration:** 3-5 hours
**Owner:** Agent packages → Human validates coherence

1. **Agent:** Generate README, review brief, project tracker with context
   packets, engineering CLAUDE.md. Clean repository.
2. **Human:** Run the coherence test — can someone who wasn't here build
   from this? Walk the creator through the handoff.
3. **Agent:** Run conformance audit against the conformance model
   (Level 3 minimum target).
4. **Creator:** Final walkthrough. Confirm navigability. 1 session.
5. Transfer repos to creator's accounts.

**Gate:** Coherence test passed. All deliverables transferred.

## Revised Timeline

| Variant | Duration | Sessions with Creator |
|---------|----------|-----------------------|
| **Full Protocol** | 5-8 days | 6-8 sessions (30-60 min each) |
| **Foundation Only** | 3-5 days | 4-5 sessions |

This is 2-3x faster than the original spec estimated because the agent
runs most of the generation, cross-referencing, and consistency checking.
The bottleneck is creator availability for review sessions, not production time.

## Revised Capacity

| Scenario | Engagements/Month |
|----------|-------------------|
| Full Protocol only | 2-3 |
| Foundation Only only | 3-5 |
| Mixed | 2-4 |

**This changes the economics.** At 2-3 engagements/month × $10K–$25K,
the revenue ceiling is $25K–$75K/month solo. The monthly floor ($5K–$10K)
can be hit with a single Foundation Only engagement.

## Decision Points

- **IF creator pushes to skip phases:** Explain gates. Offer Foundation Only.
  Don't skip.
- **IF scope grows mid-engagement:** Price the expansion before continuing.
- **IF creator goes silent (5+ business days):** Pause. Transfer deliverables-
  to-date. Option to resume.
- **IF extraction check reveals problems in Phase 1:** Surface immediately.
  If unfixable, stop and refund minus time spent.
- **IF agent produces artifacts that don't carry the frequency:** Human
  intervenes on taste. This is the primary quality failure mode — the agent
  optimizes for structural correctness, not cultural resonance.

## Ownership (Agent-Native)

| Phase | Agent Does | Human Does |
|-------|-----------|------------|
| Intake | — | Discovery conversation, relationship |
| Frequency | Generates governance docs, cross-references, extraction check template | Validates extraction check, cultural judgment |
| Current | Surfaces dilemmas, writes decision records | Adds unseen dilemmas, facilitates creator decisions |
| Stability | Generates specs, schemas, diagrams | Reviews domain accuracy |
| Flow | Generates playbooks, automation mapping | Validates realism, ensures agent-readability |
| Resonance | Builds prototype, tests, design system | Steers frequency/taste |
| Entropy | Audits, surfaces issues, fixes | Decides tradeoffs |
| Coherence | Packages handoff, runs conformance audit | Validates coherence, creator walkthrough |

## Energy Flow Check

The agent accelerates delivery without extracting from the creator.
The creator's time investment is review sessions (6-8 × 30-60 min = 3-8 hours
of their time over 5-8 days). The rest happens between sessions.

**The creator gets:** A complete system in under 2 weeks with less than a
full day of their time invested. Compare to: months of meetings with an
agency, or weeks of the creator's own time trying to figure it out.

**The agent produces, the human steers, the creator decides.**

## Completion

Engagement is complete when:
1. All phase gates pass for the engagement variant
2. All deliverables transferred to creator's accounts
3. Creator confirms navigability of handoff package
4. Conformance audit documented (Level 3 minimum)
5. Final payment received
6. Case study conversation (optional)
