var operationButtons = document.getElementsByClassName('operation-button');

var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');

var resultBox = document.getElementById('resultBox');

function makeOperation(operationCode) {
  var number1 = Number(input1.value);
  var number2 = Number(input2.value);

  if (operationCode === "+") {
    var result = sum(number1, number2);
  } else if (operationCode === "-") {
    var result = minus(number1, number2);
  } else if (operationCode === "*") {
    var result = multiply(number1, number2);
  } else if (operationCode === "/") {
    var result = divide(number1, number2);
  } else {
    // window.alert('operation is unknown');
    resultBox.innerHTML = 'operation is unknown';
  }
  // window.alert(result);
  resultBox.innerHTML = result;
}

function onOperationButtonClick(eventObject) {
  var clickedElement = eventObject.currentTarget;
  var operation = clickedElement.innerHTML;
  makeOperation(operation);
  
}

for (var i = 0; i < operationButtons.length; i++) {
  var button = operationButtons[i];
  button.addEventListener('click', onOperationButtonClick);
}