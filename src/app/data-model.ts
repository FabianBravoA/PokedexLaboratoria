export class PokemonMaster{
    name = "";
    gym = "";
    pokemons : Pokemon[] = [];
}

export class Pokemon{
    id = 0;
    name = "";
    type = "";
}

export const pokemonMasters:PokemonMaster[] = [
    {
        name:"Lita",
        gym:"La Granja",
        pokemons:[
            {
                id : 54,
                name:"Psyduck",
                type:"water"
            }
        ]
    },
    {
        name:"Paula",
        gym:"La Farfana",
        pokemons:[
            {
                id : 7,
                name: "Squirtle",
                type:"water"
            }
        ]
    }
];
