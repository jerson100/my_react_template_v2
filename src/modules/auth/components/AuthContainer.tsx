import { Outlet } from "react-router";
import Face from "./Face";
import { Box, Container, Stack, useToken } from "@chakra-ui/react";
import { Panel } from "@core/components/chakraui/panel";
import { useAtomValue } from "jotai";
import { selectedPaletteAtom } from "@/core/states";
import { BoxMotion, SelectorTheme } from "@core/components/common";
import { useColorModeValue } from "@/core/components/chakraui/color-mode";
import LogoPacifico from "@core/components/common/icons/LogoPacifico";

const AuthContainer = () => {
  const selectedPalette = useAtomValue(selectedPaletteAtom);
  const [palette50, palette900] = useToken("colors", [
    `${selectedPalette}.50`,
    `${selectedPalette}.900`,
  ]);
  const endBg = useColorModeValue(palette50, "#171717");
  const startBg = useColorModeValue(palette900, palette900);
  return (
    <>
      <BoxMotion
        position={"absolute"}
        top={"30px"}
        left={"-150px"}
        animate={{
          left: 30,
          transition: {
            type: "spring",
            delay: 0.5,
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
      >
        <LogoPacifico width="150px" />
      </BoxMotion>
      <BoxMotion
        position={"absolute"}
        top={"30px"}
        right={"30px"}
        opacity={0}
        animate={{
          opacity: 1,
          transition: {
            type: "spring",
            delay: 0.5,
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
      >
        <SelectorTheme />
      </BoxMotion>
      <BoxMotion
        display={"flex"}
        alignItems={"center"}
        justifyItems={"center"}
        minH={"100vh"}
        // bg={{ base: `${selectedPalette}.50`, _dark: "#171717" }}
        initial={{ backgroundColor: startBg }}
        animate={{
          backgroundColor: endBg,
          transition: { duration: 1, ease: "anticipate" },
        }}
      >
        <Container maxW={"400px"}>
          <BoxMotion
            initial={{ opacity: 0, y: -250 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                type: "spring",
                ease: "backInOut",
              },
            }}
          >
            <Panel as={Stack} px={8} pb={10} gap={6}>
              <Face />
              <Outlet />
            </Panel>
          </BoxMotion>
        </Container>
      </BoxMotion>
    </>
  );
};

export { AuthContainer };
