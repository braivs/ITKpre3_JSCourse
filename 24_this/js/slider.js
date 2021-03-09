var slider1 = {
  imagesUrls: [],
  currentImageIndex: 0,
  showPrevBtn: document.getElementById('show-prev-btn'),
  showNextBtn: document.getElementById('show-next-btn'),
  slideImage: document.getElementById('slide-img'),

  start: function () {
    var that = this;

    // subscribe to events
    this.showPrevBtn.addEventListener('click', function(e) {
      that.onShowPrevBtnClick(e);
    });
    this.showNextBtn.addEventListener('click', function(e) {
      that.onShowNextBtnClick(e);
    });

    // create images array
    this.imagesUrls.push('img/slide1.jpg');
    this.imagesUrls.push('img/slide2.jpg');
    this.imagesUrls.push('img/slide3.jpg');
    this.imagesUrls.push('img/slide4.jpg');

    this.slideImage.src = this.imagesUrls[this.currentImageIndex];
    this.showPrevBtn.disabled = true;
  },

  onShowPrevBtnClick: function(e) {
    this.currentImageIndex--;
    this.slideImage.src = this.imagesUrls[this.currentImageIndex];
    this.showNextBtn.disabled = false;

    // disabled next button if need
    if (this.currentImageIndex === 0) {
      this.showPrevBtn.disabled = true;
    }
  },

  onShowNextBtnClick: function(e) {
    this.currentImageIndex++;
    this.slideImage.src = this.imagesUrls[this.currentImageIndex];
    this.showPrevBtn.disabled = false;

    // disabled next button if need
    if (this.currentImageIndex === (this.imagesUrls.length - 1)) {
      this.showNextBtn.disabled = true;
    }
  }
}
