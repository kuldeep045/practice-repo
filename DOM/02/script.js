const parent = document.querySelector('.parent')
// console.log(parent)
//console.log(parent.Children) //gives html collection
// Array.from(child)//doesn't works
const child = Array.from(parent.children);
// console.log(child[1].innerText) //tuesday

// using loop
for(let i = 0; i < parent.children.length; i++){
    // console.log(parent.children[i].innerText)
}
// console.log(parent.firstElementChild.innerText) //monday
// console.log(parent.lastElementChild.innerText) //monday
parent.children[1].style.color = 'pink' //manipulate the color of tuesday
const dayOne = document.querySelector('.day')
console.log(dayOne)
console.log(dayOne.parentElement)
console.log(dayOne.nextElementSibling)
console.log("Nodes:", parent.childNodes)