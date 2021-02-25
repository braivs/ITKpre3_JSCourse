function addErrorClass(elementId) {
 var firstName = document.getElementById('first-name');
 var lastName = document.getElementById('last-name');
 var address = document.getElementById('address');
}

function addErrorClass(elementId) {
  var element = document.getElementById(elementId);
  element.className = 'error-input';
}

function addErrorClassToAllInputs() {
  addErrorClass('first-name');
  addErrorClass('last-name');
  addErrorClass('address');
}

// window.setTimeout(addErrorClassToAllInputs, 2000);

var sendButton = document.getElementById('send-button');

function onSendButtonClick() {
  addErrorClass('first-name');
}

function onFirstNameKeyup() {
  addErrorClass('first-name');
}

sendButton.addEventListener('click', onSendButtonClick);

var firstNameEl = document.getElementById('first-name');

firstNameEl.addEventListener('keydown', onFirstNameKeyup);