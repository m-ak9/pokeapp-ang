import {Pokemon} from "./models";
import {rejects, throws} from "assert";
import any = jasmine.any;


export async function mainLoop(pokemons: Pokemon[] | null): Promise<void> {
    if (pokemons) {
        //combat 1v1
        if (pokemons[0].hp > 0 || pokemons[1].hp > 0) {
            pokemons[0].fight(pokemons[1]);
            pokemons[1].fight(pokemons[0]);
                if (pokemonIsDead(pokemons)) {
                    return ;
                } else {
                return mainLoop(pokemons);
                }
        }
    }
    }

    export async function findFirstAttacker(pokemons: Pokemon[]): Promise<Pokemon[] | null> {
        if (pokemons[0].speed >= pokemons[1].speed) {
            console.log(`First attacker is ${pokemons[0].name}`);

        } else {

            pokemons = [pokemons[1], pokemons[0]];
            console.log(`First attacker is ${pokemons[1].name}`);
        }

        return pokemons;

    }

    export function displayPokemons(pokemons: Pokemon[]) {
        // Affiche les pokémons
        console.log(`Created Pokemon : `);
        pokemons.forEach(pokemon => {
            console.log(pokemon.toString())
        })
    }

    export function pokemonIsDead(pokemons: Pokemon[]) {
    let deadAcc: number = 0;
    pokemons.forEach(pokemon => {
        if (pokemon.hp <= 0) {
            console.log(pokemon.name + " loose the fight !");
            deadAcc += 1;
    }
        });

    if (deadAcc > 0){
        return true;
    } else {
        return false;
    }

    }




