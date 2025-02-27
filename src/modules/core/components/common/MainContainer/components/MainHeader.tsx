import { Box, Container, Flex } from "@chakra-ui/react";
import SelectorTheme from "../../SelectorTheme";
import { Avatar } from "@core/components/chakraui/avatar";
import Heading from "@core/components/chakraui/text/heading";
import { useAtomValue } from "jotai";
import { selectedPaletteAtom } from "@/core/states";

const MainHeader = () => {
  const selectedPalette = useAtomValue(selectedPaletteAtom);
  return (
    <Box
      as="header"
      h="3rem"
      position={"sticky"}
      top={0}
      display={"flex"}
      alignItems={"center"}
      bg={{ base: "white", _dark: "#171717" }}
      zIndex={1}
      borderBottomWidth={1}
    >
      <Container>
        <Flex justifyContent={"space-between"}>
          <Heading as="h1">Iniciativas</Heading>
          <Flex alignItems={"center"} gap={3}>
            <SelectorTheme />
            <Avatar size={"xs"} colorPalette={selectedPalette} />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default MainHeader;
