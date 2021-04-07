import {Pokemon} from "./models";

export function findFirstAttacker(firstPokemon: Pokemon, secondPokemon: Pokemon): Pokemon {
    if (firstPokemon.speed >= secondPokemon.speed) {
        return firstPokemon;
    } else {
        return secondPokemon;
    }
}
