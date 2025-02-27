import { createBrowserRouter } from "react-router";
import withAuthentication from "./withAuthentication";
import withoutAuthentication from "./withoutAuthentication";

const router = createBrowserRouter([...withoutAuthentication, ...withAuthentication]);

export default router;
