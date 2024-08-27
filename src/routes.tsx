import { Route, Routes } from "react-router-dom";
import { Home } from "@/pages/Home";
import { Login } from "@/pages/Login";
import { ErrorPage } from "@/pages/ErrorPage";
import { Details } from "@/pages/Details";
import { Pokeball } from "@/pages/Pokeball";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Root from "./pages/Root/Root";

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} errorElement={<ErrorPage />} />
      <Route element={<Root />} errorElement={<ErrorPage />}>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
          index
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
      </Route>
    </Routes>
  );
}

export default Router;
