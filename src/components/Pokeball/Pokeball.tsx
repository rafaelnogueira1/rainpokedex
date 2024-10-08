import { usePokeball } from "@/hooks";
import { Link } from "react-router-dom";

function Pokeball() {
  const { pokeballQtd } = usePokeball();

  return (
    <div className="relative">
      <Link to="/pokeball">
        <img
          src="/assets/images/pokeball.svg"
          alt="See pokeball"
          width={35}
          height={45}
        />
      </Link>
      {pokeballQtd > 0 && (
        <span className="text-white text-md bg-red-500 w-7 h-7 flex items-center justify-center rounded-full absolute -bottom-4 -left-2">
          {pokeballQtd}
        </span>
      )}
    </div>
  );
}

export default Pokeball;
