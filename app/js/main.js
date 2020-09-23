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

// $('.services__item2').click(function(){

//     $.cookie('name', 'value');
//         //$('#mergers-and-acquisitions').addClass('active');
       

//     })


// var wHash = window.location.hash.split('#')[0];
// if (wHash) {
//     $('.tab-item').hide();
//     $('#grow-equil').show();
// }

//-------end mobil menu------------

//-------end sticky header--------

$(".tab").click(function() {
	$(".tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".tab-item").hide().eq($(this).index()).fadeIn(1000)
}).eq(0).addClass("active");




 var wHash3 = window.location.hash.split('g')[1];
if (wHash3) {
   $('.tab-item').hide();
    $('#grow').show();
    $('.tab:first-child').removeClass('active');
     $('.tab:first-child').addClass('active');
}  

 var wHash1 = window.location.hash.split('m')[1];
if (wHash1) {
   $('.tab-item').hide();
    $('#mergers').show();
$('.tab:first-child').removeClass('active');
    $('.tab:nth-child(2)').addClass('active');
}       
  
 var wHash2 = window.location.hash.split('t')[1];
if (wHash2) {
   $('.tab-item').hide();
    $('#tra').show();
    $('.tab:first-child').removeClass('active');
     $('.tab:nth-child(3)').addClass('active');
}   

 var wHash4 = window.location.hash.split('i')[1];
if (wHash4) {
   $('.tab-item').hide();
    $('#inves').show();
    $('.tab:first-child').removeClass('active');
     $('.tab:nth-child(4)').addClass('active');
}  


$('.transaction__item').click(function(){
        $(this).find('.transaction-active').toggleClass('active');
        $('.overlay').toggleClass('active');

      
    })

$('.overlay').click(function(){
        $('.transaction-active').removeClass('active');
        $(this).toggleClass('active');     
    })


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
                duration: 3000
            });

            show = false;
        }
    });




});

$(document).ready(function(){
           
            $('#btn_submit').click(function(){
              
               var user_name    = $('#name').val();
                var user_email   = $('#email').val();
                var phone   = $('#phone').val();
                var text_comment = $('#text_comment').val();
                
                $.ajax({
                    url: "send.php", 
                    type: "post", 
                    data: { 
                        "name":    user_name,
                        "email":   user_email,
                        "phone":   phone,
                        

                        "text_comment": text_comment

                    },
                    error:function(){
                        $("#erconts").html("Error sending!");
                        $("#erconts").css("color", "red");
                }, 
                    
                    beforeSend: function() {                     
                        $("#erconts").html("Sending..."); 
                                        
                    },                 
                    success: function(result){                     
                                    
                        $('#erconts').html(result);  
                        $('#erconts').css('color', 'green');                   
                                       
                    }  
                });
            });
        });