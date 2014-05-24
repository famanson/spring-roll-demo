/* jshint browser:true, jquery:true */
/* global angular, app */

app.controller("IntroCtrl", function($scope, $http) {
    $scope.botCheck = function() {
        var chboxCaptcha = angular.element('input[name="chboxCaptcha"]').is(':checked'),
            honeypotCaptcha = angular.element('input[name="trap"]').is(':checked');
        return chboxCaptcha && !honeypotCaptcha;
    };
    $scope.messageFormVisible = false;
    $scope.setMessageFormVisible = function(visible) {
        $scope.messageFormVisible = visible;
    };
    $scope.isReadyToSend = function() {
        return $scope.validationResult != null && $scope.validationResult.valid &&
            $scope.email != null && $scope.email.length > 0 &&
            $scope.messageBody != null && $scope.messageBody.length > 0 &&
            $scope.botCheck();
    };
    $scope.messageWarningText = function() {
        if ($scope.email == null || ($scope.email != null && $scope.email.length === 0)) {
            return "Email address not provided!";
        } else if ($scope.messageBody != null && $scope.messageBody.length === 0) {
            return "Message body is empty!";
        } else if ($scope.validationResult != null && !$scope.validationResult.valid) {
            return "Please fix your email address.";
        } else if (!$scope.botCheck()) {
            return "Prove that you're human! (Bottom-left checkbox)";
        }else {
            return "Ready to send!";
        }
    };
    $scope.showMessageResult = false;
    $scope.messageResult = ""
    $scope.dismissMessageResult = function() {
        $scope.messageResult = ""
        $scope.showMessageResult = false;
    };
    $scope.send = function() {
        $scope.setMessageFormVisible(false);
        if ($scope.isReadyToSend()) {
            if ($scope.botCheck()) {
                $http.post("./relay.php", {
                    email: $scope.email,
                    messageBody: $scope.messageBody,
                }).success(function(data, status, headers, config) {
                    $scope.email = "";
                    $scope.messageBody = "";
                    $scope.validationResult = null;
                    $scope.showMessageResult = true;
                    angular.element('input[name="chboxCaptcha"]').attr('checked', false);
                    $scope.messageForm.$setPristine(true);
                    $scope.messageResult = "Message has been sent!";
                }).error(function(data, status, headers, config) {
                    $scope.showMessageResult = true;
                    $scope.messageResult = "Error found. Please retry later!";
                });
            }
        }
    };
}).directive('ngValidator', function() {
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
}).directive('ngAutogrow', function() {
    return {
        // Restrict it to be an attribute in this case
        restrict: 'A',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element, attrs) {
            $(element).autoGrow(10);
        }
    };
});