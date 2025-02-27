import { FiHome } from "react-icons/fi";
import BodySidebarItem from "./BodySidebarItem";
import { VStack } from "@chakra-ui/react";
import { useLocation } from "react-router";
import { BsClipboardData } from "react-icons/bs";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

const BodySidebarList = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <VStack as="ul" alignItems={"flex-start"} gap={0}>
      <BodySidebarItem
        label="Servicios"
        icon={<FiHome />}
        to="/"
        isActive={location.pathname === "/"}
      />
      <BodySidebarItem
        label="Casos"
        icon={<BsClipboardData />}
        to="/cases"
        isActive={location.pathname === "/cases"}
      />
      <BodySidebarItem
        label="Admistración"
        icon={<MdOutlineAdminPanelSettings />}
        to="/admin"
        isActive={location.pathname === "/admin"}
      />
    </VStack>
  );
};

export default BodySidebarList;
