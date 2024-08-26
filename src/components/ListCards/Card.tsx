import { Link } from "react-router-dom";

interface CardProps {
  id: number;
  name: string;
}

function Card({ id, name }: CardProps) {
  return (
    <div className="w-48 h-fit flex justify-center text-center p-7 rounded-3xl bg-white border border-solid border-gray-200">
      <Link
        to={`/details/${id}`}
        className="flex flex-col items-center text-center gap-3"
      >
        <img
          src={`/assets/images/pokemon/${id}.png`}
          alt={name}
          width={75}
          height={75}
        />
        <div className="flex flex-col">
          <span className="font-bold text-sm text-gray-500">№ {id}</span>
          <h2 className="text-lg text-black font-bold font-secondary">
            {name}
          </h2>
        </div>
      </Link>
    </div>
  );
}

export default Card;
