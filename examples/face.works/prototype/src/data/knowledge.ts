export type PublicSectionKey =
  | "theories"
  | "runs"
  | "methodology"
  | "cases"
  | "about";

export type PublicRecord = {
  id: string;
  title: string;
  description: string;
  status: string;
  href: string;
  action: string;
};

export type PublicSection = {
  label: string;
  proposition: string;
  introduction: string;
  records: PublicRecord[];
};

// --- Shape-law verdict (DESIGN.md §7, §8) ---------------------------------
// A record's own `status` string is the source of truth. The verdict derives
// the shape-law state (square = open/provisional, circle = settled/issued) and
// a coarse coherence score (n/5) from it — never invented per surface. The
// state (open vs settled) is load-bearing; the score is an intentionally coarse
// diagnostic read of the same status.

export type ReadingState = "open" | "settled";
export type Verdict = { score: number; state: ReadingState; label: string };

export function verdictForStatus(status: string): Verdict {
  const key = status.trim().toLowerCase();
  if (key === "canonical") return { score: 5, state: "settled", label: "canonical" };
  if (key.startsWith("active") || key === "operating" || key === "reference" || key === "indexed" || key.startsWith("level 3"))
    return { score: 4, state: "settled", label: key.startsWith("level 3") ? "verified" : key };
  if (key === "developing") return { score: 3, state: "open", label: "developing" };
  if (key === "in build") return { score: 3, state: "open", label: "in build" };
  if (key === "observation") return { score: 2, state: "open", label: "observation" };
  if (key.startsWith("experimental")) return { score: 2, state: "open", label: "experimental" };
  if (key === "initial synthesis") return { score: 2, state: "open", label: "initial synthesis" };
  return { score: 3, state: "open", label: key };
}

// --- The Work: working-canon buckets ---------------------------------------
// The Work browses by the shape of the working canon (standards/README.md:
// "the working canon is the Constitution, the theory layer, the Protocol, and
// the Skills"), plus the evidence Article VI requires and the methodology loop
// COS §VII runs. Constitution and Protocol link straight to the served
// canonical documents — a single doc needs no wrapper surface. Each note is a
// one-line epigram anchored in the canon it names.
// Ratified in methodology/decisions/DECISION-002-standards-first-experience-language.md.

export type WorkBucket = {
  title: string;
  /** Canon-anchored epigram (one line). */
  note: string;
  href: string;
  /**
   * Canon anchor citation for the bucket's ledger apparatus (rendered
   * uppercase in record voice, e.g. "CONSTITUTION · ART. VI"). Only browse
   * surfaces carry one — single-doc buckets ARE the canon they would cite.
   */
  citation?: string;
};

export const workBuckets: WorkBucket[] = [
  {
    title: "Constitution",
    note: "Protocols may change. Skills may change. The Constitution remains the governing authority.",
    href: "/protocol/constitution",
  },
  {
    title: "Theories",
    note: "No element of the practice may contradict the principles it stands on.",
    href: "/theories",
    citation: "Constitution · Art. III",
  },
  {
    title: "Protocol",
    note: "Coherence is established in sequence — phases, gates, artifacts, evidence.",
    href: "/protocol",
  },
  {
    title: "Postures",
    note: "The standing operating modes through which coherence is maintained after it is established.",
    href: "/postures",
    citation: "Constitution · Art. V",
  },
  {
    title: "Runs & Evidence",
    note: "Every meaningful action performed through the practice produces persistent evidence.",
    href: "/runs",
    citation: "Constitution · Art. VI",
  },
  {
    title: "Methodology",
    note: "Evolution strengthens coherence rather than increasing novelty.",
    href: "/methodology",
    citation: "Constitution · Art. XII",
  },
];

// --- The Holdings Ledger — the ledger counts itself (CONSTITUTION Art. VI) --
// Every count shown on a bucket surface derives from the real records above,
// through verdictForStatus — never restated by hand. Records carry no dates,
// so the ledger shows none.

export type Holdings = { total: number; settled: number; open: number };

export function holdingsFor(section: PublicSection): Holdings {
  const states = section.records.map((r) => verdictForStatus(r.status).state);
  return {
    total: states.length,
    settled: states.filter((s) => s === "settled").length,
    open: states.filter((s) => s === "open").length,
  };
}

// --- Postures (canon: CONSTITUTION.md Article V) ----------------------------
// The published posture record is young: the eight Postures are documented as
// operating skills (skills/OPERATING_SKILLS.md) but little posture *content*
// has been issued yet. The surface states the canon definition and the index,
// and marks the record status honestly — it does not fabricate entries.

export type Posture = {
  name: string;
  purpose: string;
};

/** Canon definition, quoted from CONSTITUTION.md Article V. */
export const posturesDefinition =
  "Postures are the standing operating modes through which coherence is maintained after it is established.";

/**
 * Published posture readings — entries issued into the posture record.
 * The collection is real and currently empty: the index is established, and
 * entries publish as the practice operates. The Postures ledger counts this
 * (8 postures defined · 0 entries issued) rather than fabricating history.
 */
export const postureEntries: PublicRecord[] = [];

/** The eight Postures, as documented in skills/OPERATING_SKILLS.md. */
export const postures: Posture[] = [
  { name: "MVP Cut", purpose: "Define the smallest high-integrity MVP slice." },
  { name: "Beta Hardening", purpose: "Harden MVP into beta reliability and observability." },
  { name: "Scale Readiness", purpose: "Assess readiness to scale team, system, and operations." },
  { name: "Contract Sync", purpose: "Resolve code/docs/contract drift." },
  { name: "Decision Log", purpose: "Record high-signal decisions with rationale and revisit triggers." },
  { name: "Weekly Upgrade", purpose: "Convert weekly learnings into system improvements." },
  { name: "Evidence Debug", purpose: "Debug from hard evidence and close with prevention." },
  { name: "Launch Ops", purpose: "Execute release and verify post-launch health." },
];

export const publicSections: Record<PublicSectionKey, PublicSection> = {
  theories: {
    label: "Theories",
    proposition: "A theory is useful when it changes what can be seen.",
    introduction:
      "The theory layer supplies the principles the practice applies — Cultural Physics, the discipline of Coherence Design, and the models still under development. Nothing downstream may contradict them.",
    records: [
      { id: "FM-001", title: "Cultural Physics", description: "A model of flow, resonance, entropy, and control across cultural systems.", status: "Active", href: "/protocol/cultural-physics", action: "Open deep read" },
      { id: "FCD-001", title: "Coherence Design", description: "The discipline of designing systems that preserve identity under growth, pressure, and handoff.", status: "Active", href: "/protocol/coherence-design", action: "Read discipline" },
      { id: "FM-014", title: "Inheritance Field", description: "A model for understanding what survives authorship, handoff, and tool change.", status: "Developing", href: "/protocol/coherence-design", action: "Trace forward" },
    ],
  },
  runs: {
    label: "Runs & Evidence",
    proposition: "Evidence is what survives the departure of its author.",
    introduction:
      "Runs & Evidence preserves what operating the practice produces: observations from live runs, instruments under declared pressure, and artifacts that earned their status. The audited record lives on the proof pages.",
    records: [
      { id: "FN-027", title: "Visible lineage", description: "How decision history changes whether an artifact can be inherited well.", status: "Developing", href: "/#current-attention", action: "Read note" },
      { id: "FN-026", title: "The cost of invisible structure", description: "Polish can conceal the decisions a future maintainer most needs to see.", status: "Observation", href: "/theories", action: "Follow model" },
      { id: "FVA-610", title: "Facework Field", description: "A private weekly ritual that turns three declared inputs into a bounded Lorenz trace.", status: "Experimental reference", href: "/field/index.html", action: "Enter Field" },
      { id: "FVI-400", title: "Exchange Resolve", description: "A motion signature that explains relationship, tension, and stabilization without literal butterfly behavior.", status: "Canonical", href: "/methodology", action: "View lineage" },
    ],
  },
  methodology: {
    label: "Methodology",
    proposition: "The practice improves by reading its own record.",
    introduction:
      "Methodology holds the build system: governed specifications, research registers, and the exchanges that change how the practice works before the change hardens.",
    records: [
      { id: "FVS-000", title: "Facework Visual Specification", description: "The canonical contract for visual behavior across identity and applications.", status: "Canonical", href: "/protocol", action: "Enter system" },
      { id: "FVR-000", title: "Atlas of Coherence", description: "The research method and evidence register supporting the visual specification.", status: "Active research", href: "/runs", action: "Browse references" },
      { id: "FVR-104", title: "Scientific visualization", description: "Evidence for showing complex systems without borrowing scientific authority the work has not earned.", status: "Initial synthesis", href: "/runs", action: "See application" },
      { id: "CONV-008", title: "When disciplines share a field", description: "A dialogue about translation, authority, and what each discipline makes visible.", status: "Developing", href: "/runs", action: "Follow experiment" },
      { id: "CONV-007", title: "Identity without costume", description: "A working distinction between identity as coherent behavior and branding as applied appearance.", status: "Indexed", href: "/theories", action: "Trace framework" },
    ],
  },
  cases: {
    label: "Cases",
    proposition: "Built with the Facework discipline, in production.",
    introduction: "These systems were built with the Facework discipline rather than through a full protocol run, so no conformance Level is claimed. The audited and Facework-run work — with its provenance and disclosures — lives on the proof record.",
    records: [
      { id: "CASE-001", title: "Chefnic", description: "A real catering business given an AI-run back-office: a canonical routine registry, one invoicing system of record, and PII-safe operations built with the Facework discipline.", status: "Operating", href: "https://chefnic.com", action: "View business" },
      { id: "CASE-002", title: "Club Volley", description: "A tennis-culture venture where strategy became a governed system — one canonical numbers source, a load-bearing design language, and a role-gated platform built with the Facework discipline.", status: "In build", href: "https://clubvolley.tennis", action: "View venture" },
    ],
  },
  about: {
    label: "About",
    proposition: "Facework is a practice for making coherence transmissible.",
    introduction: "It develops theory, standards, and tools that let identity survive growth, pressure, implementation, and handoff.",
    records: [
      { id: "PRACTICE", title: "Work with Facework", description: "The commercial expression of the practice, with fit and transfer boundaries made explicit.", status: "Active", href: "/engage", action: "Understand engagement" },
      { id: "STATUS", title: "System status", description: "Facework submits its own development to visible gates, constraints, and evidence.", status: "Foundation active", href: "/status", action: "Inspect status" },
    ],
  },
};
