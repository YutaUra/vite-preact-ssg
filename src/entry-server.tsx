import { renderToStringAsync } from "preact-render-to-string";
import { Router } from "wouter-preact";
import { App } from "./App";

export async function render(url: string, _ssrManifest: string | undefined) {
  const html = await renderToStringAsync(
    <Router ssrPath={url}>
      <App />
    </Router>
  );
  return { html, head: "" };
}
