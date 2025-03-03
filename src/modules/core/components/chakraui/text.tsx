import { FC, PropsWithChildren } from "react";
import { Text as ChakraText, TextProps } from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import { selectedPaletteAtom } from "@/core/states";

export const Text: FC<PropsWithChildren & TextProps> = ({
  children,
  ...props
}) => {
  const selectedPalette = useAtomValue(selectedPaletteAtom);
  return (
    <ChakraText color={`${selectedPalette}.500`} fontSize={"sm"} {...props}>
      {children}
    </ChakraText>
  );
};
