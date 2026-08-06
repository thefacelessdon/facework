export type CoherenceMarkProps = {
  /** Rendered height in px (width scales to the 230×176 ratio). */
  size?: number;
  /**
   * Micro form for ≤20px use (favicons, dense chrome). Adds a matching
   * stroke to the same geometry so the strands survive at small sizes.
   * The resting/open-center form is the ONLY logo form — micro adds weight,
   * never a center node.
   */
  micro?: boolean;
  title?: string;
  className?: string;
  /**
   * Decorative use — inside an already-labeled control (e.g. the nav lockup).
   * Hides the SVG from assistive tech so the label is not announced twice.
   */
  decorative?: boolean;
};

// The equation drawn: Coherence = (Flow × Resonance)/(1 + Entropy).
// Four strands sweep toward an OPEN center (Flow in the sweep, Resonance in
// the rhythm); the lowest strand crosses under tension (Entropy). The center
// is ALWAYS open — coherence is the relationship, never a filled node.
// Left wing; the right wing is this same set mirrored across x = 115.
const WING = (
  <>
    <path d="M8 16C46 21 80 31 106 46V57C78 44 44 35 9 31Z" />
    <path d="M16 47C50 53 82 62 106 76V87C80 74 50 65 21 62Z" />
    <path d="M28 79C58 85 84 94 106 106V117C82 104 58 96 36 94Z" />
    <path d="M18 150C58 138 92 120 104 100V112C90 122 56 150 16 160Z" />
  </>
);

/**
 * CoherenceMark — the Facework Coherence Mark. The governing equation drawn:
 * four strands (the constructs) sweeping to an open center (coherence is the
 * relationship, never a filled node), the lowest crossing under tension
 * (entropy), bilateral (Dual Worlds). Inherits foreground color so it themes
 * to ink on Record and signal-light on Field.
 */
export function CoherenceMark({
  size = 34,
  micro = false,
  title = "Facework Coherence Mark",
  className,
  decorative = false,
}: CoherenceMarkProps) {
  // Preserve the 230:176 aspect ratio from height.
  const height = size;
  const width = Math.round((size * 230) / 176);

  return (
    <span
      className={["rr-mark", className].filter(Boolean).join(" ")}
      style={{ display: "inline-block", width, height, lineHeight: 0 }}
      aria-hidden={decorative || undefined}
    >
      <svg
        viewBox="0 0 230 176"
        width={width}
        height={height}
        role={decorative ? undefined : "img"}
        aria-label={decorative ? undefined : title}
        fill="currentColor"
        {...(micro
          ? {
              stroke: "currentColor",
              strokeWidth: 6,
              strokeLinejoin: "round" as const,
            }
          : {})}
      >
        {!decorative && <title>{title}</title>}
        <g>{WING}</g>
        <g transform="translate(230 0) scale(-1 1)">{WING}</g>
      </svg>
    </span>
  );
}
