import { Box, Flex } from "@chakra-ui/react";
import { Skeleton } from "../../chakraui/skeleton";

interface RenderProcessCardSkeletonProps {
  quantity?: number;
}

const RenderProcessCardToSidebarSkeleton = ({
  quantity = 8,
}: RenderProcessCardSkeletonProps) => {
  return Array.from({ length: quantity || 8 }).map((_, idx) => {
    return (
      <Flex
        key={idx}
        flexDir="column"
        boxShadow="sm"
        bg={"gray.50"}
        w={"full"}
        h={"50px"}
        borderRadius={"4px"}
        overflow="hidden"
        pos="relative"
        mb={4}
      >
        <Box
          w={"180px"}
          h={"180px"}
          left={"144px"}
          top={"96px"}
          position={"absolute"}
          bg={"gray.100"}
        ></Box>
        <Box
          position={"absolute"}
          left={"0px"}
          top={"0px"}
          w={"5px"}
          h={"60px"}
          bg={"gray.100"}
        ></Box>
        <Skeleton w="240px" bg={"gray.100"} height={"16px"} mt="4" ml={5} />
      </Flex>
    );
  });
};

export default RenderProcessCardToSidebarSkeleton;
