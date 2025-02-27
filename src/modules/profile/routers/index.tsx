import { Navigate, RouteObject } from "react-router";
import ProfileContainer from "../components/ProfileContainer";
import ProfileView from "../components/ProfileView";

const routes: RouteObject[] = [
  {
    path: "/profile",
    element: <ProfileContainer />,
    children: [
      {
        path: "",
        element: <ProfileView />,
      },
      {
        path: "*",
        element: <Navigate to="/profile" replace />,
      },
    ],
  },
];

export default routes;
