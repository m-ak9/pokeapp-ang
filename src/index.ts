import {Pokemon} from "./models";
import {findFirstAttacker} from "./pokemonUtils";

// Créer 2 pokémon
const pokemon1 = new Pokemon({
    name: "Pikatchoum",
    hp: 150,
    weight: 60,
    attack: 34
});
const pokemon2 = new Pokemon({
    name: "Carapouce",
    hp: 144,
    weight: 80,
    attack: 34
});

// Affiche les pokémons
console.log(`Created Pokemon : `);
console.log(pokemon1.toString());
console.log(pokemon2.toString());


const firstPokemonToAttack = findFirstAttacker(pokemon1, pokemon2);
console.log(`If they decide to fight, the first attacker will be : ${firstPokemonToAttack.name}`)

