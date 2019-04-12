let feedback = document.querySelectorAll('.feedback__description'),
    loginFeedback = document.querySelectorAll('.feedback__subtitle'),
    btnBack = document.querySelector('.feedback__button--left'),
    btnNext = document.querySelector('.feedback__button--right');

let slideIndex = 1;

showSlides(slideIndex);

function showSlides(n){
  if (n < 1){
    slideIndex = feedback.length;
  }
  if (n > feedback.length){
    slideIndex = 1;
  }

  feedback.forEach((item) => item.style.display = 'none');
  loginFeedback.forEach((item) => item.style.display = 'none');

  feedback[slideIndex - 1].style.display = 'block';
  loginFeedback[slideIndex - 1].style.display = 'block';
}

function plusSlide(n){
  showSlides(slideIndex += n);
}

function currentSlide(n){
  showSlides(slideIndex = n);
}

btnBack.addEventListener('click',function(){
  plusSlide(-1);
});

btnNext.addEventListener('click', function(){
  plusSlide(1);
});




 