import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/core/components/chakraui/menu";
import { useCurrentPalette } from "@/core/hooks";
import { UIDrawerAtom } from "@/core/states";
import { Box, MenuRootProps } from "@chakra-ui/react";
import { useSetAtom } from "jotai";
import { IoIosColorPalette, IoIosLogOut } from "react-icons/io";
import { LuUser } from "react-icons/lu";
import { Link, useNavigate } from "react-router";

interface UserMenuProps extends MenuRootProps {}

const UserMenu = ({ children, ...restProps }: UserMenuProps) => {
  const navigate = useNavigate();
  const { hover: hoverBG } = useCurrentPalette();
  const setUIDrawerAtom = useSetAtom(UIDrawerAtom);
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
    <MenuRoot
      positioning={{ placement: "right-start" }}
      variant={"solid"}
      {...restProps}
    >
      <MenuTrigger asChild>{children}</MenuTrigger>
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
  );
};

export default UserMenu;
