// https://github.com/mattboldt/typed.js/
// var typed = new Typed('.element', {
//     strings: ["Saradjujte sa nama"],
//     typeSpeed: 100
// });

const nav = document.querySelector('.nav');
const btn = document.querySelector('.nav-tgl');
btn.addEventListener('click', evt => {
    btn.classList.toggle('active');
    nav.classList.toggle('active');
});

$(document).ready(function() {
    'use strict';

    // open menu
    $(".nav-dropdown--js").on("click", function(e) {
        $(".nav-dropdown__box, .nav-active-state--js").toggleClass("active");
    });

    // slick 1
    $('.slick-slider1').slick({
        dots: true,
        infinite: true,
        prevArrow: $(".left-nav-custom1__left"),
        nextArrow: $(".right-nav-custom1__right"),
        // arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // slick 2
    $('.slick-slider2').slick({
        infinite: true,
        dots: true,
        prevArrow: $(".left-nav-custom2__left"),
        nextArrow: $(".right-nav-custom2__right"),
        slidesToShow: 4,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                doys: false
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // slick 3
    $('.slick-slider3').slick({
        infinite: true,
        dots: true,
        prevArrow: $(".left-nav-custom3__left"),
        nextArrow: $(".right-nav-custom3__right"),
        slidesToShow: 4,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // Magnific popup
    $('.magnific-popup-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        image: {
            titleSrc: 'title'
          }
      });

    // scroll to section
    $('a[href^="#"]').bind('click', function(e) {
        e.preventDefault(); 
    
        var target = $(this).attr("href");
    
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 700, function() {
            location.hash = target; 
        });

        // remove active class
        $(".nav, .nav-tgl").removeClass("active");
    
        return false;
    });
    
    // btt
    if ($('.back-to-top').length) {
        let scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('.back-to-top').addClass('show');
            } else {
                $('.back-to-top').removeClass('show');
            }
        };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('.back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 500);
        });
    }
});

// add remove class on scroll
$(window).scroll(function() {    
    let scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".banner__text-box").addClass("open");
    } else {
        $(".banner__text-box").removeClass("open");
    }
});
