$(document).ready(function () {

    $(".one-sight").click(function () {
        $("#sights-slider").modal("show");
        $('.slider-init').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            infinite:false
        });
    });

     $('.flex-sights').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            infinite:false
        });
    
    
   
    $('#sights-slider').on('hidden.bs.modal', function () {
        $('.slider-init').slick('unslick');
    });

     if($(window).scrollTop() > 70){
            $(".fixed-sights").addClass("transformed");
        }
        else{
            $(".fixed-sights").removeClass("transformed");
        }
    

    $(window).scroll(function(){
        if($(window).scrollTop() > 70){
            $(".fixed-sights").addClass("transformed");
        }
        else{
            $(".fixed-sights").removeClass("transformed");
        }
    });
    $(".op-modal-sign-in").click(function(){
         $("#login-modal").modal('show');
    });
    $(".op-modal-sign-up").click(function(){
         $("#regist-modal").modal('show');
    });
    
    
    
    
    //nastya
    $('#testimonial-slider').flexslider({
	   	namespace: "flex-",
	      controlsContainer: "",
	      animation: 'slide',
	      controlNav: true,
	      directionNav: true,
	      smoothHeight: true,
	      slideshowSpeed: 7000,
	      animationSpeed: 600,
	      randomize: false,
	      touch: true,
	   });
  
});
