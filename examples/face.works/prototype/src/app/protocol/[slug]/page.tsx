import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { protocolDocs } from "@/data/demo";
import { Markdown } from "@/components/Markdown";

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
    <div className="section-page">
      <section className="section-threshold" aria-labelledby="doc-title">
        <p className="eyebrow">Facework / {categoryLabels[doc.category]}</p>
        <h1 id="doc-title">{doc.title}</h1>
        <p className="section-intro">{doc.subtitle}</p>
      </section>

      <div className="section-records">
        <header className="section-head">
          <p>
            <Link href="/protocol">← The System</Link>
          </p>
          <p>{categoryLabels[doc.category]}</p>
        </header>
        <article style={{ maxWidth: "var(--fw-measure)", padding: "48px 0 0" }}>
          <Markdown content={doc.content} />
        </article>
      </div>
    </div>
  );
}
