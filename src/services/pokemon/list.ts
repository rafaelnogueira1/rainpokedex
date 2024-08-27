export interface PokemonsListResponse {
  count: number;
  next: string;
  previous: string;
  results: PokemonListResponse[];
}

export interface PokemonListResponse {
  url: string;
  name: string;
}

export interface Pokemon {
  id: number;
  name: string;
}

export interface ListReturn {
  pokemons: Pokemon[];
  count: number;
}

export const listPokemons = async (
  limit = 10,
  offset = 0
): Promise<ListReturn> => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/pokemon?limit=${limit}&offset=${offset}`
  );
  const data = (await response.json()) as PokemonsListResponse;

  const pokemons = data.results.map((pokemon) => {
    const url = new URL(pokemon.url);
    const idMatch = url.pathname.match(/\/pokemon\/(\d+)\//);
    const id = idMatch ? parseInt(idMatch[1], 10) : 0;

    return {
      name: pokemon.name,
      id,
    };
  });

  return {
    pokemons,
    count: data.count,
  };
};
