export interface PokemonsResponse {
  count: number;
  next: string;
  previous: string;
  results: PokemonResponse[];
}

export interface PokemonResponse {
  url: string;
  name: string;
}

export interface Pokemons {
  id: number;
  url: string;
  name: string;
}

const listPokemons = async (limit = 10, offset = 0): Promise<Pokemons[]> => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/pokemon?limit=${limit}&offset=${offset}`
  );
  const data = (await response.json()) as PokemonsResponse;

  const pokemons = data.results.map((pokemon) => {
    const url = new URL(pokemon.url);
    const idMatch = url.pathname.match(/\/pokemon\/(\d+)\//);
    const id = idMatch ? parseInt(idMatch[1], 10) : 0;

    return {
      ...pokemon,
      id,
    };
  });

  return pokemons;
};

export default listPokemons;
