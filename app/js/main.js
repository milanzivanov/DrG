// https://github.com/mattboldt/typed.js/
var typed = new Typed('.element', {
    strings: ["Proizvodnja"],
    typeSpeed: 100
});

$(document).ready(function() {
    'use strict';

    // css loader 
    if (window.onload = function() {
        $(".loader").fadeOut(500, (function() {
            $(".is-active").remove()
        }));
    });

    // Magnific popup
    $('.magnific-popup-link').magnificPopup({
        type: 'image',
        // other options
        gallery: {
            enabled: true
        },
        image: {
            // options for image content type
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
