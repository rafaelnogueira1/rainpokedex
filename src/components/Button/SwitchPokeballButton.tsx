import { Button } from "@/components/Button";
import { usePokeball } from "@/hooks";
import { Pokemon } from "@/services/pokemon";
import { pokemonAlreadyInPokeball } from "@/utils/pokemonAlreadyInPokeball";

interface SwitchPokeballButtonProps {
  pokemon: Pokemon;
  openPokeballText?: string;
  addToPokeballText?: string;
}

function SwitchPokeballButton({
  pokemon,
  addToPokeballText = "Save",
  openPokeballText = "Pokeball",
}: SwitchPokeballButtonProps) {
  const { pokeball } = usePokeball();

  if (pokemonAlreadyInPokeball(pokeball, pokemon.id)) {
    return <Button.OpenPokeball>{openPokeballText}</Button.OpenPokeball>;
  }

  return (
    <Button.AddToPokeball {...pokemon}>
      {addToPokeballText}
    </Button.AddToPokeball>
  );
}

export default SwitchPokeballButton;
