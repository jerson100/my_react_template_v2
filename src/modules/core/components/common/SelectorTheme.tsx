import { Icon, Switch } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useColorMode } from "../chakraui/color-mode";
import { useAtomValue } from "jotai";
import { selectedPaletteAtom } from "@/core/states";

const SelectorTheme = () => {
  const mode = useColorMode();
  const selectedPalette = useAtomValue(selectedPaletteAtom);
  return (
    <Switch.Root
      colorPalette={selectedPalette}
      size="lg"
      checked={mode.colorMode == "light"}
      onCheckedChange={() => mode.toggleColorMode()}
    >
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
        <Switch.Indicator
          fallback={<Icon as={FaMoon} color={`${selectedPalette}.400`} />}
        >
          <Icon as={FaSun} color="yellow.400" />
        </Switch.Indicator>
      </Switch.Control>
    </Switch.Root>
  );
};

export default SelectorTheme;
