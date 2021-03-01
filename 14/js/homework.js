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
var buttonChangeValues = document.getElementById('change-values-btn');
var firstValue = document.getElementById('first-value')
var secondValue = document.getElementById('second-value')
function onChangeValuesClick(params) {
  var tempValue = secondValue.value;
  secondValue.value = firstValue.value;
  firstValue.value = tempValue;
}
buttonChangeValues.addEventListener('click', onChangeValuesClick);

// == Задача 4: Подсветка ошибки ввода ==
var inputNumbersParent = document.getElementById('numbersParent');
document.getElementById('numbersParent').addEventListener('input', function (e) {
  var currentInput = e.target;
  if (currentInput.value < 10 || currentInput.value > 50) {
    currentInput.classList.add('redBorder');
  } else {
    currentInput.classList.remove('redBorder');
  }
})

// == Задача 5 ==
var thumbnails = document.getElementById('thumbnails');
var fullSizeImg = document.getElementById('full-size-img');
thumbnails.addEventListener('click', function (event) {
  var currentImg = event.target;
  console.log(currentImg.dataset.srcFull)
  if (currentImg.dataset.srcFull === undefined) {
    fullSizeImg.style.visibility = 'hidden';
  } else {
    fullSizeImg.style.visibility = 'visible';
    fullSizeImg.src = currentImg.dataset.srcFull;
  }
})

// == Задача 6-7: Боковое выезжающее меню ==
var sidebarMenu = document.getElementById('sidebar-menu');
var gamburgerMenu = document.getElementById('gamburger-menu');
function addClassActiveListener() {
  if (sidebarMenu.classList.contains('active')) {
    sidebarMenu.classList.remove('active');
    gamburgerMenu.style.transform = 'rotate(180deg)'
  } else {
    sidebarMenu.classList.add('active');
    gamburgerMenu.style.transform = 'rotate(90deg)'
  }
}
gamburgerMenu.addEventListener('click', addClassActiveListener);