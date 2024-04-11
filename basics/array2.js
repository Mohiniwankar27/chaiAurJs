const marvel =["thor" , "Ironman" ,"spiderman"]
const dc = ["superman" , "flash" ,"batman"]

marvel.push(dc)
console.log(marvel)
console.log(marvel[3][1])

marvel.concat(dc)
console.log(marvel)
// both push and concat method add one array into another it is not correct way to get in correct way we have to concat into one variable
const allhero = marvel.concat(dc)
console.log(allhero) 
// we can do this using soreade operator ... this is sprade operator
const all_new_heros =[...marvel ,...dc]
console.log(all_new_heros);
 //flat method

 // convert stirng into array
 console.log(Array.isArray("mihini"))
 console.log(Array.from("mihini"))
 console.log(Array.from({name:"mihini"})) //intersting
 let s1 = 100
 let s2 =45
 let s3 =56
 console.log(Array.of(s1,s2,s3))