$(document).ready(function () {

    $(".one-sight").click(function () {
        $("#sights-slider").modal("show");
        $('.slider-init').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false
        });
    });



    
});
