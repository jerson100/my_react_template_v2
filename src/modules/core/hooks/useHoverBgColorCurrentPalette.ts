import { useAtomValue } from "jotai";
import { selectedPaletteAtom } from "../states";

const useHoverBgColorCurrentPalette = () => {
  const selectedPalette = useAtomValue(selectedPaletteAtom);
    const bg = {
      withoutHover: {
        bg: {
          _dark: `${selectedPalette}.900`
        }
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
      }
    }
    return bg;
}

export default useHoverBgColorCurrentPalette