// Нахожу массив кнопок
var buttons = document.getElementsByTagName('button');

var numberButtons = []; // это массив для чисел
var operationButtons = []; // это массив для операторов

// вывод результата
var result = document.getElementsByTagName('input')[0];

// отделяю числа и операторы
for (var i = 0; i < buttons.length; i++) {
  if (buttons[i].className === '') {
    numberButtons.push(buttons[i]);
  } else if (buttons[i].className === 'operator') {
    operationButtons.push(buttons[i]);
  }
}

var number1; // переменная для сохранения первого числа
var number2; // переменная для сохранения второго числа
var operation; // переменная для сохранения значения операции на будущее

// листенер для цифровых кнопок
// TODO тут надо с комментариями описать логику
function numberButtonClickListener(e) {
  var numberButton = e.currentTarget;
  if (result.value === '0') {
    // Начало калькулятора 
    // Операция не определена && number1 && number2 не запомнены
    result.value = numberButton.innerHTML;
    number1 = numberButton.innerHTML; //сохранил число для расчёта
  } else if (operation === undefined) {
    result.value = result.value + numberButton.innerHTML;
    number1 = result.value; //сохранил число для расчёта
  } else if (operation !== undefined && result.value !== '' && number2 !== undefined) {
    result.value = '';
  } else if (operation !== undefined && result.value === '') {
    console.log('тут');
    result.value = result.value + numberButton.innerHTML;
    number2 = result.value; //сохранил число для расчёта
  }
  
  else if (operation !== undefined && number1 !== undefined && result.value ==='') {
    result.value = result.value + numberButton.innerHTML;
  }
  
  
}

// вешаю на все цифровые кнопки обработчик
for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", numberButtonClickListener);
}

// листенер для кнопок операций. Сохранение операции на будущее. Только если было введено первое число
function operatorButtonClickListener(e) {
  if (number1 !== undefined) {
    operation = e.currentTarget.innerHTML;
  }
}

function resultButtonClickListener(e) {
  
}

for (let i = 0; i < operationButtons.length; i++) {
  operationButtons[i].addEventListener("click", operatorButtonClickListener);
}

