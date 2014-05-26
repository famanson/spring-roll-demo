/* jshint browser:true, jquery:true */
/* global angular, app */

app.controller("IntroCtrl", function($scope, $http) {
    $scope.isHuman = function() {
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
            $scope.isHuman();
    };
    $scope.messageWarningText = function() {
        if ($scope.validationResult == null || $scope.email == null || ($scope.email != null && $scope.email.length === 0)) {
            return "Email address not provided!";
        } else if ($scope.messageBody != null && $scope.messageBody.length === 0) {
            return "Message body is empty!";
        } else if ($scope.validationResult != null && !$scope.validationResult.valid) {
            return "Please fix your email address.";
        } else if (!$scope.isHuman()) {
            return "Prove that you're human!";
        } else {
            return "Ready to send!";
        }
    };
    $scope.chboxCaptchaAlert = function() {
        return $scope.email != null && $scope.email.length > 0 &&
            $scope.messageBody != null && $scope.messageBody.length > 0 && !$scope.isHuman()
    };
    $scope.messageFade = { opacity: 1, display: 'block' };
    $scope.messageResultFade = { opacity: 0 };
    $scope.showMessageResult = false;
    $scope.messageResult = {};
    $scope.dismissMessageResult = function() {
        $scope.messageResult = ""
        $scope.showMessageResult = false;
    };
    $scope.send = function() {
        if ($scope.isReadyToSend()) {
            if ($scope.isHuman()) {
                // $scope.setMessageFormVisible(false);
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
                    $scope.messageResult = {
                        text: "Message has been sent!",
                        error: false
                    };
                    $scope.messageFade = { opacity: 0, display: 'none' };
                    $scope.messageResultFade = { opacity: 1 };
                }).error(function(data, status, headers, config) {
                    $scope.showMessageResult = true;
                    $scope.messageResult = {
                        text: "Error found. Please retry later!",
                        error: true
                    };
                    $scope.messageFade = { opacity: 1, display: 'block' };
                    $scope.messageResultFade = { opacity: 0 };
                });
            }
        }
    };
});