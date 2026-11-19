# Delta Futurism

A vision for the Arkansas Delta, and its first initiative: the **Arkansas Cypress Community Prosperity Partnership**, a proposal to Entergy Arkansas.

**Live:** https://face.works/delta-futurism · shared by link, not listed, `noindex`.

Delta Futurism and HUE's CACHE Creative Pathways are two sides of one coin. Delta Futurism attacks the energy and infrastructure side and is aimed at Entergy. CACHE attacks the creative and cultural side and is aimed at CACHE and Walton. They hold the same rigor and the same design grammar.

## Where things are

| Path | What it is |
|---|---|
| `examples/face.works/prototype/public/delta-futurism/` | **The site, and the only copy to edit.** Static HTML, served as-is by face.works. |
| ↳ `index.html` | The story: The Past → The Present → The Turning Point (Arkansas Cypress) → The Future (What It Makes Possible; What Life Could Become; What Remains) → How It Works |
| ↳ `proposal.html` | The proposal to Entergy, in eleven sections (see below) |
| ↳ `sources.html` | Every photo credit with its rights status, and every figure's source |
| ↳ `site.css`, `site.js` | Shared styles and behaviour: swipe rows, the latent-to-color effect, the kinds-of-work picker, the tools window |
| ↳ `fonts/` | Self-hosted Source Serif 4 and Libre Franklin (SIL OFL). face.works' security policy allows same-origin fonts only. |
| ↳ `img/` | Images. `f-*`, `f3-*` and `f4-*` are imagined (generated) images; `p-*` are present-day photos and portraits; the rest are archive photos. |
| `initiatives/delta-futurism/source/` | Working documents: `rebuild-plan.md` (structure, rules and settled decisions), copy decks, shot list, story research, image prompts, design context |
| `initiatives/delta-futurism/grok-review-prompt.md` | The prompt for an outside review by Grok |
| `examples/face.works/prototype/next.config.ts` | `/delta-futurism` redirects to `/delta-futurism/index.html`; `noindex` header on every page under it |

Family-private notes (the leave-behind with contact details and call notes, the solar lease record) stay in the private berdia-trust repo and are **never** copied here.

## The proposal, section by section

01 The opportunity (key facts) · 02 Projects are temporary, capabilities stay · 03 Five workstreams A–E (during the build, to size first, partners, measure, what it leaves) · 04 How one job runs (six steps) · 05 Who does what (partner cards) · 06 What we would run (tools window, example data labelled) · 07 Four phases keyed to the build · 08 Measured by what remains · 09 Precedent · 10 If things go differently · 11 What we're asking for.

## Settled decisions (don't relitigate without new evidence)

- **Three pages, one link** (Nov 19).
- **Proposal budgets: sized, not priced.** No dollar figures until the Entergy and contractor conversations (Nov 19).
- **Imagined images carry an "Imagined" tag.** Real photos replace them slot by slot, labelled "Already here" with a real caption (Nov 18).
- **The teacher frame uses `f3-library`**, and **the Gurley portrait** is credited to the Tulsa Historical Society (Nov 19).
- **Rights:** the current present-day photos are used as-is for link sharing (Nov 19). `sources.html` lists each one's status.
- **Design grammar (from CACHE):** swipe rows, not stacks, for any set of three or more images; no captions or credits under images (they live in `sources.html`); no placeholders; a headline on two lines; a bold sum-up line per chapter; the cover is the first screen.
- **Facts:** the proposal's figures were fact-checked on Nov 19 (see `sources.html`). Wanzek is the *reported* EPC contractor (Energy-Storage.news on APSC Docket 25-054-U). TIC is not tied to Arkansas Cypress. Jefferson County is not in Google's Energy Impact Fund area on the record.

## Open before this goes to Entergy

- Call Wanzek: how local suppliers prequalify.
- Call Southeast Arkansas College (870-543-5900): solar training offered, and price.
- Confirm the January and February construction dates in writing (today they're "as described to landowners").

## How to edit

1. Edit the files in `public/delta-futurism/` directly. Preview with the `face-works-prototype` launch entry and open `/delta-futurism`.
2. For outside review, give Grok `grok-review-prompt.md` plus the live link. Paste Grok's numbered edit list back into a Claude Code session in this repo, and it applies the edits.
3. Check accessibility: `./reports/a11y-audit.sh` audits these three pages along with the rest of the site (they're listed in its `UNLISTED_ROUTES`, because the sitemap leaves them out). Adding a page here without adding it to that list fails `npm test`. A point-in-time result: 0 axe violations at 1280 and 375 on Nov 19 (release 0.0.101). The manual screen-reader checks are `reports/at-test-script.md` §F.
4. Ship as a Facework release: branch, bump `VERSION`, add a `ROADMAP.md` row, open a PR, merge, then deploy face.works (`vercel deploy --prod --scope facework` from `examples/face.works/prototype`).

## History

Built Nov 10–11, 2026 as a claude.ai artifact. Moved into the private berdia-trust repo on Nov 18 (PRs 19–28). Rebuilt on CACHE's grammar on Nov 19 (PRs 32 and 34). Moved here and published at face.works/delta-futurism on Nov 19 (Facework 0.0.100). The old private artifact (`claude.ai/artifact/SAxXHmbyzFAFYSV4bcr9ET`) is superseded by the face.works link.
