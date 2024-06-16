let randomNum = parseInt(Math.random() * 100 + 1);
let input = document.querySelector("#inputField");
let form = document.querySelector(".userarea");
let submit = document.querySelector("#submit");
let prev = document.querySelector("#prevguess");
let remaining = document.querySelector("#remaining");
let loworhigh = document.querySelector("#loworhigh");
let messagebox = document.querySelector("#messagebox");

let prevguess = [];
let numguess = 1;
let playGame = true;
if (playGame) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let guess = parseInt(input.value);
    vadlidateGuess(guess);
    numguess++;
    input.value = " "
  });
}

function vadlidateGuess(guess) {
  if (guess === " " || guess <= 0 || guess > 100 || isNaN(guess)) {
    messagebox.innerHTML = "enter a valid number";
    messagebox.style.color = "red";
  } else {
    checkGuess(guess);
  }
  displayGuess(guess);
}

function checkGuess(guess) {
  if (guess === randomNum) {
    messagebox.innerHTML = "You guessed right";
    messagebox.style.color = "green"; 
    endGame();
  } else {
    messagebox.innerHTML = "ohh no your guess was wrong !!!";
    messagebox.style.color = "red";
  }
  hiOrLow(guess);
}
function displayGuess(guess) {
  prevguess.push(guess);
  prev.innerHTML = prevguess;
  remaining.innerHTML = 10 - numguess;
  if (numguess === 10) {
    endGame();
     }
}

function endGame(){
   form.style.display = 'none'
   newGameButton();
   
   
}

function hiOrLow (guess){
    if (guess < randomNum) {
        loworhigh.innerHTML = 'your number was too low'
    } else if(guess > randomNum){
        loworhigh.innerHTML = 'your number was too high'
    }
    else if(guess === randomNum){
        loworhigh.innerHTML = ''
    }
}


function newGameButton (){
    const button = document.createElement('button')
    button.innerHTML = " Start new game !!"
    let center = document.querySelector('.center')
    center.appendChild(button)
    button.addEventListener('click', ()=>{     
        prevguess = []
        prev.innerHTML = prevguess
        remaining.innerHTML = 10 
        numguess = 1
        form.style.display = 'flex'
        button.style.display = 'none'
        messagebox.innerHTML = " "
        randomNum = parseInt(Math.random() * 100 + 1)
    })
}

