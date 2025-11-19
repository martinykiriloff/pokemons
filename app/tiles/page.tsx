import { Suspense } from "react";
import PokemonGrid from "./PokemonGrid";
import Loading from "../components/Loading";
import './style.css'

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