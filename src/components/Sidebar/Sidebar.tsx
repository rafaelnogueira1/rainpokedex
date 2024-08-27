import { useAsyncFunction } from "@hooks/useFetchData";
import { Search } from "@components/Search";
import { ability, gender, type } from "@/services";
import FilterSidebar from "./FilterSidebar";
import { usePokemon } from "@/hooks";

function Sidebar() {
  const { data: types } = useAsyncFunction(type.listTypes);
  const { data: abilities } = useAsyncFunction(ability.listAbilities);
  const { data: genders } = useAsyncFunction(gender.listGender);

  const { onSelectType, onSelectAbility, onSelectGender } = usePokemon();

  if (types && abilities && genders) {
    return (
      <aside className="flex flex-col gap-4 w-1/4">
        <Search />
        <div className="flex flex-col gap-4 p-4 border border-solid border-gray-200 rounded-3xl">
          <FilterSidebar
            name="Filter by type"
            data={types}
            onClick={onSelectType}
          />
          <FilterSidebar
            name="Filter by ability"
            data={abilities}
            onClick={onSelectAbility}
          />
          <FilterSidebar
            name="Filter by gender"
            data={genders}
            onClick={onSelectGender}
          />

          {/* <Filter.Container>
            <Filter.Header name="Filter by type" />
            <Filter.Input />
            <Filter.Content>
              {types.map((type) => (
                <Filter.Item
                  key={type.name}
                  name={type.name}
                  onClick={onSelectType}
                />
              ))}
            </Filter.Content>
          </Filter.Container>
          <Filter.Container>
            <Filter.Header name="Filter by ability" />
            <Filter.Content>
              {abilities.map((ability) => (
                <Filter.Item
                  key={ability.name}
                  name={ability.name}
                  onClick={onSelectAbility}
                />
              ))}
            </Filter.Content>
          </Filter.Container>
          <Filter.Container>
            <Filter.Header name="Filter by gender" />
            <Filter.Content>
              {genders.map((gender) => (
                <Filter.Item
                  key={gender.name}
                  name={gender.name}
                  onClick={onSelectGender}
                />
              ))}
            </Filter.Content>
          </Filter.Container> */}
        </div>
      </aside>
    );
  }
}

export default Sidebar;
