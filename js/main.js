(function ($) {
    "use strict";

    // Preloader
    $(window).on('load', function () {
        if ($('#preloader').length) {
            $('#preloader').delay(100).fadeOut('slow', function () {
                $(this).remove();
            });
        }
    });
    
    // Full page
    var myFullpage = new fullpage('#full-page', {
        scrollBar: true,
        scrollingSpeed: 500,
        autoScrolling: true,
        fitToSection: true,
        navigation: true,
        navigationPosition: 'left',
        paddingTop: '0',
        paddingBottom: '0',
        verticalCentered: true,
        showActiveTooltip: true,
        navigationTooltips: ['', '', '', '', '', '', ''],
        sectionsColor: ['#ffffff']
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Initiate menu
    $('#header').after('<div class="mobile-menu d-xl-none">');
    $('.top-menu').clone().appendTo('.mobile-menu');
    $('.mobile-menu-btn').click(function () {
        $('.mobile-menu').stop().slideToggle();
    });

    // Intro carousel
    var introCarousel = $(".carousel");
    var introCarouselIndicators = $(".carousel-indicators");
    introCarousel.find(".carousel-inner").children(".carousel-item").each(function (index) {
        (index === 0) ?
                introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "' class='active'></li>") :
                introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "'></li>");

        $(this).css("background-image", "url('" + $(this).children('.carousel-background').children('img').attr('src') + "')");
        $(this).children('.carousel-background').remove();
    });

    $(".carousel").swipe({
        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'left')
                $(this).carousel('next');
            if (direction == 'right')
                $(this).carousel('prev');
        },
        allowPageScroll: "vertical"
    });
    
    //Portfolio modal slider
    $('.gallery').slick({
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.gallery-nav'
    });
    $('.gallery-nav').slick({
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.gallery',
        arrows: false,
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });
    
    // CountDown
    var date = new Date(2024, 5, 3);
    var now = new Date();
    var diff = (date.getTime()/1000) - (now.getTime()/1000);
    $('.clock').FlipClock(diff,{
        clockFace: 'DailyCounter',
        countdown: true
    }); 

})(jQuery);
