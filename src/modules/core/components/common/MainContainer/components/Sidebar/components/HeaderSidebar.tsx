import { selectedPaletteAtom } from "@/core/states";
import { Flex, Heading, Icon } from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import { BsRobot } from "react-icons/bs";

const HeaderSidebar = () => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      gap={3}
      flexDir={"column"}
      py={4}
    >
      <Icon size={"2xl"}>
        <BsRobot />
      </Icon>
      <Heading as="span" fontSize={"2xl"} letterSpacing={"widest"}>
        NTTDATA
      </Heading>
    </Flex>
  );
};

export default HeaderSidebar;
