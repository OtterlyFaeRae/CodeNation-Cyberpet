const animal = require("./animal.js")


class pandaAnt extends animal.Animal {
    constructor(name, happy, sad,) {
    //pandaAnt specific properties here
        super (name, happy);
        this.happy = happy;
        this.sad = sad;

    }
    //pandaAnt specific methods
    burrows() {
        this.health += 10;
        this.hunger -= 10;
        this.thirst -= 10;
        console.log(`${this.name} loves to get down and dirty! `);
        return this;
    }
    rollsMarble() {
        this.health += 10;
        this.hunger -+ 10;
        this.thirst -= 10;
        onsole.log(`${this.name} is ${this.happy} when playing with there marbles.`);
        return this;
    }
}

module.exports = { pandaAnt };