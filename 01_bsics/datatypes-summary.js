//  Primitive

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsiderTemp = null
let userEmail;

const id =Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

// const bigNumber = 1234875521297886862n



// Reference (Non primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj ={
    name : "kundan",
    age : 22,
}

const myFunction = function(){
    console.log("hellow world");
}

console.log(typeof scoreValue);




// +++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non-Primitive)

let myYoutubename = "kundanOG"

let anothername = myYoutubename
anothername = "kundan"

console.log(myYoutubename);
console.log(anothername);


let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "kundan@google.com"

console.log(userOne.email);
console.log(userTwo.email);

