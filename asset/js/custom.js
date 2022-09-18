jQuery(document).ready(function () {

    // Header JS
    jQuery(".mob-menu span").click(function () {
        jQuery(".main-menu").slideToggle();
    });

    // owlCarousel section
    jQuery('#full-slider-carousel').owlCarousel({
        loop:true,
        items:1,
        dots:true,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause:true
    })

    // Menu Scroll
    jQuery("#company_menu a").click(function () {
        var elem = jQuery(this).attr("href")
        if( $(elem).length ){
            jQuery("html, body").animate({
                scrollTop: jQuery(jQuery(this).attr("href")).offset().top
            }, 500)
        } else {
            // window.location.replace("../Solar Panel/InFlux/company.html");
        }
    });

    jQuery('#gallery-slider-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                dots:true,
            },
            600:{
                items:3,
                dots:true,
            },
            1000:{
                items:5,
                dots:true,
                loop:false
            }
        }
    })

    //Top Scroll JS
    var btn = jQuery('#influx_scroll_top');
    jQuery(window).scroll(function() {
        if (jQuery(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        jQuery('html, body').animate({scrollTop:0}, '300');
    });

});