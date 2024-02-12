import { defineTokens } from "@pandacss/dev";

export const spacing = defineTokens.spacing({
  h1: { top: { value: "64px" }, bottom: { value: "24px" } },
  h2: { top: { value: "64px" }, bottom: { value: "24px" } },
  h3: { top: { value: "40px" }, bottom: { value: "24px" } },
  h4: { top: { value: "40px" }, bottom: { value: "16px" } },
  h5: { top: { value: "40px" }, bottom: { value: "16px" } },
  h6: { top: { value: "24px" }, bottom: { value: "16px" } },
  xs: { value: "4px" },
  s: { value: "8px" },
  m: { value: "16px" },
  l: { value: "24px" },
  xl: { value: "40px" },
  xxl: { value: "64px" },
  xxxl: { value: "104px" },
});
