export interface GenderResponse {
  count: number;
  next: string;
  previous: string;
  results: Gender[];
}

export interface Gender {
  name: string;
  url: string;
}

export const listGender = async (): Promise<Gender[]> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/gender`);
  const data = (await response.json()) as GenderResponse;

  return data.results;
};
