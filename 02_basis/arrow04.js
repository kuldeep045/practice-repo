//this keyword tellls about the current access
const user ={
    username : "kuldeep",
    Price : 999,
    welcomeMessage : function (){
        console.log(`${this.username} , welcome to js`)
        // console.log(this)
    }

}
// console.log(this) //empty object
// user.welcomeMessage() //for kuldeep

// user.username = "Sajja"
// user.welcomeMessage()

// console.log(this)

function chai (){
    console.log(this)
}
// const chai = ()=>{
//     console.log(this)
// }
// chai()