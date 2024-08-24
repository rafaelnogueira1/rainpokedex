interface FilterItemProps {
  name: string;
}

function FilterItem({ name }: FilterItemProps) {
  return (
    <label className="text-md flex gap-1">
      <input type="checkbox" />
      {name}
    </label>
  );
}

export default FilterItem;
