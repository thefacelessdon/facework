import Link from "next/link";
import { protocolDocs } from "@/data/demo";

const categoryLabels: Record<string, string> = {
  theory: "Theory",
  methodology: "Methodology",
  spec: "Specification",
  conformance: "Conformance",
};

export default function ProtocolPage() {
  const grouped = protocolDocs.reduce(
    (acc, doc) => {
      if (!acc[doc.category]) acc[doc.category] = [];
      acc[doc.category].push(doc);
      return acc;
    },
    {} as Record<string, typeof protocolDocs>,
  );

  return (
    <div className="mx-auto max-w-5xl px-6 md:px-8 lg:px-20 py-16 md:py-20 space-y-12">
      <div className="space-y-4">
        <h1 className="text-2xl md:text-3xl font-normal tracking-tight">The Protocol</h1>
        <p className="text-sm md:text-base text-muted max-w-xl leading-relaxed">
          Everything here is open. Read it, reference it, build with it.
          The protocol defines what a coherent system looks like. The
          commercial layer provides how to build one efficiently — but
          it is never required.
        </p>
      </div>

      {Object.entries(grouped).map(([category, docs]) => (
        <section key={category} className="space-y-3">
          <h2 className="text-xs tracking-[0.2em] uppercase text-muted">
            {categoryLabels[category] || category}
          </h2>
          <div className="space-y-2">
            {docs
              .sort((a, b) => a.order - b.order)
              .map((doc) => (
                <Link
                  key={doc.slug}
                  href={`/protocol/${doc.slug}`}
                  className="block border border-border rounded p-5 hover:border-muted group"
                >
                  <h3 className="text-sm font-medium tracking-wide group-hover:text-clarity">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-muted mt-1">{doc.subtitle}</p>
                </Link>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
