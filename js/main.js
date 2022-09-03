// Slick Js for Landing Page - treatment
var sliderElem = $(".post-wrapper"),
    sliderBool = false,
    sliderBreakpoint = 768,
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

// Meun Bar Darken
document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;

  if (scroll_position > 50) {
    header.style.backgroundImage = "url('')";
    home_button.src = "static/logo/Kagina-Logo_W.png";
    header.style.backgroundColor = "#5B7781";
    header.style.transition = "background 1s";

    button_bar.style.height = '46px';
    menu_item.forEach((item) => {
      item.style.color = "white";
    });

    hamburger_span.forEach((item) => {
      item.style.backgroundColor = 'white';
    })
    
  } else {
    header.style.backgroundColor = 'transparent';
    home_button.src = "static/logo/Kagina-Logo_B.png";

    button_bar.style.height = '0';
    menu_item.forEach((item) => {
      item.style.color = "white";
    })

    hamburger_span.forEach((item) => {
      item.style.backgroundColor = '#95C6D1';
    })
  }
});