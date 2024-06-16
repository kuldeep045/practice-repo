function myFunction() {
  console.log("I love you");
  console.log("I love you too");
}
// myFunction(); //calling the function

function add(num1, num2) {
  // console.log(num1 + num2)

  // const result = num1 + num2
  // return result

  return num1 + num2;
  console.log("cooldeep"); //cant access it as it is behind return
}

const result = add(2, 3);
// console.log(`result: ${result}`) //undefined

// add(2,3) //5
// add(2,'3') //23
// add(null, 4) //4

function userLoginMessage(username = "Sajja") {
  // if (username === undefined) {
  //   console.log("Please enter a username");
  //   return
  // }

  if (!username) {
    console.log("Please enter a username");
    return;
  }

  return `${username} just logged In`;
}

console.log(userLoginMessage("cooldeep"));
