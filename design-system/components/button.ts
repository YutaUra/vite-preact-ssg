import { defineRecipe, defineSemanticTokens } from "@pandacss/dev";
import { colors } from "../style/colors";
import { semanticTokens } from "../style/utils";

export const semanticButtonColors = defineSemanticTokens.colors(
  semanticTokens({ colors })({
    button: {
      primary: {
        normal: {
          bg: {
            value: { base: "{colors.sea.800}", _dark: "{colors.sea.100}" },
          },
          text: {
            value: { base: "{colors.white}", _dark: "{colors.sea.1100}" },
          },
        },
        hover: {
          bg: {
            value: { base: "{colors.sea.900}", _dark: "{colors.sea.200}" },
          },
          text: {
            value: { base: "{colors.white}", _dark: "{colors.sea.1200}" },
          },
        },
        active: {
          bg: {
            value: { base: "{colors.sea.1000}", _dark: "{colors.sea.300}" },
          },
          text: {
            value: { base: "{colors.white}", _dark: "{colors.sea.1200}" },
          },
        },
        disabled: {
          bg: {
            value: { base: "{colors.sumi.500}", _dark: "{colors.sumi.500}" },
          },
          text: {
            value: { base: "{colors.white}", _dark: "{colors.white}" },
          },
        },
      },
      secondary: {
        normal: {
          bg: {
            value: { base: "{colors.white}", _dark: "{colors.sumi.900}" },
          },
          text: {
            value: { base: "{colors.sea.800}", _dark: "{colors.sea.100}" },
          },
        },
        hover: {
          bg: {
            value: { base: "{colors.sea.100}", _dark: "{colors.sumi.800}" },
          },
          text: {
            value: { base: "{colors.sea.800}", _dark: "{colors.sea.100}" },
          },
        },
        active: {
          bg: {
            value: { base: "{colors.sea.200}", _dark: "{colors.sumi.700}" },
          },
          text: {
            value: { base: "{colors.sea.800}", _dark: "{colors.sea.100}" },
          },
        },
        disabled: {
          bg: {
            value: { base: "{colors.white}", _dark: "{colors.sumi.400}" },
          },
          text: {
            value: { base: "{colors.sumi.500}", _dark: "{colors.white}" },
          },
        },
      },
      tertiary: {
        normal: {
          text: {
            value: { base: "{colors.sea.800}", _dark: "{colors.sea.100}" },
          },
        },
        hover: {
          bg: {
            value: { base: "{colors.sea.100}", _dark: "{colors.sumi.800}" },
          },
          text: {
            value: { base: "{colors.sea.800}", _dark: "{colors.sea.100}" },
          },
        },
        active: {
          bg: {
            value: { base: "{colors.sea.200}", _dark: "{colors.sumi.700}" },
          },
          text: {
            value: { base: "{colors.sea.800}", _dark: "{colors.sea.100}" },
          },
        },
        disabled: {
          text: {
            value: { base: "{colors.sumi.500}", _dark: "{colors.white}" },
          },
        },
      },
    },
  }),
);

export const button = defineRecipe({
  className: "button",
  base: {
    display: "inline-flex",
    flexDirection: "row",
    justifyContent: "center",
    fontSize: "button",
    fontWeight: "button",
    letterSpacing: "button",
    lineHeight: "button",
    cursor: "pointer",
    _hover: {
      textDecoration: "underline",
      textDecorationColor: "currentColor",
      textUnderlineOffset: "4px",
    },
    _active: {
      textDecoration: "underline",
      textDecorationColor: "currentColor",
      textUnderlineOffset: "4px",
    },
    _focusVisible: {
      outlineColor: "border.focused",
      outlineWidth: "focused",
      outlineOffset: "2px",
      outlineStyle: "solid",
      textDecoration: "underline",
      textDecorationColor: "currentColor",
      textUnderlineOffset: "4px",
    },
    _disabled: {
      backgroundColor: "button.primary.disabled.bg",
      color: "button.primary.disabled.text",
      _hover: {
        textDecoration: "none",
        cursor: "not-allowed",
      },
    },
  },
  variants: {
    size: {
      large: {
        minWidth: "136px",
        height: "56px",
        gap: "4px",
        paddingX: "16px",
        paddingY: "16px",
        borderRadius: "8px",
      },
      medium: {
        minWidth: "96px",
        height: "48px",
        gap: "4px",
        paddingX: "16px",
        paddingY: "12px",
        borderRadius: "8px",
      },
      small: {
        minWidth: "80px",
        height: "36px",
        gap: "4px",
        paddingX: "12px",
        paddingY: "6px",
        borderRadius: "6px",
      },
      xSmall: {
        minWidth: "72px",
        height: "28px",
        gap: "4px",
        paddingX: "8px",
        paddingY: "7px",
        borderRadius: "4px",
        fontSize: "label.l",
        lineHeight: "1",
      },
    },
    priority: {
      primary: {
        backgroundColor: "button.primary.normal.bg",
        color: "button.primary.normal.text",
        _hover: {
          backgroundColor: "button.primary.hover.bg",
          color: "button.primary.hover.text",
        },
        _active: {
          backgroundColor: "button.primary.active.bg",
          color: "button.primary.active.text",
        },
        _disabled: {
          backgroundColor: "button.primary.disabled.bg",
          color: "button.primary.disabled.text",
          _hover: {
            backgroundColor: "button.primary.disabled.bg",
            color: "button.primary.disabled.text",
          },
        },
      },
      secondary: {
        backgroundColor: "button.secondary.normal.bg",
        color: "button.secondary.normal.text",
        borderColor: "currentcolor",
        borderWidth: "field",
        _hover: {
          backgroundColor: "button.secondary.hover.bg",
          color: "button.secondary.hover.text",
        },
        _active: {
          backgroundColor: "button.secondary.active.bg",
          color: "button.secondary.active.text",
        },
        _disabled: {
          backgroundColor: "button.secondary.disabled.bg",
          color: "button.secondary.disabled.text",
          _hover: {
            backgroundColor: "button.secondary.disabled.bg",
            color: "button.secondary.disabled.text",
          },
        },
      },
      tertiary: {
        color: "button.tertiary.normal.text",
        textDecoration: "underline",
        textDecorationColor: "currentColor",
        textUnderlineOffset: "4px",
        _hover: {
          backgroundColor: "button.tertiary.hover.bg",
          color: "button.tertiary.hover.text",
        },
        _active: {
          backgroundColor: "button.tertiary.active.bg",
          color: "button.tertiary.active.text",
        },
        _disabled: {
          color: "button.tertiary.disabled.text",
          backgroundColor: "unset",
          _hover: {
            color: "button.tertiary.disabled.text",
            backgroundColor: "unset",
          },
        },
      },
    },
  },
  defaultVariants: {
    size: "medium",
    priority: "primary",
  },
});
