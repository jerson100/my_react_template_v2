import { RouteObject } from "react-router";
import ServiceContainer from "../components/ServiceContainer";
import ServiceView from "../components/ServiceView";

const routes: RouteObject[] = [
  {
    path: "/services",
    element: <ServiceContainer />,
    children: [
      {
        path: "",
        element: <ServiceView />,
      },
    ],
  },
];

export default routes;
