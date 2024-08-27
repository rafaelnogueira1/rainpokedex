import { createBrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "@pages/Home";
import { Login } from "@pages/Login";
import { ErrorPage } from "@pages/ErrorPage";
import { Details } from "@pages/Details";
import { Pokeball } from "@pages/Pokeball";
import { ProtectedRoute } from "@components/ProtectedRoute";

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
  {
    path: "/pokeball",
    element: <Pokeball />,
  },
]);

// export default router;

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/details/:id"
        element={
          <ProtectedRoute>
            <Details />
          </ProtectedRoute>
        }
      />
      <Route
        path="/pokeball"
        element={
          <ProtectedRoute>
            <Pokeball />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default Router;
