export interface TypesResponse {
  count: number;
  next: string;
  previous: string;
  results: Types[];
}

export interface Types {
  name: string;
  url: string;
}

export const listTypes = async (): Promise<Types[]> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/type`);
  const data = (await response.json()) as TypesResponse;

  return data.results;
};
