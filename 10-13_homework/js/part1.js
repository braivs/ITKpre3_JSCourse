function setMyNameToAllInputs() {
  var input = document.getElementsByTagName('input');
  var name = 'BriWS';
  input[0].value = name;
  input[1].value = name;
  input[2].value = name;
}

function setMyLastNameToAllInputs() {
  var input = document.getElementsByTagName('input');
  var name = 'Ustyugov'
  input[0].value = name;
  input[1].value = name;
  input[2].value = name;
}

function changeValue(id, newValue) {
  var input = document.getElementById(id);
  input.value = newValue;
}

// setMyLastNameToAllInputs();
// setMyNameToAllInputs();
changeValue('inputId1', 'BriWS');
changeValue('inputId2', 'Ustyugov');
changeValue('inputId3', 'Yurevich');

function setError(id) {
  document.getElementById(id).className = 'error';
}

setError('inputId1');
setError('inputId2');
setError('inputId3');

// setError('div-id');
// setError('textarea-id');

function getSum(number1, number2) {
  return parseInt(number1) + parseInt(number2);
}
var result1 = getSum(23, 34);
console.log(result1);
var result2 = getSum(3434, 12);
console.log(result2);
var result3 = getSum(23, 23);
console.log(result3);

function sayHello() {
  console.log('BriWS');
}

setTimeout(sayHello, 1000);
// setTimeout(setError, 1000);
function timeoutError() {
  setError('div-id');
  setError('textarea-id');
}
setTimeout(timeoutError, 1000);

function hideElement(id) {
  document.getElementById(id).style.visibility = 'hidden'; 
}

function showElement(id) {
  document.getElementById(id).style.visibility = 'visible';
}

i = 0;
// setInterval(() => {
  //   i++;
  //   changeValue('counterInputId', i);
  // }, 1000);
setInterval(function () {
  i++;
  changeValue('counterInputId', i);
}, 1000);