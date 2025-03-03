import { FiHome } from "react-icons/fi";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { BsClipboardData } from "react-icons/bs";
import { CiCircleList } from "react-icons/ci";
import { IoAddSharp } from "react-icons/io5";
import { MenuSidebar } from "@/core/components/common";

const BodySidebarList = () => {
  return (
    <MenuSidebar.Root>
      <MenuSidebar.List>
        <MenuSidebar.Item label="Servicios" to="/services" icon={<FiHome />} />
        <MenuSidebar.Item label="Casos" icon={<BsClipboardData />}>
          <MenuSidebar.List>
            <MenuSidebar.Item
              label="Bandeja"
              to="/cases/inbox"
              icon={<CiCircleList />}
            />
            <MenuSidebar.Item
              label="Crear"
              to="/cases/create"
              icon={<IoAddSharp />}
            />
          </MenuSidebar.List>
        </MenuSidebar.Item>
        <MenuSidebar.Item
          label="Administración"
          to="/admin"
          icon={<MdOutlineAdminPanelSettings />}
        />
      </MenuSidebar.List>
    </MenuSidebar.Root>
  );
};

export default BodySidebarList;
