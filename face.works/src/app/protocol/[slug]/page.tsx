import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { protocolDocs } from "@/data/demo";
import { Markdown } from "@/components/Markdown";

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
    title: `${doc.title} — Facework Protocol`,
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
    <div className="mx-auto max-w-5xl px-6 md:px-8 lg:px-20 py-16 md:py-20 space-y-8">
      <Link
        href="/protocol"
        className="text-sm text-muted hover:text-foreground inline-flex items-center gap-2"
      >
        <span aria-hidden="true">&larr;</span>
        <span>Protocol</span>
      </Link>

      <div className="space-y-3">
        <p className="text-xs tracking-[0.2em] uppercase text-muted">
          {doc.category}
        </p>
        <h1 className="text-2xl md:text-3xl font-normal tracking-tight">{doc.title}</h1>
        <p className="text-muted text-sm md:text-base">{doc.subtitle}</p>
      </div>

      <hr />

      <article className="max-w-2xl">
        <Markdown content={doc.content} />
      </article>
    </div>
  );
}
