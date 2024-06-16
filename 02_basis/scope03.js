// ----------------Global and Local scope --------------------//

{
} //this is scope

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}
// console.log(a); //available only inside the scope
// console.log(b); //available only inside the scope
// console.log(c); //available outside scope due to var

// Note:- variables in global scope is available inside block scope but reverse in not possible
x = 54;
e = 56;
if (true) {
  let x = 45;
  let f = 5;
  //   console.log(x)//45
  //   console.log(e)//56
}
// console.log(x) //54
// console.log(f) //error

function one() {
  const username = "Cooldeep";
  function two() {
    const website = "Facebook";
    console.log(`Hey ${username}`);
  }
  //   console.log(`welcome to ${website}`) =====> can't access website here
  two();
}
// one()

function addOne(num) {
  return num + 1;
}
// console.log(addOne(5))

const addTwo = function (num) {
  //if this type of function is called earliar then error occurs
  return num + 2;
};
console.log(addTwo(5));
