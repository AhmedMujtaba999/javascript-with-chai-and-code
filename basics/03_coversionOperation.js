let score=33
console.log(score);
console.log(typeof (score));
 //conversion operation 
 let scorestr = '33'//string 
 console.log(typeof (scorestr));
 let valueInNumber = Number(scorestr) //Not a number because of the non-numeric characters in the string
    console.log(valueInNumber);
    console.log(typeof (valueInNumber));

    //'33' ==>33
    // '33abc' ==> NaN
    // 'abc' ==> NaN
    // null ==> 0
    //undefined ==> NaN

    let isloggedin = 1 // 1 is truthy value
    console.log(typeof (isloggedin)); // number 
    let booleanIsloggedin = Boolean(isloggedin) // true 'converison to boolean'
    console.log(booleanIsloggedin); //trye
    console.log(typeof (booleanIsloggedin)); //boolean

    // 1=> true
    // 0=> false
    // ' ' => false
    // "abac" => true

    let something = 90
    console.log(something); // 90
    let stringsomething = String(something) // '90' conversion to string
    console.log(stringsomething); // '90'
    console.log(typeof (stringsomething)); // string