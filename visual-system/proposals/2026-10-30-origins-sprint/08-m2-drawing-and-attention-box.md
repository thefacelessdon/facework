---
status: proposal (Experimental): drawing pass. Not canon, not live, not cleared.
follows: 06-mark-study.md, 07-trademark-check.md (M2 is the call)
source: marks/build_m2.py generates every file in marks/m2/ from one geometry
---

# 08: M2 drawing pass + the attention-box device

**Positioning guardrail (name review, 2026-10-30):** lead with **"A public record
of coherence."** The identity and perception study sits beneath it as a field of
work. **No face imagery in the mark.** M2 has none: it's strands and an open
center.

## 1. The mark (M2, Coherence Mark redrawn monoline)

**Geometry** (`marks/m2/m2-master.svg`, viewBox 216 × 160, axis x = 108,
stroke 10, square caps):
- Four strands per side, mirrored: the four constructs (FVI-001, Cultural
  Physics §VII).
  - Signal, Frequency and Current sweep in toward the center.
  - **Stability rises from the lower edge and crosses Current near the center.**
    That crossing is Entropy, the exchange held under tension.
- All strands stop short of the axis. **The center stays open: 16 units visible
  at master size, about 2.8 px at 16 px.** Coherence is the relationship, never a
  filled node, so the `open-center-mark` clause holds unchanged.
- What changed from the canonical filled mark: tapered filled wedges became
  monoline strokes at the wordmark's weight. That closes the family-resemblance
  gap (FN-01: "a family resemblance, not a logo placed next to a logo").

**Optical sizes:** drawn on their own pixel grids, not scaled down.

| File | Use | Adjustments |
|---|---|---|
| `m2-master.svg` | ≥ 48 px, print | Reference geometry |
| `m2-32px.svg` | 32–47 px | Stroke 2.2 px; ends spread; center gap widened |
| `m2-24px.svg` | 24–31 px | Stroke 1.9 px; same simplification |
| `m2-16px.svg` | Favicon, ≤ 23 px | **Straight strands**, butt caps, stroke 1.5 px, center gap about 2.8 px; the crossing is kept |

**16 px check:** rendered in headless Chrome at 1×, on light and dark (inverted)
grounds. It reads as two four-stroke groups with an open center and the lower
crossing visible. The strands don't merge. At 16 px it reads as "two
fields with a gap," which is the right reading. The master scaled to 16 px
(also rendered) fills in, which is why the dedicated 16 px drawing exists.

## 2. Lockups

| File | Rule |
|---|---|
| `m2-lockup-horizontal.svg` | **Primary.** Mark at 0.8× scale, so its stroke equals the wordmark's 8 units and its height is 1.6× the wordmark box. Wordmark centered on the mark's height. Gap = ⅔ x. |
| `m2-lockup-stacked.svg` | Mark centered above the wordmark; gap = ½ x. For square and portrait formats. |
| `m2-lockup-clearspace.svg` | **Clear space = x on every side**, where x = the wordmark cap height (60 of 80 units). |
| `m2-filing-composite.svg` | **For counsel only.** Mark plus wordmark together, pure black, no color claimed, no tagline. |
| `m2-lockup-issue-13.svg` | Mark, wordmark and issue numerals on one baseline and one cap height (the 175 logic) |

**Minimum sizes:**
- Horizontal lockup: **120 px wide** on screen (wordmark cap about 9 px), or
  **30 mm** in print. Rendered at 120 and 96 px. 96 holds but the strokes thin
  below 1 px, so the floor is 120.
- Stacked lockup: **64 px wide**.
- Mark alone: **16 px**, using the 16 px drawing.

**Don'ts:**
- No color in the mark beyond ink (or paper on the Field).
- Never verdigris; that's the attention box's job.
- No filled center, no added dot, no face.
- Never pair the mark with the attention box in a lockup.

## 3. Issue numerals (refined)

`marks/m2/numerals-0-9.svg`. Each digit uses only strokes already in the
FACEWORK wordmark: 8-unit monoline, square caps, cap band 10–70, miter limit 2.

| Digit | Built from |
|---|---|
| 0 | the O |
| 1 | the K stem and upper arm |
| 2 | the R bowl, the A leg and the E bottom bar |
| 3 | the R bowl, stacked |
| 4 | the A diagonal, the K stem and the E bar |
| 5 | the E top bar and stem, plus the R bowl |
| 6 | the C opening, the O and the R bowl |
| 7 | the E top bar and the A diagonal |
| 8 | the R bowl, stacked twice |
| 9 | the 6, rotated 180° |

Refinements from the construction set:
- Common 48-unit body with 12-unit tracking.
- The 3 gets a short center spur.
- The 4 joins clean at the top.

Still to do (needs a type designer's eye): optical overshoot on the rounds, and
weight compensation where diagonals meet.

## 4. The Frame, recast as the attention-box device

**Not a logo. Not registered. Never shown beside the wordmark.** After
07-trademark-check, the four-corner frame is an **interface behavior**. Its
genericness (Unicode U+26F6, Material `crop_free`) is an advantage here:
readers already understand it as "this is being looked at."

| Property | Spec |
|---|---|
| **Meaning** | "This is being checked or cited right now." The Times uses its orange squares the same way, as verification marks (FN-01, 0:38–0:42). |
| **Form** | Four L-corners around the target, never joined. Arm length = min(25% of the side, 20 px). Padding 5 px outside the target box. |
| **Stroke** | 2 px (1.5 px under 32 px targets), `--rr-verdigris` on the Record, `--rr-verdigris-field` on the Field. Never ink, never a status color. |
| **Motion** | **Cut only.** It jumps to the next target on the Cut clock (120–380 ms per hop, 05 P2). It never tweens its position or size. It appears and disappears instantly. |
| **Count** | At most one on screen. |
| **Where** | Hover or focus on a cited block in a finding; scrolling a finding's citations; the motion and social sequences (05 P3). |
| **Never** | As a logo, beside the wordmark, as a decorative border, around faces of real people in identity research (dignity rule, 01 §6), or as the only focus indicator. |
| **Accessibility** | It doubles the native focus ring and never replaces it. The cited block also gets `aria-current="true"` or equivalent. With `prefers-reduced-motion`, there's no hopping: the box shows only on the focused item. |
| **Tokens (if adopted)** | `--rr-attention-box-stroke`, `--rr-attention-box-arm`, `--rr-attention-box-pad`. Names only; not created. |


## 6. Correction pass (2026-10-30, after Stead's render review)

Every file in `marks/m2/` has been regenerated by `build_m2.py`. I inspected the
master and lockup at 4.4× zoom and the 32/24/16 px drawings at native size and
zoomed.

**Wordmark joints (proposal corrections to the FVI-100 logotype; the canonical
file has the same defects, so this is flagged for Canon Keeper):**

| Letter | Defect | Fix |
|---|---|---|
| K | The arm ended in a square cap past the stem (stub); the leg started mid-arm | Arm and leg are **one stroke** meeting at the stem's right edge (513, 42). The miter tip hides inside the stem. |
| R | The leg started mid-bowl with its own cap (notch); the bowl ended 1 unit off the bar | The leg grows out of the **bowl's base** at (461, 49) in one stroke; the bar meets it on the same line |
| W | Bottom vertices at 70 with ~44° joins put miter tips at **80.5** (caps sit at 74) | Vertices moved to 65 (middle apex to 36). Tips at **74.8**: about 1 unit of optical overshoot |
| A | Apex miter tip at **−1.2** (caps at 6); crossbar caps poked past the legs | Apex vertex to 15 (tip **4.6**); crossbar shortened to 80–100 so its caps stay inside the legs |

**Mark crossing:** the ticks came from the ends of Current and Stability
overlapping right at the crossing (x≈88 of 96).
- **Fix: the crossing moved well clear of the ends** (x≈71, about 75% along the
  strand, at all three drawn sizes). With 20 units between the strand ends,
  there's nothing left to tick.
- **Woven version tried and rejected.** At a ~45° crossing, the gap the break
  needs leaves a 7–9 unit stub that reads as a dash. The weave code stays in
  the generator for reference.
- The crossing is now a clean solid overlap.
- Visible consequence: Stability reads as a clearer rising arc beneath the three
  sweeping strands.

**Numerals** reuse the corrected construction rules; the 4's apex already ran at
miter limit 2. The **filing composite** and **issue lockups** are regenerated with
the corrected letters.

## 5. Open

- Name clearance ("Facework," Kyle McDonald's 2020 game; 07) is parked for an
  attorney before filing. It doesn't block design.
- **Run the 07 lookalike check on M2** before any adoption. Bilateral
  wing/feather marks are their own crowded field.
- New Year's Eve 175 launch film: still a later check.
