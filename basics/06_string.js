const name = "lubna" 
const repocount =  50
console.log(repocount + name + "value"); // this is old  version syntax
// in modern java script we use backticks 
// string manipulation
console.log(`my name is ${name} and my repo is ${repocount}`); 
let a = "hello";
let b = "world";
console.log(a + b); // old version

console.log(`${a} ${b}`); // this code disply clean and without using + sign

//console.log("lubna" + " "+ "khan");

const gameName = new String("lubna-khan")  // this is we create an object with use new keyword and obeject cannot be compared.
console.log(gameName);
console.log(gameName[0]); // output 0: l
console.log(gameName[1]); // output 1: u
console.log(gameName.__proto__);

console.log(gameName.length); // output is 5
console.log(gameName.toUpperCase()); //  LUBNA uppercase string

console.log(gameName.charAt(3)); // we can find char position by using index number 

console.log(gameName.indexOf('b')); // for find character index position

const newstring = gameName.substring(0 , 4);

//console.log(newstring); 

console.log(gameName.substring(0 , 4)); // to create a substring 

const anotherString1 = gameName.slice(0,4);
console.log(anotherString1);

// reverse slice
const anotherString = gameName.slice(-9 ,4); // only in slice we can define negative value
console.log(anotherString);

const newStringOne = "   lubna   "
console.log(newStringOne);
console.log(newStringOne.trim()); // trim remove space


// Replace
const url = "https://lubna.com/lubna%20khan"; // if there is space browser add here %20 so i want to replace this

console.log(url.replace('%20','-')); //https://lubna.com/lubna-khan

// include using for find char is available or not 
console.log(url.includes('lubna')); // true
console.log(url.includes('mani')); //  false

//convert into array based on dash( - )
const gameNames = new String("lubna-khan-web-developer")
console.log(gameNames.split('-'));














