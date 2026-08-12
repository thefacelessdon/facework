# Project Retrospective: The standards-first experience run (face.works, 0.0.39 → 0.0.43)

**Date:** 2026-08-11
**Duration:** Single session (continuous with the brand arc, 0.0.30 → 0.0.38)
**Scope:** Not a protocol run on a client — a **sovereignty-loop correction on
Facework's own public surface**, triggered live by one founder question during an
/impeccable critique: *"Where did 'a public record of attention' come from? That
isn't in the Standards Architecture."*

---

## What the run was

Five releases in one session, each squash-merged and deployed:

| Release | What landed |
|---|---|
| 0.0.39 | Canon docs served in full with provenance + `sync-canon` drift gate; ratified language ("A public record of coherence") + working-canon taxonomy; FW-DEC-002 decision record; FVS subordinated to the five-layer model |
| 0.0.40 | PROTOCOL §7 "v2" drift fixed (the gate's first live catch); indexing flipped on (the 0.0.28 preview `noindex` had survived launch) |
| 0.0.41 | The Holdings Ledger — self-counting Work surfaces + margin apparatus |
| 0.0.42 | Paper-seam chrome fix (0.0.29-era legacy tint behind the registers) |
| 0.0.43 | The Reading Margin — record block, honest word counts, Contents from the docs' own h2 spine; targeted AT walk card (T1–T7) |

Execution model throughout: parallel domain agents + an orchestrating thread that
briefs with exact ground truth, independently re-verifies every gate, and reviews
visually before anything ships.

## What worked

1. **The recorded-derivation workflow.** Provenance audit → canon extraction
   (quotes + citations only) → derivation chains → founder ratification →
   decision record (FW-DEC-002) → implementation. Language stopped being
   taste-adjudicated and became evidence-adjudicated. The tagline retirement was
   uncontestable because the chain was visible: canon names attention as the
   *extracted commodity*; the site had branded itself in the extractor's frame.
2. **The drift gate earned its keep same-day.** `sync-canon --check` was built at
   0.0.39; at 0.0.40 it failed the suite the moment PROTOCOL.md was edited,
   forcing the derived copy to resync. Infrastructure that defends canon on its
   first opportunity is the strongest possible validation of the derived-copy
   pattern (source authority stays at the root; the site carries checkable copies).
3. **Proven-pattern reuse compounds.** Ledger grammar (0.0.41) → reading margin
   (0.0.43) was a one-brief adaptation, not a redesign. Same for the asset
   generators (OG → social → deck → field note). Patterns that survive a second
   application are the ones worth keeping.
4. **Subagent scope-honesty held.** Agents flagged instead of guessing at
   boundaries (the naming rename outside its file list; the pre-existing
   protocol-v1 overflow measured identical on live main and *excluded* from an
   unrelated commit; the Postures legend deliberately omitted because its rows
   carry no markers). The orchestrator closed seams itself rather than re-briefing.
5. **One founder question outran every automated audit.** axe, vitest, grep, and
   three review passes all passed a tagline that inverted the theory it stood on.
   Only provenance interrogation caught it.

## What the run teaches (learnings)

1. **User-facing language needs a ratification gate at introduction, not
   post-hoc.** The GPT-era coinage survived 11 releases because adoption (0.0.29)
   recorded no derivation. Proposed rule: any load-bearing public phrase or
   taxonomy enters with a derivation record (or an explicit "unanchored — expires
   at next audit" mark). Candidate home: the decision-record practice itself;
   sovereignty call on whether it hardens into the Constitution's Art. VI orbit.
2. **"Reconciled" is weaker than "derived."** The 0.0.32 pass aligned the visual
   system's *content* to the locked identity but left its *conceptual frame*
   authoritative — the taxonomy and tagline rode through untouched. Frame
   subordination (who governs whom) is a separate act from content alignment,
   and the ruling had to name it explicitly.
3. **Launch-state flags need a checklist.** `noindex` survived a public launch
   because it lived in code as a preview-era default nobody re-derived at the
   moment of going live. A 3-line launch checklist (robots, canonical host,
   share images) would have caught it; the OG-image gap was the same class.
4. **Headless render traps are now documented** (in project memory + agent
   briefs): Chrome headless floors window width at 500px (use a real-viewport
   driver for mobile), rAF pauses in hidden panes (smooth-scroll and
   scroll-reveals never run), qlmanage pads to square. Two false findings this
   session came from render tooling, not the site; both were caught by
   verifying against the live DOM before acting.

## Open at close

- **T1–T7 assistive-tech walk** — parked by founder call ("not worth a lot of
  time at this moment"); stays the one open gate, honestly disclosed on
  `/accessibility`. Ten minutes with VoiceOver whenever convenient.
- **protocol-v1 mobile overflow** — in flight in a separate session (queued
  chip); needs one deploy after landing.
- **DESIGN.md contract sync** — the binding contract does not yet record the
  0.0.41/0.0.43 primitives (`ShapeMarker`, holdings line, `.rr-ledger*`,
  `.rr-margin*`, `.rr-contents`). Spec-follows-code drift of exactly the class
  this run existed to kill; small docs pass, first item next session.

## Methodology evolution (proposals, not decisions)

- Adopt the **language ratification gate** (learning 1) as standing practice for
  public surfaces.
- Add a **launch checklist** artifact to the ship workflow (learning 3).
- The **canon-extraction → derivation → ratification** sequence used here is a
  reusable sovereignty-loop instrument; worth naming in the loop model the next
  time it runs on a real dilemma.
