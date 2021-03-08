var slider1 = {
  imagesUrls: [],
  curruntImageIndex: 0,
  showPrevBtn: document.getElementById('show-prev-btn'),
  showNextBtn: document.getElementById('show-next-btn'),
  slideImage: document.getElementById('slide-img'),

  start: function () {
    // subscribe to events
    this.showPrevBtn.addEventListener('click', this.onShowPrevBtnClick);
    this.showNextBtn.addEventListener('click', this.onShowNextBtnClick);

    // create images array
    this.imagesUrls.push('img/slide1.jpg');
    this.imagesUrls.push('img/slide2.jpg');
    this.imagesUrls.push('img/slide3.jpg');
    this.imagesUrls.push('img/slide4.jpg');

    this.slideImage.src = this.imagesUrls[this.curruntImageIndex];
    this.showPrevBtn.disabled = true;
  },

  onShowPrevBtnClick: function(e) {
    this.curruntImageIndex--;
    this.slideImage.src = this.imagesUrls[this.curruntImageIndex];
    this.showNextBtn.disabled = false;

    // disabled next button if need
    if (this.curruntImageIndex === 0) {
      showPrevBtn.disabled = true;
    }
  },

  onShowNextBtnClick: function(e) {
    this.curruntImageIndex++;
    this.slideImage.src = this.imagesUrls[this.curruntImageIndex];
    this.showPrevBtn.disabled = false;

    // disabled next button if need
    if (this.curruntImageIndex === (this.imagesUrls.length - 1)) {
      this.showNextBtn.disabled = true;
    }
  }
}
