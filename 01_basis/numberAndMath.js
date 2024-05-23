// const balance = new Number(400);
// console.log(balance)

// console.log(balance.toString().length) //3
// console.log(balance.toFixed(2)) //400.00 => only applicable to number

// const num = 123.876
// console.log(num.toPrecision(4)) //123.9
// console.log(num.toPrecision(3)) //124

// const newNum = 45432400
// console.log(newNum.toLocaleString()) //english system of comma
// console.log(newNum.toLocaleString('en-IN')) //Indian system of comma


// //*******************   Math  *********************//
// console.log(Math)
// console.log(Math.abs(-4)) //4
// console.log(Math.round(4.1)) //4
// console.log(Math.round(4.5))//5
// console.lof(Math.sqrt(25))


console.log(Math.random()) //gives number between 0 and 1

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min +1)) + min )