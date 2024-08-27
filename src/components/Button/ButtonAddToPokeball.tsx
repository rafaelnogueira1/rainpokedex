import { ReactNode } from "react";
import { usePokeball } from "@/hooks";

interface ButtonAddToPokeballProps {
  children: ReactNode;
  id: number;
  name: string;
}
function ButtonAddToPokeball({ children, id, name }: ButtonAddToPokeballProps) {
  const { addToPokeball } = usePokeball();

  return (
    <button
      type="button"
      name="add-to-pokeball"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mt-6"
      onClick={() =>
        addToPokeball({
          id,
          name,
        })
      }
    >
      {children}
    </button>
  );
}

export default ButtonAddToPokeball;
