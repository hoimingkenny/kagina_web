// Jquery Smooth Scroll

// $("#hero a").on("click", function(e) {
//   if(this.hash !== ""){
//     e.preventDefault();

//     const hash = this.hash;

//     $("html, body").animate(
//       {
//         scrollTop: $(hash).offset().top
//       },
//       800
//     );
//   }
// });

const scroll = new SmoothScroll('#hero a[href*="#"]', {
  speed: 800
});


$(document).ready(function(){
  $('.post-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: $(".next"),
    prevArrow: $(".prev")
  });
});