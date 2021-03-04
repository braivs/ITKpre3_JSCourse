// нашёл массив кнопок
var buttons = document.getElementsByTagName('button');
// нахожу куда выводить input
var result = document.getElementsByTagName('input')[0];

// определяю по какой кнопке кликнул и вывожу значения в input  
function onButtonClick(eventObject) {
  var clickedElement = eventObject.currentTarget;
  var buttonValue = clickedElement.innerHTML;
  result.value = result.value + buttonValue;
}

// добавляю обработчики
for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  button.addEventListener('click', onButtonClick);
}