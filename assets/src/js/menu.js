$('#hamburguer-menu').click(function() {
    $('.nav-menu').css('left','0');
    $('.mask').css('position','fixed');
})

$('#hamburguer-x').click(function() {
    $('.nav-menu').css('left','calc(-70% - 200px)');
    $('.mask').css('position','initial');
})