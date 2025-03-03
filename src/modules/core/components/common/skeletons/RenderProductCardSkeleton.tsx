import { Box } from "@chakra-ui/react";
import { Skeleton } from "../../chakraui/skeleton";

interface RenderProcessCardSkeletonProps {
  quantity?: number;
}

const RenderProductCardSkeleton = ({
  quantity = 8,
}: RenderProcessCardSkeletonProps) => {
  return Array.from({ length: quantity || 8 }).map((_, idx) => {
    return (
      <Box
        key={idx}
        boxShadow="sm"
        p="4"
        bg={"gray.50"}
        w={"full"}
        h={"60px"}
        borderRadius={"4px"}
        overflow="hidden"
        pos="relative"
      >
        <Box
          w={"180px"}
          h={"180px"}
          left={"144px"}
          top={"96px"}
          position={"absolute"}
          borderRadius={"9999px"}
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
        <Skeleton w="200px" bg={"gray.100"} height={"16px"} mt="2" />
      </Box>
    );
  });
};

export default RenderProductCardSkeleton;
