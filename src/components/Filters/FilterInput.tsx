function FilterInput() {
  return (
    <div>
      <input
        type="text"
        name="filter"
        className="w-full h-[30px] p-3 rounded-3xl border border-solid border-gray-200"
        placeholder="Filter by name"
      />
    </div>
  );
}

export default FilterInput;
