$(function () {
  "use strict";

  //===== Prealoder

  $(window).on("load", function (event) {
    $(".preloader").delay(500).fadeOut(500);
  });

  //=====  WOW active

  //   new WOW().init();

  $(".testimonial_slider").slick({
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),
    dots: false,
    infinite: false,
    speed: 500,
    fade: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  });
});
