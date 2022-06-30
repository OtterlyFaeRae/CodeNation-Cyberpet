const animal = require("./animal.js");

class poodleMoth extends animal.Animal {
    constructor() {
    //poodleMoth specific properties here
        super ();
        this.extraPropValue = 100
        this.extraProp = "" 
    }
    //poodleMoth specific methods
    sniffsFlower() {
        this.health += 10;
        this.hunger += 10;
        this.thirst -= 15;
        console.log(`${this.name}, enjoyed that, and is looking ${this.happy}! I think your pet might be 'thirsty'.`);
        return this;
    }
    bumpsLight() {
        this.health -= 20;
        this.hunger -= 10;
        this.thirst -= 15;
        console.log(`When ${this.name} bumps the light, it causes ${this.name} to be ${this.sad} `);
        return this;
    }
}

module.exports = { poodleMoth };