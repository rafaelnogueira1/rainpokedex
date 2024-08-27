import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";
import { PokeballProvider, PokemonProvider } from "@/context";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PokemonProvider>
      <PokeballProvider>
        <RouterProvider router={router} />
      </PokeballProvider>
    </PokemonProvider>
  </StrictMode>
);
