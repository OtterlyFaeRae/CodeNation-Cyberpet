const animal = require("./animal.js")

class Chimpanzee extends animal.Animal {
    constructor() {
    //Chimpanzee specific properties here
        super ();
        
    }
    //Chimpanzee specific methods
    giveName(){
        this.extraProp = `Let ${this.name} go climbing.` 
    }
    extra() {
        console.log(`${this.name} thinks they're tarzan!`)
        this.stress -= 30;
        this.hunger += 10;
        return this;
    }
}

module.exports = { Chimpanzee }