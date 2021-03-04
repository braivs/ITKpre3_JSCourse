// Нахожу массив кнопок
var buttons = document.getElementsByTagName('button');

var numberButtons = []; // это массив для чисел
var operationButtons = []; // это массив для операторов

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
function numberButtonClickListener(e) {
  var numberButton = e.currentTarget;
  if (operation !== undefined) {
    result.value = "";
    result.value = result.value + numberButton.innerHTML;
  }
  else if (result.value === '0') {
    result.value = numberButton.innerHTML;
    number1 = result.value; //сохранил число для расчёта
  } else if (operation === undefined){
    result.value = result.value + numberButton.innerHTML;
    console.log(result.value);
    number1 = result.value; //сохранил число для расчёта
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


for (let i = 0; i < operationButtons.length; i++) {
  operationButtons[i].addEventListener("click", operatorButtonClickListener);
}

