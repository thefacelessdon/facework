import { NextResponse, type NextRequest } from "next/server";

// Berdia estate and financial pages (plan, trust, ops) are family-only. No Berdia file is in this
// public repo: everything lives in the private berdia-trust project (next.config.ts forwards /berdia).
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

// Sign-in carries ?next=<the page asked for>, so a family member who follows a link to a
// brief lands back on that brief once signed in (intake.js checks it is a family page).
// This also covers links clicked in email: the session cookie is SameSite=Strict, so it is
// not sent on that first cross-site request; Tasks then finds the session and sends them on.
const signIn = (request: NextRequest) => {
  const to = new URL(BERDIA_SIGN_IN, request.url);
  to.searchParams.set("next", request.nextUrl.pathname);
  const res = NextResponse.redirect(to, 307);
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

// Documents and Coins pages are listed too: berdia-trust gates them as well, but its redirect drops ?next=,
// so a Documents link from email would strand the visitor on Tasks after sign-in.
export const config = {
  matcher: [
    "/berdia/plan/:path*",
    "/berdia/portal/trust.html",
    "/berdia/portal/ops/:path*",
    "/berdia/portal/documents.html",
    "/berdia/documents.html",
    "/berdia/portal/coins.html",
  ],
};
