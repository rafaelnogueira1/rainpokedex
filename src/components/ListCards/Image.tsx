import { Link } from "react-router-dom";

interface CardProps {
  id: number;
  name: string;
}

function Image({ id, name }: CardProps) {
  return (
    <Link
      to={`/details/${id}`}
      className="flex flex-col items-center text-center gap-3"
    >
      <img
        src={`/assets/images/pokemon/${id}.png`}
        alt={name}
        width={150}
        height={150}
      />
    </Link>
  );
}

export default Image;
