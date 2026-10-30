---
status: proposal (Experimental)
extends: FVI-400 motion signature (Exchange Resolve), DESIGN.md §9, FVS-800
traces_to: FN-01 (NYT), FN-02 (Prada), FN-03 (Public Records), FN-07 (SoundCloud)
---

# 05: Motion principles

The references are motion, so the system has to be specified in motion. The Times
had the numerals (XYZ Type) and the motion (Kiffer Keegan) designed under "the
same brief," with the two teams working together (FN-01 §4, via The Brand
Identity). Facework's mark already has a motion signature: **Exchange Resolve**
(FVI-400), with `--rr-ease-settle` and draw-in/settle. These principles **keep
that signature** and add what the sources show it's missing.

## P1: The mark holds; the record moves

*From FN-01 §2/§4:* across 12 seconds and 48 samples, the Times wordmark never
moves while the evidence around it changes 4–8 times a second.

- The Coherence Mark and wordmark **never take part in content motion.** Once
  settled, they hold position through every transition on the page.
- Content (blocks, notes, sources) is what moves.
- **Full-film evidence (FN-01 third pass):** the 175 lockup arrives on a **hard
  cut, complete**, at about 1:11.0 and holds about 2 s. The lines before it type
  on; the mark itself never moves.
- **Open question for Stead:** Facework's canon gives the mark one draw-in/settle
  (FVI-400, 520ms). The Times shows the stronger move: the mark is never
  animated, it simply *arrives*. Recommendation: keep the draw-in **only** for
  the mark's own identity moment (site first load, the identity sting), and
  **cut the lockup on, complete, everywhere else**, as the end card does. Never
  looped, pulsed or used as a loader.

## P2: Two clocks, cut and settle

*From FN-01 §4 (hard cuts) and FVI-400 (settle):*

| Clock | Used for | Behavior | Source |
|---|---|---|---|
| **Cut** | Swapping evidence: next block, next note, next frame of a sequence | Instant replace. No fade, no slide. A sequence may cut at 120–250ms per item (`--rr-motion-immediate` to `quick`). | FN-01: collage items swap on hard cuts |
| **Settle** | State change: open→issued, Field→Record, a block becoming noted | `--rr-ease-settle`, `standard`/`signature` duration, transform and opacity only | FVI-400, existing |

Never mix them on one element. Nothing bounces, eases in from a cut, or
cross-fades evidence.

## P3: The attention box

*From FN-01 §4 and the full film (0:38–0:42):* the Times' thin orange squares are
**verification marks**. They frame faces in footage and points on satellite
images while a story is being checked.

- A **1px verdigris rectangle** that cuts (P2, Cut clock) to whatever is being
  read or cited: the block a finding cites, the line a margin note refers to.
- It's the motion form of the rule "verdigris marks the attended state," and, as
  the Times uses it, it means *this is being checked*. Use it on the evidence a
  finding cites, never as decoration. It never animates its size or position
  smoothly; it jumps.
- Used in film or social cuts and on hover/focus in an Index view. Never more
  than one on screen.

## P4: Accretion

*From FN-03 §3 and FN-01 full film:* the Public Records lineup grows node by
node along connecting lines. In the Times film, #MeToo quotes appear one by one
with each source's name under it (0:12–0:15), and "Portraits of Grief" tiles
from one page into a wall (1:00–1:06).

- A channel or finding **builds itself**: blocks arrive one at a time along their
  connections, at the Cut clock, then the whole view settles once.
- On the web, accretion runs **once** per view and then shows the settled state
  (Record behavior). In social or film loops it may reset (Field behavior).
- `prefers-reduced-motion` shows the complete settled network immediately
  (existing rule).

## P5: The two worlds move differently, on purpose

*From FN-02 §4:* Prada's people move like live action and its characters move
like animation, and the film never blends them.

- **Archival / captured material moves like a document:** it cuts, or it's
  placed. It's never morphed, warped, parallaxed or "brought to life."
  (This also covers the dignity rule in 01-brief §6: no animating real people's
  archival images.)
- **Facework's own drawings** (instruments, diagrams, the mark) **draw in**
  (stroke-dashoffset), because they're made, not found.

## P6: Process is a parallel track, not a filter

*From FN-02 headline:* Prada published its pencil roughs *next to* the finished
film, not as the film's style.

- Motion never adds fake hand-drawn wobble, film grain or "sketchy" boil to
  finished work.
- Real process material (scanned notes, roughs) can appear as its own cut
  sequence (P2), labelled as process.

## P7: Signal traces stay instruments

*From FN-07:* the SoundCloud-style waveform is data drawn over time.

- Waveform or particle traces are allowed only as the Field/Trace instrument,
  bound to real data, drawn in once, with no glow and no ambient looping on the
  Record.

## P8: Sources speak first; the brand speaks last

*From FN-01 full film:* for 69 of 73 seconds the soundtrack is archival voices and
the screen is the work. The brand line types on near the end ("Not just ours.",
1:09), and the lockup cuts on in the last 2 seconds.

- Facework films and social sequences lead with the material (blocks, sources,
  voices) and end on the lockup.
- One short line may **type on**, at roughly 35 characters per second, before the
  lockup. That's the Times' pace, read from frames. Type-on is for **one short
  line**, never for reading text.

## Forbidden (all already banned by DESIGN.md §9/§11, restated for motion)

Bounce or elastic easing. Glow. A logo that spins, pulses or breathes. Parallax
on archival images. Type-on for paragraphs or reading content (single lines
only, P8). Jittering letters (FN-03's kinetic "OCTOBER") on anything meant to be
read.

## Open: mark motion study

The Times shows the mark and its motion should be designed **together.** Before
any issue nameplate or numeral system goes further, Facework needs a short motion
study of the Coherence Mark in each register: Record draw-in, Field idle state
(if any), and a 9:16 social sting. That's a design job for sprint 2. The full film now supplies the end-card
behavior (cut on, complete, hold). The New Year's Eve launch animation is still
the only possible source of a true mark animation, and it remains unseen.
