/**
 * Generates the image URL for a pokemon
 * @param id - The ID of the pokemon
 * @returns The image URL for the pokemon
 */
export function generatePokemonImageUrl(id: string): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}