import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        cssFrameworks: resolve(__dirname, "projects/css-frameworks.html"),
        jsFrameworks: resolve(__dirname, "projects/js-frameworks.html"),
        semesterProject2: resolve(
          __dirname,
          "projects/semester-project-2.html"
        ),
      },
    },
  },
});
