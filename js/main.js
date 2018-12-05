// Clear Inputs and Text areas after document loading!!!
$(document).ready(function(){
    $(window).on('load',function(){
        $('#name').val('');
        $('#email').val('');
        $('textarea').val('');
    });
});
//counter for developer stats
$('.count').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 8000,
        easing: 'swing',
        step:function(now){
            $(this).text(Math.ceil(now));
        }
    });
});
// button Scroll to Top Page
var $btnTop = $('.scrollToTop');
$(window).on('scroll', function() {
    if($(window).scrollTop() >= 100){
        $btnTop.fadeIn();
    }
    else {
        $btnTop.fadeOut();
    }
});
$btnTop.on('click', function(){
    $('html,body').animate({scrollTop: 0}, 900)
});
// Skill-bar loading when scroll to Skillbar
let target = $('.skillbar');
let targetPos = target.offset().top;
let winHeight = $(window).height();
let scrollToElem = targetPos - winHeight;
$(window).scroll(function(){
  let winScrollTop = $(this).scrollTop();
  if(winScrollTop > scrollToElem){
    //сработает когда пользователь доскроллит к элементу с классом .elem
    $('.skillbar').each( function (){
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 4000)
    });
  }
});