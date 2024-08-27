import { Filter } from "@components/Filters";

interface Item {
  name: string;
}

interface FilterSidebarProps {
  name: string;
  data: Item[];
  onClick: (name: string) => void;
}

function FilterSidebar({ name, data, onClick }: FilterSidebarProps) {
  return (
    <Filter.Container>
      <Filter.Header name={name} />
      <Filter.Input />
      <Filter.Content>
        {data.map((item) => (
          <Filter.Item key={item.name} name={item.name} onClick={onClick} />
        ))}
      </Filter.Content>
    </Filter.Container>
  );
}

export default FilterSidebar;
