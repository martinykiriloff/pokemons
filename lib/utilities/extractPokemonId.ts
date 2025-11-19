/**
 * Extracts the ID from the URL of the pokemon
 * @param url - The URL of the pokemon
 * @returns The ID of the pokemon
 */
export function extractPokemonId(url: string): string {
  const matches = url.match(/\/pokemon\/(\d+)\//);
  return matches ? matches[1] : "0";
}
