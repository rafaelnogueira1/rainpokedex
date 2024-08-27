// import { useAsyncFunction } from "@hooks/useFetchData";
// import { pokemons } from "@/services";
import { Header } from "@components/Header";
import { ListCards } from "@components/ListCards";
import { Sidebar } from "@components/Sidebar";
import { usePokeball, usePokemon } from "@/hooks";
import { Link } from "react-router-dom";

function Home() {
  const { pokemonsList: data } = usePokemon();
  const { addToPokeball } = usePokeball();
  // const {
  //   data: p,
  //   isLoading,
  //   hasError,
  // } = useAsyncFunction(pokemons.listPokemons);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (hasError) {
  //   return <div>Error</div>;
  // }

  if (data) {
    return (
      <>
        <Header />
        <main className="max-w-[1200px] mx-auto flex justify-between p-4 gap-8">
          <ListCards.Container>
            {data.map((pokemon) => (
              <ListCards.Card key={pokemon.id}>
                <ListCards.Image {...pokemon} />
                <ListCards.Description {...pokemon} />
                <div className="flex gap-2">
                  <Link
                    to={`/details/${pokemon.id}`}
                    className="text-blue-800 underline bg-white hover:text-blue-500 hover:bg-blue-100 hover:no-underline focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-6"
                  >
                    Details
                  </Link>
                  <button
                    type="button"
                    name="add-to-pokeball"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-6"
                    onClick={() =>
                      addToPokeball({
                        id: pokemon.id,
                        name: pokemon.name,
                      })
                    }
                  >
                    Save
                  </button>
                </div>
              </ListCards.Card>
            ))}
          </ListCards.Container>
          <Sidebar />
        </main>
      </>
    );
  }
}

export default Home;
