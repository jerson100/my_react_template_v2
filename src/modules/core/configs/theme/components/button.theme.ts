import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { mode, transparentize } from "@chakra-ui/theme-tools";
import colors from "../colors";

const variantGhost = defineStyle((props) => {
  const { colorScheme: c, theme } = props;
  const darkHoverBg = transparentize(`${c}.200`, 0.12)(theme);
  const darkActiveBg = transparentize(`${c}.200`, 0.24)(theme);

  return {
    color: mode(`${c}.600`, `${c}.200`)(props),
    bg: "transparent",
    _hover: {
      bg: mode(`${c}.50`, darkHoverBg)(props)
    },
    _active: {
      bg: mode(`${c}.100`, darkActiveBg)(props)
    }
  };
});

const variantOutline = defineStyle((props) => {
  const { colorScheme: c } = props;
  const borderColor = mode(`gray.200`, `whiteAlpha.300`)(props);
  return {
    border: "1px solid",
    borderColor: c === "gray" ? borderColor : "currentColor",
    _hover: {
      bg: `${c}.500`,
      color: "white",
      _disabled: {
        color: `${c}.500`
      }
    },
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" }
    // ...runIfFn(variantGhost, props),
  };
});

type AccessibleColor = {
  bg?: string;
  color?: string;
  hoverBg?: string;
  activeBg?: string;
};

/** Accessible color overrides for less accessible colors. */
const accessibleColorMap: { [key: string]: AccessibleColor } = {
  "hub.blue": {
    bg: colors["hub.blue"]["500"],
    color: "white",
    hoverBg: `${colors["hub.blue"]["600"]}`,
    activeBg: `${colors["hub.blue"]["700"]}`,
  }
};

const variantSolid = defineStyle((props) => {
  const { colorScheme: c } = props;
  const { bg = `${c}.500`, color = "white", hoverBg = `${c}.600`, activeBg = `${c}.700` } = accessibleColorMap[c] ?? {};
  const background = mode(bg, `${c}.200`)(props);
  return {
    bg: background,
    color: mode(color, `gray.800`)(props),
    _hover: {
      bg: mode(hoverBg, `${c}.300`)(props),
      _disabled: {
        bg: background
      }
    },
    _active: { bg: mode(activeBg, `${c}.400`)(props) }
  };
});

const variantLink = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: mode(`${c}.500`, `${c}.200`)(props),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: mode(`${c}.700`, `${c}.500`)(props)
    }
  };
});

const variantUnstyled = defineStyle({
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
});

const variants = {
  ghost: variantGhost,
  outline: variantOutline,
  solid: variantSolid,
  link: variantLink,
  unstyled: variantUnstyled
};

const buttonTheme = defineStyleConfig({
  // baseStyle,
  variants,
  // sizes,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "hub.blue"
  }
});

export default {
  Button: buttonTheme
};
