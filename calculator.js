
function add(a, b) { 
  result = a + b
  console.log(` The result is: ${result}`);
}



function subtract(a, b) {
  result =  a - b
  console.log(` The result is: ${result}`);
}



function multiply(a, b) {
  result = a * b
  console.log(` The result is: ${result}`);
}


function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by 0";
  }
  result =  a / b;
  console.log(` The result is: ${result}`);
}



function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "Invalid operator";
  }
}


module.exports = {
   add,
   subtract,
   multiply,
   divide,
   calculate
}
