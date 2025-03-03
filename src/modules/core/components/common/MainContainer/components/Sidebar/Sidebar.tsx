import HeaderSidebar from "./components/HeaderSidebar";
import FooterSidebar from "./components/FooterSidebar";
import BodySidebar from "./components/BodySidebar";
import { useAtomValue } from "jotai";
import { SidebarToogleAtom } from "@/core/states";
import { BoxMotion } from "../../../chakraMotion";

const Sidebar = () => {
  const sidebarToogle = useAtomValue(SidebarToogleAtom);
  return (
    <BoxMotion
      as="aside"
      borderRightWidth="1px"
      borderStyle={"solid"}
      h={"100vh"}
      w={"220px"}
      animate={{
        marginLeft: sidebarToogle ? 0 : -220,
        transition: {
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
      flexShrink={0}
      bgColor={{ _light: "white" }}
      pos={"sticky"}
      top={0}
      flexDir={"column"}
      display={"flex"}
    >
      <HeaderSidebar />
      <BodySidebar />
      <FooterSidebar />
    </BoxMotion>
  );
};

export default Sidebar;
