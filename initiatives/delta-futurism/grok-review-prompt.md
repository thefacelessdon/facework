# Grok review prompt: Delta Futurism

Paste everything below the line into Grok. If Grok can't open links, attach `index.html`, `proposal.html` and `sources.html` from `examples/face.works/prototype/public/delta-futurism/` instead.

---

You're reviewing a three-page site before it goes to a utility company. Be a hard, specific editor. Praise is useless to me; changes I can make are what I want.

**The pages**
- Story: https://face.works/delta-futurism/index.html
- Proposal: https://face.works/delta-futurism/proposal.html
- Sources and credits: https://face.works/delta-futurism/sources.html

**What it is.** *Delta Futurism* is a vision for the Arkansas Delta (Pine Bluff and Jefferson County, Arkansas). The story page walks the past (1930s archive photos), the present, the turning point (Arkansas Cypress, a 600 MW solar plus 350 MW battery project now under construction), the future (what reliable power nearby makes possible, from the river to the kitchen table), and how the work gets done. The proposal page is a discussion draft to **Entergy Arkansas's landowner relations team**, from a landowner family on the project. It proposes a *Community Prosperity Partnership* with five workstreams: energy workforce, local food and hospitality, local suppliers, voluntary landowner prosperity, and community resilience.

**Who reads it, and what they must do after reading**
1. An Entergy landowner-relations or community-affairs manager: agree to a first meeting and make introductions (the contractor, supplier development).
2. The project's construction contractor: see local suppliers and workers as low-risk and useful.
3. Family and local partners: understand the vision and their place in it.

**Rules the site follows on purpose (don't suggest undoing them)**
- Budgets are **sized, not priced**: no dollar figures yet.
- Images marked "Imagined" are generated stand-ins until real photos are made.
- No captions or credits under images; credits live on the sources page.
- Image sets swipe sideways rather than stacking.
- It's a discussion draft. It must never imply Entergy, the contractor or Google has agreed to anything.
- No private family figures (rent, acreage, payment dates).

**Review these, in this order**
1. **Will the Entergy reader say yes to a meeting?** What's the strongest reason they'd decline, and what change removes it?
2. **Proposal rigor.** Is each workstream concrete enough to act on? What's missing that a utility would expect: governance, who staffs it, data privacy, reporting, liability, how this fits Entergy's existing supplier and community programs?
3. **Claims.** Flag any sentence that overstates a fact, implies a commitment, or needs a source. Quote it exactly.
4. **The story.** Where does it drag, repeat itself, or lose the thread from the 1930s past to the proposal? Is the turn from story to proposal clear?
5. **Images.** Name any image that undercuts credibility (looks fake, wrong place, wrong era) and what kind of image should replace it.
6. **Words.** Headlines over two lines, jargon, anything a Pine Bluff resident or an Entergy manager would find off-key.
7. **Phone.** Anything that would read badly on a phone.

**Output format (important: your edits will be applied by an AI coding agent, so be exact)**

Start with a three-line verdict: ready to send / needs work / not ready, and the single biggest fix.

Then a numbered edit list. One edit per item, in this form:

```
#<n> [P1|P2|P3] <page: index | proposal | sources> · <section, by its heading as shown on the page>
FIND: "<exact text currently on the page, copied word for word>"
REPLACE WITH: "<your new text>"    (or REMOVE, or ADD AFTER: "<new text>")
WHY: <one sentence>
```

- P1 = fix before sending to Entergy; P2 = should fix; P3 = polish.
- For an image change, use `IMAGE:` instead of FIND/REPLACE: name the current image by what it shows, and describe the replacement.
- For something that needs new content rather than an edit (for example a governance section), use `NEW:` with the section heading and the full draft text.
- No more than 30 items. Put P1s first.

End with up to five questions you'd want answered before this goes out.
