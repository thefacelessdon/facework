# Facework — External Dependencies and Sovereignty Mitigation

Version: 1.0
Date: 2026-03-24

---

## Principle

The protocol demands creator sovereignty — no lock-in, no proprietary
dependencies, clean exit. Facework must practice this principle on itself.
This document maps Facework's own external dependencies, classifies their
risk, and defines mitigation postures.

---

## Dependency Map

### Tier 1: Critical — Requires Mitigation Plan

**Claude Code / Anthropic API**

| Aspect | Detail |
|--------|--------|
| What | AI backbone for all /fw-* skills. Agent generates governance docs, specs, playbooks, prototypes, audits. |
| Role | Engagement delivery at the speed and price point the business model assumes (5-8 days, $10K-$25K). |
| Cost | $200–$500/month (current) |
| Break threshold | ~$1,500/month (engagement economics become strained above this) |
| Lock-in risk | HIGH — without Claude Code, delivery time balloons from days to weeks, capacity drops from ~2/month to ~0.5/month, pricing must increase 2-3x |

**Mitigation postures:**

- **Plan A (preferred):** Monitor Anthropic pricing and terms quarterly.
  Maintain awareness of alternative LLM providers (open-weight models,
  competing APIs) that could run the /fw-* skills.
- **Plan B (if price 3x+):** Hybrid model — agent handles generation and
  cross-referencing, human does more spec writing. Engagement price rises
  to $20K-$40K range. Capacity drops to ~1/month.
- **Plan C (if discontinued):** The protocol is open. The skills are
  documented. A human can run every phase manually — it's slower and more
  expensive, but the methodology doesn't require AI. Pivot to licensing
  the methodology to studios who provide their own tooling.

**The coherence check:** The protocol can be implemented without Claude Code.
The agent skills make it faster and more consistent, but they are the
commercial layer, not the protocol itself. This distinction must be
maintained: if the tooling disappears, the standard survives.

---

### Tier 2: Important — Moderate Migration

**GitHub**

| Aspect | Detail |
|--------|--------|
| What | Version control + creator deliverable hosting |
| Role | Engagement handoff: repos transferred to creator's GitHub account |
| Lock-in risk | LOW — format is Git (portable). Creator can use GitLab, Gitea, or private git. |
| Mitigation | Exit guarantee specifies "Git" not "GitHub." Migration is a conversation, not a crisis. |

**Vercel**

| Aspect | Detail |
|--------|--------|
| What | Hosting for face.works |
| Role | Public protocol site, proof, engagement entry point |
| Lock-in risk | LOW — Next.js static exports to HTML. Can move to Netlify, Cloudflare Pages, GitHub Pages, or self-hosted. |
| Mitigation | Maintain static export capability. Test `npm run build` produces deployable output to any host. |

**Payment Processing (Stripe or equivalent)**

| Aspect | Detail |
|--------|--------|
| What | Invoice and collect engagement fees |
| Role | Revenue collection ($10K-$25K per engagement) |
| Lock-in risk | LOW — standard payment processing. Multiple alternatives (PayPal, Square, wire transfer). |
| Mitigation | Don't build custom integrations with any single processor. Keep invoicing simple. |

---

### Tier 3: Operational — Easily Replaced

| Dependency | Risk | Mitigation |
|-----------|------|-----------|
| Domain registrar (face.works) | Low | Standard domain management. Keep registration current. |
| Email provider | Low | Multiple providers available. No custom integrations. |
| Design/dev stack (Next.js, Tailwind) | Low | Standard, open-source, widely supported. |

---

## The Sovereignty Test (Applied to Facework)

> If Anthropic deprecated Claude Code tomorrow, could Facework continue
> to serve creators?

**Answer:** Yes, but slower and more expensively. The protocol is open.
The methodology is documented. Every phase can be run by a human without
agent tooling. The commercial advantage (speed, consistency, price point)
depends on Claude Code, but the protocol's value (coherence, sovereignty,
extraction prevention) does not.

> If all external dependencies failed simultaneously, what survives?

**What survives:**
- The open protocol spec (Markdown files, no dependencies)
- All creator deliverables (Git repos, Markdown docs, open formats)
- The methodology documentation
- The decision records and governance docs
- The conformance model

**What doesn't survive:**
- The face.works website (needs hosting)
- Agent-native engagement delivery speed
- Automated cross-referencing and consistency checking

---

## Review Schedule

Check this document quarterly. Update dependency costs, risk assessments,
and mitigation postures. If any Tier 1 dependency changes terms, trigger
a review immediately.
