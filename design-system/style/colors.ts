import { defineSemanticTokens, defineTokens } from "@pandacss/dev";

export const colors = defineTokens.colors({
  white: { value: "#FFFFFF" },
  sea: {
    50: { value: "#E8F1FE" },
    100: { value: "#C5D7FB" },
    200: { value: "#9DB7F9" },
    300: { value: "#7096F8" },
    400: { value: "#4979F5" },
    500: { value: "#264AF4" },
    600: { value: "#1A3EE8" },
    700: { value: "#0031D8" },
    800: { value: "#0017C1" },
    900: { value: "#000082" },
    1000: { value: "#000071" },
    1100: { value: "#000060" },
    1200: { value: "#00004F" },
  },
  sumi: {
    50: { value: "#F8F8FB" },
    100: { value: "#F1F1F4" },
    200: { value: "#E8E8EB" },
    300: { value: "#D8D8DB" },
    400: { value: "#B4B4B7" },
    500: { value: "#949497" },
    600: { value: "#757578" },
    700: { value: "#626264" },
    800: { value: "#414143" },
    900: { value: "#1A1A1C" },
    1000: { value: "#111111" },
    1100: { value: "#080808" },
    1200: { value: "#000000" },
  },
  forest: {
    50: { value: "#E6F5EC" },
    100: { value: "#C2E5D1" },
    200: { value: "#9BD4B5" },
    300: { value: "#71C598" },
    400: { value: "#51B883" },
    500: { value: "#2CAC6E" },
    600: { value: "#259D63" },
    700: { value: "#1D8B56" },
    800: { value: "#197A4B" },
    900: { value: "#115A36" },
    1000: { value: "#0C472A" },
    1100: { value: "#08351F" },
    1200: { value: "#032213" },
  },
  wood: {
    50: { value: "#F3EEE5" },
    100: { value: "#E7D8B9" },
    200: { value: "#E1C383" },
    300: { value: "#DCAC4D" },
    400: { value: "#D69C2B" },
    500: { value: "#D18D0F" },
    600: { value: "#CD820A" },
    700: { value: "#C87504" },
    800: { value: "#C16800" },
    900: { value: "#B65200" },
    1000: { value: "#9C4600" },
    1100: { value: "#833B00" },
    1200: { value: "#662E00" },
  },
  sun: {
    50: { value: "#FFE7E6" },
    100: { value: "#FFC8B8" },
    200: { value: "#FFA28B" },
    300: { value: "#FF7B5C" },
    400: { value: "#FF5838" },
    500: { value: "#FF4B36" },
    600: { value: "#FF220D" },
    700: { value: "#FA1606" },
    800: { value: "#EC0000" },
    900: { value: "#D50000" },
    1000: { value: "#AF0000" },
    1100: { value: "#890101" },
    1200: { value: "#640101" },
  },
});

export const borderWidths = defineTokens.borderWidths({
  field: { value: "1px" },
  divider: { value: "1px" },
  focused: { value: "2px" },
  selected: { value: "2px" },
  alert: { value: "2px" },
  disabled: { value: "1px" },
});

export const semanticColors = defineSemanticTokens.colors({
  text: {
    body: {
      value: { base: "{colors.sumi.900}", _dark: "{colors.white}" },
    },
    description: {
      value: { base: "{colors.sumi.700}", _dark: "{colors.sumi.400}" },
    },
    placeHolder: {
      value: { base: "{colors.sumi.600}", _dark: "{colors.sumi.500}" },
    },
    onFill: {
      value: { base: "{colors.white}", _dark: "{colors.white}" },
    },
    link: {
      value: { base: "{colors.sea.800}", _dark: "{colors.sea.300}" },
    },
    hover: {
      value: { base: "{colors.sea.900}", _dark: "{colors.sea.200}" },
    },
    active: {
      value: { base: "{colors.sea.900}", _dark: "{colors.sea.200}" },
    },
    visited: {
      value: { base: "{colors.sea.900}", _dark: "{colors.sea.200}" },
    },
    alert: {
      value: { base: "{colors.sun.800}", _dark: "{colors.sun.500}" },
    },
    disabled: {
      value: { base: "{colors.sumi.500}", _dark: "{colors.sumi.600}" },
    },
  },
  icon: {
    labe: {
      value: { base: "{colors.sumi.900}", _dark: "{colors.white}" },
    },
    active: {
      value: { base: "{colors.sea.800}", _dark: "{colors.sea.300}" },
    },
    alert: {
      value: { base: "{colors.sun.800}", _dark: "{colors.sun.500}" },
    },
    disabled: {
      value: { base: "{colors.sumi.500}", _dark: "{colors.sumi.600}" },
    },
  },
  background: {
    primary: {
      value: { base: "{colors.white}", _dark: "{colors.sumi.900}" },
    },
    secondary: {
      value: { base: "{colors.sumi.100}", _dark: "{colors.sumi.700}" },
    },
    tertiary: {
      value: { base: "{colors.sumi.50}", _dark: "{colors.sumi.800}" },
    },
  },
  border: {
    field: {
      value: { base: "{colors.sumi.900}", _dark: "{colors.white}" },
    },
    divider: {
      value: { base: "{colors.sumi.300}", _dark: "{colors.sumi.700}" },
    },
    focused: {
      value: { base: "{colors.wood.600}", _dark: "{colors.wood.600}" },
    },
    selected: {
      value: { base: "{colors.sea.800}", _dark: "{colors.sea.300}" },
    },
    alert: {
      value: { base: "{colors.sun.800}", _dark: "{colors.sun.500}" },
    },
    disabled: {
      value: { base: "{colors.sumi.300}", _dark: "{colors.sumi.300}" },
    },
  },
  status: {
    success: {
      value: { base: "{colors.forest.600}", _dark: "{colors.forest.600}" },
    },
    alert: {
      value: { base: "{colors.sun.800}", _dark: "{colors.sun.500}" },
    },
    warning: {
      value: { base: "{colors.wood.800}", _dark: "{colors.wood.500}" },
    },
  },
  chart: {
    primary: {
      value: { base: "{colors.sea.800}", _dark: "{colors.sea.100}" },
    },
    secondary: {
      value: { base: "{colors.sea.400}", _dark: "{colors.sea.300}" },
    },
  },
});
