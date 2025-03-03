import { ButtonGroup, Container, Flex } from "@chakra-ui/react";
import Heading from "../chakraui/text/heading";
import { LinkButton } from "../chakraui/link-button";
import { useAtomValue } from "jotai";
import { selectedPaletteAtom } from "@/core/states";
import { Text } from "../chakraui/text";
import { Link } from "react-router";

const NotFoundPrivatePage = () => {
  const colorPalette = useAtomValue(selectedPaletteAtom);
  return (
    <Flex h={"full"} alignItems={"center"}>
      <Container maxW={"xl"}>
        <Flex flexDir={"column"} alignItems={"center"}>
          <Text color={`text.${colorPalette}`} fontSize={"8xl"} mb={2}>
            404
          </Text>
          <Heading mb={11} fontSize={"3xl"} fontWeight={"initial"}>
            Página no encontrada
          </Heading>
          <ButtonGroup gap={4}>
            <LinkButton
              variant={"solid"}
              colorPalette={colorPalette}
              mr={"auto"}
              asChild
            >
              <Link to="/services">Servicios</Link>
            </LinkButton>
            <LinkButton
              variant={"surface"}
              colorPalette={colorPalette}
              mr={"auto"}
              asChild
            >
              <Link to="/admin">Administración</Link>
            </LinkButton>
          </ButtonGroup>
        </Flex>
      </Container>
    </Flex>
  );
};

export default NotFoundPrivatePage;
