var feedback =  document.querySelector(".button-feedback");  
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-close");
var overlay = document.querySelector(".overlay");

 feedback.addEventListener("click", function(evt) {
    	evt.preventDefault();
      popup.classList.add("modal-show");
      overlay.classList.add("overlay-hidden"); 
    })

  close.addEventListener("click", function(evt) {
    	evt.preventDefault();
      popup.classList.remove("modal-show");
      overlay.classList.remove("overlay-hidden");    
    })