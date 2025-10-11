// primitive not premitive 
// in js datypes categories in two way in base  of how data store in memory
 

// primitive  (call by value )  these are 7 types
// String, Number, Boolean, null, undefined, Symbol, BigiInt
const score  = 100
const scorevalue = 100.5

const isloggedIn = false 
const outsidetemp = null
let userEmail ; // undefined 

const id = Symbol('123')
const anotherID = Symbol('123');
//console.log(anotherID);

//const bigNumber = 56565656564896565n;
const bigNumber = BigInt(56565656564896565);
//console.log(typeof(bigNumber));


// Reference type or Non premitive 
// Array,  Objects, Funcitons

//1 array
const cars = ["toyota fortuner", "maruti", "honda city", "bugati"];
//console.log(cars);

// 2 obeject
let myobj = {
    name : "lubna",
    age : 22,
    phone : '564565663',
    email : "l@gmail.com"
}
//console.log(myobj);

//3 function 

// function myfunc()
// {
//  console.log("hello lubna");
// }
// myfunc();

// const myfunc = function ()
// {
//     console.log("hello lubna");
// }

//================================  memory types   ===================================================\\

// Stack(primitive) , Heap (non-primitive)
let myYoutubename = "lubnacodes" // stack store this value first  

let anothername = myYoutubename  
console.log(myYoutubename);  //first stack value

anothername = "newchannnel";
console.log(anothername); // now new value is inserted in stact 

/*
========= stack structure  =========
------------------------------------
           usertwo
------------------------------------
           userOne
------------------------------------
          lubnacodes
------------------------------------
          newchannnel
------------------------------------
          lubnacodes
------------------------------------
*/

// ===== Example of Heap =======
let userOne = {
    email : "user@google.com",
    upi : "user@ypi"
}
// this wiil copy and store in heap memory like a container and userOne is going in stack

let usertwo = userOne

usertwo.email="l@gmail.com"
console.log(userOne.email);
console.log(usertwo.email);

/* 
--------------------------------------------------
                       Heap                       |
                                                  |
                                                  |
                             {
    email : "user@google.com",
    upi : "user@ypi"
}                                                 |
                                                  |
                                                  |
                                                  |
                                                  |
----------------------------------------------------
*/






