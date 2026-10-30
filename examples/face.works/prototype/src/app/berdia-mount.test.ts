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
    expect(list).toContainEqual({ source: "/berdia/k/:code", destination: "/berdia/intake.html" });
    expect(list.find((r) => r.source === "/berdia")).toBeUndefined();
    expect(list.find((r) => r.source === "/berdia/:path*")).toBeUndefined();
  });
});

describe("berdia invitation link headers", () => {
  it("never caches /berdia/k links or leaks them as a referrer, and wins over the site-wide rule", async () => {
    const hs = await (nextConfig.headers as () => Promise<{ source: string; headers: { key: string; value: string }[] }[]>)();
    const k = hs.findIndex((h) => h.source === "/berdia/k/:code");
    const site = hs.findIndex((h) => h.source === "/:path*");
    expect(k).toBeGreaterThan(site);
    const v = Object.fromEntries(hs[k].headers.map((h) => [h.key, h.value]));
    expect(v["Cache-Control"]).toContain("no-store");
    expect(v["Referrer-Policy"]).toBe("no-referrer");
  });
});
