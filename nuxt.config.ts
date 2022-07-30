import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: "client/",
  css: ["~/assets/css/main.css"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          "tailwindcss/nesting": {},
          tailwindcss: { config: "./.config/tailwind.config.js" },
          autoprefixer: { config: "./.config/tailwind.config.js" },
        },
      },
    },
  },
});
