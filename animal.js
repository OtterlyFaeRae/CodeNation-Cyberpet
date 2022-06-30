class Animal {
    constructor() {
        this.name = "";
        this.health = 100;
        this.stress = 0;
        this.hunger = 0;
        this.thirst = 0;
    }
    drink() {
        this.thirst -= 20;
        if(this.thirst < 0){
            this.thirst = 0;
            console.log(`${this.name} isn't thirsty!`)
        }
        return this;
    }
    eat() {
        this.hunger -= 20;
        if(this.hunger < 0){
            this.hunger = 0;
            console.log(`${this.name} is full!`)
        }
        return this;
    }
    play(){
        this.stress -= 20;
        if (this.stress < 0){
            this.stress = 0
        }
        return this
    }
    vet(){
        this.health += 50
        if(this.health > 100){
            this.health = 100
            console.log(`${this.name} is as healthy as can be!`)
        }
        this.stress += 20
        return this
    }
    get stats(){
        return {
            name: this.name,
            health: this.health,
            hunger: this.hunger,
            thirst: this.thirst,
            stress: this.stress
        }
    }
}

module.exports = { Animal };