function NavigationItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="font-navigation uppercase text-md">
      <a href="/" className="text-blue-900">
        {children}
      </a>
    </li>
  );
}

export default NavigationItem;
