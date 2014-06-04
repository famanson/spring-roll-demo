/*jshint browser:true, devel:true, jquery:true */

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
    }

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
    };
});

/** Capitalizes first letter in string */
app.filter('capitalise', function() {
    return function(value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    };
});

/* Converts date in string format to a time elapsed representation, e.g. "6 days ago" */
app.filter('timeElapsed', function() {
    return function(dateInput, currentDate) {
        // Process input date.
        var date;
        if (dateInput instanceof String || typeof(dateInput) === "string") {
            date = new Date(dateInput);
        } else if (dateInput instanceof Date) {
            date = dateInput;
        } else {
            return "Unsupported date type!";
        }

        var numHour = Math.floor((currentDate - date)/3600000);
        if (numHour < 1) {
                return "just now";
        } else if (numHour <= 24) {
                return "today" ;
        } else if (numHour <= 48) {
            return "yesterday";
        } else if (numHour < 168) {
            return Math.round(numHour/24) + " days ago";
        } else if (numHour < 264) {
            return "a week ago";
        } else if (numHour < 720) {
            return Math.round(numHour/168) + " weeks ago";
        } else if (numHour < 1080) {
            return "a month ago";
        } else {
            return Math.round(numHour/720) + " months ago";
        }
    };
});
