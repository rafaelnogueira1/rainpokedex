import { usePokemomStore } from "@/store/usePokemonStore";
import { useStore } from "zustand";

export function usePokemon() {
  const cartManage = useStore(usePokemomStore, (state) => state);

  if (!cartManage) {
    throw new Error("usePokemon must be used within usePokemomStore");
  }

  return cartManage;
}
