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


    /// -------------------------Operations-------------------------

    let value = 30
    let negvalue = -value
    console.log(negvalue); // -30
    let isloggedin1 = true
    let isloggedin2 = false
    console.log(isloggedin1);
    console.log(isloggedin2);
    console.log(!isloggedin1); // false
    console.log(!isloggedin2); // true

    let str1 = "Hello"
    let str2 = "World"
    let str3 = str1 + " " + str2 // concatenation operation
    console.log(str3); // Hello World

    console.log(5 + '10' +2 ); // 5102 because of the left to right evaluation and the first operand is a string so it will convert the second operand to a string and concatenate them and then it will convert the third operand to a string and concatenate it with the previous result
    console.log(5 + 10 + '2' ); // 152
    console.log('5' + 10 + 2 ); // 5102
    let num1,num2,num3;
    num1 = num2 = num3 = 2+1 // right to left evaluation
    console.log(num1);
    // comparisiom
    console.log(3 > 2); // true
    console.log(3 < 2); // false
    console.log(3 >= 2); // true
    console.log(3 <= 2); // false
    console.log(3 == 2);
    console.log("2">1 );
    console.log("02"<1 );
    // null value comparison

    console.log(null > 0); // false
    console.log(null === 0);
    console.log(null >= 0); // true
    console.log(null <= 0);

    console.log(undefined > 0); // false
    console.log(undefined === 0);

    console.log(undefined >= 0); // false
    console.log(undefined <= 0); // false

    console.log(null>"23");
    console.log(undefined <"234");
    
    // === strict check (also checks the type of the value)