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

        pokemon2 = new Pokemon({
            name: "Carapouce",
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
    });

    it('should_return_carapouce', () => {
        expect(findFirstAttacker(pokemon1, pokemon2)).toBe(pokemon2);
    });

});

