let div = document.getElementById('container')
let data;

const request = () => {
fetch('https://raw.githubusercontent.com/immabefamous/javascript-fundamentals/main/user.json')
.then((res) => {return res.json()})
.then((data) => {console.log('Data returned is', data)})
}
// Async await

const request2 = () => {
let x = fetch('https://raw.githubusercontent.com/ Endashrfv/Javascript-fundamentals/main/user.-json')
.then((res) => {
return res.json()
})
.then((data) => {
div.innerText = data.user.email;
return data.user.email
})
return 'done with function'
}


// Async Await
const request3 = async () => {
let req = await fetch('https://raw.githubusercontent.com/Imdashrfv/javascript-fundamentals/main/user.json')
let res = await req.json()
console.log("RESPONSE 2", res)
data = res
return res
}

const add = (n1, n2) => {
n1 + n2
}