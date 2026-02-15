export interface PokemonData {
    id: string;
    number: string;
    name: string;
    weight: {
        minimum: string;
        maximum: string;
    };
    height: {
        minimum: string;
        maximum: string;
    };
    classification: string;
    types: string[];
    resistant: string[];
    weaknesses: string[];
    fleeRate: number;
    maxCP: number;
    maxHP: number;
    image: string;
    attacks: {
        fast: {
            name: string;
            type: string;
            damage: number;
        }[];
        special: {
            name: string;
            type: string;
            damage: number;
        }[];
    };
    evolutions?: {
        id: string;
        number: string;
        name: string;
    }[];
    evolutionRequirements?: {
        amount: number;
        name: string;
    };
}

export interface Pokemon {
    pokemon: PokemonData;
}

export interface PokemonVariables {
    name? : string;
}