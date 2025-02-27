import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router";

const WithAutenticationWrapper = () => {
  // const selectedPalette = useAtomValue(selectedPaletteAtom);
  return (
    <Box bg={{ base: `#fafafa`, _dark: "#171717" }}>
      <Outlet />
    </Box>
  );
};

export default WithAutenticationWrapper;
