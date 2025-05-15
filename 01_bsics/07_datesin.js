// dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(typeof myDate);


//let myCreatedDate = new Date(2024, 4 , 13)
//let myCreatedDate = new Date(2024, 0, 13, 3,4)
// let myCreatedDate = new Date("2024-01-15")
let myCreatedDate = new Date("01-04-2025")
// console.log(myCreatedDate.toLocaleString);

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// $`{newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long",
})