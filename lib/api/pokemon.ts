import { IPokemonListResponse } from "@/lib/interfaces";

export async function fetchPokemonList(
  limit: number = 8,
  offset: number = 0
): Promise<IPokemonListResponse> {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
      {
        next: { revalidate: 3600 },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch pokemon list: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Unknown error occurred while fetching pokemon list");
  }
}

