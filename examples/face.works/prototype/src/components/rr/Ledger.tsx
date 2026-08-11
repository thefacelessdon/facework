import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { RecordLabel } from "./RecordLabel";
import { ShapeMarker } from "./ShapeMarker";
import { workBuckets } from "@/data/knowledge";

/* -------------------------------------------------------------------------
 * The Holdings Ledger (CONSTITUTION Art. VI) — a bucket surface is a ledger
 * page of the working canon, not a listing page. These primitives are the
 * apparatus: the holdings line (the ledger counts itself), the canon anchor
 * (what the bucket answers to), the see-also wayfinding, and the legend (the
 * shape-law grammar teaching itself). Typographic only — no cards, no
 * backgrounds, no shadows. Layout classes live in reading-room.css
 * (`.rr-ledger*`).
 * ---------------------------------------------------------------------- */

const cx = (...parts: Array<string | undefined>) =>
  parts.filter(Boolean).join(" ");

export type HoldingsPart = {
  /** The count — always derived from real data, never restated. */
  n: number;
  /** Record-voice unit ("records", "settled", "entries issued"). */
  unit: string;
};

export type HoldingsLineProps = {
  parts: readonly HoldingsPart[];
  className?: string;
};

/**
 * HoldingsLine — the instrument line: `3 RECORDS · 2 SETTLED · 1 OPEN`.
 * Record voice, muted, counts in ink; a verdigris tick square leads it
 * (classification — this line certifies the record).
 */
export function HoldingsLine({ parts, className }: HoldingsLineProps) {
  return (
    <RecordLabel tick as="p" className={cx("rr-ledger-holdings", className)}>
      <span className="rr-ledger-holdings__read">
        <span className="rr-ledger-holdings__part">
          <strong>{parts[0].n}</strong> {parts[0].unit}
        </span>
        {parts.length > 1 ? (
          // In the margin rail the detail drops to its own line (total, then
          // breakdown) so the instrument never wraps mid-thought; inline it
          // stays one line. The lead separator hides when the detail breaks.
          <span className="rr-ledger-holdings__detail">
            {parts.slice(1).map((p, i) => (
              <Fragment key={p.unit}>
                <span
                  aria-hidden="true"
                  className={
                    i === 0
                      ? "rr-ledger-holdings__sep rr-ledger-holdings__sep--lead"
                      : "rr-ledger-holdings__sep"
                  }
                >
                  {" · "}
                </span>
                <span className="rr-ledger-holdings__part">
                  <strong>{p.n}</strong> {p.unit}
                </span>
              </Fragment>
            ))}
          </span>
        ) : null}
      </span>
    </RecordLabel>
  );
}

export type CanonAnchorProps = {
  /** Mono citation eyebrow, e.g. "Constitution · Art. VI". */
  citation: string;
  /** The bucket's canon epigram (Literata italic). */
  epigram: string;
  className?: string;
};

/** CanonAnchor — the canon the bucket answers to: citation + epigram. */
export function CanonAnchor({ citation, epigram, className }: CanonAnchorProps) {
  return (
    <div className={cx("rr-ledger-anchor", className)}>
      <RecordLabel>{citation}</RecordLabel>
      <p className="rr-ledger-anchor__epigram">{epigram}</p>
    </div>
  );
}

export type SeeAlsoItem = { label: string; href: string };

/** The sibling holdings of the working canon — every bucket except this one. */
export function seeAlsoFor(title: string): SeeAlsoItem[] {
  return workBuckets
    .filter((b) => b.title !== title)
    .map((b) => ({ label: b.title, href: b.href }));
}

export type SeeAlsoProps = {
  items: readonly SeeAlsoItem[];
  className?: string;
};

/** SeeAlso — wayfinding to the sibling buckets. Mono labels, plain links. */
export function SeeAlso({ items, className }: SeeAlsoProps) {
  return (
    <nav className={cx("rr-ledger-seealso", className)} aria-label="See also">
      <RecordLabel>See also</RecordLabel>
      <ul className="rr-ledger-seealso__list">
        {items.map((item) => (
          <li key={item.href}>
            <Link className="rr-ledger-seealso__link" href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/**
 * LedgerLegend — the ledger-foot line that teaches the shape law using the
 * exact glyphs the rows render (ShapeMarker), so legend and record can never
 * drift: `■ open — under observation · ● settled — issued`.
 */
export function LedgerLegend({ className }: { className?: string }) {
  return (
    <p className={cx("rr-ledger-legend", className)}>
      <span className="rr-ledger-legend__item">
        <ShapeMarker state="open" /> open &mdash; under observation
      </span>
      <span className="rr-ledger-legend__item">
        <ShapeMarker state="settled" /> settled &mdash; issued
      </span>
    </p>
  );
}

/** LedgerRail — the right margin apparatus (&ge;1100px). Typographic only. */
export function LedgerRail({ children }: { children: ReactNode }) {
  return <aside className="rr-ledger__rail">{children}</aside>;
}
