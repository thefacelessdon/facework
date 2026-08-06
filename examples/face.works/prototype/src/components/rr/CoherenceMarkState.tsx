export type MarkStatus = "settled" | "attention" | "exposure" | "archive";

export type CoherenceMarkStateProps = {
  /**
   * Shape-law state of the center node (§8). `open` → square, `settled` →
   * circle. Omit to rest at the resting (open) form.
   */
  state?: "open" | "settled";
  /**
   * Status tint for the node — applied ONLY when a genuine state is passed.
   * When omitted the mark rests in ink; the mark never lies.
   */
  status?: MarkStatus;
  /** Rendered size in px (square). */
  size?: number;
  title?: string;
  className?: string;
};

const STATUS_VAR: Record<MarkStatus, string> = {
  settled: "var(--rr-settled)",
  attention: "var(--rr-attention)",
  exposure: "var(--rr-exposure)",
  archive: "var(--rr-archive)",
};

// The four bands (three ascending strands + one descending) — the four
// constructs; the open axis is the gap at the center. Mirrored to form the
// exchange. Geometry from the identity lockup (public/identity), normalized.
const BANDS =
  "M8 13C44 18 78 29 109 45V58C76 42 42 32 9 28Z" +
  "M14 44C48 50 81 62 109 77V90C78 75 48 64 19 59Z" +
  "M27 76C57 83 84 95 109 109V123C81 107 57 97 36 92Z" +
  "M18 146C55 134 84 118 109 98V114C81 136 51 152 13 159Z";

/**
 * CoherenceMarkState — the Coherence Mark as a state machine (§8). Four bands +
 * open axis, with a center node that encodes a TRUE coherence state
 * (square = open, circle = settled) and takes a status tint only when real.
 */
export function CoherenceMarkState({
  state,
  status,
  size = 48,
  title = "Facework Coherence Mark",
  className,
}: CoherenceMarkStateProps) {
  const settled = state === "settled";
  const nodeFill = status ? STATUS_VAR[status] : "currentColor";
  const desc = `${state ? (settled ? "settled" : "open") : "resting"}${
    status ? `, ${status}` : ""
  } coherence state`;

  return (
    <span
      className={["rr-mark", className].filter(Boolean).join(" ")}
      style={{ width: size, height: size, lineHeight: 0 }}
    >
      <svg viewBox="0 0 260 180" width={size} height={size} role="img" aria-label={`${title}: ${desc}`}>
        {/* left half */}
        <g className="rr-mark__band" transform="translate(6 10)">
          <path d={BANDS} />
        </g>
        {/* mirrored right half — the exchange across the open axis */}
        <g className="rr-mark__band" transform="translate(254 10) scale(-1 1)">
          <path d={BANDS} />
        </g>
        {/* center node — the true state, on the open axis */}
        {settled ? (
          <circle cx={130} cy={95} r={13} fill={nodeFill} />
        ) : (
          <rect x={117} y={82} width={26} height={26} fill={nodeFill} />
        )}
      </svg>
    </span>
  );
}
