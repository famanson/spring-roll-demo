/*global app */

app.controller("ComposeCtrl", function($scope) {
    $scope.composeBoxEnabled = false;
    
    $scope.setComposeBoxEnabled = function(enabled) {
        $scope.composeBoxEnabled = enabled;
    };
});