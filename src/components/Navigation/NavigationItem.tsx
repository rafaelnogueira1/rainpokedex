import { Link } from "react-router-dom";

interface NavigationItemProps {
  children: React.ReactNode;
  href: string;
}

function NavigationItem({ children, href }: NavigationItemProps) {
  return (
    <li className="font-navigation uppercase text-md">
      <Link to={href} className="text-blue-900">
        {children}
      </Link>
    </li>
  );
}

export default NavigationItem;
