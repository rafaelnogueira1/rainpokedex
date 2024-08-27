function FilterContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 h-40 items-start overflow-y-scroll">
      {children}
    </div>
  );
}

export default FilterContent;
