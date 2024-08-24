import { Header } from "@components/Header";
import { ListCards } from "@components/ListCards";
import { Sidebar } from "@components/Sidebar";

const POKEMONS = [
  {
    id: 25,
    name: "Pikachu",
  },
  {
    id: 4,
    name: "Charmander",
  },
  {
    id: 1,
    name: "Bulbasaur",
  },
  {
    id: 7,
    name: "Squirtle",
  },
  {
    id: 10,
    name: "Pikachu",
  },
  {
    id: 50,
    name: "Charmander",
  },
  {
    id: 15,
    name: "Bulbasaur",
  },
  {
    id: 17,
    name: "Squirtle",
  },
];

function Home() {
  return (
    <>
      <Header />
      <main className="max-w-[1200px] mx-auto flex justify-between p-4 gap-8">
        <ListCards.Container>
          {POKEMONS.map((pokemon) => (
            <ListCards.Card key={pokemon.id} {...pokemon} />
          ))}
        </ListCards.Container>
        <Sidebar />
      </main>
    </>
  );
}

export default Home;
