import { Outlet } from "react-router";
import Face from "./Face";
import { Container, Flex, Stack } from "@chakra-ui/react";
import { Panel } from "@core/components/chakraui/panel";
import { useAtomValue } from "jotai";
import { selectedPaletteAtom } from "@/core/states";

const AuthContainer = () => {
  const selectedPalette = useAtomValue(selectedPaletteAtom);
  return (
    <Flex
      alignItems={"center"}
      justifyItems={"center"}
      minH={"100vh"}
      bg={{ base: `${selectedPalette}.50`, _dark: "#171717" }}
    >
      <Container maxW={"400px"}>
        <Panel as={Stack} px={8} pb={10} gap={6}>
          <Face />
          <Outlet />
        </Panel>
      </Container>
    </Flex>
  );
};

export { AuthContainer };
