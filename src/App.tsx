import { AuthProvider, PokeballProvider, PokemonProvider } from "@/context";
import Router from "./routes.tsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PokemonProvider>
          <PokeballProvider>
            <Router />
          </PokeballProvider>
        </PokemonProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
