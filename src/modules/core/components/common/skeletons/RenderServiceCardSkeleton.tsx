import { Box, HStack } from "@chakra-ui/react";
import { Skeleton, SkeletonCircle } from "../../chakraui/skeleton";

interface RenderServiceCardSkeletonProps {
  quantity?: number;
}

const RenderProcessCardSkeleton = ({
  quantity = 8,
}: RenderServiceCardSkeletonProps) => {
  return Array.from({ length: quantity || 8 }).map((_, idx) => {
    return (
      <Box
        key={idx}
        boxShadow="sm"
        p="4"
        borderRadius="md"
        backgroundColor="white"
        width={"72"}
      >
        <HStack>
          <SkeletonCircle size="10" />
          <Skeleton height="15px" width="full" />
        </HStack>
        <Skeleton w="full" height={"10px"} mt="4" />
        <Skeleton w="full" height={"40px"} mt="4" />
      </Box>
    );
  });
};

export default RenderProcessCardSkeleton;
