

$(document).ready(function () {

    let scroll_pos = 0;
    let navBar = $('.navbar ')




    // NAVBAR SCROLL TOP FIXD WIDHT

    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 100) {


            navBar.css('width', '100%');
            navBar.css("margin-top", '0px');



        } else {
            navBar.css('width', '1200px');
            navBar.css("margin-top", '50px');




        }
    })


    // scrollBtn
    let scrollBtn = $('.scroll-img');

    $(window).scroll(function () {

        if ($(window).scrollTop() > 100) {

            scrollBtn.fadeIn(500)

        } else {

            scrollBtn.fadeOut(500)


        }

    })

    scrollBtn.click(function () {
        $('html').animate({

            scrollTop: 0
        }, 1000)
    })




})



$(function () {

    $('.slick').slick({
        autoplay: true,
    });
    var $sliderfor = $(".slick.slider-for");
    var $slidernav = $(".slick.slider-nav");
    var $div = $slidernav.find("div");
    var killit = false;

    $div.on("click", function (e) {
        if (!killit) {
            e.stopPropagation();
            var idx = $(this).data("thumb");
            $sliderfor.slick("goTo", idx - 1);
        }
    });

    // need to register a flag that doesn't let us click the slider
    // as we are trying to swipe it.

    $slidernav
        .on("beforeChange", function () {
            killit = true;
        }).on("afterChange", function () {
            killit = false;
        });

    $sliderfor.not('.slick-initialized').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        //l;trigger after the slide appears
        // i is current slide index
        onAfterChange: function (slickSlider, i) {
            //remove all active class
            $slidernav.removeClass('slick-current');
            //set active class for current slide
            $slidernav.eq(i).addClass('slick-current');
        }

    });


    //set active class to first slide
    $slidernav.eq(0).addClass('slick-current');

});

let slick = $('.slick');

slick.mouseup(function(){
    slick.css( "cursor","default");
  }).mousedown(function(){
    slick.css( "cursor","grab");
  });