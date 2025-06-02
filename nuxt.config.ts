import Aura from "@primeuix/themes/aura";
import { fileURLToPath } from "node:url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "./src",
  serverDir: "./server",

  extends: ["./layers/travel-guides"],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },

    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
      script: [
        {
          async: true,
          defer: true,
          src: "https://static.cdn.prismic.io/prismic.js?new=true&repo=littlebluedoor",
        },
        {
          src: "https://checkout.flywire.com/flywire-payment.js",
        },
      ],
    },
  },

  nitro: {
    preset: "vercel",
    output: { dir: ".vercel/output" },
    compressPublicAssets: true,
    prerender: {
      routes: ["/"],
      crawlLinks: true,
      ignore: ["/api/**"],
      failOnError: false,
    },
    publicAssets: [{ dir: "public", maxAge: 60 * 60 * 24 * 365 }],
    routeRules: {
      "/_nuxt/**": {
        headers: {
          "cache-control": "public, max-age=31536000, immutable",
        },
      },
      "/**/*.html": {
        headers: {
          "cache-control": "public, max-age=0, s-maxage=0, must-revalidate",
        },
      },
      "/travel-guides/**": { isr: true, swr: 300 },
      "/experiences/**": { isr: true, swr: 300 },
      "/**": { isr: true, swr: 300 },
      "/slice-simulator": { ssr: false, cache: false },
    },
  },

  runtimeConfig: {
    previewPassword: process.env.NUXT_PREVIEW_PASSWORD || "123456",
    public: {
      previewEnabled:
        process.env.NUXT_PREVIEW === "1" ||
        process.env.VERCEL_ENV === "preview",
      motion: {
        directives: {
          "fade-in": {
            initial: {
              opacity: 0,
            },
            visibleOnce: {
              opacity: 1,
              decay: 0.8,
            },
          },
        },
      },
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-swiper",
    "@nuxt/fonts",
    "@nuxt/image",
    "nuxt-lenis",
    "@nuxtjs/prismic",
    "@vueuse/nuxt",
    "@vueuse/motion/nuxt",
    "@vee-validate/nuxt",
    "@primevue/nuxt-module",
    "@formkit/auto-animate",
    "nuxt-mail",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "@zadigetvoltaire/nuxt-gtm",
  ],

  css: ["~/assets/css/global.css"],

  gtm: {
    id: "GTM-KD8FH474",
    enabled: import.meta.env.PROD,
  },

  prismic: {
    endpoint: "littlebluedoor",
    clientConfig: {
      routes: [
        { type: "home", path: "/" },
        {
          type: "page",
          path: "/:uid",
        },
        // {
        //   type: "experiences",
        //   path: "/:section/:uid",
        // },
        {
          type: "travel_guides_home",
          path: "/travel-guides",
        },
        {
          type: "travel_guide",
          path: "/travel-guides/:uid",
        },
      ],
    },
  },

  vite: {
    resolve: {
      alias: {
        ".prisma/client/index-browser":
          "./node_modules/.prisma/client/index-browser.js",
      },
    },
  },

  alias: {
    "@travel-guide": fileURLToPath(
      new URL("./src/layers/travel-guides", import.meta.url),
    ),
    "@server": fileURLToPath(new URL("./server", import.meta.url)),
    "@t": fileURLToPath(new URL("./src/types", import.meta.url)),
  },

  experimental: {
    inlineRouteRules: true,
    buildCache: true,
  },

  primevue: {
    directives: {
      include: ["Tooltip"],
    },
    options: {
      theme: {
        preset: Aura,
      },
    },
    components: {
      include: ["Accordion", "AccordionTab", "DatePicker", "Menu", "Toast"],
    },
  },

  image: {
    format: ["webp"],
    quality: 80,
    prismic: {},
  },

  mail: {
    message: {
      to: process.env.MAIL_TO,
    },
    smtp: {
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    },
  },

  compatibilityDate: "2025-04-28",
});
