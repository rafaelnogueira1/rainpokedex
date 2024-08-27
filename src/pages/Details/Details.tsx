import { useParams } from "react-router-dom";

import { Header } from "@components/Header";
import { Characteristics } from "@components/Characteristics";
import { PokemonBio } from "@components/PokemonBio";
import { Search } from "@components/Search";
import { useAsyncFunction } from "@hooks/useFetchData";
import { pokemon } from "@/services";
import { usePokeball } from "@/hooks";

function Details() {
  const { id } = useParams() as { id: string };
  const { addToPokeball } = usePokeball();

  const { data, isLoading, hasError } = useAsyncFunction(pokemon.pokemonById, [
    id,
  ]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error</div>;
  }

  if (data) {
    const {
      id,
      name,
      order,
      base_experience,
      species,
      height,
      weight,
      types,
      abilities,
      stats,
    } = data;

    return (
      <>
        <Header />
        <main className="max-w-[1200px] mx-auto flex flex-col p-4 gap-8">
          <Search />
          <div className="w-full flex gap-8 justify-between">
            <div>
              <span className="font-bold text-sm text-gray-500">№ {id}</span>
              <h2 className="font-secondary text-3xl text-gray-800 uppercase">
                {name}
              </h2>
              <PokemonBio.Container>
                <PokemonBio.Item>
                  <strong>Order:</strong> {order}
                </PokemonBio.Item>
                <PokemonBio.Item>
                  <strong>Species:</strong>{" "}
                  <span className="capitalize">{species?.name}</span>
                </PokemonBio.Item>
                <PokemonBio.Item>
                  <strong>Height:</strong> {height}
                </PokemonBio.Item>
                <PokemonBio.Item>
                  <strong>Weight:</strong> {weight}
                </PokemonBio.Item>
                <PokemonBio.Item>
                  <strong>Experience:</strong> {base_experience}
                </PokemonBio.Item>
              </PokemonBio.Container>
              <button
                type="button"
                name="add-to-pokeball"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-6"
                onClick={() =>
                  addToPokeball({
                    id,
                    name,
                  })
                }
              >
                Save to my pokeball
              </button>
            </div>
            <div>
              <img
                src={`/assets/images/pokemon/${id}.png`}
                alt="charmander"
                width={500}
                height={500}
              />
            </div>
            <div className="flex flex-col gap-10">
              <Characteristics.Container>
                <Characteristics.Title>Type</Characteristics.Title>
                <Characteristics.Content>
                  {types?.map((type) => (
                    <p
                      key={type.type.name}
                      className="py-1 px-4 text-gray-900 rounded-lg bg-gray-100 border border-solid border-gray-200 capitalize"
                    >
                      {type.type.name}
                    </p>
                  ))}
                </Characteristics.Content>
              </Characteristics.Container>

              <Characteristics.Container>
                <Characteristics.Title>Abilities</Characteristics.Title>
                <Characteristics.Content>
                  {abilities?.map((ability) => (
                    <p
                      key={ability.ability.name}
                      className="py-1 px-4 text-gray-900 rounded-lg bg-gray-100 border border-solid border-gray-200 capitalize"
                    >
                      {ability.ability.name}
                    </p>
                  ))}
                </Characteristics.Content>
              </Characteristics.Container>

              <Characteristics.Container>
                <Characteristics.Title>Stats</Characteristics.Title>
                <ul>
                  {stats?.map((stat) => (
                    <li key={stat.stat.name} className="text-md">
                      <span className="uppercase">{stat.stat.name}:</span>{" "}
                      {stat.base_stat}
                    </li>
                  ))}
                </ul>
              </Characteristics.Container>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Details;
