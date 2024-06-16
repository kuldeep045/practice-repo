const mrunal = document.querySelector('#mrunal')
const img = document.querySelector('#images')
const google = document.querySelector('#google')
// mrunal.onclick = function(){
//     console.log("mrunal")
// }

mrunal.addEventListener('click', function(e){
//    console.log(e)
console.log('mrunal clicked')


// e.stopPropagation()
})
img.addEventListener('click', (e)=>{   
    // if (e.target.tagName === 'IMG') {
    //     e.target.parentNode.remove()
    // }

    console.log('ul clicked')
},true)

//bubbling :- inner baata outer ma propagate hoonxa third para false huda
//capturing:- baira baata bhitra aauxaa ani baira lagaune ho


//type,timestamp,defaultprevented
//target,toElement,srcElement
//clientX,clientY,screenX,ScreenY
//altkey,shiftkey,ctrlkey

google.addEventListener('click',(e)=>{
    e.preventDefault()
    // console.log("google")
})



