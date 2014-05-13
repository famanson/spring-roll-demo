/*global app */

app.controller("ComposeCtrl", function($scope) {
    $scope.composeCategories = ['Sale','Wanted','Rent'];
    $scope.composeBoxEnabled = false;
    
    $scope.setComposeBoxEnabled = function(enabled) {
        $scope.composeBoxEnabled = enabled;
    };
    $scope.pickedCategory = "";
    $scope.setPickedCategory = function(category) {
        $scope.pickedCategory = category;
    };
    $scope.submitPost = function() {
        var popType = $scope.pickedCategory.toLowerCase();
        var post = {
            price: $scope.submittedPrice,
            ago: "a moment ago",
            description: $scope.submittedDesc,
            type: popType
        };
        posts.push(post);
        $scope.emptyColumns();
        $scope.populateByType(popType);
        $scope.submittedPrice = "";
        $scope.submittedDesc = "";
        $scope.pickedCategory = "";
        $scope.composeBoxEnabled = false;
    };
});