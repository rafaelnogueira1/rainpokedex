import { usePokeballStore } from "@/store/usePokeballStore";
import { useStore } from "zustand";

export function usePokeball() {
  const cartManage = useStore(usePokeballStore, (state) => state);

  if (!cartManage) {
    throw new Error("usePokeball must be used within usePokeballStore");
  }

  return cartManage;
}
