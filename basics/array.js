const myArr = [1,23,343,5,65,646,3] 
// we can store element of any datatype in single array , its size is not fixed we can add as much as elementa in it
const myHeors = ["batman" , "hulk" , "iron man"]
const myArr2 = new Array(1,2,3,4,5)
console.log(myArr[0]);
// array mwthods 

myArr.push(234) // add value into array
myArr.pop() // it remove last element
myArr.unshift(9) // add value to first position by shifing all other
myArr.shift() //remove unshift operation
const newArr = myArr.join() // convert array into string
console.log(myArr)
console.log(newArr)
//slicee , splice  i don't understand this revise this imp for interview 
console.log("A ",myArr);
const myn1   = myArr.slice(1,3)
console.log(myn1)

console.log("B ",myArr);

console.log("A ",myArr);
const myn2   = myArr.splice(1,3)

console.log("c ",myArr)
console.log(myn2)