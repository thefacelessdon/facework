---
name: fw-frequency
version: 3.0.0
description: |
  Frequency: Extract the irreducible signal. Establish the governing truth
  of the system — business model, economics, rights, obligations, and
  security gates — before anything gets designed or built. Adapts to
  any product type: SaaS, marketplace, hardware, content, services, etc.
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

# /fw-frequency — Extract the Irreducible Signal

You are helping someone establish the governing truth of what they're building.
Before anything is designed or built, the economics, constraints, rights, and
obligations must be documented and internally consistent. This is frequency
extraction — isolating what the system IS when everything performative falls away.

## The Cultural Physics Foundation

Frequency is the first primitive because it answers the question that determines
everything downstream: **whose energy powers this system, and who controls
the infrastructure it flows through?**

Every system has a value source — the people whose participation, creativity, labor,
or expertise makes the system valuable. For creative infrastructure, these are artists
and creators. For a developer tool, these are the developers. For a B2B SaaS, these
are the end users whose workflows depend on it. For a marketplace, these are the
sellers and buyers. The physics are the same regardless of domain: when the people
who generate the value don't control the infrastructure it flows through, the system
extracts from them — and extraction is high-entropy.

This pattern is most visible and most consequential in creative industries — jazz,
hip hop, fashion, social media — where communities generate the culture and external
systems capture the current. But it applies universally. Frequency extraction
prevents it. By establishing the governing truth before anything is built, we ensure
the system's economics, ownership, and control structures serve the people generating
the energy.

The governing equation: `Coherence = (Flow × Resonance) / (1 + Entropy)`

Frequency sets the denominator's floor — if the governing truth is unclear or
extractive, entropy is baked into the foundation and no amount of good architecture
can overcome it.

## Step 1: Discovery

Before producing anything, understand what's being built. Ask using AskUserQuestion:

**"What are you building and who is it for?"**
- What does the customer get?
- What problem does this solve that they currently can't solve?

**"How does money work?"**
Discover the business model type. Don't assume — ask. Common patterns:
- Subscription (SaaS, membership, access)
- Transaction/marketplace (percentage of GMV, per-transaction fee)
- Product sales (hardware, physical goods, digital goods)
- Service/consulting (hourly, project-based, retainer)
- Freemium (free tier + paid conversion)
- Platform/network (multi-sided: buyers, sellers, creators, etc.)
- Hybrid (subscription + transaction, etc.)

For each revenue stream identified, ask:
- Who pays? How much? How often?
- Are there multiple parties involved in revenue? (splits, funds, partners, royalties)
- What does the customer own vs rent? What happens when they stop paying?

**"Who generates the energy in this system?"**
This is the extraction check. Every system has people who generate the value —
creators, artists, communities, workers, contributors. Identify them explicitly:
- Who creates the content, culture, product, or service that makes this system valuable?
- Do they control the infrastructure through which their energy flows?
- Does the economic model return value to them proportionally?
- If they left tomorrow, would they take their work, data, and relationships with them?

If the answers reveal an extraction pattern — value generators don't control the
current, can't leave with their assets, or receive disproportionately low returns —
flag it. This is not a moral judgment. It is a physics diagnosis: extraction is
high-entropy, and high-entropy systems collapse.

**"What are the hard constraints?"**
- Regulatory or compliance requirements?
- Third-party dependencies (platforms, APIs, partners)?
- Intellectual property considerations?
- Geographic or jurisdictional limits?

**"What scale makes this viable?"**
- How many customers/users for sustainability?
- What's the cost basis per customer?
- Is there a network effect or does it scale linearly?

## Step 2: Build the Business Model

Based on discovery, produce a business model document. Adapt the structure
to what's actually being built — not every product needs every section:

```
# [Product] Business Model

## Identity
What this is. What it is NOT. (The negative space matters.)

## Customer
Who pays. Qualification criteria if applicable. Different customer
types if applicable (individual, team, enterprise, etc.)

## Energy Source
Who generates the value this system runs on? How does the system
sustain them rather than extract from them? This section makes explicit
what most business models leave implicit.

## Revenue
Every revenue stream with:
- Who pays, how much, how often
- Unit economics (cost to serve vs revenue per customer)
- Sustainability threshold (how many customers to break even)

## Economics at Scale
Revenue projections at target scale.
Cost projections at target scale.
Margin analysis.

## Ownership & Control
What do participants own? What can they take with them?
Who controls the distribution channels? Who controls the data?
This section defines whether the system builds conduits (participants
control their own current) or containers (the platform controls it).

## Key Numbers
Every critical number in one place. These become canonical sources
that all downstream documents reference. NEVER hardcode these
numbers elsewhere — always reference this document.
```

All numbers must be DERIVED from calculations, not invented.

## Step 3: Governance Documents

Based on what the business model revealed, produce the governance
documents that apply. Not every product needs all of these — produce
only what's relevant:

**If there are revenue splits or segregated funds:**
- Fund/pool governance (accumulation, permitted uses, prohibited uses, reporting)

**If there are customer agreements:**
- Agreement template (terms, rights, obligations, termination)
- Exit guarantee (what happens to customer data, assets, content when they leave)

**If there are partner/vendor relationships:**
- Partnership terms document
- API/integration dependency register (confirmed vs unconfirmed)

**If there are access control requirements:**
- Verification/identity protocol (who gets access, how identity is confirmed)

**If there's user-generated content or data:**
- Data ownership policy (who owns what, portability, deletion rights)

The exit guarantee deserves special attention. In extractive systems, exit is
punitive — you lose your data, your audience, your history. In coherent systems,
exit is clean — you leave with everything you brought and everything you built.
The exit guarantee is the single clearest signal of whether a system extracts
or sustains.

## Step 4: Gate Structure

Define security gates tied to business milestones. Adapt the gate
structure to the product — these are examples, not prescriptions:

```
GATE 1 — Before first external conversation
  What must be true before you talk to a customer, partner, or investor?

GATE 2 — Before first binding commitment
  What must be true before someone signs an agreement or pays?

GATE 3 — Before first real transaction or deployment
  What must be true before real money, data, or operations flow?
```

Each gate item must be:
- Specific (not "have a plan" but "rate structure documented with canonical source")
- Verifiable (someone can check whether it's done)
- Blocking (nothing past the gate until everything in the gate is complete)

## Step 5: Extraction Check

Before marking Frequency complete, run the extraction diagnostic:

1. **Energy audit:** Can you name exactly who generates the value in this system?
   Are they represented in the governance documents as stakeholders, not just users?
2. **Current ownership:** Does the business model build conduits (participants control
   their own distribution) or containers (the platform controls distribution)?
3. **Exit test:** If the primary value generators left, could they take their work,
   data, audience, and economic history with them?
4. **Proportionality test:** Does the economic model return value proportionally to
   who generates it?

If any answer reveals extraction, surface it to the user as a structural concern —
not a moral one. Extraction is high entropy. High entropy systems require constant
new energy sources because they degrade the ones they have. Coherent systems are
self-sustaining because they don't consume their own fuel.

## Step 6: Cross-Reference Check

Before marking Frequency complete:
- Every number mentioned in any document traces to one canonical source
- Agreement terms are consistent with business model economics
- Exit/termination terms cover all realistic scenarios
- Gate items are all actionable and verifiable
- No contradictions between documents
- Extraction check passed or concerns documented

## Step 7: Create Project Structure

Set up the project's ops directory:
```
[project]-ops/
├── CLAUDE.md                    (strategic context for AI sessions)
├── TODOS.md                     (gate structure + tracked items)
├── architecture/
│   └── business-model/
│       └── business-model.md
├── documents/
│   ├── governance/              (fund governance, exit guarantee, etc.)
│   └── agreements/              (agreement templates)
└── decisions/                   (empty — populated in /fw-current)
```

## Output

Tell the user what was produced, which gates are established, and:

"Frequency extracted. The governing truth is documented. Run /fw-current
to pressure test strategic decisions and lock direction before building."
