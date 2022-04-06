// new Swiper('.slider__inner', {
//     slidesPerView: 2.9,
//     spaceBetween: 70,
//     loop: true,
//     slidesPerGroup: 1,
//     autoplay:{
//         delay: 5000,
//         disableOnInteraction: false,
//     },
//     speed: 700,
    
// });

// var slider = $('.slider__items');
// var sld = function() {
//   if ($(window).width() > 1200) {

//     slider.bxSlider({
//       auto: true,
//       pause: 4000,
//       slideMargin: 70,
//       controls: false,
//       infiniteLoop: true,
//       ariaHidden: false
//     });
//   } else {
//     slider.destroySlider();
//   }
// };
// sld();
// $(window).resize(sld);

$(".slider__items").slick({
  dots: false,
  arrows: false,
  initialSlide: 1,
  infinite: true,
  autoplay: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  pauseOnFocus: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: "unslick"
    }
  ]
});


$(document).ready(function() {
    $('a.hero__main-btn').click( function(event){
      event.preventDefault();
      $('#myOverlay').fadeIn(297,	function(){
        $('.app__wrapper') 
        .css('display', 'block')
        .animate({opacity: 1}, 198);
      });
    });
  
    $('#myOverlay').click( function(){
      $('.app__wrapper').animate({opacity: 0}, 198, function(){
        $(this).css('display', 'none');
        $('#myOverlay').fadeOut(297);
      });
    });
  });