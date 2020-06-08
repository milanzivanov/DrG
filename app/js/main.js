// https://github.com/mattboldt/typed.js/
var typed = new Typed('.element', {
    strings: ["Proizvodnja"],
    typeSpeed: 100
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