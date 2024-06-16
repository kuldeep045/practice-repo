const buttons = document.querySelectorAll(".btn");
const body = document.querySelector("body");

buttons.forEach((button) => {
  // console.log(button)
  const btnId = button.getAttribute('id')
  button.style.backgroundColor = btnId
  button.addEventListener("click", (e) => {
    // console.log(e)
    console.log(e.target.id);
    body.style.backgroundColor = `${e.target.id}`;
  });
});
