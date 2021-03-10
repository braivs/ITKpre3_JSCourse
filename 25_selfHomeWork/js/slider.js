var slider1 = {
  slideElements: document.getElementById('slide').getElementsByTagName('img'), // нахожу все картинки в блоке slide
  activeSlide: 0, // сначала выбран нулевой слайд
  goLeftButton: document.getElementById('go-left'), // кнопка налево
  goRightButton: document.getElementById('go-right'), // кнопка направо:

  start: function () {
    var that = this;

    // subscribe to events
    this.goLeftButton.addEventListener('click', function (e) {
      that.changeSlideLeft(e);
    });
    this.goRightButton.addEventListener('click', function (e) {
      that.changeSlideRight(e);
    });
  },

  changeSlideRight: function () {
    if (this.activeSlide === this.slideElements.length - 1) { // выход за границу справа = вернуться к началу
      this.activeSlide = 0;
      this.slideElements[this.slideElements.length - 1].classList.remove('show');
      this.slideElements[this.activeSlide].classList.add('show');
    } else { // обычный случай
      this.slideElements[this.activeSlide].classList.remove('show');
      this.slideElements[this.activeSlide + 1].classList.add('show');
      this.activeSlide++;
    }
  },

  changeSlideLeft: function() {
    // выход за границу слева = переход к последнему
    if (this.activeSlide === 0) {
      this.slideElements[this.activeSlide].classList.remove('show');
      this.slideElements[this.slideElements.length - 1].classList.add('show');
      this.activeSlide = this.slideElements.length - 1;
    } else { // обычный случай
      this.slideElements[this.activeSlide].classList.remove('show');
      this.slideElements[this.activeSlide - 1].classList.add('show');
      this.activeSlide--;
      if (this.activeSlide < 0) { // чтобы активный слайд не стал отрицательным
        this.activeSlide = 0;
      }
    }
  }
}

var slider2 = {
  addresses: [ // create image array
    'img/slide1.jpg',
    'img/slide2.jpg',
    'img/slide3.jpg',
    'img/slide4.jpg',
    'img/slide5.jpg'
  ],
  goLeftButton: document.getElementById('go-left'), // кнопка налево
  goRightButton: document.getElementById('go-right'), //кнопка направо
  slideElement: document.getElementById('slide').getElementsByTagName('img')[0], // image in block slide
  activeSlide: 0, // number of slide, slide no by default

  start: function () {
    var that = this;

    // subscribe to events
    this.goLeftButton.addEventListener('click', function (e) {
      that.changeSlideLeft(e);
    });
    this.goRightButton.addEventListener('click', function (e) {
      that.changeSlideRight(e);
    });
  },

  changeSlideRight: function () {
    // debugger;
    if (this.activeSlide === (this.addresses.length - 1)) { // значит вышел за макс. слайд и надо к началу перейти
      this.activeSlide = 0;
      this.slideElement.src = this.addresses[this.activeSlide];
    } else { // стандартная ситуация
      this.activeSlide++;
      this.slideElement.src = this.addresses[this.activeSlide];
    }
  },

  changeSlideLeft: function () {
    if (this.activeSlide === 0) {
      this.activeSlide = this.addresses.length - 1;
      this.slideElement.src = this.addresses[this.activeSlide];
    } else {
      this.activeSlide--;
      this.slideElement.src = this.addresses[this.activeSlide];
    }
  }

}



