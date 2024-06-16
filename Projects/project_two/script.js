function calculateBmi(){
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const height = parseInt(document.querySelector("#height").value);
      const weight = parseInt(document.querySelector("#weight").value);
      const results = document.querySelector("#result");
      if (height === "" || isNaN(height) || height <= 0) {
        results.innerHTML = `please enter a valid height ! ${height}`;
      } else if (weight === "" || isNaN(weight) || weight <= 0) {
        results.innerHTML = `please enter a valid weight ! ${weight}`;
      } else {
        const BMI = (weight / ((height * height) / 10000));
        results.innerHTML = `<span>${BMI}<span/>`;
      }
    });
}
calculateBmi();
