(function ($) {

    $().ready(function() {
        var $window = $(window);
        var $body = $('body');

        $window.scroll(function (event) {
            $body.toggleClass('scrolled', $window.scrollTop() != 0);
        });

        $(".menu-toggle a").click(function (event) {
            event.preventDefault();
            $(this).parents(".primary-nav").toggleClass('nav-expanded');
        });
    });

})(jQuery);
