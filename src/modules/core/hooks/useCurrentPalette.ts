import { useAtomValue } from "jotai";
import { selectedPaletteAtom } from "../states";

const useCurrentPalette = () => {
  const selectedPalette = useAtomValue(selectedPaletteAtom);
  const theme = {
    text: { color: `${selectedPalette}.600` },
    withoutHover: {
      bg: { _dark: `${selectedPalette}.900/100` },
    },
    hover: {
      bg: {
        _dark: `${selectedPalette}.800`,
        _light: `${selectedPalette}.300/60`,
      },
      color: {
        _dark: `${selectedPalette}.300`,
        _light: `${selectedPalette}.700`,
      },
    },
  };
  return theme;
};

export default useCurrentPalette;
