import { PokemonListResponse, ListReturn } from "../pokemon";

export interface AbilityListResponse {
  id: number;
  pokemon: AbilityPokemonResponse[];
  name: string;
}

interface AbilityPokemonResponse {
  pokemon: PokemonListResponse;
  slot: number;
  is_hidden: boolean;
}

export const pokemonByAbility = async (
  ability: string,
  limit = 10,
  offset = 0
): Promise<ListReturn> => {
  const response = await fetch(
    `${
      import.meta.env.VITE_API_URL
    }/ability/${ability}?limit=${limit}&offset=${offset}`
  );
  const data = (await response.json()) as AbilityListResponse;

  const pokemons = data.pokemon.map((pokemon) => {
    const url = new URL(pokemon.pokemon.url);
    const idMatch = url.pathname.match(/\/pokemon\/(\d+)\//);
    const id = idMatch ? parseInt(idMatch[1], 10) : 0;

    return {
      name: pokemon.pokemon.name,
      id,
    };
  });

  return {
    pokemons,
    count: 0,
  };
};
