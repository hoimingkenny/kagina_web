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
    autoplaySpeed: 2000,
    nextArrow: $(".next"),
    prevArrow: $(".prev"),
  });
});

//Humburger Meun
const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(".header .nav-bar .nav-list ul li a");
const header = document.querySelector(".header.container");
const home_button = document.querySelector(".header-brand img");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

// Meun Bar Darken
document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 600) {
    header.style.backgroundColor = "#5B7781";
    header.style.backgroundImage = "url('')";
    home_button.src = "./Kagina-Logo (2)_edited-04.png";
  
  } else {
    header.style.backgroundImage =
      "url('all_asset/landing_page/font image 2.png')";
    home_button.src = "Kagina-Logo (2)_edited-03.png";
  }
});

// Close Hamburger when click
menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});
