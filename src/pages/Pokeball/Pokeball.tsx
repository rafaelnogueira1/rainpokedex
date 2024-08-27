import { ListCards } from "@/components/ListCards";
import { useToast } from "@/components/ui/use-toast";
import { usePokeball } from "@/hooks";

function Pokeball() {
  const { removeFromPokeball, pokeball } = usePokeball();
  const { toast } = useToast();

  return (
    <main className="max-w-[1200px] mx-auto flex flex-col justify-between p-4 gap-8">
      <h2 className="font-secondary text-2xl text-gray-800 uppercase">
        Pokeball
      </h2>
      <ListCards.Container>
        {pokeball.map((pokemon) => (
          <ListCards.Card key={pokemon.id}>
            <ListCards.Image {...pokemon} />
            <ListCards.Description {...pokemon} />
            <button
              type="button"
              name="add-to-pokeball"
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-6"
              onClick={() => {
                removeFromPokeball(pokemon.id);
                toast({
                  title: `${pokemon.name}`,
                  description: "went off to its own way.",
                  variant: "success",
                });
              }}
            >
              Remove
            </button>
          </ListCards.Card>
        ))}
      </ListCards.Container>
    </main>
  );
}

export default Pokeball;
