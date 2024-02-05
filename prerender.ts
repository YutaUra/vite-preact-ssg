import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p: string) => resolve(__dirname, p);

const template = await readFile(toAbsolute("dist/static/index.html"), "utf-8");
const { render } = await import("./dist/server/entry-server.js");

const routesToPrerender = ["/"];

for (const url of routesToPrerender) {
  const { html: appHtml } = await render(url);

  const html = template.replace(`<!--app-html-->`, appHtml);

  const filePath = `dist/static${url === "/" ? "/index" : url}.html`;
  await writeFile(toAbsolute(filePath), html);
  console.log("pre-rendered:", filePath);
}
