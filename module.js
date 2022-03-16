/*

Functions allow us to bundle


*/

/*function quiz() {
let myName = prompt('Enter your name')
let month = prompt('What month were you born?')
let food = prompt('What is your favoirte food?')

console.log('My name is', myName)
console.log('I was born in', month)
console.log('My favorite food is', food)
}
*/
const quiz = () => {
    let myName = prompt('Enter your name')
    let month = prompt('What month were you born?')
    let food = prompt('What is your favoirte food?')
    
    console.log('My name is', myName)
    console.log('I was born in', month)
    console.log('My favorite food is', food)
}

const print = () => {
    console.log('I love to print text')
}

const functionA = () => {
    console.log(`FUNCTION A HAS BEEN CALLED`)
}

const functionB = () => {
    console.log(`FUNCTION B HAS BEEN CALLED`)
}
const functionC = () => {
    console.log)'FUNCTION C HAS BEEN CALLED!'
}

const greet = (person) => {
    console.log ('Hello', person)
}
const blender = (string) => {
    return string.split('')
}

const square = (num, message) => {
    console.log('Message', message)
    return num * num;
}
//arrow function are glocal while normal function is local