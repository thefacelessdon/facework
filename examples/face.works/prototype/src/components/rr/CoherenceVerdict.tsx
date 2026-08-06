export type CoherenceVerdictProps = {
  /** Coherence score, 0–5. */
  score: number;
  /** Shape-law state: open (square) or settled (circle). */
  state: "open" | "settled";
  /** Optional trailing caption (mono). */
  label?: string;
  className?: string;
};

const MAX = 5;

/**
 * CoherenceVerdict — the diagnostic state, n/5 (§7).
 * Verdigris bars + a shape-law status marker (square = open, circle = settled)
 * in --rr-settled. Tabular mono throughout.
 */
export function CoherenceVerdict({
  score,
  state,
  label,
  className,
}: CoherenceVerdictProps) {
  const filled = Math.max(0, Math.min(MAX, Math.round(score)));
  const readout = `Coherence ${filled} of ${MAX}, ${state}`;

  return (
    <div
      className={["rr-verdict", className].filter(Boolean).join(" ")}
      role="img"
      aria-label={readout}
    >
      <span className="rr-verdict__bars" aria-hidden="true">
        {Array.from({ length: MAX }, (_, i) => (
          <span
            key={i}
            className={
              i < filled ? "rr-verdict__bar rr-verdict__bar--on" : "rr-verdict__bar"
            }
          />
        ))}
      </span>
      <span className="rr-verdict__score" aria-hidden="true">
        {filled}/{MAX}
      </span>
      <span
        className={`rr-verdict__marker rr-verdict__marker--${state}`}
        aria-hidden="true"
      />
      {label ? <span aria-hidden="true">{label}</span> : null}
    </div>
  );
}
