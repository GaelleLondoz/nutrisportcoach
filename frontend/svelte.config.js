import adapter from "@sveltejs/adapter-netlify";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    scss: {
      prependData: `@import './src/styles/index.scss';`,
    },
    postcss: true,
  }),
  kit: {
    adapter: adapter(),
    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ["PATCH", "DELETE"],
    },
  },
  vite: {
    ssr: {
      noExternal: ["svelte-hero-icons"],
    },
  },
};

export default config;
