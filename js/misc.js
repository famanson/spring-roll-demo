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
    if (pastSearches.indexOf(searchTerm) != -1) {
        // if searchTerm is not found in current array
        if (pastSearches.length < 10) {
            pastSearches.unshift(searchTerm);
        } else {
        pastSearches.pop();
        pastSearches.unshift(searchTerm);
        }
    } else {
        // if searchTerm is found, drop it from current and add it back at the start of array
        pastSearches.splice(pastSearches.indexOf(searchTerm),1);
        pastSearches.unshift(searchTerm);
    }
};
