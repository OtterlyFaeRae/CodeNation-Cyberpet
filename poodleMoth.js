const animal = require("./animal.js");

class PoodleMoth extends animal.Animal {
    constructor() {
    //poodleMoth specific properties here
        super ();
    }
    giveName(){
        this.extraProp = `Give ${this.name} a flower.` 
    }
    //poodleMoth specific methods
    extra() {
        this.stress -= 15;
        this.hunger -= 15;
        this.thirst += 10;
        console.log(`${this.name} seems to like the flower you picked out for them!`);
        return this;
    }
}

module.exports = { PoodleMoth };