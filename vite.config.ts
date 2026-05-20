// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages: static host needs index.html + correct asset base (/repo-name/).
// GH_PAGES=1 disables the Cloudflare plugin for this build so prerender's preview server can run.
const isGhPages = process.env.GH_PAGES === "1";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  cloudflare: isGhPages ? false : undefined,
  tanstackStart: {
    server: { entry: "server" },
    ...(isGhPages
      ? {
          prerender: {
            enabled: true,
            // Avoid crawling static asset links (e.g. /resume.pdf) that are not app routes.
            crawlLinks: false,
          },
        }
      : {}),
  },
  vite: isGhPages
    ? {
        base: "/portfolio/",
      }
    : {},
});
