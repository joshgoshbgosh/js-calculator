let calculation = []

const display = document.querySelector(".calculator-screen");
const $operator = document.querySelectorAll(".operator");
const number1 = document.querySelectorAll(".number");
const long0 = document.querySelectorAll("number button-lg");
const myAnswer = document.querySelectorAll("equal-sign");

function pushNumber(digit) {
  console.log("digit", digit)
  calculation.push(digit)
  display.setAttribute("value", calculation.toString());
  console.log("display", display)
}




function pushOperator(opt) {
  console.log("more", opt)
  calculation.push(opt)

}




function calculate(answer) {
  console.log("give me the", calculation)

  let num1 = '', num2 = '', operator;
  for (let i = 0; i < calculation.length; i++) {
    if (['+', '-', '*', '/'].includes(calculation[i])) {
      operator = calculation[i];
    } else if (operator) {
      num2 = num2 + calculation[i];
    } else {
      num1 = num1 + calculation[i];
    }
  }
  console.log(num1, operator, num2);
  let result;
  switch (operator) {
    case "+":
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case "-":
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case "/":
      result = parseFloat(num1) / parseFloat(num2);
      break;
    case "*":
      result = parseFloat(num1) * parseFloat(num2);
      break;
  }
alert(result);
}




function reset() {
  calculation = []

}
