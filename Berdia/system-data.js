/* =============================================================================
   Monson Family Operating System — DATA (single source of truth)
   Plain-language, real values. Edit this file to update the live system.
   Keep this file LOCAL / un-deployed once the encryption gate is wired.
   Status values used across the app: ok | watch | pending | risk | idle | hold
   ========================================================================== */
const OS = {
  meta: {
    family: "Monson Family",
    title: "Family Operating System",
    asOf: "July 5, 2026",
    location: "Jefferson County, Arkansas",
    disclaimer: "Internal family working document. Not legal, tax, or investment advice. Figures are working estimates pending CPA and attorney confirmation."
  },

  phase: {
    current: 0,
    name: "Foundation",
    window: "Now — Summer 2026",
    deployed: "$0 deployed",
    capacity: "$657K–$857K+",
    summary: "No capital deployed, no debt taken. This phase builds the legal and financial infrastructure. The trust is not yet formed — that is the immediate priority, while Grandma holds full legal capacity and before solar income begins."
  },

  alert: {
    level: "risk",
    text: "The trust is not yet formed. Grandma is 88 — it must be executed while she holds full legal authority, and before solar income starts. The window is weeks, not months."
  },

  trust: {
    name: "Monson Family Operating Trust",
    type: "Revocable grantor trust (final structure pending CPA advice)",
    settlor: "Berdia Monson (b. 1937 · age 88)",
    trustee: "Stedmon Harper — Trustee & Trust Architect",
    successor: "Professional trust company, name TBD (hybrid model)",
    status: "risk",
    statusLabel: "Not yet formed",
    note: "Documents drafted; a recorded 1st Amendment and signed Side Letter exist. Awaiting attorney engagement and Grandma's execution."
  },

  assets: [
    { name: "Land", value: "~109 acres", owner: "Berdia Monson — sole title", status: "hold", statusLabel: "Permanent hold",
      detail: "109.01 ac in Jefferson County, AR; 94.75 ac under the solar lease.",
      note: "Not for sale under any scenario. The foundation of the estate and the collateral base." },
    { name: "Solar Lease", value: "$3.2M / 30 yr", owner: "Leased to Orion Renewables", status: "pending", statusLabel: "Pre-COD",
      detail: "$75,800/yr at commercial operation (94.75 ac × $800), 2% annual escalator.",
      note: "No income until COD. Summer 2026 targeted but may slip — tracking Orion for a firm date." },
    { name: "Restaurant", value: "$644K / yr", owner: "Berdia (title) · Stanley operates", status: "ok", statusLabel: "Operating · verified",
      detail: "Grider Field, Pine Bluff. 2025 gross, Square-verified; ~$630K trailing 12 months.",
      note: "Operating since 2016. To become a trust-owned LLC; Stanley to inherit and operate under a written agreement." },
    { name: "Life Insurance", value: "$161K / $137K cash", owner: "Berdia Monson", status: "watch", statusLabel: "In force · action needed",
      detail: "Prudential Variable Appreciable Life #98 727 915, in force since 1992.",
      note: "$173.51/mo premium (payer TBD — lapse risk). $7,290 policy loan outstanding. Living Needs rider. Change beneficiary to the trust." },
    { name: "Coin Collection", value: "TBD", owner: "Darius Harper (inheriting)", status: "pending", statusLabel: "Pending appraisal",
      detail: "Precious-coin set; appraiser identified.",
      note: "Must be appraised before trust placement; the value sets Darius's real-estate advance limits." }
  ],

  solarShares: [
    { name: "Berdia (Grandma)", pct: "50.00%", year1: "$37,900", flow: "Reinvested through trust" },
    { name: "Reneta Harper", pct: "16.67%", year1: "$12,630", flow: "Paid directly (unchanged)" },
    { name: "Charles Toliver", pct: "16.67%", year1: "$12,630", flow: "Paid directly (unchanged)" },
    { name: "Kim Fox", pct: "16.67%", year1: "$12,630", flow: "Paid directly (unchanged)" }
  ],

  committee: {
    rule: "Majority — 2 of 3",
    seats: ["Stedmon Harper (Trustee)", "A family beneficiary", "Outside advisor (TBD)"],
    approves: ["New borrowing over $50K", "Capital deployment to any LLC", "New LLC formation", "Related-party transactions"],
    routine: "Day-to-day operations, routine budgeted expenses, and the pre-defined solar distributions do not require a vote."
  },

  llcs: [
    { name: "Restaurant LLC", role: "Restaurant at Grider Field — $644K/yr", operator: "Stanley Harper", status: "ok", statusLabel: "Operating (converting to LLC)", comp: "Base draw + profit share", agreement: "To draft" },
    { name: "Ancillary Services LLC", role: "Solar-site vegetation, cleaning, maintenance (~$30–60K/yr)", operator: "Stanley Harper", status: "pending", statusLabel: "Phase 1 — pending", comp: "Smaller base + higher profit share", agreement: "To draft" },
    { name: "Real-Estate SPVs", role: "Deal-by-deal property acquisitions", operator: "Darius Harper", status: "pending", statusLabel: "Phase 1/2 — deal-by-deal", comp: "Fees + participation (~30–40% Darius)", agreement: "Per deal · TREC review" },
    { name: "Learning Institution LLC", role: "Speech-therapy practice", operator: "Kim Fox", status: "idle", statusLabel: "Phase 2 — potential", comp: "Base + profit share", agreement: "If approved" },
    { name: "Logistics LLC", role: "Logistics services", operator: "Charles Toliver", status: "idle", statusLabel: "Phase 2 — potential", comp: "Base draw + participation", agreement: "If approved" },
    { name: "Cross-LLC Operations", role: "Billing, reporting, compliance across every LLC", operator: "Reneta Harper", status: "pending", statusLabel: "Phase 1 — support role", comp: "Trust services agreement", agreement: "To draft" }
  ],

  capitalStack: [
    { source: "Square Capital", amount: "$72,500", status: "ok", statusLabel: "Approved — available now", note: "Underwritten off verified Square sales. High cost (~30–40% eff. APR). Short-cycle working capital only." },
    { source: "Life insurance cash value", amount: "~$137K", status: "ok", statusLabel: "Available", note: "Policy loan or surrender. Low cost; preserve if possible — surrender ends the death benefit." },
    { source: "Solar-backed loan (Grandma's share)", amount: "$200K–$250K", status: "pending", statusLabel: "Conditional", note: "Needs trust formed + lease assignment approved + 1.3× DSCR. ~$29K/yr max debt service on $37,900 income." },
    { source: "Restaurant-backed loan", amount: "$200K–$300K", status: "pending", statusLabel: "Conditional", note: "Needs 2 years of clean financials (CPA). Est. $120–150K EBITDA on $644K revenue." },
    { source: "Equipment / working capital", amount: "$50K–$100K", status: "pending", statusLabel: "Conditional", note: "On Phase 1 approval. Ancillary machinery, restaurant, or real-estate working capital." },
    { source: "Coin collection", amount: "TBD", status: "idle", statusLabel: "Pending appraisal", note: "May raise capacity if appraised over $100K." }
  ],
  capitalNote: "Total platform capacity $657K–$857K+, none deployed. Land is the collateral base, never sold. Prioritize bank facilities (7–8%) over Square Capital (30–40% eff. APR).",

  gates: {
    p0to1: {
      title: "Phase 0 → 1 — Foundation complete",
      status: "0 of 10 cleared",
      items: [
        "Trust legally formed, executed by Grandma, recorded",
        "All assets transferred in (deed, lease assignment, restaurant LLC, insurance beneficiary)",
        "Coin collection appraised and valued",
        "Restaurant financials cleaned (2-yr P&L reconciled to returns + bank)",
        "Solar lease assignment confirmed legal (Orion allows trust ownership)",
        "Grandma's legal capacity confirmed (physician letter if advised)",
        "All beneficiaries received and signed the trust document",
        "CPA engaged; tax structure determined",
        "Family info + SSNs collected",
        "Advisory Committee finalized; first meeting scheduled"
      ]
    },
    p1to2: {
      title: "Phase 1 → 2 — Capital deployed, performing",
      status: "gated by Phase 1",
      items: [
        "All Phase 1 debt service current",
        "Restaurant EBITDA ≥ 1.0× debt service",
        "Ancillary Services winning contracts (≥ $15K revenue)",
        "Darius: 12 mo licensure, 5–10 closed deals, advances repaid",
        "Square Capital fully repaid",
        "Trust reserves ≥ $50K–$100K",
        "Solar COD confirmed, income flowing"
      ]
    }
  },

  deadlines: [
    { item: "Trust formation", when: "Now — Summer 2026", level: "risk", why: "Grandma is 88; solar income starts summer. Restructuring gets far harder once money flows. Weeks, not months." },
    { item: "Restaurant financials cleanup", when: "Now", level: "watch", why: "Two years of clean P&L required before lenders fund $200–300K." },
    { item: "Coin appraisal", when: "Now", level: "watch", why: "Must complete before trust placement; sets Darius's advance limits." },
    { item: "Solar COD", when: "Late 2026+ (Orion TBD)", level: "watch", why: "Income timing uncertain; gates Phase 1 clearance." },
    { item: "Insurance premium ($173.51/mo)", when: "Ongoing", level: "risk", why: "A lapse triggers a taxable event and loss of the benefit. Confirm the payer." },
    { item: "Policy loan ($7,290)", when: "Decision pending", level: "watch", why: "Reduces both cash value and death benefit while outstanding." }
  ],

  // status: done | progress | todo ; owner: who holds it
  checklist: [
    { id: "c1", text: "Family meeting held (Apr 12, 2026)", owner: "Family", status: "done" },
    { id: "c2", text: "Plan documented", owner: "Stedmon", status: "done" },
    { id: "c3", text: "Restaurant revenue verified via Square", owner: "Stedmon", status: "done" },
    { id: "c4", text: "Life insurance policy located + analyzed", owner: "Stedmon", status: "done" },
    { id: "c5", text: "Solar lease reviewed (acreage + terms confirmed)", owner: "Stedmon", status: "done" },
    { id: "c6", text: "Attorney engagement", owner: "Kim (Kimberly Stepps)", status: "progress" },
    { id: "c7", text: "Restaurant financials cleanup", owner: "CPA / Stanley", status: "progress" },
    { id: "c8", text: "Coin appraisal scheduled", owner: "Darius", status: "progress" },
    { id: "c9", text: "Family info collection (SSNs, contacts)", owner: "All beneficiaries", status: "progress" },
    { id: "c10", text: "1099 filing for income recipient", owner: "Kim / Stanley", status: "progress" },
    { id: "c11", text: "Attorney review: solar lease assignment rights (Orion)", owner: "Attorney", status: "todo" },
    { id: "c12", text: "Trust document + LLC operating agreements drafted", owner: "Attorney", status: "todo" },
    { id: "c13", text: "Land deed transfer prepared", owner: "Attorney", status: "todo" },
    { id: "c14", text: "Life insurance beneficiary change to trust", owner: "Stedmon", status: "todo" },
    { id: "c15", text: "Policy loan decision (repay vs leave)", owner: "CPA / Attorney", status: "todo" },
    { id: "c16", text: "Restaurant LLC formation", owner: "Attorney", status: "todo" },
    { id: "c17", text: "Restaurant management agreement (Stanley)", owner: "Attorney", status: "todo" },
    { id: "c18", text: "Ancillary Services LLC formation", owner: "Attorney", status: "todo" },
    { id: "c19", text: "Real-Estate SPV template + TREC review", owner: "TX Attorney", status: "todo" },
    { id: "c20", text: "Advisory Committee charter", owner: "Stedmon", status: "todo" },
    { id: "c21", text: "Grandma capacity confirmation (if advised)", owner: "Attorney / MD", status: "todo" },
    { id: "c22", text: "CPA engagement letter", owner: "Stedmon", status: "todo" },
    { id: "c23", text: "Bi-weekly family meetings scheduled", owner: "Stedmon", status: "todo" },
    { id: "c24", text: "Confirm Grandma's prior solar payments complete (Orion / James)", owner: "Stedmon", status: "todo" }
  ],

  decisions: [
    { item: "Year-one solar: reinvest all ($75.8K to trust) vs. distribute per split", status: "Pending family vote", when: "At / before COD" },
    { item: "Successor trustee identity (institution)", status: "Pending attorney discussion", when: "Before formation" },
    { item: "Attorney firm (current lawyer vs. new)", status: "Pending Kim confirmation", when: "Immediate — blocking" },
    { item: "CPA firm", status: "Pending engagement", when: "Immediate — blocking" },
    { item: "Coin value → dedicated collateral vs. general asset", status: "Pending appraiser", when: "Apr–May 2026" }
  ]
};

if (typeof window !== "undefined") window.OS = OS;
