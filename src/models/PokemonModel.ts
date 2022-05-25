export type PokemonData = {
  count: number;
  next: string;
  previous: string | null;
  results: Pokemon[];
}

export type Pokemon = {
  name: string;
  url: string;
}
