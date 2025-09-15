import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: ["dates-module/**/*.test.js"],
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
});