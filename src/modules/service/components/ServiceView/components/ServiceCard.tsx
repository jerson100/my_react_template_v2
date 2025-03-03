import { Box, Circle, Flex, HStack, Spacer } from "@chakra-ui/react";
import { createSearchParams, useNavigate } from "react-router";
import { isNil, omitBy } from "lodash";
import {
  ArchiveIcon,
  ArrowRight,
  PuzzleIcon,
} from "@core/components/common/icons";
// import { useSetAtom } from "jotai";
import { Text } from "@core/components/chakraui/text";
import { Button } from "@core/components/chakraui/button";
import { Tooltip } from "@/core/components/chakraui/tooltip";
import { Panel } from "@/core/components/chakraui/panel";
import { useAtomValue } from "jotai";
import { selectedPaletteAtom } from "@/core/states";

type PreInboxCardProps = {
  serviceName: string;
  totalProcesses: number;
  primaryLevelId?: string;
  onlyOneService: boolean;
};

export type GlobalFilters = {
  primaryLevel?: string;
  secondaryLevel?: string[];
  casoType?: string;
};

export const ServiceCard = ({
  serviceName,
  totalProcesses,
  primaryLevelId,
}: PreInboxCardProps) => {
  const selectedPalette = useAtomValue(selectedPaletteAtom);
  const navigate = useNavigate();
  // const setPrimaryLevelId = useSetAtom(primaryLevelIdAtom);

  const goToInbox = () => {
    if (!primaryLevelId) return;
    // setPrimaryLevelId(primaryLevelId);
    navigate({
      pathname: "/process",
      search: createSearchParams({
        ...omitBy(
          {
            primaryLevel: primaryLevelId,
          } as GlobalFilters,
          isNil
        ),
      }).toString(),
    });
  };

  return (
    <Panel
      borderWidth={1}
      borderColor={"border"}
      px={6}
      py={8}
      boxShadow={"initial"}
      _hover={{ boxShadow: selectedPalette }}
      cursor={"pointer"}
    >
      <Flex flexDirection="column" gap={6}>
        <HStack maxHeight={10}>
          <Circle
            size="10"
            bg={`${selectedPalette}.500/20`}
            color="white"
            marginRight="2"
          >
            <PuzzleIcon w={6} h={6} color={`${selectedPalette}.500`} />
          </Circle>
          <Tooltip
            content="This is the tooltip content"
            positioning={{ placement: "right-end" }}
          >
            <Text
              textWrap="wrap"
              fontSize="lg"
              color={"InfoText"}
              lineClamp={2}
              fontWeight="bold"
              overflow={"hidden"}
            >
              {serviceName}
            </Text>
          </Tooltip>
          <Spacer />
        </HStack>
        <hr />
        <HStack alignItems={"center"}>
          <ArchiveIcon w={10} />
          <Text color={"InfoText"}>Procesos del Servicio</Text>
          <Spacer />
          <Box color={`${selectedPalette}.500`}>{totalProcesses}</Box>
        </HStack>
        <Button
          onClick={() => goToInbox()}
          alignSelf={"end"}
          w="full"
          _focusVisible={{
            zIndex: 1,
          }}
        >
          Ir al Inbox
          <ArrowRight w={6} pt={1} />
        </Button>
      </Flex>
    </Panel>
  );
};
