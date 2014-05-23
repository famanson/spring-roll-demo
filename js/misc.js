/*jshint browser:true, jquery:true */

$(document).ready(function() {
    $(".bottom").append('<input name="chbox-captcha" type="checkbox"><p>Pinky-promise I\'m not a bot!</p>');
    $(".email").bind("click", function() {
        $(this).children("input").focus();
    });
});



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