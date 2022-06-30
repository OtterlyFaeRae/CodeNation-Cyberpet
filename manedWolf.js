const animal = require("./animal.js")


class manedWolf extends animal.Animal {
    constructor(name, happy, sad,) {
    //manedWolf specific properties here
        super (name, happy);
        this.happy = happy;
        this.sad = sad;
        this.extraPropValue = 100
        this.extraProp = "Change your pet's water" 

    }
    //manedWolf specific methods
    fetchBall() {
        this.health += 10;
        this.hunger -= 10;
        this.thirst -= 15;

        console.log(`${this.name} would rather catch a Rabbit!`);
        return this;
    }
    chaseTail() {
        this.health += 10;
        this.hunger -= 10;
        this.thirst -= 15;
        console.log(`When ${this.name} chases his tail, they're very ${this.happy}!`);
        return this;
    }
}

module.exports = { manedWolf };