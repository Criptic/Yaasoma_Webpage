$(document).ready(function() {
  $(window).scroll(function () {

    console.log($(window).scrollTop());

    if ($(window).scrollTop() > 286) {
      $('.navbar').addClass('navbar-fixed-top');
    }

    if ($(window).scrollTop() < 286) {
      $('.navbar').removeClass('navbar-fixed-top');
    }
  });
});
