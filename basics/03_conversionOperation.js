let score = "33abc" // here let is a variable with a value 

// but when we work with backend and get value by user (form) so value can be ohter formate 

//console.log(typeof score);
//console.log(typeof (score));

//let valueInNumber = Number(score)
//console.log(typeof (valueInNumber));
//console.log(valueInNumber);

// "33" easily converted into 33 but ,
// 33abc  will be NaN 
// true = 1;  false = 0 

let isloggedIn = "lubna"

let booleanIsLoggendIn = Boolean(isloggedIn)
console.log(booleanIsLoggendIn);

// when write one(1) it convert into true and 0 or empty is false

let someNumbber = 33
let StringNumber = String(someNumbber)
console.log(typeof(StringNumber))

//*****************************************  Operations  *********************************************//
let value = 3
let negvalue = -value 
//console.log(negvalue)

console.log(2+2); //additon
console.log(2-2); //subtraction
console.log(2*2); // multiply
console.log(2/2); // modulus
console.log(2**2); //exponation
console.log(2%2); //reminder

let str1 = "hello "
let str2 = "manisha"
let str3 = str1 + str2 // add two string
// string converted
console.log(str3) // "1" + "2"
console.log("1" + 2);// 12
console.log(1 + "2") // 12
console.log("1" + 2 + 2); // 122

//console.log(1 +2 + "2") //32

let gameCounter = 100
//gameCounter++; //post increment 
//x =gameCounter++use first then increase(Use the current value first, then increment/decrement.)

//preincrement 
++gameCounter;  // increase first (Increment/decrement first, then use the updated value.)
//console.log(gameCounter);
//prefix
let price = 120;
price++
console.log(price);





