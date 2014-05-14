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
    // Call clear once to init everything
    $scope.clearSubmit();
    // Work out expiration date
    var monthNames = [ "January", "February", "March", "April", "May", "June",
                       "July", "August", "September", "October", "November", "December" ];
    var expireDate = new Date(+new Date + 12096e5);
    $scope.fortnightAway = expireDate.getDate() + " " + monthNames[expireDate.getMonth()] + " " + expireDate.getFullYear();

    // Validations
    $scope.tickOrCross = function(showTick) {
        return showTick ? 'tick' : 'cross';
    };
    $scope.isCategoryPicked = function() {
        return $scope.pickedCategory.toLowerCase().length > 0;
    };
    $scope.isPriceValid = function() {
        return $scope.submittedPrice.length >= 2 && $scope.submittedPrice.length <= 10;
    };
    var priceRegExp = new RegExp(/(^\£\d+(.\d{1,2})?(\/h|pcm)?$|^Wanted\!$)/);
    $scope.priceSensible = function() {
        return priceRegExp.test($scope.submittedPrice);
    };
    $scope.priceSensibleText = function() {
        if ($scope.submittedPrice.length < 2) {
            return "Price value is too short (" + $scope.submittedPrice.length + " characters)";
        }
        if ($scope.submittedPrice.length > 10) {
            return "Price value is too long (" + $scope.submittedPrice.length + " characters)";
        }
        if (!$scope.priceSensible()) {
            if ($scope.pickedCategory.toLowerCase() === "wanted") {
                return "Price format accepted: £1, £10pcm, £7.5/h, \"Wanted!\"";
            } else {
                return "Price format accepted: £1, £10pcm, £7.5/h";
            }
        }
        return "Price is in a sensible format.";
        
    };
    $scope.isDescValid = function() {
        return $scope.submittedDesc.length >= 20 && $scope.submittedDesc.length <= 250;
    };
    $scope.isOkayToSubmit = function() {
        return $scope.isCategoryPicked() && $scope.isPriceValid() && $scope.isDescValid();
    };
    $scope.submitPost = function() {
        if ($scope.isOkayToSubmit()) {
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
            $scope.setTopNavMaster(popType);
            $scope.composeBoxEnabled = false;
        }
    };
});
