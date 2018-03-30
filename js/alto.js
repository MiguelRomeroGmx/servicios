
$(document).ready(function(){
    $("#fondo").css({"height":$(window).height() + "px"});
});

$(window).scroll(function () {
        if ($("#menu").offset().top > 56) {
            $("#menu").addClass("fondo-nav");

        } else {
            $("#menu").removeClass("fondo-nav");
        }
    });