/*datatypes has mainly two types

primitive 
7 types : String , Number , Boolean , null , undefined  , Symbol , BigInt

non-primitive or reference
Array
Object
Functions  
*/
const score = 100
const scoreValue = 100.3
const inLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid)
   

const heros = ["shaktiman" ,"nagraj","doga"];
let obj={
    name:"hitesh",
    age:22,
}
const myFunction = function(){
    console.log("hello world");
}

//+++++++++++++++++++++++++++++++++
//stack (primitive) : give copy of the varible , here we make changes in copied value
//heap (non-primitive) : give reference of the variable , here we make changes in original value
 