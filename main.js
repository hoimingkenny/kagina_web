// Smooth Scroll
const scroll = new SmoothScroll('#hero a[href*="#"]', {
  speed: 800
});

// Slick
$(document).ready(function(){
  $('.post-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: $(".next"),
    prevArrow: $(".prev")
  });
});

//Humburger Meun
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_meun = document.querySelector('.header .nav-bar .nav-list ul');
const meun_item = document.querySelector('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', ()=>{
  hamburger.classList.toggle('active'); 
  mobile_meun.classList.toggle('active');
})

// Meun Bar Darken
document.addEventListener('scroll', ()=>{
  var scroll_position = window.scrollY;
  if (scroll_position > 500){
    header.style.backgroundColor = '#5B7781'
  } else{
    header.style.backgroundColor = 'transparent'
  }
})

meun_item.forEach(item => {
  item.addEventListener('click', () =>{
    hamburger.classList.toggle('active'); 
    mobile_meun.classList.toggle('active');
  })
})
