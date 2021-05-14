// take in first input print to display
//operator print to display
//take in second input if previous two steps complete
//print this operation to display
//return result to result display on equals

const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator__keys");
const operation = document.querySelector(".operation");
const result = document.querySelector(".result");
let operatorUsed = false;
let isUserTyping = false;
let hasBeenCalculated = false;
let numAfterOperator = "";

keys.addEventListener("click", (event) => {
  if (!event.target.closest("button")) return;

  const key = event.target;
  const keyValue = key.textContent;
  const displayValue = operation.textContent;
  const type = key.dataset.type;

  calculator.dataset.previousKeyValue = "";

  if (type === "number") {
    isUserTyping = true;
    // if (displayValue === "0") {
    //   operation.textContent = keyValue;
    // } else {
    operation.textContent += keyValue;
    // }
    if (isUserTyping && operatorUsed) {
      numAfterOperator += keyValue;
    }
    calculator.dataset.previousKeyType = type;
  }
  // console.log(secondNumber);

  if (
    type === "operator" &&
    calculator.dataset.previousKeyType === "number" &&
    !operatorUsed
    // displayValue !== "0"
  ) {
    isUserTyping = false;
    operation.textContent += keyValue;
    calculator.dataset.previousKeyType = type;
    calculator.dataset.operator = keyValue;
    calculator.dataset.firstNumber = displayValue;
  }

  // if (userIsInTheMiddleOfTyping) {
  //   // calculator.dataset.secondNumber = //last number(S) + keyValue
  // }

  //Restricting operation to one operator per calculation
  const operationArr = operation.textContent.split("");

  if (
    operationArr.includes("x") ||
    operationArr.includes("÷") ||
    operationArr.includes("+") ||
    operationArr.includes("-")
  ) {
    operatorUsed = true;
  }

  //EQUALS BUTTON
  if (type === "equal") {
    hasBeenCalculated = true;
    const firstNumber = parseFloat(calculator.dataset.firstNumber);
    const secondNumber = parseFloat(numAfterOperator);
    const operator = calculator.dataset.operator;

    console.log(firstNumber, operator, secondNumber);

    if (operator === "+") {
      result.textContent = firstNumber + secondNumber;
    } else if (operator === "-") {
      result.textContent = firstNumber - secondNumber;
    } else if (operator === "x") {
      result.textContent = firstNumber * secondNumber;
    } else if (operator === "÷") {
      result.textContent = firstNumber / secondNumber;
    }
  }

  if (type === "all-clear") {
    //clear display and result
  }

  if (type === "delete") {
    //delete last input
    //if(!hasBeenCalculated) {
    // do deletion
    // }
  }

  //if number type, previous type wasn't operator - display number, set previous type as number
  // if previous type was operator update display with new number

  //if type operator - save previous input, highlight operator active, set previous type as operator.

  //create calculation based upon inputs on equals press
});
