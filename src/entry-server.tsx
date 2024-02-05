import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { App } from "./App";

export async function render(url: string, ssrManifest: string | undefined) {
  const html = renderToString(
    <StrictMode>
      <Router ssrPath={url}>
        <App />
      </Router>
    </StrictMode>
  );
  return { html, head: "" };
}
