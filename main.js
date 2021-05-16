//BASIC REQUIREMENTS
// take in first input print to display
//operator print to display
//take in second input if previous two steps complete
//print this operation to display
//return result to result display on equals

//LOGIC
//Limit calc to one operation at a time initially.
//if number type, and previous type wasn't operator - display number, set previous type as number.
//if type operator - save previous input as firstNumber, set previous type as operator. Save operator value.
// if previous type was operator update display with new number. Save new number as secondNumber
//create calculation based upon inputs on equals press. Print result to screen.
//A/C resets all global and local values,
//Ans prints the result to operation, and resets other values.

//FUTURE
//Delete button
//BIDMAS Calculations
//SqrRoot

//GLOBAL VARIABLES
const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator__keys");
const operation = document.querySelector(".operation");
const result = document.querySelector(".result");
let operatorUsed = false;
let isUserTyping = false;
let hasBeenCalculated = false;
let numAfterOperator = "";
let operationArr = [];

//MAIN EVENT LISTENER FOR BUTTON PRESS
keys.addEventListener("click", (event) => {
  if (!event.target.closest("button")) return;

  const key = event.target;
  const keyValue = key.textContent;
  //Do I need displayValue?
  const displayValue = operation.textContent;
  const type = key.dataset.type;
  calculator.dataset.previousKeyValue = "";

  //NUMBER (INCLUDING DECIMAL POINT)
  if (type === "number") {
    operationArr = operation.textContent.split("");

    if (keyValue === "." && operationArr[operationArr.length - 1] === ".")
      return;

    isUserTyping = true;
    operation.textContent += keyValue;

    if (isUserTyping && operatorUsed) {
      numAfterOperator += keyValue;
    }
    calculator.dataset.previousKeyType = type;
    // console.log(numAfterOperator);
  }

  //OPERATOR
  //Restricting operation to one operator per calculation, but also allowing "-" to be both an indicator of value and an operator

  if (
    type === "operator" &&
    (calculator.dataset.previousKeyType === "number" || keyValue === "-") &&
    !operatorUsed
  ) {
    if (keyValue !== "-") {
      operatorUsed = true;
    }
    isUserTyping = false;
    operation.textContent += keyValue;
    calculator.dataset.previousKeyType = type;
    calculator.dataset.operator = keyValue;
    calculator.dataset.firstNumber = displayValue;
    operationArr = operation.textContent.split("");

    if (keyValue === "-" && operationArr[0] !== "-") {
      operatorUsed = true;
    }
  }

  //console.log(operationArr, operatorUsed);

  //EQUALS BUTTON
  if (type === "equal") {
    hasBeenCalculated = true;
    const firstNumber = parseFloat(calculator.dataset.firstNumber);
    const secondNumber = parseFloat(numAfterOperator);
    const operator = calculator.dataset.operator;

    //console.log(firstNumber, operator, secondNumber);

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
    //clear display and result and reset all values
    result.textContent = "";
    operation.textContent = "";
    calculator.dataset.firstNumber = "";
    calculator.dataset.operator = "";
    numAfterOperator = "";
    operatorUsed = false;
    isUserTyping = false;
    hasBeenCalculated = false;
    operationArr.length = 0;
  }

  if (type === "answer") {
    //reset all values but print result to display and save that as firstNumber
    operation.textContent = result.textContent;
    result.textContent = "";
    calculator.dataset.firstNumber = operation.textContent;
    calculator.dataset.operator = "";
    numAfterOperator = "";
    operatorUsed = false;
    isUserTyping = false;
    hasBeenCalculated = false;
    operationArr.length = 0;
  }
});
