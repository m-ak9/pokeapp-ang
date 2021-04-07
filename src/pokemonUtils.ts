import {Pokemon} from "./models";
import {EOL} from "os";

export function findFirstAttacker(firstPokemon: Pokemon, secondPokemon: Pokemon): Pokemon {
    if (firstPokemon.speed >= secondPokemon.speed) {
        console.log(`First attacker is ${firstPokemon.name}`)
        return firstPokemon;
    } else {
        console.log(`First attacker is ${secondPokemon.name}`)
        return secondPokemon;
    }
}

export function launchFight(aPokemon: Pokemon, bPokemon: Pokemon) {
//TODO main loop
    aPokemon.fight(bPokemon);
    bPokemon.fight(aPokemon);

    //Affiche l'états des Pokemon
    console.log(`-----RECAP-----`)
    console.log(aPokemon.toString());
    console.log(bPokemon.toString());



}
