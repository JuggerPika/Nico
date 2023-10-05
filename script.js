// fixed nav
let lastScroll = 0;
const defualOffSet = 60;
const defualwindow = 115;
const nav = document.querySelector('.nav');

const scrollPosition = () => window.pageYOffset || document.documentElement.scroll.top;
const containeHide = () => nav.classList.contains('hide');

window.addEventListener('scroll', () =>{
    
    if(scrollPosition() > lastScroll && !containeHide() && scrollPosition() > defualwindow){
        // scroll down
        nav.classList.add('hide');
        nav.clas
    }
    else if(scrollPosition() < lastScroll && containeHide() && scrollPosition() < defualwindow){
        // scroll up
        nav.classList.remove('hide');
    }

    lastScroll = scrollPosition();
})

// slider

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}