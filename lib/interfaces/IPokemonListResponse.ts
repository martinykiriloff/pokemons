import { IPokemon } from "./IPokemon";

export interface IPokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemon[];
}