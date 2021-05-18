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
let hasBeenCalculated = false;
let operationArr = [];

//MAIN EVENT LISTENER FOR BUTTON PRESS
keys.addEventListener("click", (event) => {
  if (!event.target.closest("button")) return;

  const key = event.target;
  const keyValue = key.textContent;
  const type = key.dataset.type;
  calculator.dataset.previousKeyValue = "";

  //NUMBER (INCLUDING DECIMAL POINT)
  if (type === "number") {
    //Prevents duplicate decimal points
    if (operationArr.length > 0 && keyValue === ".") {
      const dotCheck = operationArr[operationArr.length - 1].includes(".");
      if (dotCheck === true) {
        return;
      }
    }

    operation.textContent += keyValue;
    operationArr = operation.textContent.trim().split(" ");
    calculator.dataset.previousKeyType = type;
  }

  //OPERATOR
  //Restricting operation to one operator per calculation, but also allowing "-" to be both an indicator of value and an operator

  if (
    type === "operator" &&
    (calculator.dataset.previousKeyType === "number" || keyValue === " - ") &&
    !operatorUsed
  ) {
    if (keyValue !== " - ") {
      operatorUsed = true;
    }

    operation.textContent += keyValue;
    calculator.dataset.previousKeyType = type;
    calculator.dataset.firstNumber = operation.textContent;
    operationArr = operation.textContent.trim().split(" ");

    //Allows minus to be an indicator of value as well as an operator
    if (keyValue === " - " && operationArr[0] !== "-") {
      operatorUsed = true;
    }

    if (operationArr[0] === "-") {
      const negative = operationArr[0] + operationArr[1];
      calculator.dataset.firstNumber = negative;
    }
    calculator.dataset.operator = keyValue;
  }

  //EQUALS BUTTON
  if (type === "equal") {
    hasBeenCalculated = true;
    const firstNumber = parseFloat(calculator.dataset.firstNumber);
    const secondNumber = parseFloat(operationArr[operationArr.length - 1]);
    const operator = calculator.dataset.operator;

    if (operator === " + ") {
      result.textContent = firstNumber + secondNumber;
    } else if (operator === " - ") {
      result.textContent = firstNumber - secondNumber;
    } else if (operator === " × ") {
      result.textContent = firstNumber * secondNumber;
    } else if (operator === " ÷ ") {
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
