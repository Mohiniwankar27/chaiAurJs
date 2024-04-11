const name = "hitesh"
const repoCount = 50 
// bad practice
// console.log(name + repoCount + " value");
//good way
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

// second way to declare string 
const gameName = new String('hiteshhc')
console.log(gameName[0]);
console.log(gameName.__porto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));
const newString = gameName.substring(0,4);
console.log(newString);
const anotherString = gameName.slice(-8,4);
console.log(anotherString);
 
const newStringone = "    hitesh     "
console.log(newStringone.trim())

const url = "http://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))
console.log(url.includes('mohit'))

console.log(url.split('-'))