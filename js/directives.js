/*jshint browser:true, devel:true, jquery:true */

// angular is defined in angular.js
/*global angular */

// these are in global.js
/*global app */

/*
 * Automatically animate properties passed as value of this attribute.
 */
app.directive('srAutoAnimate', function() {
    function link(scope, element, attrs) {
        scope.$watch(attrs.srAutoAnimate, function(value) {
            $(element).animate(value);
        });
    }

    return {
        restrict: 'A',
        link: link,
    };
});

/*
 * Resize overlay content element according to the size of a slide deck, given by index.
 * Only resized if the child element has a "image-deck" class.
 */
app.directive('srAutoResizeDeck', function() {
    var defaultSize = {
        width: '550px',
        height: '300px',
    };

    function link(scope, element, attrs) {
        scope.$watch(attrs.srAutoResizeDeck, function(index) {
            var child = $(element).children().eq(index);
            var newSize;
            if (child.hasClass("image-deck")) {
                // Get size of the underlying <img> element
                newSize = {
                    width: child.find('img').width(),
                    height: child.find('img').height()
                };
            } else {
                newSize = defaultSize;
            }
            console.log(newSize);
            $(element).animate(newSize);
        });
    }

    return {
        restrict: 'A',
        link: link,
    };
});

