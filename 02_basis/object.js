//objects
// singleton => constructor baata banda banxa

//  Object.create() =====> this is the constructor method

// object literals
// var mySym = Symbol("newSym")
// const Jsuser = {
//     "Full name" : "Kuldeep",
//     // mySym : "I am a symbol", //here it is used as string not a smbol
//     [mySym] : "I am a symbol", //here square bracket should be used to use it as symbol
//     location : "Kathmandu",//here the key "location" is processed as string
//     age : 18,
//     email : "cooldeep@js.com",
//     isLoggedIn : true,
//     lastLoggedInDays : ["monday","Friday"]
// }
// console.log(Jsuser.email)
// console.log(Jsuser["email"]) //email should be written as string name
// console.log(Jsuser["Full name"]) //here dot method doesn't work
// console.log(typeof Jsuser[mySym]) //don't know why but  still showing string

// Jsuser.age = 19
// console.log(Jsuser) //age is changed to 19
// Object.freeze(Jsuser) //makes the object uneditable
// Jsuser.age = 20
// console.log(Jsuser) // here it remains 19

// Jsuser.greeting = function (){
// console.log("Hello World !")
// }
// Jsuser.greetingTwo = function(){
//     console.log(`Hello  ${this["Full name"]}`)
// }
// console.log(Jsuser.greeting()) //if ()is not used gives an anonymous funstion
// console.log(Jsuser.greetingTwo())

//***************************************************************** *//

// const tinderUser = new Object() //is a singleton object
const tinderUser = {}; //non singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sajja";
tinderUser.isLoggedIn = false;
// console.log(tinderUser)

const regularUser = {
  email: "sajja08@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Sajja",
      lastname: "Mainali",
    },
  },
};
// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {
  1: "a",
};
const obj2 = {
  2: "b",
};
//const obj3 = Object.assign({},obj1,obj2) //assign is used to concat
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(Object.hasOwnProperty('name'))

// ------------------------ De- structuring ---------------------------------//

let course = {
  name: "Js in Hindi",
  Price: 999,
  courseInstructor: "Kuldeep",
};

// console.log(course.courseInstructor)

// const {courseInstructor} = course
// console.log(courseInstructor)

// const {courseInstructor: teacher } = course
// console.log(teacher)

// -------------------------JSON API-----------------------//
// {
//     "name":"Kuldeep",
//     "surname": "Singh",

// }

[
    {},
    {},
    {}
] //API also can be like this =====> like an array or like an object
