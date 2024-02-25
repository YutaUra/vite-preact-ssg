import { withThemeByClassName } from "@storybook/addon-themes";
import { PreactRenderer, Preview } from "@storybook/preact";
import { colors } from "../design-system/style/colors";
import "../src/index.css";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: colors.white.value,
        },
        {
          name: "dark",
          value: colors.sumi[900].value,
        },
      ],
    },
  },
  decorators: [
    withThemeByClassName<PreactRenderer>({
      themes: { light: "light", dark: "dark" },
      defaultTheme: "light",
    }),
  ],
} satisfies Preview;

export default preview;
