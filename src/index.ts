import {Pokemon} from "./models";
import {findFirstAttacker, launchFight, mainLoop} from "./pokemonUtils";

// Créer 2 pokémon
const pokemon1 = new Pokemon({name: "Pikatchoum",
    hp: 150,
    weight: 60,
    attack: 34,
    moves: [
        {
            name: "mega-punch",
            special: false
        }, {
            name: "thunder-punch",
            special: true
        }, {
            name: "lightning-stroke",
            special: false
        }, {
            name: "pika-pikachu",
            special: true
        }
    ]
});
const pokemon2 = new Pokemon({name: "Carapouce",
    hp: 144,
    weight: 80,
    attack: 34,
    moves: [
        {
            name: "surf",
            special: true
        }, {
            name: "mega-flood",
            special: false
        }, {
            name: "cara-cara",
            special: false
        }, {
            name: "smurfer-attack",
            special: true
        }
    ]
});
// Affiche les pokémons
console.log(`Created Pokemon : `);
console.log(pokemon1.toString());
console.log(pokemon2.toString());

mainLoop(pokemon1,pokemon2);








