import { fileURLToPath } from "node:url";
import path from "node:path";
import { defineConfig } from "vitest/config";

const srcDir = path.dirname(fileURLToPath(import.meta.url)) + "/src";

export default defineConfig({
  resolve: {
    alias: {
      "@": srcDir,
    },
  },
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});
