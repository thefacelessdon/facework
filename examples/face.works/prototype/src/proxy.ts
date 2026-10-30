import { NextResponse, type NextRequest } from "next/server";

// Berdia estate and financial pages (plan, trust, ops) are family-only and are NOT in this
// public repo: they live in the private berdia-trust project, which gates them itself.
// For those paths we (1) confirm the session with berdia-trust's session check (honours
// sign-out), then (2) fetch the page from berdia-trust with the visitor's cookie and serve
// it only on 200. Anything else, including errors and timeouts, sends the visitor to
// Tasks sign-in. Fails closed. Guarded by src/proxy.test.ts.
export const BERDIA_ORIGIN = "https://berdia-trust.vercel.app";
export const BERDIA_SESSION_URL = `${BERDIA_ORIGIN}/berdia/api/intake`;
export const BERDIA_SIGN_IN = "/berdia/intake.html";

export async function hasFamilySession(cookie: string | null): Promise<boolean> {
  if (!cookie) return false;
  try {
    const r = await fetch(BERDIA_SESSION_URL, {
      method: "POST",
      cache: "no-store",
      headers: { "content-type": "application/json", origin: "https://face.works", cookie },
      body: JSON.stringify({ action: "session" }),
      signal: AbortSignal.timeout(5000),
    });
    return r.status === 200;
  } catch {
    return false;
  }
}

async function familyPage(path: string, cookie: string): Promise<Response | null> {
  try {
    const r = await fetch(BERDIA_ORIGIN + path, {
      cache: "no-store",
      redirect: "manual",
      headers: { cookie },
      signal: AbortSignal.timeout(8000),
    });
    return r.status === 200 ? r : null;
  } catch {
    return null;
  }
}

const signIn = (request: NextRequest) => {
  const res = NextResponse.redirect(new URL(BERDIA_SIGN_IN, request.url), 307);
  res.headers.set("Cache-Control", "no-store, private");
  return res;
};

export async function proxy(request: NextRequest) {
  const cookie = request.headers.get("cookie");
  if (!cookie || !(await hasFamilySession(cookie))) return signIn(request);
  const page = await familyPage(request.nextUrl.pathname, cookie);
  if (!page) return signIn(request);
  return new NextResponse(page.body, {
    status: 200,
    headers: {
      "Content-Type": page.headers.get("content-type") ?? "text/html; charset=utf-8",
      "Cache-Control": "no-store, private",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

export const config = {
  matcher: ["/berdia/plan/:path*", "/berdia/portal/trust.html", "/berdia/portal/ops/:path*"],
};
