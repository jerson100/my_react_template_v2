import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/core/components/chakraui/menu";
import { Box } from "@chakra-ui/react";
import { Avatar } from "@core/components/chakraui/avatar";
import { Button } from "@core/components/chakraui/button";
import { RiArrowRightLine } from "react-icons/ri";
import { IoIosColorPalette, IoIosLogOut } from "react-icons/io";
import { LuUser } from "react-icons/lu";
import { useSetAtom } from "jotai";
import { UIDrawerAtom } from "@/core/states";
import { Link, useNavigate } from "react-router";
import { useHoverBgColorCurrentPalette } from "@core/hooks";

const FooterSidebar = () => {
  const setUIDrawerAtom = useSetAtom(UIDrawerAtom);
  const { hover: hoverBG } = useHoverBgColorCurrentPalette();
  const navigate = useNavigate();
  const menuItems = [
    {
      label: "Perfil",
      to: "/profile",
      icon: <LuUser />,
    },
    {
      label: "UI",
      icon: <IoIosColorPalette />,
      onClick: () => setUIDrawerAtom(true),
    },
    {
      label: "Salir",
      onClick: () => navigate("/auth/login"),
      icon: <IoIosLogOut />,
    },
  ];
  return (
    <Box mt="auto">
      <MenuRoot positioning={{ placement: "right-start" }} variant={"solid"}>
        <MenuTrigger asChild>
          <Button
            variant="subtle"
            size={"md"}
            w={"full"}
            justifyContent={"flex-start"}
          >
            <Avatar size={"xs"} />
            Jerson Ramírez
            <RiArrowRightLine />
          </Button>
        </MenuTrigger>
        <MenuContent>
          {menuItems.map((item) => (
            <MenuItem
              value={item.label}
              key={item.label}
              cursor={"pointer"}
              _hover={hoverBG}
              onClick={item.onClick}
              display={"flex"}
              asChild
            >
              {!!item.to ? (
                <Link to={item.to}>
                  {item.icon}
                  {item.label}
                </Link>
              ) : (
                <Box>
                  {item.icon}
                  {item.label}
                </Box>
              )}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </Box>
  );
};

export default FooterSidebar;
