import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

import path from "path";

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $src: path.resolve("./src"),
      $stores: path.resolve("./src/stores"),
      $utils: path.resolve("./src/utils"),
    },
  },
  ssr: {
    noExternal: ["svelte-hero-icons"],
  },
});
