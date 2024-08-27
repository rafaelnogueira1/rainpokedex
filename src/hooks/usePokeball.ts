import { PokeballContext } from "@/context";
import { useContext } from "react";

export const usePokeball = () => {
  const context = useContext(PokeballContext);

  if (!context) {
    throw new Error("usePokeball must be used with PokeballContext");
  }

  return context;
};
