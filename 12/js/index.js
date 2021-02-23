function alertValues(elementParameter) {
  console.log(elementParameter.value);
  console.log(elementParameter.className);
}

var firstNameEl = document.getElementById('first-nameId');
alertValues(firstNameEl);

var lastNameEl = document.getElementById('last-nameId');
alertValues(lastNameEl);

var adressEl = document.getElementById('adressId');
var cityEl = document.getElementById('cityId');
var hobbiesEl = document.getElementById('hobbiesId');
var avatarEl = document.getElementById('avatarId');
var avatarContainerEl = document.getElementById('avatarContainerId');

firstNameEl.value = "NewName";
alertValues(firstNameEl);

lastNameEl.setAttribute('value', 'NewLastName');
alertValues(lastNameEl);

console.log('lastNameEl.className = ' + lastNameEl.className);
lastNameEl.className = 'default-input error-input';
lastNameEl.title = "Wrong last name";

avatarEl.src = 'https://sun9-67.userapi.com/s/v1/ig2/Xr-76BtbvzAr_4LoQU93NMBq75bORtMYLflyzy_d9eQ2Z7Sy9rHHSE-Yu-M-maNPpJC32BhHnA46dzvHXXHmIWhR.jpg?size=200x0&quality=96&crop=2,10,560,560&ava=1';

avatarEl.title = 'I will be React JS developer!';
cityEl.value = 'kiev';
hobbiesEl.value = "Выходить из круга перерождения";

avatarContainerEl.innerHTML = '<ul id=\'list\'><li>1</li><li>2</li></ul>'

var list = document.getElementById('list');