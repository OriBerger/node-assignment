import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: ["dates-module/**/*.test.ts",
      "scheduler/**/*.test.ts",
      "generic-queue/**/*.test.ts"
    ],
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
});