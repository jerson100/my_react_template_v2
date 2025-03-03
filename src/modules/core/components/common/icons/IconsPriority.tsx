import { Box, HStack } from "@chakra-ui/react";
import { ChevronDoubleDownIcon } from "./ChevronDoubleDownIcon";
import { ChevronDoubleUpIcon } from "./ChevronDoubleUpIcon";
import { ChevronDownIcon } from "./ChevronDownIcon";
import { ChevronUpIcon } from "./ChevronUpIcon";
import { DashCircleIcon } from "./DashCircleIcon";
import { matcher } from "@core/utils";
import { Tooltip } from "../../chakraui/tooltip";
import { Text } from "../../chakraui/text";

type IconsPriorityProps = {
  priorityName?: string | undefined;
  prioritySystemName?: string;
  showText?: boolean;
  translatedPriority?: string | undefined;
  showTranslatedPriority?: boolean;
};

export const IconsPriority = ({
  showTranslatedPriority = false,
  ...props
}: IconsPriorityProps) => {
  const getPriority = (): string => {
    if (showTranslatedPriority && props.translatedPriority) {
      return props.translatedPriority;
    } else if (!showTranslatedPriority && props?.priorityName) {
      return props?.priorityName || "";
    } else {
      return "";
    }
  };

  const priority = getPriority();
  const priorityName = props.prioritySystemName ?? props.priorityName;
  // This manipulates a 'prioritySystemName' string by converting it to uppercase, normalizing and removing diacritics, spaces, and underscores
  const prioritySystem = priorityName
    ?.toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "")
    .replace("_", "");
  const matchPriority = matcher(prioritySystem);
  const priorityWithIcon = matchPriority({
    MUYBAJA: (
      <ChevronDoubleDownIcon
        background={"shori.700"}
        color="white"
        fontSize={"22px"}
        borderRadius={"4px"}
        padding={"1px"}
      />
    ),
    BAJA: (
      <ChevronDownIcon
        background={"shori.700"}
        color="white"
        fontSize={"22px"}
        borderRadius={"4px"}
        padding={"1px"}
      />
    ),
    MEDIA: (
      <DashCircleIcon
        background={"brand.orange"}
        color="white"
        fontSize={"22px"}
        borderRadius={"4px"}
        padding={"1px"}
      />
    ),
    ALTA: (
      <ChevronUpIcon
        background={"shori.red600"}
        color="white"
        fontSize={"22px"}
        borderRadius={"4px"}
        padding={"1px"}
      />
    ),
    CRITICA: (
      <ChevronDoubleUpIcon
        background={"#981F1E"}
        color="white"
        fontSize={"22px"}
        borderRadius={"4px"}
        padding={"1px"}
      />
    ),
  });

  return (
    <HStack alignItems="center">
      <Tooltip content={getPriority()}>
        <Box>{priorityWithIcon}</Box>
      </Tooltip>
      {props.showText && (
        <Box>
          <Text m="auto">{priority}</Text>
        </Box>
      )}
    </HStack>
  );
};
