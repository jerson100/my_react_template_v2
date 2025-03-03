import React, { FC, PropsWithChildren } from "react";
import MenuItemWrapper from "./MenuItemWrapper";

interface MenuItemWrapperProps extends PropsWithChildren {
  label: string;
  icon?: React.ReactNode;
  to?: string;
}

const MenuItem: FC<MenuItemWrapperProps> = (props) => {
  return <MenuItemWrapper level={0} {...props} />;
};

export default MenuItem;
