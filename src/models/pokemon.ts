import {EOL} from "os";

export interface IPokemon {
    name: string;
    hp: number;
    attack: number;
    defense?: number;
    speed?: number;
    weight: number;

}

export class Pokemon {
    name: string;
    hp: number;
    weight: number;
    attack: number;
    defense: number;
    speed: number;

    constructor(props: IPokemon) {
        this.name = props.name;
        this.hp = props.hp;
        this.attack = props.attack;
        this.weight = props.weight;
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
