const accountId = 12234 // const means value cannot be changed
let accountEmail  = "mohi@gmail.com" 
/* prefer not to use var bacause of issue in block scope and functional scope , 'let' only have block scope */ 
var accountPassword = "12345"
accountCity = "Pune"
let accountState;
console.table([accountId , accountEmail , accountPassword , accountCity,accountState])