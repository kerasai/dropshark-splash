(function ($) {
    var $body = $('body');
    var $window = $(window);

    $().ready(function() {

        $window.scroll(function (event) {
            checkScroll();
        });

        $(".menu-toggle a").click(function (event) {
            event.preventDefault();
            $(this).parents(".primary-nav").toggleClass('nav-expanded');
        });

        checkScroll();
    });

    function checkScroll() {
        $body.toggleClass('scrolled', $window.scrollTop() != 0);
    }

})(jQuery);
