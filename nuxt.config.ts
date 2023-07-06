// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/color-mode", "@nuxt/content"],
  colorMode: {
    classSuffix: "",
    preference: "light",
    fallback: "light",
  },
  content: {
    highlight: {
      theme: "github-dark",
      preload: ["vue", "bash", "tsx", "ts"],
    },
    markdown: {
      anchorLinks: false,
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
  // imports: {
  //   autoImport: false,
  // },
});

