function logValue(id) {
  var el = document.getElementById(id);
  console.log(el.value);
}

function getValue(id) {
  var el = document.getElementById(id);
  return el.value;
}

  
var firstNameId = "first-nameId";
var lastNameId = "last-nameId";

logValue(firstNameId);
logValue(lastNameId);

var value = getValue(firstNameId);
console.log(value);
