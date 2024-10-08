import { forwardRef } from "react";

interface FilterItemProps {
  value: string;
  onClick: (name: string) => void;
}

const FilterItem = forwardRef<HTMLInputElement, FilterItemProps>(
  ({ value, onClick }, ref) => {
    const handleClickScroll = () => {
      const element = document.getElementById("pokemons");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
      <label
        htmlFor={value}
        className="text-md flex gap-1 capitalize items-center"
      >
        <input
          id={value}
          type="radio"
          name="filter"
          className="w-4 h-4"
          value={value}
          onChange={() => {
            onClick(value);
            handleClickScroll();
          }}
          ref={ref}
        />
        {value}
      </label>
    );
  }
);

export default FilterItem;
