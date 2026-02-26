const accountID= 78990 // u cannot change this value
let accountEmail ="ahmed@company.com" // u can change this value 
var accountPassword = "23456" // u can change this value
accountCity = "Texas" // u can change this value
let accountState;
/*
it is a good practice to use const for values that will not change, 
let for values that will change, 
and 
var is an old way of declaring variables that is not recommended to use in modern JavaScript.

it is prefer not to use var
because pf issue in scope and functional scope
*/

//accountID = 12345
accountEmail = "changed@gmail.com"
accountPassword = "12345"
accountCity = "New York"
console.log(accountID);
console.table([accountID, accountEmail, accountPassword, accountCity, accountState])
