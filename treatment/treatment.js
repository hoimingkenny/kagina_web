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

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;

  if (scroll_position > 50) {
    header.style.backgroundImage = "url('')";
    home_button.src = "../logo/Kagina-Logo_W.png";
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
    home_button.src = "../logo/Kagina-Logo_B.png";

    button_bar.style.height = '0';
    menu_item.forEach((item) => {
      item.style.color = "white";
    })

    hamburger_span.forEach((item) => {
      item.style.backgroundColor = '#95C6D1';
    })
  }
});  

$(document).ready(function(){
button_bar.style.height = "0";

// button_bar.style.visibility = "hidden";
// button_bar.style.opacity = "0";
});