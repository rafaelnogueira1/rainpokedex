import { useAsyncFunction } from "@/hooks/useFetchData";
import { Search } from "@/components/Search";
import { ability, gender, type } from "@/services";
import FilterSidebar from "./FilterSidebar";
import { usePokemon } from "@/hooks";

function Sidebar() {
  const { data: types } = useAsyncFunction(type.listTypes);
  const { data: abilities } = useAsyncFunction(ability.listAbilities);
  const { data: genders } = useAsyncFunction(gender.listGender);

  const { onSelectType, onSelectAbility, onSelectGender } = usePokemon();

  return (
    <aside className="flex flex-col gap-4 mt-6 md:mt-0 md:w-[300px] lg:w-[350px]">
      <Search />
      <div className="flex flex-col gap-4 p-4 border border-solid border-gray-200 rounded-3xl">
        {types && (
          <FilterSidebar
            name="Filter by type"
            data={types}
            onClick={onSelectType}
          />
        )}
        {abilities && (
          <FilterSidebar
            name="Filter by ability"
            data={abilities}
            onClick={onSelectAbility}
          />
        )}
        {genders && (
          <FilterSidebar
            name="Filter by gender"
            data={genders}
            onClick={onSelectGender}
          />
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
