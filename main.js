// Smooth Scroll
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800
});

// const scroll1 = new SmoothScroll('#button-bar a[href*="#"]', {
//   speed: 800,
// });

// Slick
$(document).ready(function () {
  $(".post-wrapper").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    // infinite: false,
    nextArrow: $(".next"),
    prevArrow: $(".prev"),
    responsive: [
      {
        breakpoint: 1200,
        settings: "unslick"
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  })
});

//Humburger Meun
const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(".header .nav-bar .nav-list ul a");
const meun_item_hover = document.querySelectorAll("#header .nav-list ul li:hover a");
const header = document.querySelector(".header.container");
const home_button = document.querySelector(".header-brand img");
const button_bar = document.querySelector("#button-bar .button-bar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

// Meun Bar Darken
document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 570) {
    header.style.backgroundImage = "url('')";
    home_button.src = "./logo/Kagina-Logo_W.png";
    header.style.backgroundColor = "#5B7781";
    header.style.transition = "background 1s";
    button_bar.style.visibility = "visible";
    button_bar.style.opacity = "1";
    menu_item.forEach((item) => {
      item.style.color = "white";
    })
    meun_item_hover.forEach((item) => {
      item.style.color = "red";
    })
    console.log(menu_item);
  
  } else {
    header.style.backgroundColor = 'transparent';
    home_button.src = "./logo/Kagina-Logo_B.png";
    header.style.backgroundImage =
      "url('./background/background.jpg')";
    button_bar.style.visibility = "hidden";
    button_bar.style.opacity = "0";
    menu_item.forEach((item) => {
      item.style.color = "#5B7781";
    })
  }
});

// Close Hamburger when click
menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
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
