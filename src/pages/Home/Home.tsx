import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/Button";
import { ListCards } from "@/components/ListCards";
import { Sidebar } from "@/components/Sidebar";
import { Pagination } from "@/components/Pagination";
import { usePokemon } from "@/hooks";

function Home() {
  const { pokemonsList: data, getPokemons } = usePokemon();

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  if (data?.pokemons) {
    return (
      <main className="lg:max-w-[1200px] mx-auto md:flex justify-between p-4 gap-8">
        <div className="xl:w-[800px] lg:w-[600px] md:w-[400px]">
          {!data?.pokemons.length ? (
            <div className="w-full text-center mt-10">No pokemons found</div>
          ) : (
            <>
              <ListCards.Container>
                {data.pokemons.map((pokemon) => (
                  <ListCards.Card key={pokemon.id}>
                    <ListCards.Image {...pokemon} />
                    <ListCards.Description {...pokemon} />
                    <div className="flex flex-col md:flex-row items-center gap-2">
                      <Link
                        to={`/details/${pokemon.id}`}
                        className="text-blue-800 underline bg-white hover:text-blue-500 hover:bg-blue-100 hover:no-underline focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mt-6"
                      >
                        Details
                      </Link>
                      <Button.SwitchPokeballButton pokemon={pokemon} />
                    </div>
                  </ListCards.Card>
                ))}
              </ListCards.Container>
              {data.count > 0 && (
                <Pagination count={data.count} onChange={getPokemons} />
              )}
            </>
          )}
        </div>
        <Sidebar />
      </main>
    );
  }
}

export default Home;
