// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  colorMode: { preference: "light", fallback: "light" },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@pinia/nuxt",
    "@vueuse/nuxt",
  ],
  devServer: {
    port: 3100,
  },
  imports: {
    dirs: [
      "composables",
      "composables/functions",
      "composables/store",
      "composables/stores",
      "utils/functions",
      "utils/types/dto",
      "utils/types",
    ],
    autoImport: true,
  },
  googleFonts: {
    families: {
      "Jockey One": true,
      "DM Sans": true,
      "DM Serif Display": true,
      Poppins: true,
      ABeeZee: true,
    },
  },
  runtimeConfig: {
    public: {
      SERVER_URL: "https://api.motionsportindonesia.id",
    },
  },
});
