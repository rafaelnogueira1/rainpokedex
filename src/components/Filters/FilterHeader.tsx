interface FilterHeaderProps {
  children: React.ReactNode;
  onClick: () => void;
}
function FilterHeader({ children, onClick }: FilterHeaderProps) {
  return (
    <div className="flex justify-between">
      <h3 className="text-lg text-gray-500 font-bold">{children}</h3>
      <button
        type="button"
        name="clear"
        className="text-sm text-red"
        onClick={onClick}
      >
        Clear
      </button>
    </div>
  );
}

export default FilterHeader;
