// == 1 ==
function removeById(id) {
  var element = document.getElementById(id);
  if (element !== null) { // == 2 ==
    element.remove();
  } else {
    console.log('id not found!');
  }
}

// == 3 ==
function addClassById(id, className) {
  var element = document.getElementById(id);
  if (element !== null) {
    element.classList.add(className);
  } else {
    console.log("id not found!");
  }
}

// == 4 == 
function hideClassById(id) {
  var element = document.getElementById(id);
  if (element !== null) {
    element.style.transition = "2s";
    element.style.width = '0px';
    setTimeout(function () {
      element.style.border = 'none';
    }, 1600);
  } else {
    console.log("id not found!");
  }
}

// == 4.2 == ?
function hideClassByIdV2(id) {
  var element = document.getElementById(id);
  if (element !== null) {
    element.style.transition = "2s";
    element.classList.add("zeroWidth");
    setTimeout(function () {
      element.style.border = 'none';
    }, 1600);
  } else {
    console.log("id not found!");
  }
}

// == 5 ==
function showClassById(id) {
  var element = document.getElementById(id);
  if (element !== null) {
    element.style.transition = "2s";
    element.style.border = '1px solid black';
    setTimeout(function () {
      element.classList.remove("zeroWidth");
    }, 1600);
    element.classList.remove("zeroWidth");
  } else {
    console.log("id not found!");
  }
}

// == 6 ==
var elements = document.getElementsByTagName('input');
function delHtmlByValue2(elements) {
  for (i = 0; i < elements.length; i++) {
    if (elements[i].value === "2") {
      elements[i].remove();
    }
  }
}

// == 7 ==
var elements = document.getElementsByTagName('input');
function delHtmlByValue3(elements) {
  for (i = 0; i < elements.length; i++) {
    if (elements[i].value === "3") {
      elements[i].remove();
    }
  }
}

// == 8 ==
function delHtmlByValue(elements, valueForDelete) {
  for (i = 0; i < elements.length; i++) {
    if (elements[i].value === valueForDelete) {
      elements[i].remove();
    }
  }
}

// == 9 ==
function delHtmlByClassHey(elements) {
  for (i = 0; i < elements.length; i++) {
    if (elements[i].className === 'hey') {
      elements[i].remove();
    }
  }
}

// == 10 == 
function hasClassHey(element) {
  if (element.className === 'hey') {
    return true;
  } else {
    return false;
  } 
}



// == 11 ==
// Вызов: removeElementIfConditionsTrue(elements, hasClassHey)
function removeElementIfConditionsTrue(elements, predicate) {
  for (i = 0; i < elements.length; i++) {
    if (predicate(elements[i]) === true) {
      elements[i].remove();
    }
  }
} 