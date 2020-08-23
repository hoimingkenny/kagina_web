// Smooth Scroll
const scroll = new SmoothScroll('#hero a[href*="#"]', {
  speed: 800
});

const scroll1 = new SmoothScroll('#button-bar a[href*="#"]'a, {
  speed: 800,
});

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
    header.style.backgroundColor = "#5B7781";
    header.style.backgroundImage = "url('')";
    home_button.src = "small_Kagina.png";


    // home_button.src = "large_Kagina.png";
    // home_button.style.marginTop = "1.2rem";
    // home_button.style.marginLeft = "0rem";
    // home_button.style.width = "180px";
    // home_button.style.height = "auto";
    
  } else {
    header.style.backgroundImage =
      "url('all_asset/landing_page/font image 2.png')";




    // home_button.src = "small_Kagina.png";
    // home_button.style.marginTop = "1rem";
    // home_button.style.marginLeft = "1.5rem";
    // home_button.style.height = "60px";
    // home_button.style.width = "auto";
  }
});

// Close Hamburger when click
menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});
