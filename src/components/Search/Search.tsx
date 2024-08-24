function Search() {
  return (
    <div className="relative">
      <input
        type="text"
        name="search"
        placeholder="Search for pokemons"
        className="w-full h-[60px] p-3 pr-16 rounded-full border border-solid border-gray-200"
      />
      <button
        type="submit"
        name="bt-search"
        className="text-md bg-blue-700 text-white p-2 rounded-full absolute right-[10px] top-[10px]"
      >
        OK
      </button>
    </div>
  );
}

export default Search;
