export function extractPokemonId(url: string): string | null {
  const matches = url.match(/\/pokemon\/(\d+)\//);
  return matches ? matches[1] : null;
}
