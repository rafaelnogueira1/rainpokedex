import { useLocalStorage } from "@/hooks";
import { Pokemon } from "@/services/pokemon";
import { pokemonAlreadyInPokeball } from "@/utils/pokemonAlreadyInPokeball";
import { createContext, ReactNode, useCallback } from "react";

interface PokeballContextProps {
  pokeball: Pokemon[];
  addToPokeball: (pokemon: Pokemon) => void;
  removeFromPokeball: (id: number) => void;
}

export const PokeballContext = createContext({} as PokeballContextProps);

const storage = JSON.parse(localStorage.getItem("pokeball")!);

export const PokeballProvider = ({ children }: { children: ReactNode }) => {
  const [pokeball, setPokeball] = useLocalStorage<Pokemon[] | []>(
    "pokeball",
    storage || []
  );

  const addToPokeball = useCallback(
    (pokemon: Pokemon) => {
      if (pokemonAlreadyInPokeball(pokeball, pokemon.id)) {
        console.info("Pokemon already in pokeball");
        return;
      }

      setPokeball((prevPokeball) => [...prevPokeball, pokemon]);

      if (pokeball?.length) {
        console.log("Pokemon added to pokeball", pokeball);
        localStorage.setItem(
          "pokeball",
          JSON.stringify([...pokeball, pokemon])
        );
      } else {
        console.log("First pokemon in pokeball");
        localStorage.setItem("pokeball", JSON.stringify([pokemon]));
      }
    },
    [pokeball, setPokeball]
  );

  const removeFromPokeball = useCallback(
    (id: number) => {
      const newPokeball = pokeball.filter((pokemon) => pokemon.id !== id);

      setPokeball(newPokeball);
    },
    [setPokeball, pokeball]
  );

  const value = {
    pokeball,
    addToPokeball,
    removeFromPokeball,
  };

  return (
    <PokeballContext.Provider value={value}>
      {children}
    </PokeballContext.Provider>
  );
};
