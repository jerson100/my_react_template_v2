import { PacificoImage } from "@/core/components/common/images";
import { Flex } from "@chakra-ui/react";

const HeaderSidebar = () => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"flex-start"}
      gap={3}
      px={4}
      h={"3.5rem"}
    >
      <PacificoImage height={"1.7rem"} />
    </Flex>
  );
};

export default HeaderSidebar;
