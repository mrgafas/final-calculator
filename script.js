let display = document.querySelector(".screen");
let buttons = document.querySelectorAll("button");
let clearButton = document.querySelector(".clear");

let firtValue = 0;
let operatorSign = "";
let waitForSecondValue = false;
let isDecimalNumber = false;

function resetAll() {
  firtValue = 0;
  operatorSign = "";
  waitForSecondValue = false;
  isDecimalNumber = false;
  display.textContent = firtValue;
}
clearButton.addEventListener("click", resetAll);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("digit")) {
      let content = button.value;

      if (waitForSecondValue) {
        display.textContent = "";
        waitForSecondValue = false;
      }
      /* 
    Si le nombre est 0 on ne peut plus taper 0 
    
    */
      if (display.textContent == "0") {
        display.textContent = content;
      } else {
        display.textContent += content;
      }
    } else if (button.classList.contains("decimal")) {
      /*
        si la chaine ne contient pas de point (n'est pas décimal), 
        on ajoute le point "." au nombre existant
        Sinon (le nombre visible dans display contient déjà  le Point ".") donc 
        n'ajoute plus de point.
        */

      if (isDecimalNumber == false) {
        display.textContent += ".";
        isDecimalNumber = true;
      }
    } else if (button.classList.contains("operator")) {
      // recupère la première valeur
      firtValue = Number(display.textContent);
      operatorSign = button.value;
      waitForSecondValue = true;
      isDecimalNumber = false; // ça donner la main une autre fois pour mettre la virgule
    } else if (button.classList.contains("egal")) {
      let curentValue = Number(display.textContent);
      console.log(firtValue, operatorSign, curentValue);
      let res = 0;
      switch (operatorSign) {
        case "+":
          res = firtValue + curentValue;
          break;
        case "-":
          res = firtValue - curentValue;
          break;
        case "/":
          res = firtValue / curentValue;
          break;
        case "*":
          res = firtValue * curentValue;
          break;

        default:
          res = curentValue;
          break;
      }
      operatorSign = "";
      display.textContent = res;
    }
  });
});
