import { Button } from "@/core/components/chakraui/button";
import { LinkButton } from "@/core/components/chakraui/link-button";
import { useHoverBgColorCurrentPalette } from "@/core/hooks";
import { selectedPaletteAtom } from "@/core/states";
import { Box, HStack } from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import { Link } from "react-router";

interface BodySidebarItemProps {
  label: string;
  icon?: React.ReactElement;
  to: string;
  isActive?: boolean;
}

const BodySidebarItem = ({
  label,
  to,
  icon,
  isActive = false,
}: BodySidebarItemProps) => {
  const { hover: hoverBG } = useHoverBgColorCurrentPalette();
  const selectedPalette = useAtomValue(selectedPaletteAtom);
  return (
    <Box
      as="li"
      listStyle={"none"}
      borderRight={isActive ? 3 : 0}
      borderRightStyle={"solid"}
      borderRightColor={`${selectedPalette}.600/60`}
      w={"full"}
    >
      <LinkButton
        as={Link}
        colorPalette={isActive ? selectedPalette : "bg"}
        bg={isActive ? {} : { _light: "transparent", _dark: "transparent" }}
        color={isActive ? "" : "GrayText"}
        _hover={isActive ? {} : hoverBG}
        variant={"subtle"}
        w={"full"}
        justifyContent={"flex-start"}
        asChild
      >
        <Link to={to}>
          {icon}
          {label}
        </Link>
      </LinkButton>
    </Box>
  );
};

export default BodySidebarItem;
