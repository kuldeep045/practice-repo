function calculateCartPrice (val1, val2, ...num1){ // ...is rest operator
return num1
}
// console.log(calculateCartPrice(200,900,800,700,400))

const user ={
    userName: "cooldeep",
    contact :9817606790
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and Contact is ${anyObject.contact}`)

}
// handleObject(user);

const array =[1,2,3,4,5,6,7]
function returnSecondValue(Myarray){
    console.log(`second value is ${Myarray[1]}`)

}
returnSecondValue(array);