import { Pokemon } from "@/services/pokemon";
import { createContext, ReactNode, useCallback, useState } from "react";

interface PokeballContextProps {
  pokeball: Pokemon[];
  addToPokeball: (pokemon: Pokemon) => void;
  removeFromPokeball: (id: number) => void;
}

export const PokeballContext = createContext({} as PokeballContextProps);

const storage = JSON.parse(localStorage.getItem("pokeball")!);

export const PokeballProvider = ({ children }: { children: ReactNode }) => {
  const [pokeball, setPokeball] = useState<Pokemon[]>(() => {
    // const storage = JSON.parse(localStorage.getItem("pokeball")!);
    return storage || [];
  });

  const addToPokeball = useCallback((pokemon: Pokemon) => {
    setPokeball((prevPokeball) => [...prevPokeball, pokemon]);

    if (storage?.length) {
      const newStorage = [...storage, pokemon];
      localStorage.setItem("pokeball", JSON.stringify(newStorage));
    } else {
      localStorage.setItem("pokeball", JSON.stringify([pokemon]));
    }
  }, []);

  const removeFromPokeball = useCallback((id: number) => {
    setPokeball((prevPokeball) =>
      prevPokeball.filter((pokemon) => pokemon.id !== id)
    );
  }, []);

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
