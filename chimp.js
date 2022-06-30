const animal = require("./animal.js")

class Chimpanzee extends animal.Animal {
    constructor() {
    //Chimpanzee specific properties here
        super ();
        
    }
    //Chimpanzee specific methods
    giveName(){
        this.extraProp = `Let ${this.name} go climbing` 
    }
    swings() {
        this.health += 10;
        this.hunger -= 10;
        console.log(`${this.name} thinks he's tarzan!`);
        return this;
    }
    throwPoo() {
        console.log(`When ${this.name} is throwing poo, at tourists, they are very ${this.happy}`);
        this.health += 10;
        return this;
    }
}

module.exports = { Chimpanzee }