
//(function) {
  //"use strict"
//   console.log(document.getElementsByClassName("number"))
// document.getElementsByClassName("number").addEventListener("click", pushNumber);
var calculation = []
function pushNumber(digit){
  console.log("digit",digit)
calculation.push(digit)

}


//}
function pushOperator(opt){
  console.log("more",opt)
calculation.push(opt)

}



function calculate(answer){
  console.log("give me the",answer,calculation)
}
