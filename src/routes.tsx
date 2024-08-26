import { createBrowserRouter } from "react-router-dom";
import { Home } from "@pages/Home";
import { Login } from "@pages/Login";
import { ErrorPage } from "@pages/ErrorPage";
import { Details } from "@pages/Details";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    index: true,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details/:id",
    element: <Details />,
  },
]);

export default router;
