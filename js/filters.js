/*jshint browser:true, devel:true */

// angular is defined in angular.js
/*global angular */

// these are in global.js
/*global app */

/**
 * Highlights a given string in a text.
 * The resulting matches are wrapped in a <span class="searchHighlight">
 */
app.filter('highlightMatch', function() {
    // Function to highlight given text by wrapping it in a .searchHighlight span.
    function addHighlightSpan(match, p1, offset, string) {
        return "<span class=\"searchHighlight\">" + match + "</span>";
    };

    return function(input, searchTerm) {
        // First check that search term is valid
        if (searchTerm === undefined || searchTerm === null || searchTerm === "") {
            return input;
        } else {
            // Sanitize input, remove HTML tags
            var sanitized = $("<div>" + input + "</div>").text();
            // Process matches.
            return sanitized.replace(new RegExp(searchTerm, 'gi'), addHighlightSpan);
        }
    }
});
