import { NextResponse, type NextRequest } from "next/server";

// Berdia estate and financial pages are family-only. They are static files in
// public/berdia/, so without this gate anyone with the URL can read them.
// The session lives in berdia-trust (cookie set through the /berdia/api
// rewrite); we forward the visitor's cookie to its session check and serve the
// page only on 200. Fails closed. Guarded by src/proxy.test.ts.
export const BERDIA_SESSION_URL = "https://berdia-trust.vercel.app/berdia/api/intake";
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

export async function proxy(request: NextRequest) {
  if (!(await hasFamilySession(request.headers.get("cookie")))) {
    const to = new URL(BERDIA_SIGN_IN, request.url);
    const res = NextResponse.redirect(to, 307);
    res.headers.set("Cache-Control", "no-store, private");
    return res;
  }
  const res = NextResponse.next();
  res.headers.set("Cache-Control", "no-store, private");
  res.headers.set("X-Robots-Tag", "noindex, nofollow");
  return res;
}

export const config = {
  matcher: ["/berdia/plan/:path*", "/berdia/portal/trust.html", "/berdia/portal/ops/:path*"],
};
