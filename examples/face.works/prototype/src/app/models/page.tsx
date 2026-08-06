import type { Metadata } from "next";
import { KnowledgeSection } from "@/components/KnowledgeSection";
import { publicSections } from "@/data/knowledge";

export const metadata: Metadata = { title: "Models" };
export default function Page() { return <KnowledgeSection section={publicSections.models} />; }
