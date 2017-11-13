$(function() {

    function computeNavbarClass() {
        var y = typeof(window.scrollY) !== 'undefined' ? window.scrollY : window.pageYOffset;
        $('.navbar').toggleClass('navbar-floating', y >= 100);
    }

    $(window).on('scroll', computeNavbarClass);
    $(window).on('resize', computeNavbarClass);
    computeNavbarClass();

});
