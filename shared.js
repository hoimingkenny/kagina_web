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
const hamburger_span = document.querySelectorAll(".header .hamburger span");
const hamburger_last = document.querySelector(".header .hamburger span:last-of-type")
const backdrop = document.querySelector('#header .nav-list .backdrop');
// const hamburger_span_after = document.querySelector(".header .bar::after");
// const hamburger_span_before = document.querySelector(".header .bar::before");

hamburger.addEventListener("click", () => {
  var scroll_position = window.scrollY;
  // Open hamburger when scroll < 50
  if (!$(hamburger).hasClass('active') && scroll_position < 50){
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
    backdrop.classList.toggle("active");
    hamburger_span.forEach((item) => {
      item.style.backgroundColor = 'white';
    })
  // Open hamburger when scroll > 50
  } else if (!$(hamburger).hasClass('active') && scroll_position > 50){
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
    backdrop.classList.toggle("active");
    button_bar.style.height = '0';
    // hamburger_last.style.visibility = 'hidden';
  // Close hamburger when scroll < 50
  } else if ($(hamburger).hasClass('active') && scroll_position < 50){
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
    backdrop.classList.toggle("active");
    hamburger_span.forEach((item) => {
      item.style.backgroundColor = '#95C6D1';
    })
  // Close hamburger when scroll > 50
  } else if ($(hamburger).hasClass('active') && scroll_position > 50){
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
    backdrop.classList.toggle("active");
    button_bar.style.height = '43px';
    // hamburger_last.style.visibility = 'visible';
  }    
});

backdrop.addEventListener("click", () => {
  var scroll_position = window.scrollY;
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
  backdrop.classList.toggle("active");
  // Open hamburger when scroll < 50
  if ($(backdrop).hasClass('active') && scroll_position < 50){
    hamburger_span.forEach((item) => {
      item.style.backgroundColor = '#95C6D1';
    })
  } else if($(backdrop).hasClass('active') && scroll_position > 50){
    hamburger_span.forEach((item) => {
      item.style.backgroundColor = 'white';
    })
  }    
});

$(document).ready(function(){
  button_bar.style.height = "0";
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
    } else if ($(map_button).hasClass('active')){
      map_button.classList.toggle('active');
    } else if ($(timeTable_button).hasClass('active')){
      timeTable_button.classList.toggle('active');
    } else if($(mobile_menu).hasClass('active')){
      mobile_menu.classList.toggle("active");
      hamburger.classList.toggle('active');
    } else if($(backdrop).hasClass('active')){
      backdrop.classList.toggle("active");
    }
  });

// Button Bar
var timeTable_button = document.querySelector('.button-bar .timetable');
  timeTable_button.addEventListener('click', () => {
    timeTable_button.classList.toggle('active');
  });

