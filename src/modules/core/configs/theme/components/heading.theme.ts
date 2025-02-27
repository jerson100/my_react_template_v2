// import { mode } from "@chakra-ui/theme-tools";
// import colorsTheme from "../colors";

const variants = {
  heading1: {
    fontSize: "clamp(1.5625rem, 1.475rem + 0.43750000000000006vw, 2rem)" //min 25px, max 32px, minviewport 320px, maxviewport 1920px
  }
};

export default {
  Heading: {
    baseStyle: {
      // color: mode(
      //   colorsTheme.text.primary.lightMode,
      //   colorsTheme.text.primary.darkMode
      // ),
    },
    variants
  }
};
