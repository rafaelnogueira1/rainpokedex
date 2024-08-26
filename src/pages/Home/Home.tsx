import { useAsyncFunction } from "@hooks/useFetchData";
import { pokemons } from "@/services";
import { Header } from "@components/Header";
import { ListCards } from "@components/ListCards";
import { Sidebar } from "@components/Sidebar";

function Home() {
  const { data, isLoading, hasError } = useAsyncFunction(pokemons.listPokemons);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error</div>;
  }

  if (data) {
    return (
      <>
        <Header />
        <main className="max-w-[1200px] mx-auto flex justify-between p-4 gap-8">
          <ListCards.Container>
            {data.map((pokemon) => (
              <ListCards.Card key={pokemon.id} {...pokemon} />
            ))}
          </ListCards.Container>
          <Sidebar />
        </main>
      </>
    );
  }
}

export default Home;
