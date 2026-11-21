# Delta Futurism / Built to Stay: checkpoint, Nov 20 2026

Pick-up note for the next session. This repo is public: family-private items (lease, POA, contacts, call notes, email drafts) live in the private berdia-trust repo (`docs/HANDOFF-2026-11-20.md` there), never here.

## Where it stands

- **Live:** https://deltafuturism.com (story) · https://deltafuturism.com/built-to-stay (proposal) · `/built-to-stay/apex` · `/built-to-stay/uapb` · `/sources`
- **Version:** 0.0.130 on `main`, live and merged (PRs #154–#160 today). Nothing is waiting to deploy or merge.
- **Scope now:** Built to Stay covers **both** of Entergy's Jefferson County builds: Arkansas Cypress (600 MW solar + 350 MW battery, $1.6B, Docket 25-054-U, in service Dec 2028) and Jefferson Power Station (754 MW gas at White Bluff, about $1.5B, Docket 25-047-U approved Jan 28 2026, construction started June/July 2026, "around four years," opening by 2030).

## The proposal, as it stands (proposal.html)

Hero → **01** Entergy has committed to local first ($3.1B across two plants; 700–800 at each peak; $174M non-property taxes; $9.6M Cypress yr-1 property tax) → **02** From the Vendor Fair to a Contract (vertical five-step path) → **03** Five workstreams: an inline explorer (tiles are tabs; walkthrough + "Size it yourself" calculator render in page flow; deep links `#ws-a`…`#ws-e`) → **04** What Grows Around It (headline numbers, without/with chart, business cluster, section calculator, "the lights are the least of it", Delta keep-score standard, method in a closed `<details>`) → **05** Roles → **06** Measured every month → **07** Keyed to the build → **08** Three asks → Team ("A Family on the Land. A Team That Runs Operations.").

Both pages now use static grids only (story page converted in 0.0.131). Design rules settled by the owner (don't relitigate): **no horizontal side-scroll rows, no popups/modals, no letter labels A–E, no "worked example" flags, no tables**; static `.xgrid` card grids, `.fpath` vertical path, `.wsx` inline explorer; single point numbers (no ranges on the page); page voice is "we" (no first person; Built to Stay speaks for itself, never for other landowners).

## The impact model (one source of truth)

`site.js` → `BTS_MODEL` (search `Built to Stay impact model`). Point values only; every input is a slider.

- **Staffing model:** `CURVES.C` (Cypress, 29 months, peak 775 Sep 2027) + `CURVES.J` (Jefferson, 48 months Jul 2026–Jun 2030, peak 750 Oct 2028). 26,892 worker-months; combined peak 1,083 (Nov 2027). Both shapes are our design; the contractors' schedules replace them.
- **Workstreams** `A` workforce, `C` suppliers, `B` crew meals, `E` resilience, `D` landowner (count only). Each part is tagged `C`/`J`/`B` (both, split by worker-months). Levers have `base` (without a program) and `prog` (with Built to Stay).
- **County view** `runAll()`: baseline = without-program lines + Cypress property tax ($9.6M falling to 20% by yr 30 = $173M; district keeps ~$70M after the 25-mill state offset) + $8.8M county sales tax; ripple ×1.30 on private dollars only.
- **Current outputs:** Built to Stay adds **$157M** ($62M during the builds, $95M after; $72M Cypress, $85M Jefferson); county keeps $486M ($329M either way); cents kept 2.5¢ → 4.3¢; county residents at combined peak 130 → 325.
- **Static text is baked from the model.** After any model change: load the page, read `[data-sum]` values, write them into the HTML (see the regex pattern used in prior commits), so the page reads right with scripts off.

## How to work on it

- Branch from `origin/main` in a worktree under `~/projects/Facework-worktrees/`. Commit trailer: `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`; PR body ends with the Claude Code line.
- Every PR: bump `VERSION`, add a `ROADMAP.md` row, update `sources.html` for new facts.
- Verify: local static server on the site folder, axe-core 4.10.2 (cdnjs) in-browser with each workstream tab open (wait ~3 s for the stamp animation or it false-flags contrast), check no overflow at 375 px.
- **Deploy:** `bash initiatives/delta-futurism/deploy/deploy.sh` (prod, alias deltafuturism.com). Then curl the six routes and load `/built-to-stay#ws-b` to check the chart and calculator.
- **Merge only when the owner says "Merge it."** Wait for the required `review` check (`gh pr checks <n> --watch`), then `gh pr merge <n> --merge`. Auto-merge is not allowed.

## Open facts

- **Researched and on the page:** Cypress site near Pastoria (~34.358°N, 92.040°W) is in the **Pine Bluff School District** (Census geocoder; land to the west may be White Hall). No public payment-in-lieu-of-tax record for Cypress (GAJA-financed). Jefferson's 700–800 peak confirmed (Entergy); Entergy also cites ~1,600 at peak across both. TIC lists **TSL Power Partners (TIC + Sargent & Lundy) with Mitsubishi Power Americas** as Jefferson's EPC team.
- **Parked until after the holidays** (owner's call; don't keep proposing these): whether TSL's EPC agreement is signed; whether Cypress later gets a PILOT; the contractors' actual staffing schedules.
- **Weakest assumptions** (marked in the method block): residents still in the trade ($12K/yr × 10 yrs, 35% → 55%), firms' follow-on work ($150K/yr × 10 yrs, 4 → 15 firms), ripple 0.30, Jefferson's curve shape.

## Next moves (recommended order)

1. Team members (Chelsa Savage, Bjorn Simmons, Corey Ealy, Michael Watson II) confirm their names and one-line roles on the live team section.
2. Section 06 "Measured every month" could point to the new keep-score standard in section 04 instead of repeating it.
3. When the contractors' schedules surface, replace `CURVES.C` / `CURVES.J`, re-bake the static numbers, redeploy.
