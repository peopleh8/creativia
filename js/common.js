$(function () {
  $('.header__menu-link').on('click', function() {
    $('.header__menu-link').removeClass('active');
    $(this).addClass('active');
    $('.header__burger-front').removeClass('active');
    $('.header__burger-back').removeClass('active');
    $('.header__front-item--top').removeClass('active');
    $('.header__front-item--mid').removeClass('active');
    $('.header__front-item--bot').removeClass('active');
    $('.header__menu').removeClass('active');
  });

  $('.header__burger-menu').on('click', function() {
    $('.header__burger-front').toggleClass('active');
    $('.header__burger-back').toggleClass('active');
    $('.header__front-item--top').toggleClass('active');
    $('.header__front-item--mid').toggleClass('active');
    $('.header__front-item--bot').toggleClass('active');
    $('.header__menu').toggleClass('active');
  });

  
  $('.portfolio__nav-item').on('click', function() {
    $('.portfolio__nav-item').removeClass('active');
    $(this).addClass('active');
  });

  $('.blog__btn').on('click', function() {
    $(this).each(function(index, element) {
      if (element.innerHTML === 'HIDE') {
        element.innerHTML = 'VIEW MORE';
      } else {
        element.innerHTML = 'HIDE';
      }
    });
  });

  $('.header__menu-link').on('click', function() {
    var clickedElem = $(this).attr('href');
    var srcolledElem = $(clickedElem).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({
      scrollTop: srcolledElem - $('.header__top').height() + 5
    }, 1000);
  });

  function headerTop() {
    if ($(window).scrollTop() > $('.header__top').height()) {
      $('.header__top').addClass('hide');
    } else {
      $('.header__top').removeClass('hide');
    }
    
    if ($(window).scrollTop() >= ($('.header').height() - $('.header__logo').height())) {
      $('.header__top').addClass('active');
    } else {
      $('.header__top').removeClass('active');
    }
  }

  $(window).on('scroll', headerTop);
  $(window).on('load', headerTop);
  
  $(window).on('load', function() {
    var hash = location.hash;
    var element = $('.header__menu-link[href="' + hash + '"]');
    element.addClass('active');
  });
  
  /* Sliders */
  
  $('.header__slider').slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    pauseOnFocus: true,
    pauseOnDotsHover: false,
    pauseOnHover: false,
    dots: false
  });

  $('.clients__testimonials-slider').slick( {
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    pauseOnFocus: true,
    pauseOnDotsHover: false,
    pauseOnHover: false
  });
});