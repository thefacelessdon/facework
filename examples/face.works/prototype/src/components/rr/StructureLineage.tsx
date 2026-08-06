export type LineageRow = {
  /** What holds / what survives handoff. */
  label: string;
  /** Optional mono note (state, phase, owner). */
  note?: string;
  /** Shape-law state: open (square) or settled (circle). */
  state: "open" | "settled";
};

export type StructureLineageProps = {
  rows: LineageRow[];
  /** Accessible name for the list. */
  label?: string;
  className?: string;
};

/**
 * StructureLineage — Stability instrument (§7): what holds it up, and what
 * survives handoff. Hairline-ruled rows with shape-law markers.
 */
export function StructureLineage({
  rows,
  label = "Structure lineage",
  className,
}: StructureLineageProps) {
  return (
    <ul
      className={["rr-lineage", className].filter(Boolean).join(" ")}
      aria-label={label}
    >
      {rows.map((row, i) => (
        <li className="rr-lineage__row" key={i}>
          <span
            className={`rr-lineage__marker rr-lineage__marker--${row.state}`}
            aria-hidden="true"
          />
          <span className="rr-lineage__label">{row.label}</span>
          <span className="rr-lineage__note">
            {row.note ?? (row.state === "settled" ? "settled" : "open")}
          </span>
        </li>
      ))}
    </ul>
  );
}
