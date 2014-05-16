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
    $scope.isCategoryWanted = function() {
        return $scope.pickedCategory.toLowerCase() === 'wanted';
    };
    var priceRegExp = new RegExp(/(^\£\d+(.\d{1,2})?(k|m)?(\/h|pcm)?$)/);
    $scope.isPriceSensible = function() {
        return priceRegExp.test($scope.submittedPrice) || ($scope.isCategoryWanted() && $scope.submittedPrice === "Wanted!");
    };
    
    var helpType = {
        priceShort: {
            type: "priceShort",
            textFormat: "{0}/2 characters required",
            severity: "severity-low"
        },
        priceLong: {
            type: "priceLong",
            textFormat: "Too long: {0}/10 characters",
            severity: "severity-low"
        },
        descShort: {
            type: "descShort",
            textFormat: "{0}/20 characters required",
            severity: "severity-low"
        },
        descLong: {
            type: "descLong",
            textFormat: "Too long: {0}/250 characters",
            severity: "severity-low"
        },
        priceFormat: {
            type: "priceFormat",
            textFormat: "Format: £1, £10pcm, £7.5/h",
            severity: "severity-high"
        },
        good: {
            type: "good",
            textFormat: "Looking good!",
            severity: "severity-chill"
        }
    };
    $scope.priceHelp = helpType.priceShort;
    $scope.descHelp = helpType.descShort;

    $scope.updatePriceHelp = function() {
        var length = $scope.submittedPrice.length;
        if (length < 2) {
            $scope.priceHelp = helpType.priceShort;
            $scope.priceHelp.text = $scope.priceHelp.textFormat.format(length);
        } else if (length > 10) {
            $scope.priceHelp = helpType.priceLong;
            $scope.priceHelp.text = $scope.priceHelp.textFormat.format(length);
        } else if (!$scope.isPriceSensible()) {
            $scope.priceHelp = helpType.priceFormat;
            $scope.priceHelp.text = $scope.priceHelp.textFormat;
        } else {
            $scope.priceHelp = helpType.good;
            $scope.priceHelp.text = $scope.priceHelp.textFormat;
        }
    };
    $scope.updatePriceHelp();

    $scope.descActualLength = function() {
        return $scope.submittedDesc.replace(/#([^ ]+)/g, '$1').length;
    };

    $scope.updateDescHelp = function() {
        var length = $scope.descActualLength();
        if (length < 10) {
            $scope.descHelp = helpType.descShort;
            $scope.descHelp.text = $scope.descHelp.textFormat.format(length);
        } else if (length > 250) {
            $scope.descHelp = helpType.descLong;
            $scope.descHelp.text = $scope.descHelp.textFormat.format(length);
        } else {
            $scope.descHelp = helpType.good;
            $scope.descHelp.text = $scope.descHelp.textFormat;
        }
    };
    $scope.updateDescHelp();

    $scope.isDescValid = function() {
        var desc = $scope.submittedDesc.replace(/#([^ ]+)/g, '$1');
        return desc.length >= 20 && desc.length <= 250;
    };
    $scope.isOkayToSubmit = function() {
        return $scope.isCategoryPicked() && $scope.isPriceSensible() && $scope.isDescValid();
    };
    $scope.submitPost = function() {
        if ($scope.isOkayToSubmit()) {
            var popType = $scope.pickedCategory.toLowerCase(),
                desc = $scope.escapeHTML($scope.submittedDesc).replace(/#([^ ]+)/g, '<b>$1</b>');
            var post = {
                price: $scope.escapeHTML($scope.submittedPrice),
                ago: "a moment ago",
                description: desc,
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
        } else if ($scope.isCategoryPicked()) {
            // Only do this when the full form has shown
            $scope.setActiveWarnings(true);
        }
    };
    $scope.warningsActive = false;
    $scope.setActiveWarnings = function(active) {
        $scope.warningsActive = active;
    };

    $scope.escapeHTML = function(s) { 
        return s.replace(/&/g, '&amp;')
                .replace(/"/g, '&quot;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
    };
});
