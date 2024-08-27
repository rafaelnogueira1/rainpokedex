import { PokemonListResponse, ListReturn } from "../pokemon";

export interface TypeListResponse {
  id: number;
  pokemon: TypePokemonResponse[];
  name: string;
}

interface TypePokemonResponse {
  pokemon: PokemonListResponse;
  slot: number;
}

export const pokemonsByType = async (
  type: string,
  limit = 10,
  offset = 0
): Promise<ListReturn> => {
  const response = await fetch(
    `${
      import.meta.env.VITE_API_URL
    }/type/${type}?limit=${limit}&offset=${offset}`
  );
  const data = (await response.json()) as TypeListResponse;

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
