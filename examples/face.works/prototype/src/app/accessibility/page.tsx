import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Facework's current accessibility commitments and validation status.",
};

const commitments = [
  "Semantic landmarks, ordered headings, and visible keyboard focus.",
  "Layouts that reflow from small phones through large displays and at increased text size.",
  "Color contrast aligned with WCAG 2.2 Level AA targets.",
  "Reduced-motion behavior for people who request it.",
  "Plain-language disclosure when a validation gate remains incomplete.",
];

export default function AccessibilityPage() {
  return (
    <div className="section-page policy-page">
      <section className="section-threshold" aria-labelledby="accessibility-title">
        <p className="eyebrow">Facework / Operational note 02</p>
        <h1 id="accessibility-title">Access is part of coherence.</h1>
        <p className="section-intro">
          Facework treats accessibility as a release condition, not an optional
          layer. Automated checks support that work; they do not replace review
          with assistive technology and disabled people.
        </p>
      </section>
      <section className="policy-records" aria-label="Accessibility commitments">
        {commitments.map((commitment, index) => (
          <article className="policy-record" key={commitment}>
            <p className="artifact-id">0{index + 1}</p>
            <h2>{commitment}</h2>
          </article>
        ))}
      </section>
      <div className="policy-note">
        <p><strong>Current status:</strong> the latest automated audit (2026-08-06, axe-core 4.11.1, WCAG 2.2 A/AA ruleset) reports 0 violations across 16 representative routes of the production build. Automated checks catch only part of what matters; manual VoiceOver, NVDA, iOS Safari, and Android Chrome review remains a named release gate.</p>
        <p>Report an access barrier at <a href="mailto:hello@face.works">hello@face.works</a>.</p>
      </div>
    </div>
  );
}
