const animal = require("./animal.js")

class Otter extends animal.Animal{
    constructor(){
        super()
    }
    giveName(){
        this.extraProp = `Let ${this.name} play in the pond`
    }
    extra(){
        this.thirst -= 15
        if(this.thirst < 0){
            this.thirst = 0
        }
        this.stress -= 15
        if(this.stress < 0){
            this.stress = 0
        }
        this.hunger += 5
        return this;
    }
}

module.exports = { Otter }