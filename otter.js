const animal = require("./animal.js")

class Otter extends animal.Animal{
    constructor(){
        super()
    }
    giveName(){
        this.extraProp = `Let ${this.name} play in the pond`
    }
    extra(){
        `${this.name} is having fun splashing around.`
        this.thirst -= 15
        this.stress -= 15
        this.hunger += 5
        return this;
    }
}

module.exports = { Otter }