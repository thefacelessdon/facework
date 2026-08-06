import { describe, it, expect, afterEach } from "vitest";
import robots from "./robots";

const KEY = "NEXT_PUBLIC_ALLOW_INDEX";
const original = process.env[KEY];

afterEach(() => {
  if (original === undefined) {
    delete process.env[KEY];
  } else {
    process.env[KEY] = original;
  }
});

// robots.ts reads process.env at call time, so mutating the env before each
// call exercises the branch logic directly (no module reset needed).
describe("robots", () => {
  it("disallows crawling when NEXT_PUBLIC_ALLOW_INDEX is unset (fail-safe closed)", () => {
    delete process.env[KEY];
    const result = robots();
    expect(result.rules).toEqual({ userAgent: "*", disallow: "/" });
  });

  it('allows crawling when NEXT_PUBLIC_ALLOW_INDEX is exactly "true"', () => {
    process.env[KEY] = "true";
    const result = robots();
    expect(result.rules).toEqual({ userAgent: "*", allow: "/" });
  });

  it('still disallows when set to "TRUE" (case-sensitive, fail-safe)', () => {
    process.env[KEY] = "TRUE";
    const result = robots();
    expect(result.rules).toEqual({ userAgent: "*", disallow: "/" });
  });
});
