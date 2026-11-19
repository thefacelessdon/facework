# Delta Futurism rebuild plan

**Draft 2026-11-19, for Stedmon's approval before any rebuild.** Written from Stedmon's Nov 18 review notes, a study of the CACHE Creative Pathways site (HUE-Unlimited `Client Projects/Cache/pathways-site`, v0.8), the Nov 5 Arkansas Cypress concept note and the Nov 4 Entergy liaison research.

Delta Futurism and CACHE Pathways are two sides of one coin. Delta Futurism is the energy and infrastructure side, aimed at Entergy. CACHE is the creative and cultural side, aimed at CACHE and Walton. They should hold the same rigor and the same grammar.

---

## 1. What's wrong now (from the review)

1. **The story is split.** The Land, The Build and What Remains sit in the Arkansas Cypress view. They belong in the main Delta Futurism story.
2. **"What it makes possible" is in the wrong place.** River → road → rail → street → home was meant to be part of the main story's future, not tucked into the proposal view.
3. **The future looks like the past.** "What life could become" still leads with the old images: a run-down town with solar panels on old shacks. The new images were made to replace them, not sit beside them.
4. **The proposal is thin.** It's a list of five areas and four phases. The concept note has eight sections, and the research names real programs, partners and precedents.
5. **Credits and sources eat space.** Captions and credit lines under every photo, plus a long sources footer.
6. **Gaps.** Two of three "Ideas that traveled" people have no portrait. Three "Still to photograph" frames are empty. Some sections have no image at all.
7. **Endless scroll.** Image sets stack vertically instead of swiping.

## 2. Rules carried over from CACHE

| Rule | From CACHE | Applied here |
|---|---|---|
| **Separate jobs, separate pages** | Story page has no numbers; the plan and figures live on their own pages; the funder's case is its own page | **Story page** (Delta Futurism) + **proposal page** (Arkansas Cypress) + **sources page**, all inside one private artifact link |
| **Swipe, don't stack** | Any set of 3+ images is a horizontal swipe with the next card peeking (`.way-swipe`, `.gap-row`); single images only for covers and cards | Every set of 3+ images becomes a swipe |
| **No captions or credits on the page** | P13; sources in data, one quiet "Sources" link at the foot | Credits and sources move to `sources.html`. Cards carry one line at most |
| **Chapter anatomy** | Number · headline that fits on two lines · lead line · one visual · bold sum-up line | Same anatomy for every chapter |
| **No placeholders** | Dashed boxes "read as a wireframe"; "missing half" imagery "not acceptable" | Every frame has an image |
| **Every number earns its place** | One source file for numbers, assumptions stated beside every figure | One numbers block in the proposal, with assumptions and sources |
| **Cover is the first screen** | Full-height cover, words in a box under the photo, never over it | Same for both pages |
| **Phones** | Checked at 375 and 1440; headlines on two lines | Same |

**Concept-image label.** CACHE's no-captions rule clashes with marking imagined images. Use a small **"Imagined"** tag on the image corner instead of a caption line. Real photos carry no tag.

## 3. The story page (Delta Futurism)

One spine: **the past, the present, the turning point (Arkansas Cypress), what it makes possible, what life could become, how it works.**

| # | Chapter | What it says | Visuals |
|---|---|---|---|
| Cover | **Delta Futurism.** A new vision for life in the Delta | First screen | One cover image |
| 1 | **The Past: Ideas That Traveled** | The Delta shaped how the world works, moves and makes culture | River, road, field, home, gathering, work and Saturday night as one **swipe**. Gurley, Haynes and Williams as **three portrait cards** |
| 2 | **The Present: People Already Here** | The next chapter has people in it already | **Swipe**: neighbors, gathering, Arsenal work, musician, teacher, business opening |
| 3 | **The Turning Point: The Land, The Build** | Arkansas Cypress arrives. Follow the electricity and the money | Land (Walker barn), the build (solar field), "Follow the electricity / the money", kinds-of-work picker |
| 4 | **What It Makes Possible** | Reliable power nearby works like a river or a road | River → road → rail → street → riverfront → home, as **one swipe** with one line per card. Bold sum-up: *"All of it ends at a kitchen table."* |
| 5 | **What Life Could Become** | Four chapters: homes and main streets, culture, learning, what holds it together | **Two images per chapter, new images only.** The cotton-gin apprentices stay: there's a real gin behind the house |
| 6 | **What Remains** | When the lease ends, the land is still the families', and the skills, businesses and backup power are still in the county | Thirty years in layers (Year 5, 15, 30) with images |
| 7 | **How It Works** | Vision → practice → initiatives. One card: **Arkansas Cypress → read the proposal** | Initiative card with an image |
| Foot | Sources link | | |

**Cut from the story page:** "Who owns the ground?" as its own section. Fold its point into chapter 3. The "Development" darkroom hinge goes too, unless it gets a visual.

## 4. The proposal page (Arkansas Cypress Community Prosperity Partnership)

Built from the concept note's eight sections, with CACHE's proposal components. It reads as a proposal to Entergy, not a story.

| # | Section | Content | Component (CACHE equivalent) |
|---|---|---|---|
| Cover | **From Infrastructure Investment to Community Capability** | Who it's from, who it's for, discussion-draft status | Cover |
| 01 | **The Opportunity** | 600 MW solar + 350 MW / 1,400 MWh battery near Sherrill; construction under way; Entergy's call for local vendors; about 1,600 peak jobs across both projects; operation targeted 2028 | Key-facts row |
| 02 | **The Framework** | Projects → capabilities: a contract → a procurement-ready business; a job → transferable skills; a lease → productive assets; a plant → lasting community capability. Selective decentralization: the utility owns generation, local businesses supply, institutions train, families decide | Two-column "creates → leaves" table |
| 03 | **Five Workstreams** | A–E, each card with: what the build needs, what it leaves, partners, first step, measure | **Swipe of five cards** (aim cards) |
| 04 | **How a Job Runs** | One worked example (a local caterer feeding a crew): register → prequalify → bid → deliver → invoice → next contract | **Walkthrough** with numbered steps |
| 05 | **Who Does What** | Entergy, the EPC contractor, training partners (Arkansas Advanced Energy Foundation, Southeast Arkansas College), local businesses, landowners, community institutions | **Partner cards** |
| 06 | **What We'd Run** | The operating system: vendor readiness tracker, prequalification checklist, workforce pipeline, landowner education calendar, outcomes dashboard | **Tools view** (like Rosa's Home) |
| 07 | **Phases** | Discover (now to Jan 2027) → Pilot (from civil work, Feb 2027) → Grow (2027–28) → Share (2028) | **Timeline** with a "now" marker |
| 08 | **Measures** | Household earnings, retention, advancement, local enterprise revenue, assets formed, services kept on | Measures row |
| 09 | **Precedents and Funding** | Google's $25M Energy Impact Fund (Crittenden County); the $8M Steel River community commitment; Entergy's Second-Tier supplier program. **To verify first** | Cards |
| 10 | **What We're Asking** | Five asks: open food, workforce and supplier opportunities; the right Entergy and contractor contacts; existing commitments; interest in a voluntary landowner program; a process for resilience projects | Numbered ask list |
| Foot | Status, risks with fallbacks, Sources link | "If the build moves faster than the pilots: …" | Fallback lines |

**Kept out on purpose:** any one family's rent, acreage, check dates or private plans.

## 5. Images: everything filled, nothing stacked

| Gap | Fill |
|---|---|
| **J. Mayo Williams** portrait | 1920 portrait, tagged public domain on English Wikipedia (`upload.wikimedia.org/wikipedia/en/b/b2/Mayowilliams.jpg`). The tag isn't verified; a Brown yearbook (*Liber Brunensis*, ~1920) photo is a stronger public-domain source to check |
| **O. W. Gurley** portrait | No free portrait found. Use the Tulsa Historical Society portrait (item 2002.255.001) **for the private link only**, and request permission before public use. Clearly free fallback: the CC BY 4.0 Greenwood sidewalk marker for his building |
| **Musician at work** | R3 `09_50_41` (musicians at keys, guitar, djembe), tagged Imagined |
| **Business opening its doors** | R3 `09_51_31` (a woman opening workshop doors), tagged Imagined |
| **Teacher and students** | No unused image fits. Options: move `f3-library` (a woman and girl at a map) here and give future chapter 3 a different second image, or generate one more image |
| **Future chapter 1** ("Main streets and homes") | Replace the old two (`f-mainstreet`, `f-home`) with the new ones (`f3-market`, `f3-cottages`, or `f4-mainstreet`) |
| **Sections with no image** | "How it works", the initiative card and "Thirty years" each get one image |
| **The promise on the page** | The n-people text promises "We won't fill them with anyone made up". Rewrite it to say those frames show **imagined** people until real photographs replace them |

## 6. Decisions (settled by Stedmon, 2026-11-19)

1. **Structure: approved.** Story page plus proposal page plus sources page, in one artifact.
2. **Budget: sized, not priced.** Each workstream shows what it needs (crews to feed, trainees, suppliers to prequalify), with sources. Dollars stay open until the Entergy and contractor conversations.
3. **Teacher frame:** move `f3-library` there. Future chapter 3 gets a different second image.
4. **Gurley portrait:** use the Tulsa Historical Society portrait on the private link. Request permission before the page goes public.

## 7. How it gets built

- Static HTML stays (it publishes as one artifact; no framework needed). `proposal.html` and `sources.html` sit beside the story page.
- One PR per page: story first, then proposal, then sources and credits. Each is checked at 375 and 1440 before merging.
- The proposal's facts get re-verified before it can go to Entergy: the Wanzek EPC role (reported from Arkansas PSC filings), the Google fund eligibility and the Steel River figure.
