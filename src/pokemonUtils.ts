import {Pokemon} from "./models";

export async function findFirstAttacker(firstPokemon: Pokemon, secondPokemon: Pokemon): Promise<Pokemon[] | null> {

    const fighters: Pokemon[] = [firstPokemon];

    if (firstPokemon.speed >= secondPokemon.speed) {
        fighters.push(secondPokemon);
        console.log(`First attacker is ${firstPokemon.name}`);

    } else {
        fighters.pop();
        fighters.push(secondPokemon, firstPokemon);
        console.log(`First attacker is ${secondPokemon.name}`);
    }

    return fighters;

}

export async function launchFight(pokemon1: Pokemon, pokemon2: Pokemon): Promise<void> {
//TODO main loop
    while (pokemon1.hp > 0 || pokemon2.hp > 0) {
        pokemon1.fight(pokemon2);
        setTimeout(function(){}, 3000);
        pokemon2.fight(pokemon1);
    }
    if (pokemon1.hp <= 0) {
        console.log(pokemon1.name + " loose the fight !");
    } else {
        console.log(pokemon2.name + " loose the fight !")
    }


}export async function mainLoop(pokemon1: Pokemon, pokemon2: Pokemon): Promise<void> {
    const fighters = await findFirstAttacker(pokemon1,pokemon2)

    if (fighters) {
        await launchFight(fighters[0], fighters[1])
    }

}



