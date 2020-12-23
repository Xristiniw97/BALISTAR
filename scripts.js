(function($){

    var isMobile = window.matchMedia("only screen and (max-width: 767px)");

    if (!isMobile.matches) {
        
        var $item = $('#mainCarousel .carousel-item'); 
        var $wHeight = $(window).height();
        $item.eq(0).addClass('active');
        $item.height($wHeight); 
        $item.addClass('full-screen');
        
        $('#mainCarousel  img').each(function() {
          var $src = $(this).attr('src');
          var $color = $(this).attr('data-color');
          $(this).parent().css({
            'background-image' : 'url(' + $src + ')',
            'background-color' : $color
          });
          $(this).remove();
        });
        
        $(window).on('resize', function (){
          $wHeight = $(window).height();
          $item.height($wHeight);
        });
    }


    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
           $(".header").removeClass("active");
        }
    });


//EXPERIENCES OWL
$('.experiences-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});

//rooms OWL
$('.rooms-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:1
});

// MAIN CAROUSEL 
$('#mainCarousel').carousel({
    interval: 5000,
    pause: 'hover'
});

// DINING CAROUSEL 
$('#carouselDining').carousel({
    interval: 5000,
    pause: 'hover'
});

// ROOMS CAROUSEL 
$('#carouselRooms').carousel({
    interval: 5000,
    pause: 'hover'
});

// REVIEWS OWL 
$('.reviews-owl').owlCarousel({
    items:1,
    loop:true,
    autoHeight: true,
    autoplay:10000,
    autoplaySpeed:5000,
    autoplayTimeout:8000,
    autoplayHoverPause:true,
    margin:30
});

// MOBILE MENU 
$( ".openMenu" ).click(function() {
    $( "#navbar").css("height", "80vh");
    $( "body").css("overflow", "hidden");
  });
  $( ".closeMenu" ).click(function() {
    $( "#navbar").css("height", "0");
    $( "body").css("overflow", "auto");
  });


   
    /*Scroll to top*/
	$(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
		  $('.scrollup').fadeIn();
		} else {
		  $('.scrollup').fadeOut();
		}
    });
	$('.scrollup').click(function(){
	   $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
    });   

})(jQuery);
