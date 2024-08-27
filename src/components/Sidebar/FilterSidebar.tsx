import { Filter } from "@/components/Filters";
import { usePokemon } from "@/hooks";
import { useRef } from "react";

interface Item {
  name: string;
}

interface FilterSidebarProps {
  name: string;
  data: Item[];
  onClick: (name: string) => void;
}

function FilterSidebar({ name, data, onClick }: FilterSidebarProps) {
  const { getPokemons } = usePokemon();
  const radioRefs = useRef<HTMLInputElement[]>([]);

  const handleReset = () => {
    radioRefs.current.forEach((radio) => {
      if (radio) {
        radio.checked = false;
      }
    });
    getPokemons();
  };

  return (
    <Filter.Container>
      <Filter.Header onClick={handleReset}>{name}</Filter.Header>
      <Filter.Content>
        {data.map((item, index) => (
          <Filter.Item
            key={item.name}
            value={item.name}
            onClick={onClick}
            ref={(el) => {
              if (el) {
                radioRefs.current[index] = el;
              }
            }}
          />
        ))}
      </Filter.Content>
    </Filter.Container>
  );
}

export default FilterSidebar;
