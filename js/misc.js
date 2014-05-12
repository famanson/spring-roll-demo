/*jshint browser:true */

/* Fixes the category bar in Longdan tab */

$(document).on('scroll', function() {
    var headerHeight = $('#header').height();
    var bodyTop = $('body').scrollTop();
    if (headerHeight < bodyTop) {
        $('#ld-header').addClass("fixed");
    } else {
        $('#ld-header').removeClass("fixed");
    }
});