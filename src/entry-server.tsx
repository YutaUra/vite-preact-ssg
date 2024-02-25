import { renderToStringAsync } from "preact-render-to-string";
import { App } from "./App";
import type { Prerender } from "./vite-plugins/prerender/plugin";

export const prerender: Prerender = async ({ url }) => {
  const html = await renderToStringAsync(
    <App routerProps={{ ssrPath: url }} />,
  );
  return { html, head: "" };
};
