import { ReactNode } from "react";
import { Pokemon } from "@/services/pokemon";
import { usePokeball } from "@/hooks";
import { useToast } from "../ui/use-toast";

interface ButtonAddToPokeballProps {
  children: ReactNode;
  pokemon: Pokemon;
}
function ButtonAddToPokeball({ children, pokemon }: ButtonAddToPokeballProps) {
  const { addToPokeball } = usePokeball();
  const { toast } = useToast();

  return (
    <button
      type="button"
      name="add-to-pokeball"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mt-6"
      onClick={() => {
        addToPokeball(pokemon);
        toast({
          title: "Gotcha!",
          description: `${pokemon.name} was caught!`,
          variant: "success",
        });
      }}
    >
      {children}
    </button>
  );
}

export default ButtonAddToPokeball;
