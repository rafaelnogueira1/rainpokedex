import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Pokemon } from "@/services/pokemon";

interface usePokeballStoreState {
  pokeball: Pokemon[];
  pokeballQtd: number;
  addToPokeball: (pokemon: Pokemon) => void;
  removeFromPokeball: (id: number) => void;
}

export interface PersistedState {
  pokeball: Pokemon[];
}

export const usePokeballStore = create<usePokeballStoreState>()(
  persist(
    (set, get) => ({
      pokeball: [],
      pokeballQtd: 0,

      addToPokeball: (pokemon) =>
        set((state) => ({
          pokeball: [...get().pokeball, pokemon],
          pokeballQtd: state.pokeball.length + 1,
        })),
      removeFromPokeball: (id) =>
        set((state) => ({
          pokeball: get().pokeball.filter((entry) => entry.id !== id),
          pokeballQtd: state.pokeball.length - 1,
        })),
    }),
    {
      name: "pokeball-storage",
      partialize: (state) => ({
        pokeball: state.pokeball,
      }),
      merge: (persistedState, currentState) => {
        const { pokeball } = persistedState as PersistedState;

        return {
          ...currentState,
          pokeball: pokeball,
          pokeballQtd: pokeball.length,
        };
      },
    }
  )
);
