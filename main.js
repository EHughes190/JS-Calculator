//BASIC REQUIREMENTS
// take in first input print to display
//operator print to display
//take in second input if previous two steps complete
//print this operation to display
//return result to result display on equals

//LOGIC
//if number type, and previous type wasn't operator - display number, set previous type as number.
// if previous type was operator update display with new number
//if type operator - save previous input, highlight operator active, set previous type as operator.
//create calculation based upon inputs on equals press

//FUTURE
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

//MAIN EVENT LISTENER FOR BUTTON PRESS
keys.addEventListener("click", (event) => {
  if (!event.target.closest("button")) return;

  const key = event.target;
  const keyValue = key.textContent;
  const displayValue = operation.textContent;
  const type = key.dataset.type;
  calculator.dataset.previousKeyValue = "";

  //NUMBER (INCLUDING DECIMAL POINT)
  if (type === "number") {
    isUserTyping = true;
    operation.textContent += keyValue;

    if (isUserTyping && operatorUsed) {
      numAfterOperator += keyValue;
    }
    calculator.dataset.previousKeyType = type;
    console.log(numAfterOperator);
  }

  //OPERATOR
  if (
    type === "operator" &&
    (calculator.dataset.previousKeyType === "number" || keyValue === "-") &&
    !operatorUsed
  ) {
    isUserTyping = false;
    operation.textContent += keyValue;
    calculator.dataset.previousKeyType = type;
    calculator.dataset.operator = keyValue;
    calculator.dataset.firstNumber = displayValue;
  }

  //Restricting operation to one operator per calculation
  const operationArr = operation.textContent.split("");
  //console.log(operationArr);

  if (operationArr[0] === "-")
    if (
      operationArr.includes("x") ||
      operationArr.includes("÷") ||
      operationArr.includes("+")
      //operationArr.includes("-")
    ) {
      operatorUsed = true;
    }

  //Allowing "-" to be used for both negative numbers and as an operator
  //if arr includes one of the operators and index[0] is "-" -> operatorUsed is true
  //if index[0] = "-" and arr doesn't contain another operator, operatorUsed is false
  //

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
    // console.log(
    //   calculator.dataset.firstNumber,
    //   calculator.dataset.operator,
    //   operatorUsed,
    //   numAfterOperator
    // );
  }

  if (type === "answer") {
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

  // if (type === "delete") {
  //   //delete last input
  //   const lastDigit = operationArr.pop();
  //   operation.textContent = operationArr.join("");

  //   if (
  //     lastDigit !== "+" ||
  //     lastDigit !== "-" ||
  //     lastDigit !== "x" ||
  //     lastDigit !== "÷"
  //   ) {
  //     numAfterOperator -= lastDigit;
  //   } else if (
  //     lastDigit === "+" ||
  //     lastDigit === "-" ||
  //     lastDigit === "x" ||
  //     lastDigit === "÷"
  //   ) {
  //     operatorUsed = false;
  //     calculator.dataset.previousKeyType = "number";
  //   }
  // }

  // console.log(calculator.dataset.previousKeyType);
});
