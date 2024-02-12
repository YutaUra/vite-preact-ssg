import { defineConfig } from "@pandacss/dev";
import {
  colors,
  semanticColors,
  borderWidths,
} from "./design-system/style/colors";
import {
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  semanticFontSizes,
  semanticFontWeights,
  semanticLetterSpacings,
  semanticLineHeights,
} from "./design-system/style/typography";
import { spacing } from "./design-system/style/spacing";
import { radii } from "./design-system/style/radii";
import {
  semanticButtonColors,
  button,
} from "./design-system/components/button";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{ts,tsx}"],
  exclude: [],
  theme: {
    tokens: {
      colors,
      borderWidths,
      fontSizes,
      fontWeights,
      letterSpacings,
      lineHeights,
      spacing,
      radii,
    },
    semanticTokens: {
      colors: {
        ...semanticColors,
        ...semanticButtonColors,
      },
      fontSizes: semanticFontSizes,
      fontWeights: semanticFontWeights,
      letterSpacings: semanticLetterSpacings,
      lineHeights: semanticLineHeights,
    },
    recipes: {
      button,
    },
  },
  staticCss: {
    recipes:
      process.env["npm_lifecycle_event"] === "storybook" ? "*" : undefined,
  },
  outdir: "styled-system",
});
