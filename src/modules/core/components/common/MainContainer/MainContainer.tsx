import { Container, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router";
import Sidebar from "./components/Sidebar";
import MainHeader from "./components/MainHeader";
import UIDrawer from "./components/UIDrawer";

const MainContainer = () => {
  return (
    <>
      <Flex>
        <Sidebar />
        <Flex flexGrow={1} flexDir={"column"}>
          <MainHeader />
          <Container as="main" flexGrow={1}>
            <Outlet />
          </Container>
        </Flex>
      </Flex>
      <UIDrawer />
    </>
  );
};

export default MainContainer;
