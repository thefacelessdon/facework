import type { ReactNode } from "react";
import { RecordLabel } from "./RecordLabel";

export type SectionHeadProps = {
  /** Mono record-label (e.g. "Field Notes"). */
  label: ReactNode;
  /** Numeric index — pass ONLY where order is real (§6: "phase 3 of 5"). */
  index?: string | number;
  /** Structural title (Schibsted Grotesk). */
  title: ReactNode;
  /** Heading level for the title. Defaults to h2. */
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
};

/**
 * SectionHead — mono label (+ optional real index) → Schibsted title (§6).
 * The system speaks here (structure), not the thinking (that is Reading).
 */
export function SectionHead({
  label,
  index,
  title,
  as: Tag = "h2",
  className,
}: SectionHeadProps) {
  return (
    <div className={["rr-sectionhead", className].filter(Boolean).join(" ")}>
      <RecordLabel>
        {label}
        {index != null ? (
          <span className="rr-sectionhead__index">{index}</span>
        ) : null}
      </RecordLabel>
      <Tag className="rr-sectionhead__title">{title}</Tag>
    </div>
  );
}
