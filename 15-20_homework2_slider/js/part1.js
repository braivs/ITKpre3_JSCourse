// нахожу все картинки в блоке slide:
var slideBox = document.getElementById('slide');
var slideElements = slideBox.getElementsByTagName('img');
// сначала выбран нулевой слайд:
var activeSlide = 0;
// кнопка налево:
var goLeftButton = document.getElementById('go-left');
// кнопка направо:
var goRightButton = document.getElementById('go-right');

// последний номер слайда:
maxSlide = slideElements.length - 1;

function changeSlideRight() {
    if (activeSlide === maxSlide) { // выход за границу справа = вернуться к началу
    activeSlide = 0;
    slideElements[maxSlide].classList.remove('show');
    slideElements[activeSlide].classList.add('show');
  } else { // обычный случай
    slideElements[activeSlide].classList.remove('show');
    slideElements[activeSlide + 1].classList.add('show');
    activeSlide++;
  }
}

function changeSlideLeft() {
  // выход за границу слева = переход к последнему
  if (activeSlide === 0) {
    slideElements[activeSlide].classList.remove('show');
    slideElements[maxSlide].classList.add('show');
    activeSlide = maxSlide;
  } else { // обычный случай
    slideElements[activeSlide].classList.remove('show');
    slideElements[activeSlide - 1].classList.add('show');
    activeSlide--;
    if (activeSlide < 0) { // чтобы активный слайд не стал отрицательным
      activeSlide = 0;
    }
  }
}

goLeftButton.addEventListener('click', changeSlideLeft);
goRightButton.addEventListener('click', changeSlideRight);
