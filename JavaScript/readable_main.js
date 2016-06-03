$(document).ready(function() {
  //Function so the nav adjust to top after scrolling
  $(window).scroll(function () {

    console.log($(window).scrollTop());

    if ($(window).scrollTop() > 286) {
      $('.navbar').addClass('navbar-fixed-top');
    }

    if ($(window).scrollTop() < 286) {
      $('.navbar').removeClass('navbar-fixed-top');
    }
  });

  //Function to smooth scroll to elements on the same page
  $('#nav-contact').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
  });
  $('#nav-welcome').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
  });
});
