function PokemonBioContainer({ children }: { children: React.ReactNode }) {
  return <ul className="list-none p-0 flex flex-col gap-2 mt-4">{children}</ul>;
}

export default PokemonBioContainer;
