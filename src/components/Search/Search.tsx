import { createRef, SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const inputRef = createRef<HTMLInputElement>();
  const navigate = useNavigate();

  const handleSearch = (e: SyntheticEvent) => {
    e.preventDefault();

    if (inputRef.current?.value) {
      navigate(`/details/${inputRef.current.value}`);
    }
  };

  return (
    <div>
      <form className="relative">
        <input
          type="text"
          name="search"
          placeholder="Search for pokemons"
          className="w-full h-[60px] p-3 pr-16 rounded-full border border-solid border-gray-200"
          ref={inputRef}
          onChange={() => inputRef.current?.value}
        />
        <button
          type="submit"
          name="bt-search"
          className="text-md bg-blue-700 text-white p-2 rounded-full absolute right-[10px] top-[10px]"
          onClick={handleSearch}
        >
          OK
        </button>
      </form>
    </div>
  );
}

export default Search;
