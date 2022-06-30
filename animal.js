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
        return this;
    }
    eat() {
        this.hunger -= 20;
        return this;
    }
    play(){
        this.stress -= 20;
        return this
    }
    vet(){
        this.health += 30
        this.stress += 10
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