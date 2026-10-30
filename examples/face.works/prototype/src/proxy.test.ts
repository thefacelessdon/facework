import { afterEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";
import { config, proxy, BERDIA_SIGN_IN } from "./proxy";

const req = (path: string, cookie?: string) =>
  new NextRequest(new URL(path, "https://face.works"), { headers: cookie ? { cookie } : {} });

afterEach(() => vi.unstubAllGlobals());

describe("berdia family-only gate", () => {
  it("covers the estate and financial pages", () => {
    expect(config.matcher).toEqual(
      expect.arrayContaining(["/berdia/plan/:path*", "/berdia/portal/trust.html", "/berdia/portal/ops/:path*"]),
    );
  });

  it("sends anonymous visitors to sign-in without calling the API", async () => {
    const f = vi.fn();
    vi.stubGlobal("fetch", f);
    const res = await proxy(req("/berdia/plan/capital-stack.html"));
    expect(res.status).toBe(307);
    expect(new URL(res.headers.get("location")!).pathname).toBe(BERDIA_SIGN_IN);
    expect(f).not.toHaveBeenCalled();
  });

  it("redirects when the session check rejects the cookie", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => new Response("{}", { status: 401 })));
    const res = await proxy(req("/berdia/plan/index.html", "s=bad"));
    expect(res.status).toBe(307);
  });

  it("fails closed when the session check is unreachable", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => { throw new Error("down"); }));
    const res = await proxy(req("/berdia/plan/index.html", "s=x"));
    expect(res.status).toBe(307);
  });

  it("serves the page, uncached, for a signed-in family member", async () => {
    const f = vi.fn(async () => new Response("{}", { status: 200 }));
    vi.stubGlobal("fetch", f);
    const res = await proxy(req("/berdia/plan/index.html", "s=good"));
    expect(res.headers.get("x-middleware-next")).toBe("1");
    expect(res.headers.get("cache-control")).toContain("no-store");
    expect((f.mock.calls[0] as unknown as [string, RequestInit])[1].headers).toMatchObject({ cookie: "s=good" });
  });
});
