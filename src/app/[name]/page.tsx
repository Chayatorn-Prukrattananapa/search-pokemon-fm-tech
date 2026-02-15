"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@apollo/client/react";
import { GET_POKEMON } from "@/lib/query";
import { Pokemon, PokemonVariables } from "@/types/PokemonData";
import PokemonCard from "@/components/PokemonCard";
import Link from "next/link";

export default function Page() {
  const params = useParams();
  const name = params.name as string;

  const { data, loading } = useQuery<Pokemon, PokemonVariables>(GET_POKEMON, {
    variables: { name },
    skip: !name,
  });

  return (
    <div className="p-4">
        <div className="flex justify-end items-center mb-4">
            <Link href="/" className="text-white hover:underline mb-4 inline-block p-2 border border-blue-500 rounded bg-blue-600">Back to Search</Link>
        </div>
        {loading && <p>Loading...</p>}
        {!loading && !data?.pokemon && <p>Pokemon not found</p>}
        {data?.pokemon && <PokemonCard pokemon={data?.pokemon} />}
    </div>
);
}