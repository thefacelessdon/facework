import { describe, it, expect } from "vitest";
import nextConfig from "../../next.config";

// Family invitation links live at face.works/berdia/... — this mount must not be dropped.
describe("berdia family mount", () => {
  it("rewrites /berdia and /berdia/* (intake, plan, documents, portal, api) to berdia-trust", async () => {
    const rw = await (nextConfig.rewrites as () => Promise<{ source: string; destination: string }[]>)();
    const list = Array.isArray(rw) ? rw : [];
    expect(list).toContainEqual({ source: "/berdia", destination: "https://berdia-trust.vercel.app/berdia/" });
    expect(list).toContainEqual({ source: "/berdia/:path*", destination: "https://berdia-trust.vercel.app/berdia/:path*" });
  });
});
