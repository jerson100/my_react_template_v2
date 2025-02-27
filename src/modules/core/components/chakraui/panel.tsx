import { selectedPaletteAtom } from "@/core/states";
import { Box, BoxProps } from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import React from "react";

export const Panel = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ ...props }, ref) => {
    const selectedPalette = useAtomValue(selectedPaletteAtom);
    return (
      <Box
        rounded={"xl"}
        boxShadow={selectedPalette}
        layerStyle={selectedPalette}
        ref={ref}
        {...props}
      />
    );
  }
);
