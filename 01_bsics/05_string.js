const name = "kundan"
const repoCount = 50

//console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo is $ {repoCount}`);

const gameName = new String('kundan-kk-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-6,4)
console.log(anotherString);

const newStringOne = "  kundan  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://kundan.com/kundan%30gupta"

console.log(url.replace('%30','-'))

console.log(url.includes('kundan'))

console.log(gameName.split('-'));