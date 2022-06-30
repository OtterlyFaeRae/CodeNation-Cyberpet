const animal = require("./animal.js")


class PandaAnt extends animal.Animal {
    constructor() {
        super ();
    }
    // 
    giveName(){
        this.extraProp = `Give ${this.name} their marbles to play with.` 
    }
    extra() {
        console.log(`${this.name} is having fun pushing their marbles around.`);
        this.stress -= 30;
        this.hunger += 5;
        this.thirst += 5;
        return this;
    }
}

module.exports = { PandaAnt };