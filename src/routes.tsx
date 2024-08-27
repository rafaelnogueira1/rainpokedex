import { Route, Routes } from "react-router-dom";
import { Home } from "@/pages/Home";
import { Login } from "@/pages/Login";
import { Details } from "@/pages/Details";
import { Pokeball } from "@/pages/Pokeball";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Root from "./pages/Root/Root";
import Register from "./pages/Register/Register";

function Router() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route element={<Root />}>
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
