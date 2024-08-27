import { useAuth, useLocalStorage } from "@/hooks";
import { Pokemon } from "@/services/pokemon";
import { pokemonAlreadyInPokeball } from "@/utils/pokemonAlreadyInPokeball";
import { createContext, ReactNode, useCallback, useEffect } from "react";

interface PokeballDB {
  userId: string;
  pokeball: Pokemon[];
}
interface PokeballContextProps {
  pokeball: Pokemon[];
  addToPokeball: (pokemon: Pokemon) => void;
  removeFromPokeball: (id: number) => void;
}

export const PokeballContext = createContext({} as PokeballContextProps);

// const storage: PokeballDB[] = JSON.parse(localStorage.getItem("pokeball")!);

export const PokeballProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const [pokeball, setPokeball] = useLocalStorage<Pokemon[] | []>(
    `pokeball-${user?.id}`,
    JSON.parse(localStorage.getItem(`pokeball-${user?.id}`)!) || []
  );

  const addToPokeball = useCallback(
    (pokemon: Pokemon) => {
      console.log("pokeball", pokeball);
      if (pokemonAlreadyInPokeball(pokeball, pokemon.id)) {
        console.info("Pokemon already in pokeball");
        return;
      }

      setPokeball([...pokeball, pokemon]);

      // const userIndex = pokeball.findIndex((p) => p.userId === user?.id);
      // if (userIndex === -1) {
      //   const newPokebola = {
      //     userId: user?.id,
      //     pokeball: [pokemon],
      //   };
      //   setPokeball([...pokeball, newPokebola]);
      //   console.log("Pokeball created", pokeball);
      // } else {
      //   if (
      //     pokemonAlreadyInPokeball(pokeball[userIndex].pokeball, pokemon.id)
      //   ) {
      //     console.info("Pokemon already in pokeball");
      //     return;
      //   }
      //   pokeball[userIndex].pokeball.push(pokemon);
      //   setPokeball(pokeball);
      //   console.log("Pokeball updated", pokeball);
      // }
      // if (pokeball?.length) {
      //   console.log("Pokemon added to pokeball", pokeball);
      //   localStorage.setItem(
      //     "pokeball",
      //     JSON.stringify([...pokeball, pokemon])
      //   );
      // } else {
      //   console.log("First pokemon in pokeball");
      //   localStorage.setItem("pokeball", JSON.stringify([pokemon]));
      // }
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
