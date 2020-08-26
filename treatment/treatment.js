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
  if (scroll_position > 570) {
    header.style.backgroundImage = "url('')";
    home_button.src = "../logo/Kagina-Logo_W.png";
    header.style.backgroundColor = "#5B7781";
    header.style.transition = "background 1s";
  
  } else {
    header.style.backgroundColor = 'transparent';
    home_button.src = "../logo/Kagina-Logo_B.png";
    header.style.backgroundImage =
      "url('../background/cloud.png')";
  }
});

// Close Hamburger when click
menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});