import { Box } from "@chakra-ui/react";
import BodySidebarList from "./BodySidebarList";

const BodySidebar = () => {
  return (
    <Box flexGrow={1}>
      <BodySidebarList />
    </Box>
  );
};

export default BodySidebar;
