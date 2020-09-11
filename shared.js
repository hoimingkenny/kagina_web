// Smooth Scroll
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800
});

//Humburger Meun
const hamburger = document.querySelector(".header .nav-bar .nav-list .hamburger");
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
  if (scroll_position > 50) {
    header.style.backgroundImage = "url('')";
    home_button.src = "./logo/Kagina-Logo_W.png";
    header.style.backgroundColor = "#5B7781";
    header.style.transition = "background 1s";

    button_bar.style.height = '43px';

    menu_item.forEach((item) => {
      item.style.color = "white";
    });
    meun_item_hover.forEach((item) => {
      item.style.color = "red";
    });
  
  } else {
    header.style.backgroundColor = 'transparent';
    home_button.src = "./logo/Kagina-Logo_B.png";

    // button_bar.style.visibility = "hidden";
    // button_bar.style.opacity = "0";
    button_bar.style.height = '0';

    menu_item.forEach((item) => {
      item.style.color = "#5B7781";
    })
  }
});

$(document).ready(function(){
  button_bar.style.height = "0";
  // button_bar.style.visibility = "hidden";
  // button_bar.style.opacity = "0";
});

// Close Hamburger when click
menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

// Floating action button
var call_button = document.querySelector('.button-bar .call');
var map_button = document.querySelector('.button-bar .googleMap');
  call_button.addEventListener('click', () => {
    if ($(map_button).hasClass('active')){
      map_button.classList.toggle('active');
      call_button.classList.toggle('active');
    } else{
      call_button.classList.toggle('active');
    }
  });

  map_button.addEventListener('click', () => {
    if ($(call_button).hasClass('active')){
      call_button.classList.toggle('active');
      map_button.classList.toggle('active');
    } else{
      map_button.classList.toggle('active');
    }
  });

  $(window).scroll(function(){
    if ($(call_button).hasClass('active')){
      call_button.classList.toggle('active');
      // map_butto.classList.toggle('active');
    } else if  ($(map_button).hasClass('active')){
      map_button.classList.toggle('active');
    }
  });

// Button Bar
var timeTable_button = document.querySelector('.button-bar .timetable');
  timeTable_button.addEventListener('click', () => {
    timeTable_button.classList.toggle('active');
  });

