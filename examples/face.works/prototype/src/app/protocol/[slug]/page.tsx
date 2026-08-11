import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { protocolDocs } from "@/data/canon";
import { Markdown } from "@/components/Markdown";
import { RecordLabel } from "@/components/rr";

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

export default async function ProtocolDocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = protocolDocs.find((d) => d.slug === slug);
  if (!doc) return notFound();

  return (
    <div className="rr rr-page section-page">
      <div className="rr-column">
        <header className="rr-masthead">
          <RecordLabel tick>Facework · {categoryLabels[doc.category]}</RecordLabel>
          <h1 className="rr-display">{doc.title}</h1>
          <p className="rr-lede">{doc.subtitle}</p>
          {doc.sourcePath && doc.sourceSha ? (
            <p className="rr-label rr-provenance">
              Full canonical text · {doc.sourcePath} @ {doc.sourceSha}
              {doc.sourceStatus ? <> · Source status: {doc.sourceStatus}</> : null}
            </p>
          ) : doc.excerpt ? (
            <p className="rr-label rr-provenance">
              Site summary · no canonical source document
            </p>
          ) : null}
          <Link className="rr-link" href="/protocol">
            ← The System
          </Link>
        </header>

        <article className="rr-reading__body">
          <Markdown content={doc.content} />
        </article>
      </div>
    </div>
  );
}
