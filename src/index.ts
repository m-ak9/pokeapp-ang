class Pokemon {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

}

// affiche la variable name de l'objet Pokemon
let test = new Pokemon("yo");
console.log(test.name)
