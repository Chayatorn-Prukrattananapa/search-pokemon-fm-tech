"use client";
import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client/react";
import { GET_POKEMON } from "@/lib/query";
import { Pokemon, PokemonVariables } from "@/types/PokemonData";
import SearchBar from "./SearchBar";
import PokemonCard from "./PokemonCard";


export default function PokemonSearch() {
    const [name, setName] = useState("");
    const [SearchPokemon, { called, loading, data }] = useLazyQuery<Pokemon, PokemonVariables>(GET_POKEMON);
    const Search = () => {
        SearchPokemon({ variables: { name } });
    };
    return (
        <div>
            <SearchBar name={name} setName={setName} onSearch={Search} />
            {called && loading && <p>Loading...</p>}
            {data && data.pokemon && (
                <PokemonCard pokemon={data.pokemon} />
            )}
            {called && !loading && !data?.pokemon && <h1 className="justify-self-center text-xl font-bold text-gray-800 dark:text-white mb-4">Not Found.</h1>}
        </div>
    );
}