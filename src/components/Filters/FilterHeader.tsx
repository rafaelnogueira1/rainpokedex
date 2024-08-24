interface FilterHeaderProps {
  name: string;
}
function FilterHeader({ name }: FilterHeaderProps) {
  return (
    <div className="flex justify-between">
      <h3 className="text-lg text-gray-500 font-bold">{name}</h3>
      <button type="button" name="clear" className="text-sm text-red">
        Clear all
      </button>
    </div>
  );
}

export default FilterHeader;
