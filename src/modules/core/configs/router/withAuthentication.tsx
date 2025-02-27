import { RouteObject } from "react-router";
import privateRouter from "./privateRouter";
import authRouter from "@auth/routers";
import WithAutenticationWrapper from "./WithAutenticationWrapper";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <WithAutenticationWrapper />,
    children: [...authRouter, ...privateRouter],
  },
];

export default routes;
