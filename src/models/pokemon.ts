import {EOL} from "os";
export interface IPokemon {
    name: string;
    hp: number;
    attack: number;
    defense?: number;
    speed?: number;
    weight: number;
    moves: Moves[];
}

export class Pokemon {
    name: string;
    hp: number;
    weight: number;
    attack: number;
    defense: number;
    speed: number;
    moves: Moves[];

    constructor(props: IPokemon) {
        this.name = props.name;
        this.hp = props.hp;
        this.attack = props.attack;
        this.weight = props.weight;
        this.moves = props.moves;
        this.defense = this.calculateDefense();
        this.speed = this.calculateSpeed();
    }

    // Calcule les stats du pokemon
    private calculateSpeed(): number {
        return Math.floor((this.weight * 4) / 1.618);
    }

    private calculateDefense(): number {
        return Math.floor(this.hp * 0.1618);
    }

    // Méthode publique

     async fight(adversary: Pokemon): Promise<void> {
         let PokemonMove;
         let damage;

         PokemonMove = this.moves[Math.floor(Math.random() * this.moves.length)];
         console.log(`${this.name} attack with ${PokemonMove.name}.`);
         if (PokemonMove.special) {
             damage = Math.floor(this.attack * 1.6);
             console.log(`${adversary.name} loose ${damage} hp.`);
             adversary.hp -= damage;
         } else {
             damage = Math.floor(this.attack);
             console.log(`${adversary.name} loose ${damage} hp.`);
             adversary.hp -= damage;
         };
     }

    toString(): string {
        return `\t-----${this.name.toUpperCase()}-----
        hp: ${this.hp}
        weight: ${this.weight}
        attack: ${this.attack}
        defense: ${this.defense}
        speed: ${this.speed}
        ${EOL}`
    }
}

export interface IMoves {
    name: string;
    special: boolean;
}

export class Moves{
    name: string;
    special: boolean;

    constructor(props: IMoves) {
        this.name = props.name;
        this.special = props.special;
    }
}

export default Pokemon;
