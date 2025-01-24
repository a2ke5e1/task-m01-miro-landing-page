import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";

module.exports = defineConfig({
  base: "./",
  plugins: [],
  resolve: {
    /*something*/
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
