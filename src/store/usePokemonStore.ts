import { ability, gender, pokemon, type } from "@/services";
import { ListReturn } from "@/services/pokemon";
import { create } from "zustand";

interface usePokemomStoreState {
  pokemonsList: ListReturn | null;
  getPokemons: (limit?: number, offset?: number) => void;
  onSelectType: (t: string) => void;
  onSelectAbility: (t: string) => void;
  onSelectGender: (t: string) => void;
}

export const usePokemomStore = create<usePokemomStoreState>((set) => ({
  pokemonsList: null,
  getPokemons: async (limit = 12, offset = 0) => {
    const response = await pokemon.listPokemons(limit, offset);

    set({ pokemonsList: response });
  },
  onSelectType: async (t: string) => {
    const response = await type.pokemonsByType(t);

    set({ pokemonsList: response });
  },
  onSelectAbility: async (a: string) => {
    const response = await ability.pokemonByAbility(a);

    set({ pokemonsList: response });
  },
  onSelectGender: async (g: string) => {
    const response = await gender.pokemonsByGender(g);

    set({ pokemonsList: response });
  },
}));
