// Smooth Scroll
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800
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
  if (scroll_position > 50) {
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
  
  } else {
    header.style.backgroundColor = 'transparent';
    home_button.src = "./logo/Kagina-Logo_B.png";
    // header.style.backgroundImage =
    //   "url('./background/background.jpg')";
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

// Floating action button
var action_call = document.querySelector('.button-bar .call');
var action_map = document.querySelector('.button-bar .googleMap');
  action_call.addEventListener('click', () => {
    if ($(action_map).hasClass('active')){
      action_map.classList.toggle('active');
      action_call.classList.toggle('active');
    } else{
      action_call.classList.toggle('active');
    }
  });

  action_map.addEventListener('click', () => {
    if ($(action_call).hasClass('active')){
      action_call.classList.toggle('active');
      action_map.classList.toggle('active');
    } else{
      action_map.classList.toggle('active');
    }
  });

  $(window).scroll(function(){
    if ($(action_call).hasClass('active')){
      action_call.classList.toggle('active');
      // action_map.classList.toggle('active');
    } else if  ($(action_map).hasClass('active')){
      action_map.classList.toggle('active');
    }
  })
