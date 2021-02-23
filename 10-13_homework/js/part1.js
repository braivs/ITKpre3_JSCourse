function setMyNameToAllInputs() {
  var input = document.getElementsByTagName("input");
  var name = "BriWS";
  input[0].value = name;
  input[1].value = name;
  input[2].value = name;
}

function setMyLastNameToAllInputs() {
  var input = document.getElementsByTagName("input");
  var name = "Ustyugov"
  input[0].value = name;
  input[1].value = name;
  input[2].value = name;
}

function changeValue(newValue) {
  var input = document.getElementsByTagName("input");
  input[0].value = newValue;
  input[1].value = newValue;
  input[2].value = newValue;
}

// setMyLastNameToAllInputs();
// setMyNameToAllInputs();
changeValue("BriWS");
changeValue("Ustyugov");
changeValue("Yurevich");

function setError(id) {
  document.getElementById(id).className = 'error';
}

setError('inputId1');
setError('inputId2');
setError('inputId3');

// setError("div-id");
// setError("textarea-id");

function getSumm(number1, number2) {
  return number1 + number2;
}
var result1 = getSumm(23, 34);
console.log(result1);
var result2 = getSumm(3434, 12);
console.log(result2);
var result3 = getSumm(23, 23);
console.log(result3);

function sayHello() {
  console.log('BriWS');
}

setTimeout(sayHello, 1000);
// setTimeout(setError, 1000);
function timeoutError() {
  setError("div-id");
  setError("textarea-id");
}
setTimeout(timeoutError, 1000);

function hideElement(id) {
  
  
}