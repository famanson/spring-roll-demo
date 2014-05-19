/*jshint browser:true, jquery:true */

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

var pastSearches = [];
var updatePastSearches = function(searchTerm) {
    // update pastSearches here
    if (pastSearches.length < 10) {
        pastSearches.unshift(searchTerm);
    } else {
        pastSearches.splice(9,1);
        pastSearches.unshift(searchTerm);
    }
};