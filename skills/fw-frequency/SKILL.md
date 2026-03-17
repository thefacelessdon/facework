---
name: fw-frequency
version: 2.0.0
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

## Revenue
Every revenue stream with:
- Who pays, how much, how often
- Unit economics (cost to serve vs revenue per customer)
- Sustainability threshold (how many customers to break even)

## Economics at Scale
Revenue projections at target scale.
Cost projections at target scale.
Margin analysis.

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

## Step 5: Cross-Reference Check

Before marking Frequency complete:
- Every number mentioned in any document traces to one canonical source
- Agreement terms are consistent with business model economics
- Exit/termination terms cover all realistic scenarios
- Gate items are all actionable and verifiable
- No contradictions between documents

## Step 6: Create Project Structure

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
