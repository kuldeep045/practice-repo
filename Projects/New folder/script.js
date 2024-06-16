const btn = document.querySelector('#btn');
const hii = document.querySelector('#main');
var colors = ['red', 'blue', 'orange', 'aqua', 'black', 'crimson']
btn.addEventListener("click", change)
function change(){
    var clrcode = Math.floor(Math.random()*colors.length)
    var color = colors[clrcode]


    hii.style.backgroundColor = color
    console.log(clrcode)
}
