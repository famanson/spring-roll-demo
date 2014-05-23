/* jshint browser:true, jquery:true */
/* global app */

app.directive('ngValidator', function() {
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
                        text = "Address is invalid";
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
                    text: "Address is invalid"
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

app.directive('ngAutogrow', function() {
    return {
        // Restrict it to be an attribute in this case
        restrict: 'A',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element, attrs) {
            $(element).autoGrow();
        }
    };
});