import { Filter } from "@components/Filters";
import { Search } from "@components/Search";

function Sidebar() {
  return (
    <aside className="flex flex-col gap-4 w-1/4">
      <Search />
      <div className="flex flex-col gap-4 p-4 border border-solid border-gray-200 rounded-3xl">
        <Filter.Container>
          <Filter.Header name="Filter by type" />
          <Filter.Input />
          <Filter.Content>
            <Filter.Item name="Normal" />
            <Filter.Item name="Fire" />
            <Filter.Item name="Water" />
            <Filter.Item name="Grass" />
            <Filter.Item name="Electric" />
            <Filter.Item name="Ice" />
            <Filter.Item name="Fighting" />
            <Filter.Item name="Poison" />
            <Filter.Item name="Ground" />
          </Filter.Content>
        </Filter.Container>
        <Filter.Container>
          <Filter.Header name="Filter by ability" />
          <Filter.Content>
            <Filter.Item name="Normal" />
          </Filter.Content>
        </Filter.Container>
        <Filter.Container>
          <Filter.Header name="Filter by moves" />
          <Filter.Content>
            <Filter.Item name="Normal" />
          </Filter.Content>
        </Filter.Container>
        <Filter.Container>
          <Filter.Header name="Filter by location" />
          <Filter.Content>
            <Filter.Item name="Normal" />
          </Filter.Content>
        </Filter.Container>
      </div>
    </aside>
  );
}

export default Sidebar;
