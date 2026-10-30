"""Generate the M2 mark family (proposal, sprint 01) from one geometry.

Run:  python3 -I marks/build_m2.py   (from the proposal folder)
Writes marks/m2/*.svg. No dependencies.

M2 = the Coherence Mark (FVI-001) redrawn as monoline strokes at the Register
wordmark's weight: four strands per side sweep toward an OPEN center (Coherence);
the lowest strand rises and crosses the third (Entropy, the exchange).
"""
import os

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "m2")
INK = "#2a2622"  # static stand-in for --rr-ink

# Register wordmark (FVI-100), viewBox 0 0 560 80, stroke 8, cap band 10..70.
# Proposal corrections to the canonical logotype (flagged for Canon Keeper):
#   A  apex vertex 10 -> 15: miter tip 4.6 instead of -1.2 (caps sit at 6);
#      crossbar 76..104 -> 80..100 so its square caps stay inside the legs
#   W  bottom vertices 70 -> 65, middle 38 -> 36: miter tips 74.8 instead of 80.5
#   R  leg grows out of the bowl's base in one stroke (no capped stub)
#   K  arm and leg are one stroke meeting the stem's edge; the miter hides in the stem
WORD = ('<g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="square" '
        'stroke-linejoin="miter"><path d="M8 70V10H50M8 39H43"/><path d="M67 70L90 15L113 70M80 47H100"/>'
        '<path d="M183 22C176 13 168 10 157 10C140 10 131 21 131 40C131 59 140 70 157 70C168 70 176 67 183 58"/>'
        '<path d="M207 10V70M207 10H251M207 39H245M207 70H251"/><path d="M273 10L285 65L305 36L325 65L337 10"/>'
        '<path d="M382 10C365 10 356 21 356 40C356 59 365 70 382 70C399 70 408 59 408 40C408 21 399 10 382 10Z"/>'
        '<path d="M433 70V10H458C473 10 481 18 481 30C481 42 473 49 461 49L484 70M461 49H433"/>'
        '<path d="M509 10V70M551 10L513 42L554 70"/></g>')

# ---------------------------------------------------------------- the mark
# Master geometry: viewBox 0 0 216 160, axis x=108, stroke 10. In lockups the
# mark is scaled 0.8, which lands its stroke exactly on the wordmark's 8 units
# and its height at 128 = 1.6x the wordmark box.
# Each strand: (start, c1, c2, end) for the LEFT half; the right half mirrors.
MASTER = dict(w=216, h=160, stroke=10, weave=False, strands=[
    ((10, 18), (44, 21), (74, 30), (96, 44)),     # Signal
    ((16, 50), (46, 54), (74, 62), (96, 76)),     # Frequency
    ((24, 82), (50, 86), (74, 96), (96, 112)),    # Current
    ((14, 150), (26, 126), (40, 98), (96, 92)),  # Stability: rises, crosses Current (Entropy) at x~71, well clear of the strand ends
])

# Optical small sizes: drawn on their own pixel grid (not scaled down).
# Fewer curve subtleties, heavier stroke, wider open center, ends spread so
# strokes never merge. Coordinates in device pixels.
SMALL = {
    32: dict(w=32, h=32, stroke=2.2, weave=False, strands=[
        ((1.5, 5), (6, 5.4), (10.5, 6.8), (13.6, 9)),
        ((2.4, 10), (6.6, 10.6), (10.5, 12), (13.6, 14.2)),
        ((3.4, 15.2), (7, 15.9), (10.5, 17.6), (13.6, 20.6)),
        ((2, 27), (3.8, 23.2), (5.8, 18.8), (13.6, 17.4)),
    ]),
    24: dict(w=24, h=24, stroke=1.9, weave=False, strands=[
        ((1.2, 4), (4.6, 4.3), (7.8, 5.3), (10.1, 7)),
        ((1.8, 7.8), (5, 8.3), (7.9, 9.4), (10.1, 11)),
        ((2.6, 11.8), (5.3, 12.4), (7.9, 13.7), (10.1, 16)),
        ((1.5, 20.4), (2.8, 17.4), (4.3, 14.2), (10.1, 13.2)),
    ]),
    # 16 px: straight segments snapped toward the pixel grid; Current and
    # Stability still cross, center stays open by 2 px.
    16: dict(w=16, h=16, stroke=1.5, straight=True, strands=[
        ((1, 3), None, None, (6.3, 4.8)),
        ((1.4, 6.2), None, None, (6.3, 8)),
        ((2, 9.4), None, None, (6.3, 12.2)),
        ((1, 14.2), None, None, (6.3, 10)),
    ]),
}


def mirror(x, w):
    return w - x


def strand_d(s, w, straight=False, flip=False):
    pts = [p for p in s if p is not None]
    if flip:
        pts = [(mirror(x, w), y) for x, y in pts]
    f = lambda p: f"{p[0]:g} {p[1]:g}"
    if straight or len(pts) == 2:
        return f"M{f(pts[0])}L{f(pts[-1])}"
    return f"M{f(pts[0])}C{f(pts[1])} {f(pts[2])} {f(pts[3])}"


# ---- cubic helpers for the woven crossing --------------------------------
def bez(p, t):
    u = 1 - t
    return tuple(u**3 * p[0][i] + 3 * u * u * t * p[1][i] + 3 * u * t * t * p[2][i] + t**3 * p[3][i] for i in (0, 1))


def split(p, t):
    """de Casteljau: return the two cubic halves of p at t."""
    lerp = lambda a, b: (a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t)
    a, b, c = lerp(p[0], p[1]), lerp(p[1], p[2]), lerp(p[2], p[3])
    d, e = lerp(a, b), lerp(b, c)
    f = lerp(d, e)
    return (p[0], a, d, f), (f, e, c, p[3])


def crossing(p, q, n=2000):
    """(t on p, t on q, angle) of the closest approach of two cubics."""
    P = [bez(p, i / n) for i in range(n + 1)]
    Q = [bez(q, i / n) for i in range(n + 1)]
    best = min(((P[i][0] - Q[j][0]) ** 2 + (P[i][1] - Q[j][1]) ** 2, i, j)
               for i in range(0, n + 1, 4) for j in range(0, n + 1, 4))
    _, i, j = best
    import math
    dp = (P[min(i + 1, n)][0] - P[max(i - 1, 0)][0], P[min(i + 1, n)][1] - P[max(i - 1, 0)][1])
    dq = (Q[min(j + 1, n)][0] - Q[max(j - 1, 0)][0], Q[min(j + 1, n)][1] - Q[max(j - 1, 0)][1])
    ang = abs(math.atan2(dp[0] * dq[1] - dp[1] * dq[0], dp[0] * dq[0] + dp[1] * dq[1]))
    return i / n, j / n, ang


def t_at_distance(p, t0, dist, direction):
    """Walk along p from t0 by arc length dist (direction +1/-1)."""
    import math
    t, acc, step = t0, 0.0, 1e-4 * direction
    prev = bez(p, t)
    while 0 < t < 1 and acc < dist:
        t += step
        cur = bez(p, t)
        acc += math.hypot(cur[0] - prev[0], cur[1] - prev[1])
        prev = cur
    return max(0.0, min(1.0, t))


# Kept for reference: a woven (broken) crossing was tried and rejected; at a
# ~45 degree crossing the gap leaves a 7-9 unit stub. Solid crossing is used.
def woven(over, under, stroke, clear):
    """Break `over` around `under`: return the two pieces of `over`."""
    import math
    t_o, _, ang = crossing(over, under)
    # half the gap along `over`: the under-strand's band width at this angle,
    # plus clearance, plus the square cap that each piece end adds back.
    half = (stroke / 2) / max(math.sin(ang), 0.3) + clear + stroke / 2
    t1 = t_at_distance(over, t_o, half, -1)
    t2 = t_at_distance(over, t_o, half, +1)
    a, _ = split(over, t1)
    _, b = split(over, t2)
    return [a, b]


def cubic_d(c):
    f = lambda p: f"{p[0]:.2f} {p[1]:.2f}"
    return f"M{f(c[0])}C{f(c[1])} {f(c[2])} {f(c[3])}"


def mark_paths(spec, cap="square"):
    w, st = spec["w"], spec["stroke"]
    straight = spec.get("straight", False)
    if straight or not spec.get("weave", True):
        ds = [strand_d(s, w, straight) for s in spec["strands"]]
        ds += [strand_d(s, w, straight, flip=True) for s in spec["strands"]]
    else:
        *upper, current, stability = spec["strands"]
        pieces = woven(stability, current, st, clear=st * 0.45)
        left = list(upper) + [current] + pieces
        ds = [cubic_d(c) for c in left]
        ds += [cubic_d([(w - x, y) for x, y in c]) for c in left]
    return (f'<g fill="none" stroke="currentColor" stroke-width="{st:g}" stroke-linecap="{cap}" '
            f'stroke-linejoin="miter">' + "".join(f'<path d="{d}"/>' for d in ds) + "</g>")


def svg(name, vb, body, title, desc):
    os.makedirs(OUT, exist_ok=True)
    with open(os.path.join(OUT, name), "w") as fh:
        fh.write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}" role="img" '
                 f'aria-labelledby="t d" color="{INK}"><title id="t">{title}</title>'
                 f'<desc id="d">{desc} PROPOSAL (sprint 01), not canon, not cleared.</desc>{body}</svg>\n')


# ------------------------------------------------------------ numerals
# Refined Register numerals: 48-unit advance + 12 tracking, cap band 10..70,
# stroke 8, square caps, miter limit 2. Every digit is assembled from strokes
# that already exist in FACEWORK (source letter noted).
NUM = {
    "0": ("M24 10C10 10 4 21 4 40C4 59 10 70 24 70C38 70 44 59 44 40C44 21 38 10 24 10Z", "O"),
    "1": ("M28 70V10M28 10L14 22", "K stem + K upper arm"),
    "2": ("M7 21C10 14 16 10 24 10C35 10 42 16 42 26C42 35 36 41 27 48L6 70H43", "R bowl + A leg + E bottom bar"),
    "3": ("M7 15C11 11 16 10 22 10C34 10 41 16 41 25C41 34 34 39 22 39H18M22 39C35 39 43 45 43 55C43 65 35 70 22 70C15 70 10 68 6 64", "R bowl, stacked"),
    "4": ("M32 70V14L5 52H44", "A diagonal + K stem + E bar"),
    "5": ("M41 10H9V36C13 34 18 33 23 33C35 33 43 40 43 51C43 63 35 70 23 70C15 70 10 68 6 64", "E top bar + stem + R bowl"),
    "6": ("M39 14C35 11 30 10 26 10C12 10 5 22 5 42C5 60 12 70 25 70C37 70 44 62 44 52C44 41 37 35 25 35C16 35 9 40 6 46", "C opening + O + R bowl"),
    "7": ("M5 10H43L19 70", "E top bar + A diagonal"),
    "8": ("M24 39C14 39 8 33 8 25C8 16 15 10 24 10C34 10 40 16 40 25C40 33 34 39 24 39C12 39 6 45 6 55C6 64 14 70 24 70C35 70 42 64 42 55C42 45 36 39 24 39Z", "R bowl, stacked twice"),
    "9": (None, "the 6, rotated 180°"),
}
ADV = 60


def digit(ch, x):
    if ch == "9":
        return f'<path transform="translate({x} 0) rotate(180 24.5 40)" d="{NUM["6"][0]}"/>'
    return f'<path transform="translate({x} 0)" d="{NUM[ch][0]}"/>'


def numerals(s, x0=0):
    return ('<g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="square" '
            'stroke-linejoin="miter" stroke-miterlimit="2">'
            + "".join(digit(c, x0 + i * ADV) for i, c in enumerate(s)) + "</g>")


def main():
    M = MASTER
    # 1. mark masters + optical sizes
    svg("m2-master.svg", f"0 0 {M['w']} {M['h']}", mark_paths(M), "M2 Coherence Mark (master)",
        "Four strands per side sweep toward an open center; the lowest rises and crosses the third.")
    for px, spec in SMALL.items():
        cap = "butt" if px == 16 else "square"
        svg(f"m2-{px}px.svg", f"0 0 {spec['w']} {spec['h']}", mark_paths(spec, cap),
            f"M2 Coherence Mark, {px} px optical", f"Drawn on a {px} px grid with heavier stroke and a wider open center.")

    # 2. lockups. x = wordmark cap height = 60 units (band 10..70).
    k = 0.8                     # lockup scale: mark stroke 10 x 0.8 = wordmark stroke 8
    mw, mh = M["w"] * k, M["h"] * k   # 172.8 x 128
    gap = 40                    # mark-to-word gap = 2/3 x
    word_y = (mh - 80) / 2
    W = mw + gap + 560
    MK = f'<g transform="scale({k})">{mark_paths(M)}</g>'
    body = MK + f'<g transform="translate({mw + gap:g} {word_y:g})">{WORD}</g>'
    M = dict(M, w=mw, h=mh)
    svg("m2-lockup-horizontal.svg", f"0 0 {W} {M['h']}", body, "M2 lockup, horizontal",
        "Mark at the wordmark's stroke weight, wordmark centered on the mark's height.")
    # clear-space diagram: x = 60 units on all sides
    x = 60
    guide = (f'<rect x="{-x}" y="{-x}" width="{W + 2 * x}" height="{M["h"] + 2 * x}" fill="none" '
             f'stroke="#3f8f8a" stroke-width="1.5" stroke-dasharray="6 6"/>'
             f'<rect x="{M["w"] + gap}" y="{word_y + 10:g}" width="60" height="60" fill="#3f8f8a" opacity=".18"/>'
             f'<text x="{M["w"] + gap + 30}" y="{word_y + 46:g}" font-family="monospace" font-size="16" '
             f'text-anchor="middle" fill="#3f8f8a">x</text>'
             f'<text x="{-x / 2}" y="{M["h"] / 2}" font-family="monospace" font-size="16" text-anchor="middle" fill="#3f8f8a">x</text>')
    svg("m2-lockup-clearspace.svg", f"{-x - 10} {-x - 10} {W + 2 * x + 20} {M['h'] + 2 * x + 20}", guide + body,
        "M2 lockup clear space", "Clear space x = the wordmark cap height on every side.")
    # stacked: mark centered above word, gap = x/2
    sw = 560
    sh = M["h"] + 30 + 80
    body_s = (f'<g transform="translate({(sw - M["w"]) / 2:g} 0)">{MK}</g>'
              f'<g transform="translate(0 {M["h"] + 30})">{WORD}</g>')
    svg("m2-lockup-stacked.svg", f"0 0 {sw} {sh}", body_s, "M2 lockup, stacked",
        "Mark centered above the wordmark; gap = half the cap height.")
    # filing composite: black only, no color claim, no tagline
    svg("m2-filing-composite.svg", f"0 0 {W} {M['h']}",
        body.replace('stroke="currentColor"', 'stroke="#000"'),
        "Filing composite (for counsel)",
        "Mark plus FACEWORK wordmark together, black, no color claimed, no tagline. For an attorney's review only.")
    # 3. numerals
    specimen = "".join(f'<g transform="translate({10 + i * ADV} 20)">{numerals(c)}</g>' for i, c in enumerate("0123456789"))
    svg("numerals-0-9.svg", f"0 0 {10 + 10 * ADV} 120", specimen, "Register numerals 0–9 (refined)",
        "Built only from strokes in the FACEWORK wordmark: " + "; ".join(f"{k}: {v[1]}" for k, v in NUM.items()))
    iw = W + 48 + 2 * ADV
    issue = body + f'<g transform="translate({W + 48} {word_y:g})">{numerals("13")}</g>'
    svg("m2-lockup-issue-13.svg", f"0 0 {iw} {M['h']}", issue, "M2 issue lockup, issue 13",
        "Mark, wordmark and issue numerals on one baseline and cap height.")


if __name__ == "__main__":
    main()
    print("\n".join(sorted(os.listdir(OUT))))
