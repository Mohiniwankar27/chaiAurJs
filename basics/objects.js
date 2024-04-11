
// object literales
const mySym = Symbol("mykey1")
const jsuser = {
  name:"MOHI",
  "full name":"mohi wankar",
  [mySym]:"mykey1",
  age:20,
  location:"pune",
  email: "hitesh@gmail.com",
  isLoggedin:false,
  lastlOGGEDinDAYS : ["moday" ,"tuesday","wednesday","thursday","friday"]
}
console.log(jsuser.name)
console.log(jsuser["full name"])
console.log(jsuser[mySym])

jsuser.email = "mohi@gmail.com"
// Object.freeze(jsuser)
jsuser.email = "mohi@chatgpt.com"
console.log(jsuser);
//add function in object
jsuser.greeting = function(){
    console.log("hello js user");
}
jsuser.greeting2 = function(){
    console.log(`hello js user,${this.name}`);
}
console.log(jsuser.greeting2())
