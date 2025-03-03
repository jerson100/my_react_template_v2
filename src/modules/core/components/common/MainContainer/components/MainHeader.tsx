import { Box, Container, Flex, IconButton } from "@chakra-ui/react";
import SelectorTheme from "../../SelectorTheme";
import { Avatar } from "@core/components/chakraui/avatar";
import Heading from "@core/components/chakraui/text/heading";
import { useAtomValue, useSetAtom } from "jotai";
import {
  HeaderTitleAtom,
  selectedPaletteAtom,
  SidebarToogleAtom,
} from "@/core/states";
import { AnimatePresence } from "motion/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BoxMotion } from "../../chakraMotion";
import UserMenu from "../../UserMenu";

const MainHeader = () => {
  const selectedPalette = useAtomValue(selectedPaletteAtom);
  const mainTitle = useAtomValue(HeaderTitleAtom);
  const sidebarToogle = useSetAtom(SidebarToogleAtom);
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
          <Flex alignItems={"center"} gap={4}>
            <IconButton
              size={"sm"}
              colorPalette={selectedPalette}
              variant={"surface"}
              onClick={() => sidebarToogle()}
            >
              <RxHamburgerMenu />
            </IconButton>
            <AnimatePresence mode="wait">
              <BoxMotion
                key={mainTitle}
                initial={{ y: -100, opacity: 0, transition: { duration: 0.3 } }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.3, ease: "anticipate" },
                }}
                exit={{ y: -100, opacity: 0, transition: { duration: 0.3 } }}
              >
                <Heading as="h1">{mainTitle}</Heading>
              </BoxMotion>
            </AnimatePresence>
          </Flex>
          <Flex alignItems={"center"} gap={3}>
            <SelectorTheme />
            <UserMenu
              positioning={{
                placement: "bottom-end",
                offset: {
                  mainAxis: 20,
                  crossAxis: 0,
                },
              }}
            >
              <Box>
                <Avatar size={"xs"} colorPalette={selectedPalette} />
              </Box>
            </UserMenu>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default MainHeader;
