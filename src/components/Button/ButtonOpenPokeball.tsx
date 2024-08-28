import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

function ButtonOpenPokeball({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      name="open-pokeball"
      className="flex text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center lg:mt-6"
      onClick={() => navigate("/pokeball")}
    >
      {children}
    </button>
  );
}

export default ButtonOpenPokeball;
