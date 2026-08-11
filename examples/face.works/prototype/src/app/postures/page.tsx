import type { Metadata } from "next";
import { SectionHead, Reading, RecordLabel } from "@/components/rr";
import { postures, posturesDefinition } from "@/data/knowledge";

export const metadata: Metadata = {
  title: "Postures",
  description:
    "The standing operating modes through which coherence is maintained after it is established (CONSTITUTION Article V).",
};

/**
 * Postures — an honest index. The canon defines Postures (CONSTITUTION.md
 * Article V) and the eight are documented as operating skills
 * (skills/OPERATING_SKILLS.md), but little posture *content* has been
 * published yet. This surface states the definition, lists the index, and
 * marks the record status plainly — it does not fabricate entries.
 */
export default function Page() {
  return (
    <div className="rr rr-page section-page">
      <div className="rr-column">
        <header className="rr-masthead">
          <SectionHead
            as="h1"
            label="The Work · Postures"
            title="What establishes coherence cannot be what maintains it."
          />
          <p className="rr-lede">
            The Protocol establishes coherence in one pass. Postures keep it
            &mdash; the standing modes a live system operates in after setup,
            each firing on its own closing signal.
          </p>
        </header>

        <section className="rr-section" aria-label="The canon definition">
          <SectionHead label="Canon" title="The definition" />
          <Reading tick label="Constitution · Article V" title="The Protocol and Postures Principle">
            <p>&ldquo;{posturesDefinition}&rdquo;</p>
            <p>
              The Protocol and the Postures may evolve as the practice matures.
              The primitives shall not.
            </p>
          </Reading>
        </section>

        <section className="rr-section" aria-label="The posture index">
          <SectionHead label="The record" title="Eight standing modes" />
          <dl className="rr-strip" aria-label="The eight Postures">
            {postures.map((p) => (
              <div className="rr-strip__pair" key={p.name}>
                <dt className="rr-strip__term">{p.name}</dt>
                <dd className="rr-strip__desc">{p.purpose}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="rr-section" aria-label="Record status">
          <RecordLabel tick>
            Index established &mdash; entries publish as the practice operates
          </RecordLabel>
          <p className="rr-lede">
            The eight Postures are documented as operating skills in the open
            canon. Published posture readings &mdash; what each mode observed
            and corrected on real systems &mdash; enter this record as the
            practice runs.
          </p>
        </section>
      </div>
    </div>
  );
}
