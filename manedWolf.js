const animal = require("./animal.js")


class ManedWolf extends animal.Animal {
    constructor(name, happy, sad,) {
    //manedWolf specific properties here
        super (name, happy);
        this.happy = happy;
        this.sad = sad;
        this.extraPropValue = 100
        this.extraProp = "Change your pet's water" 

    }
    giveName(){
        this.extraProp = `Play fetch with ${this.name}.` 
    }
    //manedWolf specific methods
    extra() {
        this.health += 10;
        this.hunger -= 10;
        this.thirst -= 10;

        console.log(`${this.name} is getting some well-needed exercise!`);
        return this;
    }
}

module.exports = { ManedWolf };