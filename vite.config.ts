import preact from "@preact/preset-vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { PrerenderPlugin } from "./src/vite-plugins/prerender/plugin";

const isStorybook =
  process.env.npm_lifecycle_event === "storybook" ||
  process.env.npm_lifecycle_event === "build-storybook";

export default defineConfig({
  plugins: [
    preact(),
    tsconfigPaths(),
    !isStorybook &&
      PrerenderPlugin({
        prerenderSrcPath: "src/entry-server.tsx",
      }),
  ],
});
