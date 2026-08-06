import Link from "next/link";
import { ArtifactRecord } from "@/components/ArtifactRecord";

const knowledgePath = [
  { order: "01 / NOW", title: "Field Notes", note: "What we notice before it hardens.", href: "/field-notes" },
  { order: "02", title: "Models", note: "Ways of seeing made inspectable.", href: "/models" },
  { order: "03", title: "Frameworks", note: "Reusable structures for judgment.", href: "/frameworks" },
  { order: "04", title: "Standards", note: "What has earned permanence.", href: "/frameworks" },
  { order: "05 / PROOF", title: "Cases", note: "Where the ideas met reality.", href: "/cases" },
];

export default function Home() {
  return (
    <>
      <section className="threshold" aria-labelledby="hero-title">
        <p className="eyebrow">Facework / Public record / Foundation active</p>
        <h1 id="hero-title">Coherence is not sameness. It is relationship held under pressure.</h1>
        <div className="threshold-foot">
          <p>Facework is a discipline for seeing, designing, and maintaining the structures that let identity carry weight over time.</p>
          <Link href="#current-attention">Enter the current field ↓</Link>
        </div>
      </section>

      <section className="ledger" id="current-attention" aria-labelledby="attention-title">
        <header className="section-head"><p>01 / Current attention</p><p>Observation → Model</p></header>
        <div className="claim">
          <p className="claim-meta">Field Note 027<br />06 August 2026<br />Status / Developing</p>
          <div className="claim-body">
            <h2 id="attention-title" className="display-title">A system becomes trustworthy when its decisions remain visible after its author leaves.</h2>
            <p className="lead">We are studying how lineage changes the quality of inheritance: not as administrative metadata, but as part of the artifact itself.</p>
            <details className="trace">
              <summary>Trace this idea</summary>
              <div className="trace-panel">
                <p><span>Related model</span><Link href="/models">Inheritance Field / FM-014</Link></p>
                <p><span>Formalized through</span><Link href="/frameworks">FVS-100 Visual Constitution</Link></p>
                <p><span>Applied in</span><Link href="/cases">Lineage Inspector / FVA-600</Link></p>
                <p><span>Evidence</span><Link href="#artifact-record">Application Translation evaluation</Link></p>
              </div>
            </details>
          </div>
        </div>
        <div className="evidence-strip" aria-label="Evidence summary">
          <p><span>Observed</span>Decisions disappear inside polished deliverables.</p>
          <p><span>Testing</span>Visible status, source, and dependency at the point of use.</p>
          <p><span>Limit</span>Transparency cannot replace judgment or stewardship.</p>
        </div>
      </section>

      <section className="ledger" aria-labelledby="path-title">
        <header className="section-head"><p>02 / Knowledge path</p><p>Fast signal → durable knowledge</p></header>
        <h2 id="path-title" className="display-title knowledge-path-title">The pace slows as an idea earns permanence.</h2>
        <ol className="path-list">
          {knowledgePath.map((item) => (
            <li key={`${item.order}-${item.title}`}>
              <span>{item.order}</span>
              <Link href={item.href}><strong>{item.title}</strong><small>{item.note}</small></Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="ledger" id="artifact-record" aria-labelledby="record-title">
        <header className="section-head"><p>03 / Artifact record</p><p>Claim / type / status / lineage</p></header>
        <ArtifactRecord />
      </section>

      <section className="ledger" aria-labelledby="dialogue-title">
        <header className="section-head"><p>04 / Practice in dialogue</p><p>Conversations ↔ experiments</p></header>
        <div className="bilateral">
          <div><p className="kicker">Conversation 008</p><h2 id="dialogue-title" className="display-title">What becomes visible when two disciplines share a field?</h2></div>
          <div><p className="kicker">Experiment 012</p><p className="lead">Dialogue and prototypes expose a model to pressure before it becomes a standard.</p><Link className="text-link" href="/conversations">Follow the intellectual lineage ↗</Link></div>
        </div>
      </section>

      <section className="about-band" aria-labelledby="about-title">
        <p className="eyebrow">05 / About Facework</p>
        <h2 id="about-title" className="display-title">Identity is the capacity to remain intelligible through change.</h2>
        <div className="about-copy">
          <p>Facework develops theory, standards, and tools for coherence across organizations, products, environments, and public life.</p>
          <p className="meta">FACEWORK / FVS 0.1 / PRODUCTION CANDIDATE</p>
        </div>
      </section>
    </>
  );
}
