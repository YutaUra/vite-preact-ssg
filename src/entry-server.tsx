import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { App } from "./App";

export async function render(url: string, ssrManifest: string | undefined) {
  const html = renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  );
  return { html, head: "" };
}
