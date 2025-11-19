import { fetchPokemonList } from "@/lib/api/pokemon";
import { POKEMON_LIMIT, POKEMON_OFFSET } from "@/lib/constants";
import TileComponent from "@/app/components/TileComponent";

export default async function PokemonGrid() {
  const data = await fetchPokemonList(POKEMON_LIMIT, POKEMON_OFFSET);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {data.results.map((pokemon) => (
        <TileComponent key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
}

