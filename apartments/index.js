let apt1 = {
    bedrooms: 2, 
    sqft: 50, 
    bathroom: 3, 
    windows: 0,
    rent: 4500,
    unit: '1A',
    tenants: [],
}
    
let apt2 = {
    bedrooms: 1, 
    sqft: 500, 
    bathroom: 1, 
    windows: 2,
    rent: 1500,
    unit: '1B',
    tenants: [],
}

let apt3 = {
    bedrooms: 2, 
    sqft: 53, 
    bathroom: 3, 
    windows: 2,
    rent: 2400,
    unit: '1C',
    tenants: [],
}

let apt4 = {
    bedrooms: 2, 
    sqft: 53, 
    bathroom: 3, 
    windows: 2,
    rent: 2400,
    unit: '1C',
    tenant1: [],
}

let tenant1 = {
    name: 'John Doe',
    creditScore:400,
    salary: 1500,
    age: 30,
    pet: 'Fido'
}

let tenant2 = {
    name: 'John Doe',
    creditScore:800,
    salary: 22000,
    age: 33,
}

let building = {
    streetAddress: '74 N 7th street, booklyn 11249',
    laundry: false,
    allowsPets: false,
    lease: function (apt, tenant) {
        if (apt.tenants.length === apt.bedrooms) {
            return `${apt.unit} is already full!`
        }
        if (this.allowPets === false && tenant.pet) {
            return `${apt.unit} is available, but you must give Fido up for adoption!`
        }
        let t = apt.tenants.push(tenant)
        console.log(tenant.name , 'has reted out', apt.unit)
        return t
    },
    occupiedApts: function(){
    // returns only the aps which have tenants inside them
    // condition to test: apt. tenants.length
    this.apartments.filter((el) =>  {
        return el.tenants.length > 0
    })
    },
    fullApts: function() {
        //returns only the apts which are completely full
        // condition to rest apt.tenants.length === apt.bedrooms
        return this.apartments.filter((el) => {
            return el.tenants.length === el.bedrooms
        })
    },
    apartments: [apt1, apt2, apt3],
}

const div = document.getElementById('building')

const render = () => {
    let h2 = document.createElement('h2')
    h2.innerText = building.streetAddress
    div.append(h2)
    let ul = document.createElement('ul')
    building.apartments.forEach((element) => {
        let li = document.createElement('li')
        let button = document.createElement('button')
        console.log(element.unit)
        button.innerText = 'RENT' + element.unit
        button.innerText = `RENT: Vacancies: ${element.bedrooms}`
        li.innerText = `UNIT ${element.unit}`

        button.addEventListener('click', () => {
            if (element.bedrooms <= 0) return alert("SORRY, NEW YORK IS DEAD")
            let vacancies = --element.bedrooms
            button.innerText = `RENT: Vacancies: ${vacancies}`
            element.vacancies -= 1
        })
        console.log(li)
        li.append(button)
        ul.append(li)
    })
    div.append(ul)
}

render()
/*
//builing.apartments.forEach()

//Write a basic JavaScript object that represents a user that has no 
//fewer than 3 keys/properties about that user

const user = {
    firstName: 'Kevin',
    lastName: 'Future',
    height: '6ft',

}

// Write a function called 
// greet that takes no arguments and prints the string "Hello World"

const greet = () => "Hello World"

// Create an array called fruits with 5 elements

let fruits = ['apple', 'banana', 'oranges', 'grapes', 'pear']

// console.log the second element and console.log the last element of the above array

console.log(fruits.slice(1, 2))
console.log(fruits.slice(4))

// Create an object that represents an apartment building without referring to any code

const apartmentcomplex = {
    Name: 'Dope Commons',
    address: '1 1st Ave, New York, NY 10000',
    floors: 10,
    units: 100
}

let tBeTenants = {

}

let uBeUnits = {

}
*/