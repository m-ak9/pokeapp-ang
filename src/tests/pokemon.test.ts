import {findFirstAttacker} from "../pokemonUtils";
import {Pokemon} from "../models";

describe('findFirstAttacker', () => {
    // Créer 2 pokémon
    let pikatchoum: Pokemon;
    let carapouce: Pokemon;

    beforeEach(() => {
        pikatchoum = new Pokemon({
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

        carapouce = new Pokemon({
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


    it('should_return_carapouce_at_first_index', async() => {
        expect(await findFirstAttacker([pikatchoum, carapouce])).toEqual([carapouce,pikatchoum]);
    });

    it('should_return_pikatchoum_at_first_index', async() => {
        pikatchoum.speed = 300;
        expect(await findFirstAttacker([pikatchoum, carapouce])).toEqual([pikatchoum,carapouce]);
    });

});

