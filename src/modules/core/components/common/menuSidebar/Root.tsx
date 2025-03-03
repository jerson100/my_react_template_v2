import { selectedPaletteAtom } from "@/core/states";
import { Box } from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import { FC, PropsWithChildren } from "react";

const Root: FC<PropsWithChildren> = ({ children }) => {
  const selectedPalette = useAtomValue(selectedPaletteAtom);
  return (
    <Box
      css={{
        "& > ul ul": {
          marginLeft: ".6rem",
          borderLeftColor: `text.${selectedPalette}`,
          borderLeftWidth: 2,
        },
      }}
    >
      {children}
    </Box>
  );
};

export default Root;
