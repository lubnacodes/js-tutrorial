
 const accountId = 144553 //where value is fixed and can't assigned again
 let accountEmail = "l@gmail.com" //i declare a value here 
 var accountPassword = "123456" //  i declare a value here
 accountCity = "jaipur" // here javascript automaticllay reserve without declare type 
let accountState ;
 //in js we can declare var by two ways let and var
//accountId = 2
accountEmail = "lub@gmail.com"
accountPassword ="1234"
accountCity = "meerut" 

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);