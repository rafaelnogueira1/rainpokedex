interface FilterItemProps {
  name: string;
  onClick: (name: string) => void;
}

function FilterItem({ name, onClick }: FilterItemProps) {
  return (
    <label className="text-md flex gap-1 capitalize items-center">
      <input
        type="checkbox"
        name={name}
        className="w-4 h-4"
        value={name}
        onClick={() => {
          onClick(name);
        }}
      />
      {name}
    </label>
  );
}

export default FilterItem;
