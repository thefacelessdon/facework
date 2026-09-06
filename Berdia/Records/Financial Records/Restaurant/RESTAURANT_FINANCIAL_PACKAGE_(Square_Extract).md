# Restaurant Financial Package — Square Extract

**Business:** Grider Field restaurant (Square location "Griderfield", Pine Bluff AR — id `8HXJW0X234FQC`, active since 2016-09-14)
**Prepared:** July 14, 2026 · **Source:** Square API (COMPLETED orders & payments)
**Purpose:** Give the CPA a verified starting point for the P&L, EBITDA, and lender package. Everything here is third-party (Square) data. Items Square cannot know are flagged as **[EXTERNAL — still needed]**.

> ⚠️ These are gross/net **sales** figures from the POS. They include only revenue rung through Square. They must be **reconciled to tax returns and bank statements** before use in a loan application. Cash not entered in Square, or catering paid by check outside Square, would not appear here.

---

## 1. Revenue (verified from Square)

"Net Sales" = gross collected − sales tax − tips (i.e., the restaurant's own revenue, with pass-through amounts removed).

| Year | Orders | Gross Collected | Sales Tax (liability) | Tips (to staff) | **Net Sales (revenue)** | Card % |
|------|-------:|----------------:|----------------------:|----------------:|------------------------:|:------:|
| 2024 | 20,210 | $577,216 | $51,701 | $10,168 | **$515,347** | 67% |
| 2025 | 21,537 | $644,287 | $64,002 | $16,238 | **$564,047** | 68% |
| 2026 (Jan–Jun) | 10,462 | $320,784 | $31,076 | $11,414 | **$278,294** | 70% |

- Year-over-year net sales growth 2024→2025: **+9.5%**.
- Monthly detail (all 30 months) is in `Square_Monthly_Financials_2024-2026.csv`.
- **Sales tax** (~$64K/yr) is collected on behalf of the state — a liability, not income. Confirm it is being remitted.
- **Tips** (~$16K/yr) flow to staff — not restaurant revenue, but relevant to payroll/tip reporting.

## 2. Expenses Square knows

| Item | 2025 | 2026 (Jan–Jun) | Notes |
|------|-----:|---------------:|-------|
| Square processing fees | $13,199 | $6,760 | 2.10–2.19% of card volume — a deductible expense |

*(2024 processing fees not yet pulled — can be added; expect ~$12K at the same rate.)*

## 2b. Labor — estimated from Square timecards

Computed as **paid hours × hourly wage rate** per shift (unpaid breaks removed), summed by year. Every shift had a wage rate on file, so hourly labor is fully captured.

| Year | Shifts | Paid Hours | **Est. Gross Wages** | % of Net Sales |
|------|-------:|-----------:|---------------------:|:--------------:|
| 2024 | 1,843 | 11,514 | **$143,290** | 27.8% |
| 2025 | 2,057 | 12,434 | **$158,935** | 28.2% |
| 2026 (Jan–Jun) | 1,093 | 6,619 | **$86,718** | 31.2% |

**These are hourly wages only.** To reach fully-loaded payroll COST, the CPA must add **[EXTERNAL]**: employer payroll taxes (~9–12% on top ≈ +$16K–$19K/yr), benefits, overtime premiums, and any comp paid outside Square timecards. Fully-loaded 2025 labor is therefore likely **~$175K–$180K**.

**Owner comp (EBITDA add-back) — NOT in the figures above.** Stanley (owner/operator) does **not** clock in via Square, so his compensation is **excluded** from the wage estimate. It must be pulled from external records (how Stanley is paid — salary/draws) and treated as a **separate EBITDA add-back**. Note: "Lee Harper" (3,980 hrs, ~$51,717) is **Stanley's brother — a regular employee**, so his wages are ordinary labor, correctly included above (not an add-back). ("Reneta Harper" shows 72 hrs — negligible.)

## 3. Bank reconciliation anchor (Square payouts)

| Year | Payouts to bank | Amount deposited |
|------|----------------:|-----------------:|
| 2025 | 246 | $421,033 |
| 2026 (Jan–Jun) | 121 | $214,554 |

These are the **net card deposits** Square sent to the operating bank account (card sales − fees − refunds). The CPA should match these against the bank statements. Note deposits (~$421K) are less than net sales (~$564K) because **cash sales (~30%) are deposited separately** and fees/refunds are already netted out.

## 4. Staffing signal

- **54 team members on file, 20 active** in Square. Hourly wages estimated in §2b above.
- **[EXTERNAL — still needed]** to convert the wage estimate to authoritative payroll COST: payroll registers + 941/940 filings (for employer taxes, benefits, overtime, and confirmation payroll taxes are current).

---

## 5. Draft P&L skeleton (2025) — for the CPA to complete

| Line | Amount | Source |
|------|-------:|--------|
| **Net Sales (revenue)** | **$564,047** | ✅ Square |
| COGS / food & beverage cost | ‑ [EXTERNAL] | Vendor invoices / bank — *typical 28–35% ≈ $158K–$197K* |
| **Gross profit** | = | |
| Labor — hourly wages (all employees) | ‑ $158,935 | ⚠️ Square estimate (hours × rate). **Add** employer payroll taxes (~$16K–$19K) + benefits [EXTERNAL] → fully-loaded ~$175K–$180K |
| Owner comp (Stanley) — EBITDA add-back | [EXTERNAL] | NOT in the wage figure — Stanley doesn't clock in. Pull his salary/draws separately; add back to raise EBITDA |
| Rent — Grider Field | ‑ [EXTERNAL] | The location lease |
| Card processing fees | ‑ $13,199 | ✅ Square |
| Utilities, insurance, supplies, repairs, other | ‑ [EXTERNAL] | Bank / vendor records |
| Owner compensation (Stanley) | ‑ [EXTERNAL] | How is Stanley paid today? |
| **= EBITDA** | **[to compute]** | Determines borrowing capacity |

Once the [EXTERNAL] lines are filled, EBITDA is the number that unlocks the $200K–$300K restaurant-backed loan.

---

## 5b. Preliminary EBITDA (2025) — planning estimate

> ⚠️ **PROVISIONAL.** Only Net Sales, Processing Fees, and the Labor wage base are grounded in data. **COGS, Rent, and Other opex are assumptions** (industry % of sales) pending Stanley's documents. This is a planning sketch, **not** for lender submission. Figure is **EBITDA before owner compensation** (≈ SDE) — Stanley's pay is added back / not subtracted, so it is the earnings available to service debt *and* pay the owner.

Legend: ✅ = from data · 🔶 = assumed

| Line | Conservative | **Mid** | Favorable | Basis |
|------|-------------:|--------:|----------:|-------|
| Net Sales | $564,047 | **$564,047** | $564,047 | ✅ Square |
| − COGS (food/bev) | 35% = $197,416 | **32% = $180,495** | 29% = $163,574 | 🔶 assumed % |
| − Labor (loaded) | $176,418 | **$176,418** | $176,418 | ✅ wages $158,935 + 🔶 ~11% employer tax |
| − Rent (Grider Field) | $45,000 | **$34,000** | $28,000 | 🔶 assumed (lease not yet in hand) |
| − Processing fees | $13,199 | **$13,199** | $13,199 | ✅ Square |
| − Other opex (utilities, insurance, supplies, repairs, admin) | 12% = $67,686 | **10% = $56,405** | 8% = $45,124 | 🔶 assumed % |
| **= EBITDA (pre-owner-comp)** | **$64,328** | **$103,530** | **$137,732** | |
| margin | 11.4% | **18.4%** | 24.4% | |

**Preliminary EBITDA (before owner pay): ~$64K–$138K, midpoint ≈ $104K (18% of net sales).**

- **Biggest swing = COGS.** The food/vendor invoices will move this figure more than anything else — a 6-pt COGS change is ~$34K of EBITDA.
- **Rent** is the next unknown; if the building is family-owned or low-rent, EBITDA rises toward the favorable case.
- Prime cost (COGS + loaded labor) is ~63% at the mid case — a realistic, slightly-tight restaurant number, which keeps this estimate credible.
- **What it means for borrowing:** the mid case (~$104K before owner comp) is broadly consistent with the plan's **$200K–$300K restaurant-backed loan** once a lender applies a DSCR and reserves a living wage for Stanley — but the real figure depends on COGS and how much owner comp is added back. Treat as directional.

*2024 runs a similar ~18–19% margin at the mid case (≈ $97K EBITDA on $515K net sales), so the two years are consistent.*

## 6. Still to gather (external — Square can't provide)

- [ ] **Federal business tax returns — last 3 years** (Schedule C or 1065/1120)
- [ ] **12 months of bank statements** — operating account(s)
- [ ] **Payroll registers + 941/940 filings** — hourly wages are now estimated (~$159K 2025); registers give the authoritative fully-loaded cost (employer taxes, benefits) and confirm payroll taxes are current
- [ ] **Entity / LLC formation docs + operating agreement** — confirm the restaurant's legal operating entity (sole prop, DBA, or LLC), needed for the trust/LLC transfer and loan borrower-of-record
- [ ] **Business license / permit** (current)
- [ ] **Grider Field location lease** — term, rent, renewal
- [ ] **Food/vendor invoices** — to establish COGS
- [ ] **Equipment leases / financing, and any existing debt**
- [ ] **Stanley's compensation arrangement** (salary/draws/%)

---

*Data pulled from Square on 2026-07-14. Figures are COMPLETED transactions only. Attachments: `Square_Monthly_Financials_2024-2026.csv` (monthly revenue, tax, tips, discounts, card/cash split).*
