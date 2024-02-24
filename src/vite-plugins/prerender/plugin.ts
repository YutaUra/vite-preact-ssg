import { basename, join } from "path";
import { rm, mkdir, writeFile } from "fs/promises";
import type { Plugin, ResolvedConfig } from "vite";
import MagicString from "magic-string";

const routesToPrerender = ["/", "/about"];

export interface PrerenderOptions {
  url: string;
}

export interface PrerenderResult {
  html: string;
}

export interface Prerender {
  (options: PrerenderOptions): Promise<PrerenderResult | null>;
}

export interface PrerenderPluginOptions {
  prerenderSrcPath: string;
}

const preloadHelperId = "vite/preload-helper";

export const PrerenderPlugin = ({
  prerenderSrcPath,
}: PrerenderPluginOptions): Plugin => {
  let viteConfig: ResolvedConfig | null = null;

  return {
    name: "custom:prerender",
    apply: "build",
    enforce: "post",

    configResolved(config) {
      viteConfig = config;
    },
    // Injects a window check into Vite's preload helper, instantly resolving
    // the module rather than attempting to add a <link> to the document.
    transform(code, id) {
      // Vite keeps changing up the ID, best we can do for cross-version
      // compat is an `includes`
      if (id.includes(preloadHelperId)) {
        const s = new MagicString(code);
        // Through v5.0.4
        // https://github.com/vitejs/vite/blob/b93dfe3e08f56cafe2e549efd80285a12a3dc2f0/packages/vite/src/node/plugins/importAnalysisBuild.ts#L95-L98
        s.replace(
          `if (!__VITE_IS_MODERN__ || !deps || deps.length === 0) {`,
          `if (!__VITE_IS_MODERN__ || !deps || deps.length === 0 || typeof window === 'undefined') {`
        );
        // 5.0.5+
        // https://github.com/vitejs/vite/blob/c902545476a4e7ba044c35b568e73683758178a3/packages/vite/src/node/plugins/importAnalysisBuild.ts#L93
        s.replace(
          `if (__VITE_IS_MODERN__ && deps && deps.length > 0) {`,
          `if (__VITE_IS_MODERN__ && deps && deps.length > 0 && typeof window !== 'undefined') {`
        );
        return {
          code: s.toString(),
          map: s.generateMap({ hires: true }),
        };
      }
      return;
    },
    async options(options) {
      if (!viteConfig) throw new Error("viteConfig is not resolved");
      const prerender = join(viteConfig.root, prerenderSrcPath);
      if (typeof options.input === "string") {
        options.input = [options.input, prerender];
      } else if (Array.isArray(options.input)) {
        options.input.push(prerender);
      } else if (options.input) {
        options.input["prerender"] = prerender;
      }
      options.preserveEntrySignatures = "allow-extension";
    },
    async generateBundle(_options, bundle) {
      if (!viteConfig) throw new Error("viteConfig is not resolved");

      const index = bundle["index.html"];
      if (!index) throw new Error("index.html not found in bundle");
      if (!("needsCodeReference" in index))
        throw new Error("index.html must be OutputAsset");
      const template = index.source;
      if (typeof template !== "string")
        throw new Error("index.html source must be string");

      const tmpDir = join(viteConfig.root, "node_modules/.temp/prerender");
      try {
        await rm(tmpDir, { recursive: true });
      } catch (e: any) {
        if (e.code !== "ENOENT") throw e;
      }
      await mkdir(tmpDir, { recursive: true });
      await writeFile(
        join(tmpDir, "package.json"),
        JSON.stringify({ type: "module" })
      );

      let prerenderEntryFilename: string | null = null;

      for (const [filename, output] of Object.entries(bundle)) {
        if (
          !(
            (/\.js?$/.test(filename) && output.type === "chunk") ||
            (/\.js\.map?$/.test(filename) && output.type === "asset")
          )
        )
          continue;
        if (output.type === "chunk") {
          await writeFile(join(tmpDir, basename(filename)), output.code);
          if (output.exports.includes("prerender")) {
            prerenderEntryFilename = output.fileName;
          }
        } else {
          await writeFile(join(tmpDir, basename(filename)), output.source);
        }
      }
      if (!prerenderEntryFilename) throw new Error("prerender entry not found");

      const prerenderEntry = await import(
        `file://${join(tmpDir, basename(prerenderEntryFilename))}`
      );
      if (
        !(
          typeof prerenderEntry === "object" &&
          prerenderEntry !== null &&
          "prerender" in prerenderEntry &&
          typeof prerenderEntry.prerender === "function"
        )
      ) {
        throw new Error("prerender entry must export `prerender` function");
      }
      const prerender = prerenderEntry.prerender as Prerender;
      for (const route of routesToPrerender) {
        const result = await prerender({ url: route });

        if (result === null) continue;
        const html = template.replace(`<!--app-html-->`, result.html);
        if (route === "/") {
          index.source = html;
        } else {
          this.emitFile({
            type: "asset",
            fileName: `${route.replace(/^\//, "")}.html`,
            source: html,
          });
        }
      }
    },
  };
};
