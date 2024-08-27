import { Link } from "react-router-dom";

interface CardProps {
  id: number;
  name: string;
}

function Description({ id, name }: CardProps) {
  return (
    <Link
      to={`/details/${id}`}
      className="flex flex-col items-center text-center gap-3"
    >
      <div className="flex flex-col">
        <span className="font-bold text-sm text-gray-500">№ {id}</span>
        <h2 className="text-lg text-black font-bold font-secondary capitalize">
          {name}
        </h2>
      </div>
    </Link>
  );
}

export default Description;
