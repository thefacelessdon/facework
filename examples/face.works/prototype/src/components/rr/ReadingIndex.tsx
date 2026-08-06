import Link from "next/link";
import type { ReactNode } from "react";
import { RecordLabel } from "./RecordLabel";
import type { ReadingState } from "@/data/knowledge";

export type ReadingIndexItem = {
  /** Mono record id (e.g. "FN-027"). Omit for a plain wayfinding row. */
  id?: string;
  /** Structural title (Schibsted). */
  title: ReactNode;
  /** One-line reading (Literata, muted). */
  note?: ReactNode;
  href: string;
  /** Shape-law state — square (open) / circle (settled). */
  state?: ReadingState;
  /** Mono status caption shown next to the marker. */
  status?: string;
};

export type ReadingIndexProps = {
  items: ReadingIndexItem[];
  /** Accessible name for the list. */
  label?: string;
  /** Show the shape-law status marker + caption column. */
  showStatus?: boolean;
  className?: string;
};

const isExternal = (href: string) =>
  /^https?:/.test(href) || href.includes(".html") || href.startsWith("mailto:");

/**
 * ReadingIndex — the record-row index (DESIGN.md §6): hairline-ruled rows, each
 * a mono id → Schibsted title → Literata one-line, with a shape-law status
 * marker. NOT a card grid. Reused by The Work index and every type surface.
 */
export function ReadingIndex({
  items,
  label = "Record index",
  showStatus = true,
  className,
}: ReadingIndexProps) {
  return (
    <ul className={["rr-index", className].filter(Boolean).join(" ")} aria-label={label}>
      {items.map((item, i) => {
        const mainCls = ["rr-index__main", item.id ? null : "rr-index__main--noid"]
          .filter(Boolean)
          .join(" ");
        const inner = (
          <>
            {item.id ? <RecordLabel className="rr-index__id">{item.id}</RecordLabel> : null}
            <span className="rr-index__text">
              <span className="rr-index__title">{item.title}</span>
              {item.note ? <span className="rr-index__note">{item.note}</span> : null}
            </span>
          </>
        );
        return (
          <li className="rr-index__row" key={item.id ?? i}>
            {isExternal(item.href) ? (
              <a
                className={mainCls}
                href={item.href}
                {...(/^https?:/.test(item.href)
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {inner}
              </a>
            ) : (
              <Link className={mainCls} href={item.href}>
                {inner}
              </Link>
            )}
            {showStatus && item.state ? (
              <span className="rr-index__status">
                <span
                  className={`rr-index__marker rr-index__marker--${item.state}`}
                  aria-hidden="true"
                />
                {item.status ? (
                  <span className="rr-index__statuslabel">{item.status}</span>
                ) : null}
              </span>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
