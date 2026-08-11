import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { protocolDocs } from "@/data/canon";
import type { ProtocolDoc } from "@/data/schema";
import { Markdown } from "@/components/Markdown";
import {
  ContentsFold,
  ContentsNav,
  LedgerRail,
  MarginRecord,
  MarginWayfinding,
  RecordLabel,
  SeeAlso,
  type SeeAlsoItem,
} from "@/components/rr";
import { approxWords, countWords, extractHeadings } from "@/lib/markdown-blocks";

const categoryLabels = {
  theory: "Theory",
  discipline: "Discipline",
  practice: "Practice",
  governance: "Governance + Conformance",
} as const;

export function generateStaticParams() {
  return protocolDocs.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = protocolDocs.find((d) => d.slug === slug);
  if (!doc) return { title: "Not Found" };
  return {
    title: `${doc.title} — Facework System`,
    description: doc.subtitle,
  };
}

/**
 * Provenance — one source of truth in code, two slots via CSS (the ledger's
 * holdings pattern): inline under the lede below 1100px, promoted into the
 * margin rail at width. The spans exist so the rail can stack the record
 * onto its own lines; inline they read as today's single line.
 */
function Provenance({ doc }: { doc: ProtocolDoc }) {
  if (doc.sourcePath && doc.sourceSha) {
    return (
      <p className="rr-label rr-provenance">
        <span>Full canonical text</span>
        <span aria-hidden="true" className="rr-provenance__sep">
          {" · "}
        </span>
        <span className="rr-provenance__src">
          {doc.sourcePath} @ {doc.sourceSha}
        </span>
        {doc.sourceStatus ? (
          <>
            <span aria-hidden="true" className="rr-provenance__sep">
              {" · "}
            </span>
            <span>Source status: {doc.sourceStatus}</span>
          </>
        ) : null}
      </p>
    );
  }
  if (doc.excerpt) {
    return (
      <p className="rr-label rr-provenance">
        Site summary · no canonical source document
      </p>
    );
  }
  return null;
}

export default async function ProtocolDocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = protocolDocs.find((d) => d.slug === slug);
  if (!doc) return notFound();

  // The margin apparatus derives everything from the document itself: the
  // h2 spine (omitted entirely under 2 — no empty apparatus), the honest
  // reading length (~words, never a reading-time estimate), and the same-
  // category siblings for wayfinding.
  const headings = extractHeadings(doc.content);
  const contents = headings.length >= 2 ? headings : null;
  const words = approxWords(countWords(doc.content));
  const seeAlso: SeeAlsoItem[] = [
    { label: "The System", href: "/protocol" },
    ...protocolDocs
      .filter((d) => d.category === doc.category && d.slug !== doc.slug)
      .slice(0, 3)
      .map((d) => ({ label: d.title, href: `/protocol/${d.slug}` })),
  ];

  return (
    <div className="rr rr-page section-page">
      <div className="rr-ledger rr-ledger--doc">
        <div className="rr-column">
          <header className="rr-masthead">
            <RecordLabel tick>
              Facework · {categoryLabels[doc.category]}
            </RecordLabel>
            <h1 className="rr-display">{doc.title}</h1>
            <p className="rr-lede">{doc.subtitle}</p>
            <div className="rr-ledger__fold">
              <Provenance doc={doc} />
            </div>
            <Link className="rr-link" href="/protocol">
              ← The System
            </Link>
          </header>

          {contents ? (
            <ContentsFold className="rr-ledger__fold" headings={contents} />
          ) : null}

          <article className="rr-reading__body">
            <Markdown content={doc.content} />
          </article>

          <SeeAlso className="rr-ledger__fold" items={seeAlso} />
        </div>

        <LedgerRail>
          <MarginRecord>
            <RecordLabel>
              {categoryLabels[doc.category]} · {doc.slug}
            </RecordLabel>
            <Provenance doc={doc} />
            <p className="rr-label rr-margin-record__length">
              <strong>~{words.toLocaleString("en-US")}</strong> words
            </p>
          </MarginRecord>
          <MarginWayfinding>
            {contents ? <ContentsNav headings={contents} /> : null}
            <SeeAlso items={seeAlso} />
          </MarginWayfinding>
        </LedgerRail>
      </div>
    </div>
  );
}
