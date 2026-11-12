import { existsSync } from "node:fs";
import { describe, it, expect } from "vitest";
import nextConfig from "../../next.config";

const BT = "https://berdia-trust.vercel.app";
const rewrites = async () => {
  const rw = await (nextConfig.rewrites as () => Promise<{ source: string; destination: string }[]>)();
  return Array.isArray(rw) ? rw : [];
};

describe("berdia family mount", () => {
  it("keeps /berdia/api rewrite to berdia-trust for invite sign-in", async () => {
    expect(await rewrites()).toContainEqual({ source: "/berdia/api/:path*", destination: `${BT}/berdia/api/:path*` });
  });

  it("keeps one-tap invitation links on face.works/berdia/k/<code>", async () => {
    expect(await rewrites()).toContainEqual({ source: "/berdia/k/:code", destination: `${BT}/berdia/intake.html` });
  });

  it("forwards every other /berdia path to berdia-trust, bare /berdia included", async () => {
    const list = await rewrites();
    expect(list).toContainEqual({ source: "/berdia", destination: `${BT}/berdia/index.html` });
    expect(list).toContainEqual({ source: "/berdia/:path*", destination: `${BT}/berdia/:path*` });
    // The catch-all is last, so the api and invitation rules above win.
    const at = (s: string) => list.findIndex((r) => r.source === s);
    expect(at("/berdia/:path*")).toBeGreaterThan(at("/berdia/api/:path*"));
    expect(at("/berdia/:path*")).toBeGreaterThan(at("/berdia/k/:code"));
    for (const r of list.filter((r) => r.source.startsWith("/berdia")))
      expect(r.destination.startsWith(`${BT}/berdia/`)).toBe(true);
  });

  it("keeps no Berdia files in this public repo", () => {
    expect(existsSync(new URL("../../public/berdia", import.meta.url))).toBe(false);
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
