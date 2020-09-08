
var calculation = []

const display = document.querySelector(".calculator-screen");
const operator = document.querySelectorAll(".operator");
const number1 = document.querySelectorAll(".number");
const long0 = document.querySelectorAll("number button-lg");
const myAnswer = document.querySelectorAll("equal-sign");

function pushNumber(digit){
  console.log("digit",digit)
  calculation.push(digit)
  display.setAttribute("value", calculation.toString());
  console.log("display",display)
}



function pushOperator(opt){
  console.log("more",opt)
  calculation.push(opt)

}



function calculate(answer){
  console.log("give me the",answer,calculation)
}



function reset(){
  calculation =[]

}
