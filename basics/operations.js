let str1 = "hello"
let str2 = "world"
let str3 = str1 + str2 
console.log(str3)
console.log("1" + 2)
console.log(1 + "2")
console.log(1 + 2 + "2")

// comparision


console.log("2">1); //both will give true js converted 2 and 02 in number 
// and then comlared with one but this conversion is not accurate always thats why always ensure that your are comparing same data type values
console.log("02">1);

//strict check === it also check data type , == only check value
console.log("1" === 1);
console.log("1" == 1);

