const laptop = {
    price: 1000,
    brand: 'HP',
    memory: '2GB',
    color: 'pink'
}

const ally = {
    name: 'Geralt',
    power: {name: 'Kamehameha', attackPower: 9000 }
}

const car = {
    engine: 'V8',
    door: 2,
    model: 'BMW',
    price: 200000,
    make: 'M4'
}

const company = {
    name: 'Vittles',
    ceo: 'Micheal Law',
    istTheBest: true,
    publiclyTraded: false
}

const room = {
    windows: 0,
    dimensions: '200x000',
    closet: false,
    isLegal: false,
    pets: false
}

const item = {
    name: 'Excalibur',
    attackPower: 130
}

const character = {
    hairColor: 'blue',
    height: "6'7",
    race: 'Elf',
    gender: null,
    strength: 'Infinity',
    dlc: false,
    class: 'Mage',
    cohort: '031422',
    item: item,
    ally: ally
}


console.log(character.ally.power)



