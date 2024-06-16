// for of
const arr = [1, 2, 3, 4, 5, 6, 7];
for (const num of arr) {
  // console.log(num)
}

const str = "I am a string";

for (const index of str) {
  if (index == " ") {
  } else {
    // console.log(`each char are ${index}`)
  }
}

const map = new Map();

map.set("Nepal", "Kathmandu");
map.set("India", "New Delhi");
map.set("Pakistan", "Karachi");
// console.log(map)

for (const [key, value] of map) {
  // console.log(`${key} :- ${value}`)
}

const newObj = {
  Nepal: "Kathmandu",
  India: "New Delhi",
  China: "Beijing",
};
// for (const i of newObj) {
    // console.log(i)  //newObj is not iterable
// }

// for (const key in newObj) {
// //   console.log(`key is ${key} and value is ${newObj[key]}`)
// }

// note :- for in loop gives key

// for (const key in map) {
//    console.log(key)
// } //kuch nahi aaya



const myArray = ["Kuldeep","Sajja", "Anil","Srijana","Gautam","sabita"]
const myArray2 = ["Gandu","Yanjan", "Yuvi","Prakriti","Gaurav","CR"]
myArray.forEach((item)=>{
// console.log(item)
})
// const naya = myArray.keys()
// console.log(naya)
