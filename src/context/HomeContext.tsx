import { createContext, useCallback, useEffect, useState } from "react";
import { pokemon, type, ability, gender } from "@/services";
import { Pokemon } from "@/services/pokemon";

interface PokemonContextProps {
  pokemonsList: Pokemon[];
  onSelectType: (t: string) => void;
  onSelectAbility: (a: string) => void;
  onSelectGender: (a: string) => void;
}

export const PokemonContext = createContext({} as PokemonContextProps);

export const PokemonProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [pokemonsList, setPokemonsList] = useState<Pokemon[]>([]);

  const getPokemons = useCallback(async () => {
    const response = await pokemon.listPokemons();

    setPokemonsList(response);
  }, []);

  const onSelectType = useCallback(async (t: string) => {
    const response = await type.pokemonsByType(t);

    setPokemonsList(response);
  }, []);

  const onSelectAbility = useCallback(async (a: string) => {
    const response = await ability.pokemonByAbility(a);

    setPokemonsList(response);
  }, []);

  const onSelectGender = useCallback(async (g: string) => {
    const response = await gender.pokemonsByGender(g);

    setPokemonsList(response);
  }, []);

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  const value = {
    pokemonsList,
    onSelectType,
    onSelectAbility,
    onSelectGender,
  };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};
