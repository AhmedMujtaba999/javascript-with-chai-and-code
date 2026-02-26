// the difference of old and new version of javascript is to use "use strict" 
// to avoid some of the mistakes that we can do in old version of javascript
"use strict";
 // when it is defined it is treated as the newer version of javascript in order to avoid // some of the mistakes that we can do in old version of javascript
 //alert(3 + 4) // we are using node js not brwser
 let name="Ahmed"
 let age=24
 let isloggedin= false
 console.table([name, age, isloggedin])

//primitive date types
 //number ==> 2 to power 53to 54
 //bigint ==> more than 2 to power 53to 54
 //string ==> any text
//boolean ==> true or false
//undefined ==> when we declare a variable without assigning a value to it
//null ==> standalone value that represents the absence of any value
//symbol ==> a unique identifier for an object

console.log(typeof 'Ahmed');
console.log(typeof 24);
console.log(typeof false);
console.log(typeof undefined);// undefined 
console.log(typeof null); // it is an object but it is a bug in javascript
console.table([typeof 'Ahmed', typeof 24, typeof false])
//object ==> a collection of key-value pairs

