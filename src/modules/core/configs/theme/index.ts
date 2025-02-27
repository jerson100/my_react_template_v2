import { createSystem, defaultConfig, defineTokens } from "@chakra-ui/react";
import colors from "./colors";
import fonts from "./fonts.theme";
import fontSizes from "./fontsizes.theme";
// import components from "./components";
import globalStyles from "./global.theme";
import {shadowStyles} from "./shadow-styles";
import { layerStyles } from "./layer-styles"

const config = {
  initialColorMode: "light"
  // initialColorMode: "system",
  // useSystemColorMode: true
};

const tokens = defineTokens({
  // shadows: shadowStyles
  colors: colors,
  fonts: fonts,
  fontSizes: fontSizes,
  shadows: shadowStyles,
})

const theme = createSystem(defaultConfig,{
  theme: {
    layerStyles,
    tokens,
  },
  globalCss: globalStyles
});

export default theme;
