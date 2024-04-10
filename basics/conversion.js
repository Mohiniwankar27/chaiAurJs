// when we take data from front end for eg we are taking input from form but we dont now if it is number ot not that's why 
//it is imp to make sure that we are working with correct datatype

let score = "23abc"; // when there is amything which can not be converted in number then it 
//will give NaN
console.log(typeof score)
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
//1 => true ; 0 = false
//"" => false
//"hitesh => true"
