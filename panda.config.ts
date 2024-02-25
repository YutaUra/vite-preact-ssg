import { defineConfig } from "@pandacss/dev";
import {
  button,
  semanticButtonColors,
} from "./design-system/components/button";
import {
  borderWidths,
  colors,
  semanticColors,
} from "./design-system/style/colors";
import { radii } from "./design-system/style/radii";
import { spacing } from "./design-system/style/spacing";
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

const isStorybook =
  process.env.npm_lifecycle_event === "storybook" ||
  process.env.npm_lifecycle_event === "build-storybook";

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
    recipes: isStorybook ? "*" : undefined,
  },
  outdir: "styled-system",
});
