// нахожу картинку в блоке slide:
var slideBox = document.getElementById('slide');
var slideElement = slideBox.getElementsByTagName('img')[0];

// кнопка налево:
var goLeftButton = document.getElementById('go-left');
// кнопка направо:
var goRightButton = document.getElementById('go-right');

// массив адресов картинок
var addresses = [
  'img/slide1.jpg',
  'img/slide2.jpg',
  'img/slide3.jpg',
  'img/slide4.jpg',
  'img/slide5.jpg'
];

var activeSlide = 0; // первый слайд по умолчанию, он же номер слайда
var maxSlide = addresses.length - 1; // номер максимального слайда + 1;

function changeSlideRight() {
  // debugger;
  if (activeSlide === maxSlide) { // значит вышел за макс. слайд и надо к началу перейти
    activeSlide = 0;
    slideElement.src = addresses[activeSlide];
  } else { // стандартная ситуация
    activeSlide++;
    slideElement.src = addresses[activeSlide];
  }
}

function changeSlideLeft() {
  if (activeSlide === 0) {
    activeSlide = maxSlide;
    slideElement.src = addresses[activeSlide];
  } else {
    activeSlide--;
    slideElement.src = addresses[activeSlide];
  }
}

goLeftButton.addEventListener('click', changeSlideLeft);
goRightButton.addEventListener('click', changeSlideRight);



