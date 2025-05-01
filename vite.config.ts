import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "npm-package-template",
      formats: ["es", "cjs"],
      fileName: (format) => {
        if (format === "es") {
          return "index.js";
        }

        return "index.cjs";
      },
    },
  },
});
