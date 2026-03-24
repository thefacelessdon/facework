import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { protocolDocs } from "@/data/demo";

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

  const lines = doc.content.split("\n");

  return (
    <div className="mx-auto max-w-5xl px-8 lg:px-20 py-20 space-y-10">
      <Link
        href="/protocol"
        className="text-sm text-muted hover:text-foreground"
      >
        <span aria-hidden="true">&larr;</span>
        <span className="ml-2">Protocol</span>
      </Link>

      <div className="space-y-3">
        <p className="text-xs tracking-[0.2em] uppercase text-muted">
          {doc.category}
        </p>
        <h1 className="text-3xl font-normal tracking-tight">{doc.title}</h1>
        <p className="text-muted">{doc.subtitle}</p>
      </div>

      <hr />

      <article className="max-w-2xl space-y-4">
        {lines.map((line, i) => {
          if (line.startsWith("## ")) {
            return (
              <h2 key={i} className="text-lg font-medium tracking-wide mt-12 mb-4">
                {line.slice(3)}
              </h2>
            );
          }
          if (line.startsWith("```")) return null;
          if (line.startsWith("|")) {
            return (
              <p key={i} className="text-sm text-muted">
                {line}
              </p>
            );
          }
          if (line.startsWith("- **")) {
            const match = line.match(/- \*\*(.+?)\*\* — (.+)/);
            if (match) {
              return (
                <p key={i} className="ml-4 my-2 text-sm">
                  <span className="text-foreground">{match[1]}</span>
                  <span className="text-muted"> — {match[2]}</span>
                </p>
              );
            }
          }
          if (line.startsWith("**") && line.endsWith("**")) {
            return (
              <p key={i} className="font-medium mt-6 text-sm">
                {line.slice(2, -2)}
              </p>
            );
          }
          if (line.trim() === "") return <div key={i} className="h-3" />;
          const parts = line.split(/(\*\*.*?\*\*)/);
          return (
            <p key={i} className="text-sm leading-relaxed text-muted">
              {parts.map((part, j) =>
                part.startsWith("**") && part.endsWith("**") ? (
                  <strong key={j} className="text-foreground font-medium">{part.slice(2, -2)}</strong>
                ) : (
                  <span key={j}>{part}</span>
                ),
              )}
            </p>
          );
        })}
      </article>
    </div>
  );
}
