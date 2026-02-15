import { gql } from "@apollo/client";
const GET_POKEMON = gql`
    query pokemon($name: String){
        pokemon(name: $name) {
            id
            number
            name
            weight{
                minimum
                maximum
            }
            height{
                minimum
                maximum
            }
            classification
            types
            resistant
            weaknesses
            fleeRate
            attacks {
                fast {
                    name
                    type
                    damage
                }
                special {
                    name
                    type
                    damage
                }
            }
            maxCP
            maxHP
            image
            evolutions {
                id
                number
                name
            }
            evolutionRequirements {
                amount
                name
            }
        }    
}`;

export { GET_POKEMON };