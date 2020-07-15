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

    // slick
    $('.slick-slider').slick({
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 10000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $(".left-nav-custom"),
        nextArrow: $(".right-nav-custom"),
        cssEase: 'ease-out',
        useCSS: true,
        lazyLoad: 'progressive',

        responsive: [
            {
              breakpoint: 1365,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            }
          ],
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
              }
            }
          ]
    })

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
        $(".nav-dropdown__box, .nav-active-state--js, .nav, .nav-tgl").removeClass("active");
    
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
