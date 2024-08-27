import { Pokemon } from "@/services/pokemon";

export const pokemonAlreadyInPokeball = (pokeball: Pokemon[], id: number) => {
  return pokeball.find((pokemon) => pokemon.id === id);
};
