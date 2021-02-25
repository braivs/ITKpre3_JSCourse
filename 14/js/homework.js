// == Задача 1: поле ввода пароля ==
var showPassButton = document.getElementsByTagName('button')[0];
function onUnderAsterixClick() {
  var inputPass = document.getElementsByTagName('input')[0];
  if (inputPass.type === 'password') {
    inputPass.type = "text";
  } else if (inputPass.type === 'text') {
    inputPass.type = "password";
  }
}  
showPassButton.addEventListener('click', onUnderAsterixClick);

// == Задача 1.2: поле ввода пароля ==
var showPassButtonMouse = document.getElementsByTagName('button')[1];
var inputPass2 = document.getElementsByTagName('input')[1];
function onMouseDown() {
  inputPass2.type = "text";
}
function onMouseUp() {
  inputPass2.type = "password";
}
showPassButtonMouse.addEventListener("mousedown", onMouseDown);
showPassButtonMouse.addEventListener("mouseup", onMouseUp);

// == Задача 2: изменение статуса в ВК ==
var changeStatusSpan = document.getElementById("change-status-span");
var popupWindow = document.getElementById('popup');
var popupButton = document.getElementById('popup-button');
var popupInput = document.getElementById('popup-input');
function onChangeStatusClick() {
  popupWindow.style.display = 'block';
}
function onPopupButtonClick() {
  popupWindow.style.display = 'none';
  if (popupInput.value === '') {
    changeStatusSpan.innerText = 'set a status message';
    changeStatusSpan.style.color = "grey";
  } else {
    changeStatusSpan.innerText = popupInput.value;
    changeStatusSpan.style.color = "black";
  }
}
changeStatusSpan.addEventListener('click', onChangeStatusClick);
popupButton.addEventListener('click', onPopupButtonClick);

// == Задача 3: меняем местами значения ==
