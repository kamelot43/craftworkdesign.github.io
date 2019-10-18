$(function(){
    //ADD .TIGHT
    if ($(window).scrollTop() + $(window).height() > $('.wrapper').outerHeight()+100) {
      $('body').addClass('tight');
      
    } else {
      $('body').removeClass('tight');
      
    }
    if ($(window).width() >= 1440) {
        $(window).on('scroll', function() {

            //ADD .TIGHT
            if ($(window).scrollTop() + $(window).height() > $('.wrapper').outerHeight()+600) {
              $('body').addClass('tight');

            } else {
              $('body').removeClass('tight');

            }
        });
    } else {
        $(window).on('scroll', function() {

            //ADD .TIGHT
            if ($(window).scrollTop() + $(window).height() > $('.wrapper').outerHeight()+500) {
              $('body').addClass('tight');

            } else {
              $('body').removeClass('tight');

            }
        });
    }
    
    $("a.scroll-link").on('click', function(event) {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            event.preventDefault();
           
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 800);
        }
    });
    
    
});

