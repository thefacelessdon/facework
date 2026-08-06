export type FaceworkWordmarkProps = {
  /** Rendered height in px (width scales to the 560×80 ratio). */
  height?: number;
  title?: string;
  className?: string;
  /**
   * Decorative use — inside an already-labeled control (e.g. the nav lockup).
   * Hides the SVG from assistive tech so the name is not announced twice.
   */
  decorative?: boolean;
};

// Register — the custom uppercase Facework logotype (FVI-100). A monoline
// construction, NOT a typeface: shared 8-unit stroke, variable widths, curves
// confined to C/O and the upper bowl of R. Geometry verbatim from
// visual-system/identity/logotype/facework-logotype.svg. Inherits foreground
// color via currentColor so it themes with the mark inside a shared lockup.
const REGISTER_PATHS = [
  "M8 70V10H50M8 39H43",
  "M67 70L90 10L113 70M76 47H104",
  "M183 22C176 13 168 10 157 10C140 10 131 21 131 40C131 59 140 70 157 70C168 70 176 67 183 58",
  "M207 10V70M207 10H251M207 39H245M207 70H251",
  "M273 10L284 70L305 38L326 70L337 10",
  "M382 10C365 10 356 21 356 40C356 59 365 70 382 70C399 70 408 59 408 40C408 21 399 10 382 10Z",
  "M433 70V10H458C473 10 481 18 481 30C481 42 473 49 458 49H433M458 49L484 70",
  "M509 10V70M551 10L509 48M526 33L554 70",
];

/**
 * FaceworkWordmark — the "Register" logotype (FVI-100). The record-voice
 * wordmark that leads the primary lockup. Real custom letterforms, not a font.
 */
export function FaceworkWordmark({
  height = 18,
  title = "Facework",
  className,
  decorative = false,
}: FaceworkWordmarkProps) {
  const width = Math.round((height * 560) / 80);

  return (
    <svg
      className={className}
      viewBox="0 0 560 80"
      width={width}
      height={height}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : title}
      aria-hidden={decorative || undefined}
      fill="none"
      stroke="currentColor"
      strokeWidth={8}
      strokeLinecap="square"
      strokeLinejoin="miter"
    >
      {!decorative && <title>{title}</title>}
      <g>
        {REGISTER_PATHS.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
    </svg>
  );
}
