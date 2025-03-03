import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router";

const ServiceContainer = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  );
};

export default ServiceContainer;
