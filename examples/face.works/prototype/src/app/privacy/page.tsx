import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How the Facework website and Facework Field handle information.",
};

const practices = [
  {
    title: "Public website",
    body: "The public Facework website does not require an account. This production candidate does not include advertising trackers, marketing cookies, or third-party analytics.",
  },
  {
    title: "Facework Field",
    body: "A trace is generated in your browser. Nothing is saved unless you choose Save trace. Saved traces remain in this browser's local storage and are not transmitted to Facework.",
  },
  {
    title: "Your controls",
    body: "Inside Facework Field you can delete an individual trace or clear the full local archive. Clearing browser storage also removes the archive.",
  },
  {
    title: "Collective mode",
    body: "The current collective field uses synthetic traces for demonstration. A networked multiplayer release requires a separate privacy, consent, retention, moderation, and safety review before activation.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="section-page policy-page">
      <section className="section-threshold" aria-labelledby="privacy-title">
        <p className="eyebrow">Facework / Operational note 01</p>
        <h1 id="privacy-title">Privacy should be visible in the behavior.</h1>
        <p className="section-intro">
          This note describes the current implementation. If the website begins
          collecting or transmitting information, this record must change before
          that behavior ships.
        </p>
      </section>
      <section className="policy-records" aria-label="Privacy practices">
        {practices.map((practice, index) => (
          <article className="policy-record" key={practice.title}>
            <p className="artifact-id">0{index + 1}</p>
            <h2>{practice.title}</h2>
            <p>{practice.body}</p>
          </article>
        ))}
      </section>
      <p className="policy-note">Effective 6 August 2026 · operational statement, not a substitute for jurisdiction-specific legal review.</p>
    </div>
  );
}
