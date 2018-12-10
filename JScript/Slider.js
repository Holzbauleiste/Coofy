var index = -1;

window.onload = function() {
  SlideImages = document.getElementsByClassName('FrameImage');

}




function Next(){
  if (index >= 5) {
    //LAST Picture
    index = 5;

  } else {
  index += 1;
  UpdateSlide();
};

};



function UpdateSlide(){
  if (index != 0) {
    SlideImages[index - 1].style.display = "none";
  };
  SlideImages[index].style.display = "inline-block";
};
