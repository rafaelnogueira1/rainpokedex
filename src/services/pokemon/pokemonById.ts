export interface PokemonResponse {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Abilities[];
  location_area_encounters: string;
  moves: Moves[];
  species: Species;
  stats: Stats[];
  types: Types[];
}

export interface Abilities {
  is_hidden: boolean;
  slot: number;
  ability: Ability;
}

export interface Ability {
  name: string;
  url: string;
}

export interface Moves {
  move: Move;
  version_group_details: VersionGroupDetail[];
}

export interface Move {
  name: string;
  url: string;
}

export interface VersionGroupDetail {
  level_learned_at: number;
  version_group: VersionGroup;
  move_learn_method: MoveLearnMethod;
}

export interface VersionGroup {
  name: string;
  url: string;
}

export interface MoveLearnMethod {
  name: string;
  url: string;
}

export interface Species {
  name: string;
  url: string;
}

export interface Stats {
  base_stat: number;
  effort: number;
  stat: Stat;
}

export interface Stat {
  name: string;
  url: string;
}

export interface Types {
  slot: number;
  type: Type;
}

export interface Type {
  name: string;
  url: string;
}

export const pokemonById = async (id: string): Promise<PokemonResponse> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/pokemon/${id}`);
  const data = (await response.json()) as PokemonResponse;

  return data;
};
