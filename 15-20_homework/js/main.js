// нашли инпуты откуда брать числа
var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');

// нашли span куда выводить результат
var resultBox = document.getElementById('resultBox');

// Присваивание результата в зависимости от пришедшего оператора
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
    resultBox.innerHTML = 'operation is unknown';
  }
  resultBox.innerHTML = result;
}