let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let intId;
//-----------generate randomColor--------------//
function randomColor() {
  let alpha = "1234567890ABCDEF";
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * 16);
    hex += alpha[index];
  }
  return hex;
}

function startChangingColor() {
  intId = setInterval(changebg, 100);
}
function changebg(){
    document.body.style.backgroundColor = randomColor();
}
function stopChangingColor() {
clearInterval(intId)
intId = null

}

start.addEventListener("click", startChangingColor);
stop.addEventListener("click", stopChangingColor);
