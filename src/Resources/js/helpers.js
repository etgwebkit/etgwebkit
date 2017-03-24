(function($) {

    var $body = $('body');

    //Touch?
    if(('ontouchstart' in window)
    || (navigator.MaxTouchPoints > 0)
    || (navigator.msMaxTouchPoints > 0)){
        $body.addClass('is-touch');
    }

    objectFitImages();
})(jQuery);
