import { existsSync } from "node:fs";
import { afterEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";
import { config, proxy, BERDIA_ORIGIN, BERDIA_SIGN_IN } from "./proxy";

const req = (path: string, cookie?: string) =>
  new NextRequest(new URL(path, "https://face.works"), { headers: cookie ? { cookie } : {} });
const isSignIn = (res: Response) =>
  res.status === 307 && new URL(res.headers.get("location")!).pathname === BERDIA_SIGN_IN;

// Stub: session check answers `session`, page fetch answers `page`.
const stub = (session: number, page: number | "throw") =>
  vi.fn(async (url: string) => {
    if (url.endsWith("/berdia/api/intake")) return new Response("{}", { status: session });
    if (page === "throw") throw new Error("down");
    return new Response(page === 200 ? "<h1>Plan</h1>" : null, { status: page, headers: { "content-type": "text/html" } });
  });

afterEach(() => vi.unstubAllGlobals());

describe("berdia family-only gate", () => {
  it("covers the estate and financial pages", () => {
    expect(config.matcher).toEqual(
      expect.arrayContaining(["/berdia/plan/:path*", "/berdia/portal/trust.html", "/berdia/portal/ops/:path*"]),
    );
  });

  it("keeps the family pages out of this public repo", () => {
    for (const p of ["plan", "portal/trust.html", "portal/ops"])
      expect(existsSync(new URL(`../public/berdia/${p}`, import.meta.url))).toBe(false);
  });

  it("sends anonymous visitors to sign-in without calling berdia-trust", async () => {
    const f = vi.fn();
    vi.stubGlobal("fetch", f);
    expect(isSignIn(await proxy(req("/berdia/plan/capital-stack.html")))).toBe(true);
    expect(f).not.toHaveBeenCalled();
  });

  it("redirects when the session check rejects the cookie", async () => {
    const f = stub(401, 200);
    vi.stubGlobal("fetch", f);
    expect(isSignIn(await proxy(req("/berdia/plan/index.html", "trust_intake=bad")))).toBe(true);
    expect(f).toHaveBeenCalledTimes(1);
  });

  it("redirects when berdia-trust refuses the page", async () => {
    vi.stubGlobal("fetch", stub(200, 307));
    expect(isSignIn(await proxy(req("/berdia/plan/index.html", "trust_intake=x")))).toBe(true);
  });

  it("fails closed when berdia-trust is unreachable", async () => {
    vi.stubGlobal("fetch", stub(200, "throw"));
    expect(isSignIn(await proxy(req("/berdia/plan/index.html", "trust_intake=x")))).toBe(true);
  });

  it("serves the family page from berdia-trust, uncached, with the visitor's cookie", async () => {
    const f = stub(200, 200);
    vi.stubGlobal("fetch", f);
    const res = await proxy(req("/berdia/plan/chapter-3.html", "trust_intake=good"));
    expect(res.status).toBe(200);
    expect(await res.text()).toBe("<h1>Plan</h1>");
    expect(res.headers.get("cache-control")).toContain("no-store");
    const [url, init] = f.mock.calls[1] as unknown as [string, RequestInit];
    expect(url).toBe(`${BERDIA_ORIGIN}/berdia/plan/chapter-3.html`);
    expect(init.headers).toMatchObject({ cookie: "trust_intake=good" });
    expect(init.redirect).toBe("manual");
  });
});
