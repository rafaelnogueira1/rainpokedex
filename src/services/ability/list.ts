export interface AbilityResponse {
  count: number;
  next: string;
  previous: string;
  results: Ability[];
}

export interface Ability {
  name: string;
  url: string;
}

export const listAbilities = async (): Promise<Ability[]> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/ability`);
  const data = (await response.json()) as AbilityResponse;

  return data.results;
};
