var index = -1;

var values = [3, 11, 34, 57, 80, 100]
var none = 3;
var one = 3;
var two = 11;
var three = 3;
var four = 3;
var five = 3;

window.onload = function() {
  SlideImages = document.getElementsByClassName('FrameImage');
  bar = new ldBar("#loadingBar");
}


function SetBar(){
  bar.set(100)
}



function Next(){
  if (index >= 5) {
    //LAST Picture
    index = 5;
  } else {
  index += 1;
  bar.set(values[index])
  UpdateSlide();
};

};




function UpdateSlide(){
  if (index != 0) {
    SlideImages[index - 1].style.display = "none";
  };
  SlideImages[index].style.display = "block";
};
