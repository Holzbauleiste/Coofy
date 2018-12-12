window.onload = function() {
  PopUp = document.getElementById('Popup');
  Content = document.getElementById('Popup-Content');


  PopUp.style.display = "block";
};


window.addEventListener("click", function(event) {
  if (event.target == PopUp){
    PopUp.style.display = 'none';
  };
});
