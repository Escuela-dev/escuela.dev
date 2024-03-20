import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
// FIXME: background-color in .button in PricingTable.css is not dark in dark mode
// import critters from "astro-critters";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  // Building a static site to be deploy to any static host.
  output: "static",
  site: "https://escuela.dev/",
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
    sitemap(),
    mdx(),
    // critters(),
    robotsTxt({
      sitemap: false,
    }),
  ],
  prefetch: true,
});
