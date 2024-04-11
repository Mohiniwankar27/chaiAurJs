// const tinderuser = new Object() this is singleton object 
const tinderuser = {} // this is non singleton object
tinderuser.id ="123abc"
tinderuser.name ="danny"
tinderuser.isloggedin =false
console.log(tinderuser)

const regularuser = {
email:"some@gmail.com",
fullname:{
    userfullname:{
      firstname:"ross",
      lastname:"geller" 
    }
}
}
console.log(regularuser.fullname.userfullname);
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3);

//or 
const obj4 = {...obj1,...obj2}
console.log(obj4)

//array of objects
const users =[
    {
        id: 1,
        email: "nknfs@gamil.com"
    },
    {
        id: 2,
        email: "nknfs@gamil.com"
    },
    {
        id: 3,
        email: "nknfs@gamil.com"
    },
    {
        id: 4,
        email: "nknfs@gamil.com"
    }
]
users[1].email
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('isloggedin'))