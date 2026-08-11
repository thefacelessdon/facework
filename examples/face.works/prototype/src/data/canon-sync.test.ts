/**
 * Drift gate: the committed derived copies in content/canon/ must match their
 * canonical sources byte-for-byte (header line excluded). If this fails, a
 * canon file changed without `npm run sync-canon` being re-run — the live
 * site would silently serve stale canon, which is exactly the demo-to-live
 * leakage this architecture exists to prevent.
 */

import { execFileSync } from "node:child_process";
import path from "node:path";
import { describe, it, expect } from "vitest";

describe("canon derived copies", () => {
  it("are in sync with their sources (sync-canon --check)", () => {
    const script = path.join(process.cwd(), "scripts", "sync-canon.mjs");
    let output = "";
    try {
      output = execFileSync(process.execPath, [script, "--check"], {
        encoding: "utf8",
      });
    } catch (error) {
      const e = error as { stdout?: string; stderr?: string };
      throw new Error(
        `sync-canon --check failed — run: npm run sync-canon\n${e.stdout ?? ""}${e.stderr ?? ""}`
      );
    }
    expect(output).toContain("in sync");
  });
});
