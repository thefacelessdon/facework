import type { ReactNode } from "react";
import {
  SectionHead,
  Reading,
  CoherenceVerdict,
  ReadingIndex,
  CanonAnchor,
  HoldingsLine,
  LedgerLegend,
  LedgerRail,
  SeeAlso,
  seeAlsoFor,
} from "@/components/rr";
import {
  holdingsFor,
  verdictForStatus,
  workBuckets,
  type Holdings,
  type PublicSection,
} from "@/data/knowledge";

export type WorkSurfaceProps = {
  section: PublicSection;
  /** Mode eyebrow (defaults to "The Work"). */
  eyebrow?: string;
  /** Render the first record as a full lead Reading + verdict (the exemplar). */
  exemplar?: boolean;
  /** Optional instrument block rendered above the index (e.g. the Field). */
  feature?: ReactNode;
  /** Optional block rendered below the index (e.g. wayfinding to sibling records). */
  after?: ReactNode;
  /**
   * Holdings override — pass when the rendered section is a filtered view of
   * a fuller record (e.g. Runs lifts the Field out of the index) so the
   * ledger still counts every holding it actually displays.
   */
  holdings?: Holdings;
};

/**
 * WorkSurface — a Record-register type surface (DESIGN.md §10): SectionHead →
 * lede → optional instrument → issued readings as record rows. All content is
 * read from the section's real records; the verdict derives from each record's
 * own status.
 *
 * When the section is a working-canon bucket (it matches a `workBuckets`
 * entry with a canon citation), the surface becomes a ledger page
 * (CONSTITUTION Art. VI): reading column + right margin apparatus at ≥1100px
 * — canon anchor, holdings line (the ledger counts itself), sibling
 * wayfinding — with the shape-law legend at the ledger foot. Below 1100px the
 * apparatus folds inline. Sections without a canon anchor (About) render the
 * plain column unchanged.
 */
export function WorkSurface({
  section,
  eyebrow = "The Work",
  exemplar = false,
  feature,
  after,
  holdings,
}: WorkSurfaceProps) {
  const lead = exemplar ? section.records[0] : undefined;
  const rest = exemplar ? section.records.slice(1) : section.records;
  const leadVerdict = lead ? verdictForStatus(lead.status) : null;

  // The ledger apparatus exists only for working-canon buckets.
  const bucket = workBuckets.find(
    (b) => b.title === section.label && b.citation
  );
  const counts = bucket ? (holdings ?? holdingsFor(section)) : null;
  const parts = counts
    ? [
        { n: counts.total, unit: counts.total === 1 ? "record" : "records" },
        { n: counts.settled, unit: "settled" },
        { n: counts.open, unit: "open" },
      ]
    : null;
  const siblings = bucket ? seeAlsoFor(bucket.title) : null;

  const column = (
    <div className="rr-column">
      <header className="rr-masthead">
        <SectionHead
          as="h1"
          label={`${eyebrow} · ${section.label}`}
          title={section.proposition}
        />
        <p className="rr-lede">{section.introduction}</p>
        {bucket ? (
          <CanonAnchor
            className="rr-ledger__fold rr-ledger__fold--anchor"
            citation={bucket.citation!}
            epigram={bucket.note}
          />
        ) : null}
      </header>

      {feature}

      {lead && leadVerdict ? (
        <section className="rr-lead-reading" aria-label="Current reading">
          <Reading tick label={`${section.label} · ${lead.id}`} title={lead.title}>
            <p>{lead.description}</p>
          </Reading>
          <CoherenceVerdict
            score={leadVerdict.score}
            state={leadVerdict.state}
            label={leadVerdict.label}
          />
        </section>
      ) : null}

      <div className="rr-ledger-record">
        {parts ? (
          <HoldingsLine className="rr-ledger__fold" parts={parts} />
        ) : null}
        <ReadingIndex
          label={`${section.label} record`}
          items={rest.map((r) => ({
            id: r.id,
            title: r.title,
            note: r.description,
            href: r.href,
            status: r.status,
            state: verdictForStatus(r.status).state,
          }))}
        />
        {bucket ? <LedgerLegend /> : null}
      </div>

      {after}

      {siblings ? (
        <SeeAlso className="rr-ledger__fold" items={siblings} />
      ) : null}
    </div>
  );

  if (!bucket) {
    return <div className="rr rr-page section-page">{column}</div>;
  }

  return (
    <div className="rr rr-page section-page">
      <div className="rr-ledger">
        {column}
        <LedgerRail>
          <CanonAnchor citation={bucket.citation!} epigram={bucket.note} />
          {parts ? <HoldingsLine parts={parts} /> : null}
          {siblings ? <SeeAlso items={siblings} /> : null}
        </LedgerRail>
      </div>
    </div>
  );
}
