$(document).ready(function () {
  
  var owl = $('.owl-carousel_companies');
  owl.owlCarousel({
      items:15,
      loop:true,
      autoplay:true,
      autoplayTimeout:1500,
      autoplayHoverPause:true,
      smartSpeed: 1000,
      dots: false,
      nav: false,
      responsiveClass:true,
      responsive:{
        0:{
          items:1
        },
        400:{
          items:3
        },
        700:{
          items:5
        },
        1200:{
          items:7
        },
        1920:{
          items:10
        }
      }
  });
  
  var owl = $('.owl-carousel_reviews');
  owl.owlCarousel({
      items:1,
      loop:true,
      dots: false,
      nav: true,
      responsiveClass:true,
      responsive:{
        0:{
          items:1,
          autoplay:true,
          autoplayTimeout:7000,
          autoplayHoverPause:true,
          smartSpeed: 2000,
        },
        680:{
          items:1,
          autoplay:false
        }
      }
  });

  $('.owl-prev span').remove();
  $('.owl-next span').remove();
  $('.owl-prev').html('<svg width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.617456 14.1475L11.2236 24.7354C11.6231 25.1531 12.0953 25.3529 12.6946 25.3529C13.2939 25.3529 13.7661 25.1531 14.1657 24.7354L15.4006 23.5186C15.8002 23.1191 15.9999 22.6287 15.9999 22.0476C15.9999 21.4846 15.8002 20.9942 15.4006 20.5584L7.50053 12.6583L15.3825 4.77633C15.782 4.37679 15.9818 3.88644 15.9818 3.30528C15.9818 2.74228 15.782 2.25194 15.3825 1.81607L14.1475 0.599272C13.748 0.199728 13.2576 -4.60072e-05 12.6765 -4.60561e-05C12.0953 -4.6105e-05 11.6049 0.199728 11.2054 0.599271L0.599296 11.1872C0.199751 11.6049 -2.22875e-05 12.0953 -2.2272e-05 12.6764C0.0181395 13.2576 0.21791 13.7479 0.617456 14.1475Z" fill="#F9EBFF"/></svg>');
  $('.owl-next').html('<svg width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3825 11.2054L4.77638 0.617479C4.37683 0.199773 3.90464 0 3.30533 0C2.70601 0 2.23382 0.199773 1.83427 0.617479L0.599317 1.83428C0.199772 2.23382 3.2022e-07 2.72417 3.88534e-07 3.30533C4.54712e-07 3.86832 0.199772 4.35867 0.599317 4.79454L8.49941 12.6946L0.617481 20.5766C0.217936 20.9761 0.0181634 21.4665 0.0181635 22.0476C0.0181635 22.6106 0.217937 23.101 0.617482 23.5368L1.85244 24.7536C2.25198 25.1532 2.74233 25.353 3.32349 25.353C3.90465 25.353 4.395 25.1532 4.79454 24.7536L15.4006 14.1657C15.8002 13.748 16 13.2576 16 12.6765C15.9818 12.0953 15.782 11.605 15.3825 11.2054Z" fill="#F9EBFF"/></svg>');

  // $('.count').each(function () { 
  //    $(this).prop('Counter', 0).animate({
  //      Counter: $(this).text()
  //    }, {
  //     duration: 2000,
  //     easing: 'swing',
  //     step:function (now) {
  //       $(this).text(Math.ceil(now));
  //     }
  //    });
  // });
  var show = true;
  $(window).on('scroll', function () {
    if(!show) return false;
    var w_top = $(window).scrollTop();
    var e_top = $('.cards_wrapper').offset().top;

    if(w_top + 600 >= e_top) {
      $('.spincrement').spincrement({
        thousandSeparator: "",
        duration: 3000
      });
      show = false;
    }
  });
    

});