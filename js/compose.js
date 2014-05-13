/*global app, posts */

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
    $scope.clearSubmit = function() {
        $scope.submittedPrice = "";
        $scope.submittedDesc = "";
        $scope.pickedCategory = "";
    };
    var monthNames = [ "January", "February", "March", "April", "May", "June",
                       "July", "August", "September", "October", "November", "December" ];
    var expireDate = new Date(+new Date + 12096e5);
    $scope.fortnightAway = expireDate.getDay() + " " + monthNames[expireDate.getMonth()] + " " + expireDate.getFullYear();
    $scope.submitPost = function() {
        var popType = $scope.pickedCategory.toLowerCase();
        var post = {
            price: $scope.submittedPrice,
            ago: "a moment ago",
            description: $scope.submittedDesc,
            type: popType
        };
        // Hack!
        var composePost = posts[0];
        posts.splice(0,1);
        posts.unshift(post);
        posts.unshift(composePost);
        // End hack

        $scope.emptyColumns();
        $scope.populateByType(popType);
        $scope.composeBoxEnabled = false;
    };
});