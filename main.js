// take in first input print to display
//operator print to display
//take in second input if previous two steps complete
//print this operation to display
//return result to display on equals

const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator__keys");
const operation = document.querySelector(".operation");
let operatorUsed = false;

keys.addEventListener("click", (event) => {
  if (!event.target.closest("button")) return;

  const key = event.target;
  const keyValue = key.textContent;
  const displayValue = operation.textContent;
  const type = key.dataset.type;

  if (type === "number") {
    if (displayValue === "0") {
      operation.textContent = keyValue;
    } else {
      operation.textContent += keyValue;
    }
    calculator.dataset.previousKeyType = type;
  }

  if (
    type === "operator" &&
    calculator.dataset.previousKeyType === "number" &&
    !operatorUsed
    // displayValue !== "0"
  ) {
    operation.textContent += keyValue;
  }

  const operationArr = operation.textContent.split("");

  if (operationArr.includes("x")) {
    operatorUsed = true;
  }

  console.log(operationArr);
  // console.log(calculator.dataset.previousKeyType, keyValue);
  //if number type, previous type wasn't operator - display number, set previous type as number
  // if previous type was operator update display with new number

  //if type operator - save previous input, highlight operator active, set previous type as operator.

  //create calculation based upon inputs on equals press
});
