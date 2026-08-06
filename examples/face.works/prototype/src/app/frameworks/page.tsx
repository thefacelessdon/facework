import type { Metadata } from "next";
import { KnowledgeSection } from "@/components/KnowledgeSection";
import { publicSections } from "@/data/knowledge";

export const metadata: Metadata = { title: "Frameworks" };
export default function Page() { return <KnowledgeSection section={publicSections.frameworks} />; }
