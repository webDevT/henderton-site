$(function(){

//start lazy load
$.lazyLoadXT.onload.addClass = "animated fadeIn";
//end lazy load

// ------start sticky header------

$(window).scroll(function() {
if ($(this).scrollTop() > 1){
$('.header').addClass("sticky");
}
else{
$('.header').removeClass("sticky");
}
});

//-------start mobil menu----------
$('.header__menu-btn').click(function(){
        $(this).toggleClass('active');
        $('.header__menu ul').toggleClass('active');
        $('.header').toggleClass('active');

    })
//-------end mobil menu------------

//-------end sticky header--------

$(".tab").click(function() {
	$(".tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".tab-item").hide().eq($(this).index()).fadeIn(1000)
}).eq(0).addClass("active");


$('.transaction__item').click(function(){
        $(this).find('.transaction-active').toggleClass('active');
        $('.overlay').toggleClass('active');

      
    })

$('.overlay').click(function(){
        $('.transaction-active').removeClass('active');
        $(this).toggleClass('active');     
    })

// $('.close-img').click(function(){
//         $('.transaction-active').removeClass('active');
//         $('.overlay').fadeOut(); 
//     })

});



$(document).ready(function () {

    var show = true;
    var countbox = ".figures__inner";
    $(window).on("scroll load resize", function () {
        if (!show) return false;
        var w_top = $(window).scrollTop(); 
        var e_top = $(countbox).offset().top; 
        var w_height = $(window).height();
        var d_height = $(document).height(); 
        var e_height = $(countbox).outerHeight();
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.figures__number').css('opacity', '1');
            $('.figures__number').spincrement({
                thousandSeparator: "",
                duration: 1200
            });

            show = false;
        }
    });

});