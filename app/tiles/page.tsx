import { Suspense } from "react";
import { fetchPokemonList } from "@/lib/api/pokemon";
import { POKEMON_LIMIT, POKEMON_OFFSET } from "@/lib/constants";
import TileComponent from "@/app/components/TileComponent";
import Loading from "../components/Loading";
import './style.css'

async function PokemonGrid() {
  const data = await fetchPokemonList(POKEMON_LIMIT, POKEMON_OFFSET);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {data.results.map((pokemon) => (
        <TileComponent key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default async function TilesPage() {
  return (
    <div className="p-8 pokemon-tiles pl-10">
      <div className="flex-row items-center mb-10">
        <h1 className="text-[36px] font-bold mb-2 pokemon-tiles-title">
          First 8 entries
        </h1>
        <p className="text-[18px] pokemon-tiles-description">
          Explore the original creatures that started the journey
        </p>
      </div>
      <Suspense fallback={<Loading />}>
        <PokemonGrid />
      </Suspense>
    </div>
  );
}