import { PokemonListResponse, ListReturn } from "../pokemon";

export interface GenderListResponse {
  id: number;
  pokemon_species_details: GenderPokemonResponse[];
  name: string;
}

interface GenderPokemonResponse {
  pokemon_species: PokemonListResponse;
  rate: number;
}

export const pokemonsByGender = async (
  gender: string,
  limit = 10,
  offset = 0
): Promise<ListReturn> => {
  const response = await fetch(
    `${
      import.meta.env.VITE_API_URL
    }/gender/${gender}?limit=${limit}&offset=${offset}`
  );
  const data = (await response.json()) as GenderListResponse;

  const pokemons = data.pokemon_species_details.map((pokemon) => {
    const url = new URL(pokemon.pokemon_species.url);
    const idMatch = url.pathname.match(/\/pokemon-species\/(\d+)\//);
    const id = idMatch ? parseInt(idMatch[1], 10) : 0;

    return {
      name: pokemon.pokemon_species.name,
      id,
    };
  });

  return {
    pokemons,
    count: 0,
  };
};
