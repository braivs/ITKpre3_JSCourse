function onCountButtonClick() {
  var select = document.getElementsByTagName('select')[0];
  selectedIndex = select.selectedIndex;
  var operation = select.options[selectedIndex].text;
  // console.log(operation);
  makeOperation(operation);
}

//добавляю обработчик на count кнопку
var countButton = document.getElementsByTagName('button')[0];
countButton.addEventListener('click',onCountButtonClick);