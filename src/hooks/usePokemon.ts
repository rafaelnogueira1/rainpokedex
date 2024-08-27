import { useContext } from "react";
import { PokemonContext } from "@/context";

export const usePokemon = () => {
  const context = useContext(PokemonContext);

  if (!context) {
    throw new Error("usePokemon must be used with PokemonProvider");
  }

  return context;
};
