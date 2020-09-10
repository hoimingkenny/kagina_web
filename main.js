// Slick Js for Landing Page - treatment
var sliderElem = $(".post-wrapper"),
    sliderBool = false,
    sliderBreakpoint = 1200,
    sliderSettings = {
      nextArrow: $(".next"),
      prevArrow: $(".prev"),
      slidesToShow: 1, 
      slidesToScroll: 1, 
      mobileFirst: true,
      responsive: [
            {
                breakpoint: sliderBreakpoint,
                settings: "unslick"
            }
        ]
    };
function sliderInit() {
    if (window.innerWidth <= sliderBreakpoint) {
        if (sliderBool == false) {
            sliderElem.slick(sliderSettings);
            sliderBool = true;
        }
    } else {
        sliderBool = false;
    }
}

// Only execute once at the begining
$(document).ready(function(){
  sliderInit();
});

// resize
$(window).resize(function () {
  sliderInit();
  console.log(window.innerWidth)
});

// Rellax Parallel
rellax = new Rellax('.rellax');


//Card-flip
var card = document.querySelectorAll('.treatment-card');

card.forEach((item) => {
  item.addEventListener('click', function(){
    item.classList.toggle('is-flipped');
  })
});
