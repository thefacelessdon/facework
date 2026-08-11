import type { ReadingState } from "@/data/knowledge";

export type ShapeMarkerProps = {
  /** Shape-law state — square = open/unsettled, circle = settled/issued (§7). */
  state: ReadingState;
  className?: string;
};

/**
 * ShapeMarker — the single rendering of the shape law (DESIGN.md §7):
 * square = open, circle = settled. Both the record rows (ReadingIndex) and
 * the ledger legend draw their glyphs from here, so they can never drift.
 */
export function ShapeMarker({ state, className }: ShapeMarkerProps) {
  return (
    <span
      className={["rr-marker", `rr-marker--${state}`, className]
        .filter(Boolean)
        .join(" ")}
      aria-hidden="true"
    />
  );
}
