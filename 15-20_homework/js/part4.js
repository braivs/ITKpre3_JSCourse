// Нахожу массив кнопок
var buttons = document.getElementsByTagName('button');

var numberButtons = []; // это массив для чисел
var operationButtons = []; // это массив для операторов

// вывод результата
var displayInputEl = document.getElementsByTagName('input')[0];
// кнопка равно
var resultButton = document.getElementById('equal');

// отделяю числа и операторы
for (var i = 0; i < buttons.length; i++) {
  if (buttons[i].className === '') {
    numberButtons.push(buttons[i]);
  } else if (buttons[i].className === 'operator') {
    operationButtons.push(buttons[i]);
  }
}

var firstNumber; // переменная для сохранения первого числа
var secondNumber; // переменная для сохранения второго числа
var operation; // переменная для сохранения значения операции на будущее

// листенер для цифровых кнопок
function numberButtonClickListener(e) {
  var numberButton = e.currentTarget;
  if (displayInputEl.value === '0') {
    // если начальное значение = 0, то заменяю его значением нажатой кнопки
    displayInputEl.value = numberButton.innerHTML;
  } else {
    // иначе дописываю
    displayInputEl.value = displayInputEl.value + numberButton.innerHTML;
  }
}

// вешаю на все цифровые кнопки обработчик
for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", numberButtonClickListener);
}

// листенер для кнопок операций. Сохранение операции на будущее. Только если было введено первое число
function operatorButtonClickListener(e) {
  operation = e.currentTarget.innerHTML;
  firstNumber = displayInputEl.value; //сохранил число для расчёта
  displayInputEl.value = '0';
}

function resultButtonClickListener(e) {

}

for (let i = 0; i < operationButtons.length; i++) {
  operationButtons[i].addEventListener("click", operatorButtonClickListener);
}

// листенер для кнопки равно
function resultButtonClickListener() {
  var secondNumber = Number(displayInputEl.value);
  firstNumber = Number(firstNumber);
  var result = 0;
  if (operation === "+") {
    var result = sum(firstNumber, secondNumber);
  } else if (operation === "-") {
    var result = minus(firstNumber, secondNumber);
  } else if (operation === "*") {
    var result = multiply(firstNumber, secondNumber);
  } else if (operation === "/") {
    var result = divide(firstNumber, secondNumber);
  } else {
    displayInputEl.value = 'operation is unknown';
  }
  displayInputEl.value = result;
}

// добавил листенер к кнопке равно
resultButton.addEventListener('click', resultButtonClickListener);

