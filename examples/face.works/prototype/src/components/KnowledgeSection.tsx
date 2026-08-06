import Link from "next/link";
import type { PublicSection } from "@/data/knowledge";

export function KnowledgeSection({ section }: { section: PublicSection }) {
  return (
    <div className="section-page">
      <section className="section-threshold" aria-labelledby="section-title">
        <p className="eyebrow">Facework / {section.label}</p>
        <h1 id="section-title">{section.proposition}</h1>
        <p className="section-intro">{section.introduction}</p>
      </section>
      <section className="section-records" aria-label={`${section.label} record`}>
        {section.records.map((record) => (
          <article className="section-record" key={record.id}>
            <p className="artifact-id">{record.id}<br />{record.status}</p>
            <div><h2>{record.title}</h2><p>{record.description}</p></div>
            <Link href={record.href}>{record.action} ↗</Link>
          </article>
        ))}
      </section>
    </div>
  );
}
