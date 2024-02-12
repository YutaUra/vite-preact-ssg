import "../src/index.css";
import { Preview, ReactRenderer } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import { colors } from "../design-system/style/colors";

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
    withThemeByClassName<ReactRenderer>({
      themes: { light: "light", dark: "dark" },
      defaultTheme: "light",
    }),
  ],
} satisfies Preview;

export default preview;
