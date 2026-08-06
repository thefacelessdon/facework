import type { Metadata } from "next";
import { WorkSurface } from "@/components/WorkSurface";
import { publicSections } from "@/data/knowledge";

export const metadata: Metadata = { title: "About" };

export default function Page() {
  return <WorkSurface section={publicSections.about} eyebrow="Facework" />;
}
