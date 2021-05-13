// take in first input print to display
//operator print to display
//take in second input if previous two steps complete
//print this operation to display
//return result to display on equals

// const numbers = document.querySelectorAll(".number");
// const allClearBtn = document.getElementById("all-clear");
// const deleteBtn = document.getElementById("delete");
// const equalsBtn = document.getElementById("equals");
// const operands = document.querySelectorAll(".operator");

const keys = document.querySelector(".calculator__keys");
const operation = document.querySelector(".operation");

keys.addEventListener("click", (event) => {
  if (!event.target.closest("button")) return;

  const key = event.target;
  const keyValue = key.textContent;
  // console.log(keyValue);
  const displayValue = operation.textContent;
  console.log(displayValue);

  operation.textContent = keyValue;
});
