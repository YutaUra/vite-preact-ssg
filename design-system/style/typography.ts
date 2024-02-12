import { defineSemanticTokens, defineTokens } from "@pandacss/dev";

export const fontSizes = defineTokens.fontSizes({
  heading: {
    xxl: { value: "57px" },
    xl: { value: "45px" },
    l: { value: "36px" },
    m: { value: "32px" },
    s: { value: "28px" },
    xs: { value: "24px" },
    xxs: { value: "20px" },
    mobileL: { value: "32px" },
    mobileM: { value: "28px" },
    mobileS: { value: "24px" },
    mobileXS: { value: "20px" },
    mobileXXS: { value: "16px" },
  },
  body: {
    l: { value: "16px" },
    m: { value: "14px" },
  },
  label: {
    l: { value: "14px" },
    m: { value: "12px" },
  },
  supplemental: {
    l: { value: "12px" },
    m: { value: "10px" },
  },
  button: { value: "16px" },
});

export const fontWeights = defineTokens.fontWeights({
  heading: {
    xxl: { value: "400" },
    xl: { value: "400" },
    l: { value: "400" },
    m: { value: "400" },
    s: { value: "400" },
    xs: { value: "400" },
    xxs: { value: "400" },
    mobileL: { value: "500" },
    mobileM: { value: "500" },
    mobileS: { value: "500" },
    mobileXS: { value: "500" },
    mobileXXS: { value: "500" },
  },
  body: {
    l: { value: "400" },
    m: { value: "400" },
  },
  label: {
    l: { value: "500" },
    m: { value: "500" },
  },
  supplemental: {
    l: { value: "400" },
    m: { value: "400" },
  },
  button: { value: "700" },
  s: { value: "400" },
  m: { value: "500" },
  l: { value: "700" },
});

export const lineHeights = defineTokens.lineHeights({
  heading: {
    xxl: { value: "1.4" },
    xl: { value: "1.4" },
    l: { value: "1.4" },
    m: { value: "1.5" },
    s: { value: "1.5" },
    xs: { value: "1.5" },
    xxs: { value: "1.5" },
    mobileL: { value: "1.5" },
    mobileM: { value: "1.5" },
    mobileS: { value: "1.5" },
    mobileXS: { value: "1.5" },
    mobileXXS: { value: "1.7" },
  },
  body: {
    l: { value: "1.7" },
    m: { value: "1.7" },
  },
  label: {
    l: { value: "1.5" },
    m: { value: "1.5" },
  },
  supplemental: {
    l: { value: "1.7" },
    m: { value: "1.7" },
  },
  button: { value: "1.5" },
  s: { value: "1.4" },
  m: { value: "1.5" },
  l: { value: "1.7" },
});

export const letterSpacings = defineTokens.letterSpacings({
  heading: {
    xxl: { value: "0.04em" },
    xl: { value: "0.04em" },
    l: { value: "0.04em" },
    m: { value: "0.04em" },
    s: { value: "0.04em" },
    xs: { value: "0.04em" },
    xxs: { value: "0.04em" },
    mobileL: { value: "0.04em" },
    mobileM: { value: "0.04em" },
    mobileS: { value: "0.04em" },
    mobileXS: { value: "0.04em" },
    mobileXXS: { value: "0.04em" },
  },
  body: {
    l: { value: "0.04em" },
    m: { value: "0.04em" },
  },
  label: {
    l: { value: "0.04em" },
    m: { value: "0.04em" },
  },
  supplemental: {
    l: { value: "0.02em" },
    m: { value: "0.02em" },
  },
  button: { value: "0.04em" },
  s: { value: "0.02em" },
  m: { value: "0.04em" },
});

export const semanticFontSizes = defineSemanticTokens.fontSizes({
  heading: {
    1: {
      value: {
        base: "{fontSizes.heading.l}",
        _mobile: "{fontSizes.heading.mobileL}",
      },
    },
    2: {
      value: {
        base: "{fontSizes.heading.m}",
        _mobile: "{fontSizes.heading.mobileM}",
      },
    },
    3: {
      value: {
        base: "{fontSizes.heading.s}",
        _mobile: "{fontSizes.heading.mobileS}",
      },
    },
    4: {
      value: {
        base: "{fontSizes.heading.xs}",
        _mobile: "{fontSizes.heading.mobileXS}",
      },
    },
    5: {
      value: {
        base: "{fontSizes.heading.xxs}",
        _mobile: "{fontSizes.heading.mobileXXS}",
      },
    },
  },
});

export const semanticFontWeights = defineSemanticTokens.fontWeights({
  heading: {
    1: {
      value: {
        base: "{fontWeights.heading.l}",
        _mobile: "{fontWeights.heading.mobileL}",
      },
    },
    2: {
      value: {
        base: "{fontWeights.heading.m}",
        _mobile: "{fontWeights.heading.mobileM}",
      },
    },
    3: {
      value: {
        base: "{fontWeights.heading.s}",
        _mobile: "{fontWeights.heading.mobileS}",
      },
    },
    4: {
      value: {
        base: "{fontWeights.heading.xs}",
        _mobile: "{fontWeights.heading.mobileXS}",
      },
    },
    5: {
      value: {
        base: "{fontWeights.heading.xxs}",
        _mobile: "{fontWeights.heading.mobileXXS}",
      },
    },
  },
});

export const semanticLineHeights = defineSemanticTokens.lineHeights({
  heading: {
    1: {
      value: {
        base: "{lineHeights.heading.l}",
        _mobile: "{lineHeights.heading.mobileL}",
      },
    },
    2: {
      value: {
        base: "{lineHeights.heading.m}",
        _mobile: "{lineHeights.heading.mobileM}",
      },
    },
    3: {
      value: {
        base: "{lineHeights.heading.s}",
        _mobile: "{lineHeights.heading.mobileS}",
      },
    },
    4: {
      value: {
        base: "{lineHeights.heading.xs}",
        _mobile: "{lineHeights.heading.mobileXS}",
      },
    },
    5: {
      value: {
        base: "{lineHeights.heading.xxs}",
        _mobile: "{lineHeights.heading.mobileXXS}",
      },
    },
  },
});

export const semanticLetterSpacings = defineSemanticTokens.letterSpacings({
  heading: {
    1: {
      value: {
        base: "{letterSpacings.heading.l}",
        _mobile: "{letterSpacings.heading.mobileL}",
      },
    },
    2: {
      value: {
        base: "{letterSpacings.heading.m}",
        _mobile: "{letterSpacings.heading.mobileM}",
      },
    },
    3: {
      value: {
        base: "{letterSpacings.heading.s}",
        _mobile: "{letterSpacings.heading.mobileS}",
      },
    },
    4: {
      value: {
        base: "{letterSpacings.heading.xs}",
        _mobile: "{letterSpacings.heading.mobileXS}",
      },
    },
    5: {
      value: {
        base: "{letterSpacings.heading.xxs}",
        _mobile: "{letterSpacings.heading.mobileXXS}",
      },
    },
  },
});
