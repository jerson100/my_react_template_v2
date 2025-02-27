import { Box, Container, Flex } from "@chakra-ui/react";
import SelectorTheme from "../../SelectorTheme";
import { Avatar } from "@core/components/chakraui/avatar";
import Heading from "@core/components/chakraui/text/heading";
import { useAtomValue } from "jotai";
import { HeaderTitleAtom, selectedPaletteAtom } from "@/core/states";

const MainHeader = () => {
  const selectedPalette = useAtomValue(selectedPaletteAtom);
  const mainTitle = useAtomValue(HeaderTitleAtom);
  return (
    <Box
      as="header"
      h="3.5rem"
      position={"sticky"}
      top={0}
      display={"flex"}
      alignItems={"center"}
      bg={{ base: "white", _dark: "#171717" }}
      zIndex={1}
      borderBottomWidth={1}
    >
      <Container maxW={"full"}>
        <Flex justifyContent={"space-between"}>
          <Heading as="h1">{mainTitle}</Heading>
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
