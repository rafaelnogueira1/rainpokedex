import { Header } from "@components/Header";
import { Characteristics } from "@components/Characteristics";
import { PokemonBio } from "@components/PokemonBio";
import { Search } from "@/components/Search";

const p = await fetch("https://pokeapi.co/api/v2/pokemon/6");
const POKEMON = await p.json();

function Details() {
  return (
    <>
      <Header />
      <main className="max-w-[1200px] mx-auto flex flex-col p-4 gap-8">
        <Search />
        <div className="w-full flex gap-8 justify-between">
          <div>
            <span className="font-bold text-sm text-gray-500">
              № {POKEMON.id}
            </span>
            <h2 className="font-secondary text-3xl text-gray-800 uppercase">
              Charmander
            </h2>
            <PokemonBio.Container>
              <PokemonBio.Item>
                <strong>Order:</strong> {POKEMON.order}
              </PokemonBio.Item>
              <PokemonBio.Item>
                <strong>Species:</strong>{" "}
                <span className="capitalize">{POKEMON.species.name}</span>
              </PokemonBio.Item>
              <PokemonBio.Item>
                <strong>Height:</strong> {POKEMON.height}
              </PokemonBio.Item>
              <PokemonBio.Item>
                <strong>Weight:</strong> {POKEMON.weight}
              </PokemonBio.Item>
              <PokemonBio.Item>
                <strong>Experience:</strong> {POKEMON.base_experience}
              </PokemonBio.Item>
            </PokemonBio.Container>
            <button
              type="button"
              name="add-to-pokeball"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-6"
            >
              Save to my pokeball
            </button>
          </div>
          <div>
            <img
              src={`assets/images/pokemon/${POKEMON.id}.png`}
              alt="charmander"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col gap-10">
            <Characteristics.Container>
              <Characteristics.Title>Type</Characteristics.Title>
              <Characteristics.Content>
                {POKEMON.types.map((type) => (
                  <p
                    key="{type.type.name}"
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
                {POKEMON.abilities.map((ability) => (
                  <p
                    key="{ability.ability.name}"
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
                {POKEMON.stats.map((stat) => (
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

export default Details;
