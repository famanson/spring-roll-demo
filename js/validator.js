/* jshint browser:true, jquery:true */
/* global app */

app.directive('ngValidator', function() {
    return {
        // Restrict it to be an attribute in this case
        restrict: 'A',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element, attrs) {
            var processResult = function(data) {
                scope.validationResult = {
                    valid: data.is_valid,
                    suggestion: data.did_you_mean
                };
                scope.$digest();
            };
            $(element).mailgun_validator({
                api_key: "pubkey-5nc-amvnbfw1j1k8w45usr5w36y-job2",
                success: processResult,
                error: function(){},
            });
        }
    };
});