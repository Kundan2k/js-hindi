const accountId = 12345
let accountEmail = "kundank4132@gmail.com"
var accountPassword = "22345"
accountCity = "Bhopal"
let accountstate;
// accountId = 2 not allowed

accountEmail = "hack@gmail.com"
accountPassword = "20-3495"
accountCity = "mumbai"

console.log(accountId);

/*
Prefer notb to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword , accountCity , accountstate]);