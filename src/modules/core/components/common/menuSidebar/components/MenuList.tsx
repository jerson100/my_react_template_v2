import { List } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

const MenuList: FC<PropsWithChildren> = ({ children }) => {
  return <List.Root pl={4}>{children}</List.Root>;
};

export default MenuList;
