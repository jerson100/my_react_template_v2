import { Box } from "@chakra-ui/react";
import HeaderSidebar from "./components/HeaderSidebar";
import FooterSidebar from "./components/FooterSidebar";
import BodySidebar from "./components/BodySidebar";

const Sidebar = () => {
  return (
    <Box
      as="aside"
      borderRightWidth="1px"
      borderStyle={"solid"}
      h={"100vh"}
      w={"230px"}
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
    </Box>
  );
};

export default Sidebar;
