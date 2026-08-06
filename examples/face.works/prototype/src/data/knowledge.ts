export type PublicSectionKey =
  | "field-notes"
  | "models"
  | "frameworks"
  | "cases"
  | "conversations"
  | "experiments"
  | "library"
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

export const publicSections: Record<PublicSectionKey, PublicSection> = {
  "field-notes": {
    label: "Field Notes",
    proposition: "Observation stays provisional until pressure gives it form.",
    introduction: "Field Notes preserve what Facework is noticing now. They keep dates, uncertainty, and the path toward more durable models visible.",
    records: [
      { id: "FN-027", title: "Visible lineage", description: "How decision history changes whether an artifact can be inherited well.", status: "Developing", href: "/#current-attention", action: "Read note" },
      { id: "FN-026", title: "The cost of invisible structure", description: "Polish can conceal the decisions a future maintainer most needs to see.", status: "Observation", href: "/models", action: "Follow model" },
    ],
  },
  models: {
    label: "Models",
    proposition: "A model is useful when it changes what can be seen.",
    introduction: "Models are explanatory instruments. They expose relationships without pretending the representation is the reality.",
    records: [
      { id: "FM-001", title: "Cultural Physics", description: "A model of flow, resonance, entropy, and control across cultural systems.", status: "Active", href: "/protocol/cultural-physics", action: "Open deep read" },
      { id: "FM-014", title: "Inheritance Field", description: "A model for understanding what survives authorship, handoff, and tool change.", status: "Developing", href: "/frameworks", action: "Trace forward" },
    ],
  },
  frameworks: {
    label: "Frameworks",
    proposition: "Reusable judgment begins where preference becomes explicit.",
    introduction: "Frameworks turn observations and models into structures another practitioner can inspect, challenge, and apply.",
    records: [
      { id: "FVS-000", title: "Facework Visual Specification", description: "The canonical contract for visual behavior across identity and applications.", status: "Canonical", href: "/protocol", action: "Enter system" },
      { id: "FCD-001", title: "Coherence Design", description: "The discipline of designing systems that preserve identity under growth, pressure, and handoff.", status: "Active", href: "/protocol/coherence-design", action: "Read discipline" },
      { id: "FWP-001", title: "Facework Protocol", description: "The open practice and artifact sequence for coherent, ownable systems.", status: "Active", href: "/protocol/protocol-v1", action: "Read protocol" },
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
  conversations: {
    label: "Conversations",
    proposition: "A discipline becomes clearer when another intelligence pushes back.",
    introduction: "Conversations preserve the exchanges that challenge definitions, expose blind spots, and alter the work before it hardens.",
    records: [
      { id: "CONV-008", title: "When disciplines share a field", description: "A dialogue about translation, authority, and what each discipline makes visible.", status: "Developing", href: "/experiments", action: "Follow experiment" },
      { id: "CONV-007", title: "Identity without costume", description: "A working distinction between identity as coherent behavior and branding as applied appearance.", status: "Indexed", href: "/frameworks", action: "Trace framework" },
    ],
  },
  experiments: {
    label: "Experiments",
    proposition: "An experiment earns authority by surviving declared pressure.",
    introduction: "Experiments are visible propositions. Their status, boundaries, and next gates stay attached so novelty cannot impersonate truth.",
    records: [
      { id: "FVA-610", title: "Facework Field", description: "A private weekly ritual that turns three declared inputs into a bounded Lorenz trace.", status: "Experimental reference", href: "/field/index.html", action: "Enter Field" },
      { id: "FVI-400", title: "Exchange Resolve", description: "A motion signature that explains relationship, tension, and stabilization without literal butterfly behavior.", status: "Canonical", href: "/frameworks", action: "View lineage" },
    ],
  },
  library: {
    label: "Library",
    proposition: "Where the work came from remains part of the work.",
    introduction: "The library connects reading, listening, watching, artifacts, standards, and conversations to the ideas they helped form.",
    records: [
      { id: "FVR-000", title: "Atlas of Coherence", description: "The research method and evidence register supporting the visual specification.", status: "Active research", href: "/frameworks", action: "Browse references" },
      { id: "FVR-104", title: "Scientific visualization", description: "Evidence for showing complex systems without borrowing scientific authority the work has not earned.", status: "Initial synthesis", href: "/experiments", action: "See application" },
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
