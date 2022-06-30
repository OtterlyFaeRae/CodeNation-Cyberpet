// Imports
const inquirer = require("inquirer");
const otter = require("./otter");
const chimp = require("./chimp");
const poodleMoth = require("./poodleMoth");
const manedWolf = require("./manedWolf");
const pandaAnt = require("./pandaAnt");

let pet;

const passTime = ()=>{
    pet.hunger += 5
    if(pet.hunger > 100){
        pet.hunger = 100
        console.log(`${pet.name} is hungry!`)
        pet.health -= 5
    }
    pet.thirst += 5
    if(pet.thirst > 100){
        pet.thirst = 100
        console.log(`${pet.name} is thirsty!`)
        pet.health -= 5
    }
    pet.stress += 5
    if(pet.stres > 100){
        pet.thirst = 100
        console.log(`${pet.name} is over-stressed!`)
        pet.health -= 5
    }
    pet.health -= 5
    if(pet.health < 0){
        console.log(`${pet.name} was so unhealthy, they had to be taken back to the shelter!`)
        return;
    }
    menu()
}

// Start function
async function start() {
    console.log(`Start hit`)
    // Asks the player which kind of pet they'd like
    const { petType } = await inquirer.prompt(
        //First question object: gets pet type. Returns an object of appropriate pet type. 
        {
        type:`list`,
        name:`petType`,
        message:`Which kind of pet would you like?\n`,
        choices:[
            {
                name: `otter`,
                value: new otter.Otter()
            },
            {
                name:`chimp`,
                value: new chimp.Chimpanzee()
            }
        ]
    }
    )
    // Second question object: gets pet name. Sets petName to a string based on player input.
    const { petName } = await inquirer.prompt(
        {
            type:`input`,
            name:`petName`,
            message:`What would you like to name your pet?\n`
        }
    )
    pet = petType //Sets pet to object petType
    pet.name = petName //Sets pet.name to petName
    pet.giveName()
    menu()
}

async function menu() {
    const choice = await inquirer.prompt(
        {
            type:`list`,
            name:`menuInput`,
            message:`What would you like to do with ${pet.name}?\n`,
            choices:[
                {
                    name:`Feed ${pet.name}`,
                    value: `feed`
                },
                {
                    name:`Water ${pet.name}`,
                    value:`water`
                },
                {
                    name:`Play with ${pet.name}`,
                    value:`play`
                },
                {
                    name: pet.extraProp,
                    value: `extra`
                },
                {
                    name: `Take ${pet.name} to the vet`,
                    value: `vet`
                },
                {
                    name:`Check your pet's status`,
                    value:`check`
                    
                },
                {
                    name:`Quit`,
                    value:`quit`
                }
            ]
        }
    )
    switch (choice.menuInput){
        case `feed`:
            pet.eat()
            break;
        case `water`:
            pet.drink()
            break;
        case `play`:
            pet.play()
            break;
        case "extra":
            pet.extra()
            break;
        case `vet`:
            pet.vet()
            break;
        case `quit`:
            const quit = await confirmQuit()
            if (quit) return;
            break;
    }
    if (choice.menuInput == `check`){
        console.table(pet.stats)
        menu()
    } else { 
        passTime()
    }
}

async function confirmQuit() {
    const quit = await inquirer.prompt({
        type:`list`,
        name:`quitCon`,
        message:`Are you sure you want to quit?`,
        choices:[
            {
                name:`Yes`,
                value: true
            },
            {
                name:`No`,
                value: false
            }
        ]
    })
    return quit
}

start()