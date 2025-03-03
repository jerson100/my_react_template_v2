import { forwardRef } from "react";
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import { selectedPaletteAtom } from "@/core/states";
import { useCurrentPalette } from "@/core/hooks";

export const Input = forwardRef<HTMLInputElement, ChakraInputProps>(
  (props, ref) => {
    const selectedPalette = useAtomValue(selectedPaletteAtom);
    const {
      withoutHover: {
        bg: { _dark },
      },
    } = useCurrentPalette();
    return (
      <ChakraInput
        ref={ref}
        colorPalette={selectedPalette}
        variant={"subtle"}
        bgColor={{ _dark: _dark, _light: "white" }}
        focusRingColor={`${selectedPalette}.500`}
        borderColor={`border`}
        color={`${selectedPalette}.500`}
        {...props}
      />
    );
  }
);
