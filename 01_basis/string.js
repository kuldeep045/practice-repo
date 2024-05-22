const name = "Cooldeep"
const rollNo = 1

console.log("I am " +name +" and my roll no is"+rollNo) //not a good practice
console.log(`I am ${name} and my roll no is ${rollNo}`) //this is good to use


const myName = new String("Cooldeep") //creates an object
console.log(typeof myName) //expected output object
console.log(myName[0]) //expected output C
console.log(myName.length) //expected output is 8
console.log(myName.toUpperCase()) //COOLDEEP
console.log(myName.charAt(3)) //l
console.log(myName.indexOf("o")) //1

const newName = "Sarban-Kumar"
console.log(newName.slice(0,5))//expected Sarba negative values can also be assigned but not in subString


// .trim() => remove unneccesary spaces
console.log(newName.includes("Kumar")) //true
console.log(newName.split("-")) //convert into array based on -