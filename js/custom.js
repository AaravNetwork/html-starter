'use strict';

// FIXED NAVBAR AND BACK TO TOP START

$(document).ready(function () {

    $(window).scroll(function () {
        ($(window).scrollTop())
        if ($(window).scrollTop() > 63) {
            $('.header').addClass('fix-nav');
        }
        if ($(window).scrollTop() < 64) {
            $('.header').removeClass('fix-nav');
        }
    });

    var btn = $('#backtop');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

});

// FIXED NAVBAR AND BACK TO TOP END

// OWL CAROUSEL START
$('#first-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    smartSpeed: 500,
    autoplay: true,
    autoplayHoverPause: true,
    navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        }
    }
});
// OWL CAROUSEL END
