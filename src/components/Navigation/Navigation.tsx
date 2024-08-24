function Navigation({ children }: { children: React.ReactNode }) {
  return (
    <nav>
      <ul className="flex gap-6">{children}</ul>
    </nav>
  );
}

export default Navigation;
