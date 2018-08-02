// Open block dados pessoais
$('#btn-dados').click(function(event) {
    event.preventDefault();
    var content = $('#block-dados');
    // Add and remove class .open
    content.toggleClass('open').slideToggle(500);
    // Change images   and -
    if(content.hasClass('open')){
        $('#btn-dados i:last-child').css('display','block');
        $('#btn-dados i:first-child').css('display','none');
    } else {
        $('#btn-dados i:last-child').css('display','none');
        $('#btn-dados i:first-child').css('display','block');
    }
});

// Open block Assinatura
$('#btn-assinatura').click(function(event) {
    event.preventDefault();
    var content = $('#block-assinatura');
    // Add and remove class .open
    content.toggleClass('open').slideToggle(500);
    // Change images   and -
    if(content.hasClass('open')){
        $('#btn-assinatura i:last-child').css('display','block');
        $('#btn-assinatura i:first-child').css('display','none');
    } else {
        $('#btn-assinatura i:last-child').css('display','none');
        $('#btn-assinatura i:first-child').css('display','block');
    }
});

