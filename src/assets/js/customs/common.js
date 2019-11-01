$(window).on('load', function () {
    $preloader = $('#main_preload'),
        $loader = $preloader.find('.loader');
    $loader.fadeOut();
    $preloader.delay(2000).fadeOut('slow');
});

$(function(){
    $('.language-box, .bg-language-box' ).click(function(){
        $('.language-box, .bg-language-box').toggleClass('active-l');
    });
});

$(function(){
    $('.hamburger, .bg-menu' ).click(function(){
        $('.navy').toggleClass('active-menu');
    });
});



//плавный скроллинг
$(function(){

    $('#go-portfolio').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#section6').offset().top }, 1000);
        e.preventDefault();
    });

    $('#dev-a').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#dev-1').offset().top }, 1000);
        e.preventDefault();
    });

    $('#icp-a').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#section3').offset().top }, 1000);
        e.preventDefault();
    });

    $('#seo').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#section4').offset().top }, 1000);
        e.preventDefault();
    });

    $('#mob').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#section5').offset().top }, 1000);
        e.preventDefault();
    });

    $('#rise').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#section42').offset().top }, 1000);
        e.preventDefault();
    });
    $('#sayMore').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#section7').offset().top }, 1000);
        e.preventDefault();
    });

});


//fullpage плагин
$(document).ready(function() {
    $('#wrapper').fullpage({
        'verticalCentered': false,
        'css3': true,
        'autoScrolling': false,
        'fitToSection': false,
        'navigation': false,
        'navigationPosition': 'left',
        'afterLoad': function(anchorLink, index){

        },
    });
});


//фиксатор верхнего меню
$(window).scroll(function(){
    var sticky = $('#menu-top'),
        scroll = $(window).scrollTop();

    if (scroll >= 170) sticky.addClass('menu-fixed');
    else sticky.removeClass('menu-fixed');

});

