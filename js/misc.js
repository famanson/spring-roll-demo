/*jshint browser:true, jquery:true */

$(document).ready(function() {
    $(".bottom").append('<input name="chbox-captcha" type="checkbox"><p>Pinky-promise I\'m not a bot!</p>');
//    $("#email-address").mailgun_validator({
//        api_key: "pubkey-5nc-amvnbfw1j1k8w45usr5w36y-job2",
//        success: function(){alert("Success");},
//        error: function(){alert("Failure");},
//    });
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