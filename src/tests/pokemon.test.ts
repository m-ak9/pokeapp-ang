import {findFirstAttacker} from "../pokemonUtils";
import {Pokemon} from "../models";

describe('findFirstAttacker', () => {
    // Créer 2 pokémon
    let pokemon1: Pokemon;

    let pokemon2: Pokemon;

    beforeEach(() => {
        pokemon1 = new Pokemon({
            name: "Pikatchoum",
            hp: 150,
            weight: 60,
            attack: 34
        });
        pokemon2 = new Pokemon( {
            name: "Carapouce",
            hp: 144,
            weight: 80,
            attack: 34
        });
    });

    it('should_return_carapouce', () => {
        expect(findFirstAttacker(pokemon1,pokemon2)).toBe(pokemon2);
    });

});

