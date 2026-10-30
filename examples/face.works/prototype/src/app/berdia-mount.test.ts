import { describe, it, expect } from "vitest";
import nextConfig from "../../next.config";

describe("berdia family mount", () => {
  it("keeps /berdia/api rewrite to berdia-trust for invite sign-in", async () => {
    const rw = await (nextConfig.rewrites as () => Promise<{ source: string; destination: string }[]>)();
    const list = Array.isArray(rw) ? rw : [];
    expect(list).toContainEqual({
      source: "/berdia/api/:path*",
      destination: "https://berdia-trust.vercel.app/berdia/api/:path*",
    });
    expect(list.find((r) => r.source === "/berdia")).toBeUndefined();
    expect(list.find((r) => r.source === "/berdia/:path*")).toBeUndefined();
  });
});
