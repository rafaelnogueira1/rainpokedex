import { useParams } from "react-router-dom";

import { Characteristics } from "@/components/Characteristics";
import { PokemonBio } from "@/components/PokemonBio";
import { Search } from "@/components/Search";
import { useAsyncFunction } from "@/hooks/useFetchData";
import { pokemon } from "@/services";
import { Button } from "@/components/Button";
import { NotFound } from "@/components/NotFound";
import { Loading } from "@/components/Loading";
import { Progress } from "@/components/ui/progress";

const progressColors: { [key: number]: string } = {
  1: "bg-progress-1",
  2: "bg-progress-2",
  3: "bg-progress-3",
  4: "bg-progress-4",
  5: "bg-progress-5",
  6: "bg-progress-6",
};

function Details() {
  const { id } = useParams() as { id: string };

  const { data, isLoading, hasError } = useAsyncFunction(pokemon.pokemonById, [
    id,
  ]);

  if (isLoading) {
    return <Loading />;
  }

  if (hasError) {
    return <NotFound />;
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
      <main className="max-w-[1200px] mx-auto flex flex-col p-4 gap-8">
        <Search />
        <div className="w-full flex flex-col md:flex-row gap-8 justify-between">
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
            <Button.SwitchPokeballButton
              pokemon={{ id, name }}
              addToPokeballText="Save to pokeball"
              openPokeballText="See pokeball"
            />
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
              <ul className="flex flex-col gap-3">
                {stats?.map((stat, index) => (
                  <li key={stat.stat.name} className="text-md text-gray-800">
                    <strong className="uppercase">{stat.stat.name}:</strong>{" "}
                    {stat.base_stat}
                    <Progress
                      value={stat.base_stat}
                      indicatorColor={progressColors[index + 1]}
                      className="bg-gray-200"
                    />
                  </li>
                ))}
              </ul>
            </Characteristics.Container>
          </div>
        </div>
      </main>
    );
  }
}

export default Details;
