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

app.directive('srAutoResizeDeck', function() {
    function link(scope, element, attrs) {
        var defaultSize = {};
        /*
         * Watch for changes during when post becomes active, then adjust default sizes accordingly
         */
        scope.$watch(attrs.srActiveInitResize, function(active) {
            defaultSize = {
                width: scope.defaultWidth,
                height: scope.defaultHeight,
            };
            $(element).animate(defaultSize);
        });
        /*
         * Resize overlay content element according to the size of a slide deck, given by index.
         * Only resized if the child element has a "image-deck" class.
         */
        scope.$watch(attrs.srAutoResizeDeck, function(index) {
            console.log(defaultSize);
            var child = $(element).children().eq(index);
            console.log(child.siblings());
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
            $(element).animate(newSize);
        });
    }

    return {
        restrict: 'A',
        link: link,
    };
});

