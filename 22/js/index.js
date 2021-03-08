// work with car 
car1.start();
// responsibility 


// find elements
var showPrevBtn = document.getElementById('show-prev-btn');
var showNextBtn = document.getElementById('show-next-btn');
var slideImage = document.getElementById('slide-img');

// subscribe to events
showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

// create images array
var imagesUrls = [];
imagesUrls.push('img/slide1.jpg');
imagesUrls.push('img/slide2.jpg');
imagesUrls.push('img/slide3.jpg');
imagesUrls.push('img/slide4.jpg');

var curruntImageIndex = 0;
slideImage.src = imagesUrls[curruntImageIndex];
showPrevBtn.disabled = true;

// functions definitions
function onShowPrevBtnClick() {
  curruntImageIndex--;
  slideImage.src = imagesUrls[curruntImageIndex];
  showNextBtn.disabled = false;

  // disabled next button if need
  if (curruntImageIndex === 0) {
    showPrevBtn.disabled = true;
  }
}

function onShowNextBtnClick() {
  curruntImageIndex++;
  slideImage.src = imagesUrls[curruntImageIndex];
  showPrevBtn.disabled = false;

  // disabled next button if need
  if (curruntImageIndex === (imagesUrls.length - 1)) {
    showNextBtn.disabled = true;
  }
}