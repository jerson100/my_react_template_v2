import { Box } from "@chakra-ui/react";
import { Skeleton } from "../../chakraui/skeleton";

interface RenderProcessCardSkeletonProps {
  quantity?: number;
}

const RenderProcessCardSkeleton = ({
  quantity = 8,
}: RenderProcessCardSkeletonProps) => {
  return Array.from({ length: quantity || 8 }).map((_, idx) => {
    return (
      <Box
        key={idx}
        boxShadow="sm"
        p="4"
        backgroundColor="white"
        w={"223px"}
        h={"186px"}
        borderRadius={"40px 4px"}
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
          top={"40px"}
          w={"3px"}
          h={"48px"}
          bg={"gray.100"}
        ></Box>
        <Skeleton w="full" bg={"gray.100"} height={"16px"} mt="7" />
        <Skeleton w="full" bg={"gray.100"} height={"16px"} mt="2" />
      </Box>
    );
  });
};

export default RenderProcessCardSkeleton;
