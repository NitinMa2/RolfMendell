$(document).ready(function(){
	$('.menu-toggle').click(function(){
		$('nav').toggleClass('active')
	})
})

$(function() {
    var header = $("header");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 50) {
            header.addClass("nav-shade").removeClass("transparent");
        } else {
            header.removeClass("nav-shade").addClass("transparent");
        }
    });
});