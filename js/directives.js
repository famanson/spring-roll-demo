/*jshint browser:true, devel:true, jquery:true */

// angular is defined in angular.js
/*global angular */

// these are in global.js
/*global app */

/** Splits post into columns. This already assumes the right HTML template is set up */
app.directive("srColumns", function() {
    function link(scope, elements, attrs, controller) {
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

        // Splits given posts into columns
        this.columnise = function(posts) {
            // Clear all posts first.
            var i;
            for (i = 0; i < 4; i++) { // use 4 to make way for Longdan posts
                var len = $scope.columns[i].length;
                for (var j = 0; j < len; j++) {
                    $scope.columns[i].pop();
                }
            }

            var rowLength = 3;

            // Push new posts. Again, cycling through each column and post is needed to
            // get animations working.
            var perColumn = posts.length / rowLength;
            var remainder = posts.length % rowLength;
            for (i = 0; i < rowLength; i++) {
                var columnPosts = posts.splice(0, perColumn + (i < remainder ? 1 : 0));
                for (var k = 0; k < columnPosts.length; k++) {
                    $scope.columns[i].push(columnPosts[k]);
                }
            }
        };
    }

    return {
        templateUrl: "columns.html",
        transclude: true,
        controller: controller,
        link: link,
    };
});
