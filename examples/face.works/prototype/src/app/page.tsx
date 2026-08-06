import {
  RecordLabel,
  SectionHead,
  Reading,
  CoherenceVerdict,
  ReadingIndex,
  InkCTA,
} from "@/components/rr";
import { publicSections, verdictForStatus } from "@/data/knowledge";

// The current reading = the latest field note; recent readings span the four
// Work types; the browse index lets every type surface be reached from here.
const current = publicSections["field-notes"].records[0]; // FN-027 · Visible lineage
const currentVerdict = verdictForStatus(current.status);

const recent = [
  publicSections["field-notes"].records[1], // FN-026
  publicSections.models.records[0], // FM-001 · Cultural Physics
  publicSections.frameworks.records[1], // FCD-001 · Coherence Design
  publicSections.experiments.records[0], // FVA-610 · Facework Field
].map((r) => ({
  id: r.id,
  title: r.title,
  note: r.description,
  href: r.href,
  status: r.status,
  state: verdictForStatus(r.status).state,
}));

const browse = (
  ["field-notes", "models", "frameworks", "experiments", "conversations", "library"] as const
).map((key) => {
  const s = publicSections[key];
  return { title: s.label, note: s.proposition, href: `/${key}` };
});

export default function Home() {
  return (
    <div className="rr rr-page section-page">
      <div className="rr-column">
        <header className="rr-masthead">
          <RecordLabel tick>Facework · A public record of attention</RecordLabel>
          <h1 className="rr-display">It doesn&rsquo;t decorate. It reads.</h1>
          <p className="rr-lede">
            Facework is a discipline for seeing, designing, and maintaining the
            structures that let identity carry weight over time. Every surface
            here is a reading of a real system &mdash; what it carries, whether it
            holds under pressure, and what survives its author.
          </p>
        </header>

        <section id="current-attention" className="rr-section" aria-label="Current reading">
          <SectionHead label="Current reading" title="What has our attention now" />
          <Reading tick label={`Field Note · ${current.id}`} title={current.title}>
            <p>{current.description}</p>
            <p>
              A reading is finished not when it looks resolved, but when it would
              still hold if someone inherited it cold. Decision history is the
              part most often polished away &mdash; and the part a future
              maintainer most needs to see.
            </p>
          </Reading>
          <CoherenceVerdict
            score={currentVerdict.score}
            state={currentVerdict.state}
            label={currentVerdict.label}
          />
        </section>

        <section className="rr-section" aria-label="Recent readings">
          <SectionHead label="Recent readings" title="Across the record" />
          <ReadingIndex items={recent} label="Recent readings across the record" />
        </section>

        <section className="rr-section" aria-label="Browse The Work">
          <SectionHead label="The Work" title="Browse by type" />
          <ReadingIndex items={browse} showStatus={false} label="The Work by type" />
        </section>

        <section className="rr-section" aria-label="The Practice">
          <SectionHead label="The Practice" title="Work with Facework" />
          <p className="rr-lede">
            The other mode: how to work with Facework &mdash; the proof, the
            method, and what an engagement costs and delivers.
          </p>
          <div>
            <InkCTA href="/engage">Enter the practice</InkCTA>
          </div>
        </section>
      </div>
    </div>
  );
}
