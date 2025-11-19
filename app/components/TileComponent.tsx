import Image from "next/image";
import { IPokemon } from "@/lib/interfaces";
import { extractPokemonId, generatePokemonImageUrl } from "@/lib/utilities";

interface TileComponentProps {
  pokemon: IPokemon;
}

export default function TileComponent({ pokemon }: TileComponentProps) {
  const pokemonId = extractPokemonId(pokemon.url);
  const pokemonImageUrl = generatePokemonImageUrl(pokemonId);
  const formattedId = `#${pokemonId.padStart(3, "0")}`;

  return (
    <div className="w-full">
      <div className="bg-[#EBEBEB] rounded-lg overflow-hidden border-l-2 border-l-blue-400 border-dashed aspect-square flex items-center justify-center">
        <Image
          src={pokemonImageUrl}
          alt={pokemon.name}
          width={300}
          height={300}
          className="object-contain w-full h-full"
        />
      </div>

      <div className="flex justify-between items-center mt-2 text-white">
        <span className="capitalize text-[24px] md:text-[18px]">{pokemon.name}</span>
        <span className="text-[24px] md:text-[18px] font-bold">{formattedId}</span>
      </div>
    </div>
  );
}