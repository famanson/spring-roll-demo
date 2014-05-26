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


/* Intro header directives */
app.directive('srEmailValidator', function() {
    return {
        // Restrict it to be an attribute in this case
        restrict: 'A',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element, attrs) {
            var processResult = function(data) {
                scope.validationProgress = false;
                var text = "";
                if (!data.is_valid) {
                    if (data.did_you_mean != null && data.did_you_mean.length > 0) {
                        text = "Did you mean \"" + data.did_you_mean + "\"?";
                    } else {
                        text = "Address is invalid.";
                    }
                } else {
                    text = "This looks good!";
                }
                scope.validationResult = {
                    valid: data.is_valid,
                    text: text
                };
                scope.$digest();
            };
            var errorResult = function() {
                scope.validationProgress = false;
                scope.validationResult = {
                    valid: false,
                    text: "Address is invalid."
                };
                scope.$digest();
            };
            var progress = function() {
                scope.validationProgress = true;
                scope.$digest();
            };
            $(element).mailgun_validator({
                api_key: "pubkey-5nc-amvnbfw1j1k8w45usr5w36y-job2",
                success: processResult,
                error: errorResult,
                in_progress: progress
            });
        }
    };
});

app.directive('srInputAutogrow', function() {
    return {
        // Restrict it to be an attribute in this case
        restrict: 'A',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element, attrs) {
            $(element).autoGrow(10);
        }
    };
});

app.directive('srDropdownAnimate', function() {
    function link(scope, element, attrs) {
        scope.$watch(attrs.srDropdownAnimate, function(value) {
            if (value) {
                $(element).css("marginTop", "-271px");
                $(element).animate({
                    marginTop: "0px"
                });
            } else {
                $(element).animate({
                    marginTop: "-271px"
                });
            }
        });
    }

    return {
        restrict: 'A',
        link: link,
    };
});