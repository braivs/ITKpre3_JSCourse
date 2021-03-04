// нашли массив кнопок
var operationElements = document.getElementsByClassName('operation-button');

// функция выполняема по клику, с объектом eventObject - который хранит в себе информацию о событии которое произошло. В данном случае кнопка на которую кликнули 
function onOperationButtonClick(eventObject) {
  var clickedElement = eventObject.currentTarget;
  var operation = clickedElement.innerHTML;
  makeOperation(operation);
}

// добавляем обработчики
for (var i = 0; i < operationElements.length; i++) {
  var button = operationElements[i];
  button.addEventListener('click', onOperationButtonClick);
}






