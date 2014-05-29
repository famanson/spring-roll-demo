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
        var preventAnimation = false;

        scope.$watch(attrs.srPreventAnimation, function(value) {
            console.log("PRevent!", value);
            preventAnimation = value;
        });

        scope.$watch(attrs.srAutoAnimate, function(value) {
            console.log(preventAnimation);
            if (!preventAnimation) {
                $(element).animate(value);
            } else {
                $(element).css(value);
            }
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
            $(element).animate(newSize);
        });
    }

    return {
        restrict: 'A',
        link: link,
    };
});

/** Splits post into columns. This already assumes the right HTML template is set up */
app.directive("srColumns", function() {
    function link(scope, element, attrs, controller) {
        controller.setColumns(attrs.columns);
        scope.$watch(attrs.posts, function(value) {
            controller.columnise(value);
        });
    }

    function controller($scope) {
        // Split posts into three columns (and four if Longdan)
        $scope.columns = [];
        for (var i = 0; i < 4; i++) { // use 4 to make way for Longdan posts
            $scope.columns[i] = [];
        }

        var columnCount = 3;
        this.setColumns = function(count) {
            columnCount = count;
        };

        // Splits given posts into columns
        this.columnise = function(posts) {
            // var columnCount = this.columnCount;

            // Clear all posts first.
            var i;
            for (i = 0; i < 4; i++) { // use 4 to make way for Longdan posts
                var len = $scope.columns[i].length;
                for (var j = 0; j < len; j++) {
                    $scope.columns[i].pop();
                }
            }

            // Push new posts. Again, cycling through each column and post is needed to
            // get animations working.
            var perColumn = posts.length / columnCount;
            var remainder = posts.length % columnCount;
            var offset = 0;
            for (i = 0; i < columnCount; i++) {
                var columnPosts = posts.slice(offset, offset + perColumn + (i < remainder ? 1 : 0));
                for (var k = 0; k < columnPosts.length; k++) {
                    $scope.columns[i].push(columnPosts[k]);
                }
                offset += columnPosts.length;
            }
        };
    }

    return {
        controller: controller,
        link: link,
    };
});
