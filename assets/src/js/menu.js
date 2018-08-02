// Slide Menu

$('#hamburguer-menu').click(function() {
    $('.nav-menu').css('left','0');
    $('.mask').css('position','fixed');
});

$('#hamburguer-x').click(function() {
    $('.nav-menu').css('left','calc(-70% - 200px)');
    $('.mask').css('position','initial');
});

$('.mask').click(function() {
    $('.nav-menu').css('left','calc(-70% - 200px)');
    $('.mask').css('position','initial');
});

// Points Balloon

$('html').click(function() {
    $('.gup-details').hide(); 
 });
 
 $('.status').click(function(event){
      event.stopPropagation();
 });
 
 $('#gup-points').click(function(event){
      $('.gup-details').toggle('fast');
 });
 