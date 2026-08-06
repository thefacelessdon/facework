import type { ElementType, ReactNode } from "react";

export type RecordLabelProps = {
  children: ReactNode;
  /** Leading tick square (the verdigris mark that opens a record). */
  tick?: boolean;
  /** Element to render as — defaults to a span. */
  as?: ElementType;
  className?: string;
};

/**
 * RecordLabel — the mono `.fig` eyebrow (DESIGN.md §5).
 * The connective tissue: nearly every block opens with one.
 */
export function RecordLabel({
  children,
  tick = false,
  as: Tag = "span",
  className,
}: RecordLabelProps) {
  return (
    <Tag className={["rr-label", className].filter(Boolean).join(" ")}>
      {tick ? <span className="rr-label__tick" aria-hidden="true" /> : null}
      {children}
    </Tag>
  );
}
