import { FiHome } from "react-icons/fi";
import BodySidebarItem from "./BodySidebarItem";
import { MdAdminPanelSettings } from "react-icons/md";
import { VStack } from "@chakra-ui/react";
import { useLocation } from "react-router";

const BodySidebarList = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <VStack as="ul" alignItems={"flex-start"} gap={0}>
      <BodySidebarItem
        label="Inicio"
        icon={<FiHome />}
        to="/"
        isActive={location.pathname === "/"}
      />
      <BodySidebarItem
        label="Casos"
        icon={<FiHome />}
        to="/"
        isActive={location.pathname === "/cases"}
      />
      <BodySidebarItem
        label="Admistración"
        icon={<MdAdminPanelSettings />}
        to="/admin"
        isActive={location.pathname === "/admin"}
      />
    </VStack>
  );
};

export default BodySidebarList;
