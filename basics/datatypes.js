//primitive data types (call by value, when u call this variables they will give u the copy of the value u called not the original value)
// 7 types : String, number , integer,bigint, boolean, undefined, null, symbol

//non-primitive data types (call by reference, when u call this variables they will give u the reference of the value u called not the original value)
// array, objects, function 

const score=100;
const scorevalue =123.1;
const loggedin= true;
const name = 'ahmed';
let userEmail;
const bigNumber = 1234567890123456789012345678901234567890n; // bigint
// usage of symbol
const id= Symbol('123')
const anotherId= Symbol('123')
console.log(id); // Symbol(123)
console.log(anotherId); // Symbol(123)
console.log(id === anotherId) // false because each symbol is unique even if they have the same description
// ARRAYS 
const fruits =['banana', 'orange', 'mango' ];
//obejcts are present in the curly braces having key value pairs 
// stores in a variable called myinfo
console.log(fruits);
let myinfo={
    name: 'ahmed',
    age: 24,
    isloggedin: false
}
console.log(myinfo);
//functions 
const myfunct= function(){ //defining a function with word function 
    console.log("hi ahmed");
}
myfunct(); //calling a function 