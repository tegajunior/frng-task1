$('#showSidebar').on('click', function () {
    $('#navigation-mobile').removeClass('d-none');
    $('#navigation-mobile').addClass('animate__slideInLeft');
    $('#logo-container-desktop').addClass('d-none');
    $('#navigation-desktop').addClass('d-none');
    $('#wrapper').removeClass('pt-4');
    $('#navigation-mobile-container').removeClass('col-1');
    $('#navigation-mobile-container').addClass('col');

    //$('.overlay').addClass('active');

});

$('#hideSidebar, .overlay').on('click', function () {
    $('#navigation-mobile').addClass('d-none');
    $('#logo-container-desktop').removeClass('d-none');
    $('#navigation-desktop').removeClass('d-none');
    $('#my-sticky-top').addClass('my-white-bg');
    $('.overlay').removeClass('active');
    $('#wrapper').addClass('pt-4')
});