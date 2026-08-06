import type { Metadata } from "next";
import { WorkSurface } from "@/components/WorkSurface";
import { publicSections } from "@/data/knowledge";

export const metadata: Metadata = { title: "Models" };

export default function Page() {
  return <WorkSurface section={publicSections.models} />;
}
