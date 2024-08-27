import { AuthProvider } from "./AuthContext";
import { PokemonProvider } from "./PokemonContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <PokemonProvider>{children}</PokemonProvider>
    </AuthProvider>
  );
}
