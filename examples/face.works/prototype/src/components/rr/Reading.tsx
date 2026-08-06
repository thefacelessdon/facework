import type { ReactNode } from "react";
import { RecordLabel } from "./RecordLabel";

export type ReadingProps = {
  /** Mono eyebrow / record label opening the reading. */
  label: ReactNode;
  /** Leading tick square on the label. */
  tick?: boolean;
  /** Reading title (Literata — the thinking speaks). */
  title: ReactNode;
  /** Heading level for the title. Defaults to h2. */
  titleAs?: "h1" | "h2" | "h3";
  /** The reading body (constrained to 68ch). */
  children: ReactNode;
  className?: string;
};

/**
 * Reading — the unit, not the card (§6): eyebrow → Literata title → body.
 */
export function Reading({
  label,
  tick = false,
  title,
  titleAs: Tag = "h2",
  children,
  className,
}: ReadingProps) {
  return (
    <article className={["rr-reading", className].filter(Boolean).join(" ")}>
      <RecordLabel tick={tick}>{label}</RecordLabel>
      <Tag className="rr-reading__title">{title}</Tag>
      <div className="rr-reading__body">{children}</div>
    </article>
  );
}
