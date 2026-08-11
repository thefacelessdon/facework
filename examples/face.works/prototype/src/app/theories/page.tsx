import type { Metadata } from "next";
import { WorkSurface } from "@/components/WorkSurface";
import { publicSections } from "@/data/knowledge";

export const metadata: Metadata = { title: "Theories" };

export default function Page() {
  return <WorkSurface section={publicSections.theories} />;
}
