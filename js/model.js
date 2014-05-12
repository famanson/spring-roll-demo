// angular is defined in angular.js
/*global angular */

// these are in global.js
/*global posts, notifications, topNavs, slides, app, longdanEnabled */

app.controller("ListingsCtrl", function($scope, $timeout) {
    'use strict';
    // Add control for toggling the visibility of the grid lines.
    $scope.showGridLines = false;
    try {
        $scope.longdanEnabled = longdanEnabled;
    } catch (e) {
        $scope.longdanEnabled = false;
    }
    // Split posts into three columns (and four if Longdan)
    $scope.columns = [];
    for (var i = 0; i < 4; i++) { // use 4 to make way for Longdan posts
        $scope.columns[i] = [];
    }
    
    $scope.emptyColumns = function () {
        for (var i = 0; i < 4; i++) { // use 4 to make way for Longdan posts
            var len = $scope.columns[i].length;
            for (var j = 0; j < len; j++) {
                $scope.columns[i].pop();
            }
        }
    };
    
    /* Top Nav Control */
    $scope.populateByType = function(popType) {
        var rowLength = (popType == 'longdan') ? 4 : 3;
        var filterByType = function(element) {
            return element.type === popType;
        };
        var filteredPosts = posts.filter(filterByType);
        var perColumn = filteredPosts.length / rowLength;
        var remainder = filteredPosts.length % rowLength;
        for (var i = 0; i < rowLength; i++) {
            var columnPosts = filteredPosts.splice(0, perColumn + (i < remainder ? 1 : 0));
            for (var k = 0; k < columnPosts.length; k++) {
                $scope.columns[i].push(columnPosts[k]);
            }
        }
    };

    $scope.switchColumn = function(popType) {
        if (popType !== $scope.selected.type) {
            $scope.emptyColumns();
            $scope.populateByType(popType);
        }
    };

    $scope.populateByType('sale');
    if (!$scope.longdanEnabled) {
        topNavs.pop();
    }
    $scope.topNavs = topNavs;

    $scope.setTopNavMaster = function(nav) {
        $scope.selected = nav;
    };
    $scope.setTopNavMaster(topNavs[0]);

    $scope.isTopNavSelected = function(nav) {
        return $scope.selected === nav;
    };
    
    /* Notifications Box Control */
    $scope.nboxSelected = false;

    $scope.toggleNBoxClicked = false;
    $scope.toggleNBox = function() {
        $scope.toggleNBoxClicked = true;
        $scope.nboxSelected = !$scope.nboxSelected;
    };
    
    $scope.dismissNBox = function() {
        //alert("Dismiss");
        if (!$scope.toggleNBoxClicked) {
            $scope.nboxSelected = false;
        }
        $scope.toggleNBoxClicked = false;
    };
    
    $scope.notifications = notifications;
    
    /* Checkout box control */
    // Checkout basket clicked
    $scope.toggleCheckoutClicked = false;
    $scope.toggleCheckout = function() {
        $scope.toggleCheckoutClicked = true;
        $scope.checkoutSelected = !$scope.checkoutSelected;
    };
    // Dismiss checkout overlay when clicking elsewhere
    $scope.dismissCheckout = function() {
        if (!$scope.toggleCheckoutClicked) {
            $scope.checkoutSelected = false;
        }
        $scope.toggleCheckoutClicked = false;
    };
    // Clicks on the overlay itself will override dismiss and won't make it go away
    $scope.forceCheckoutOn = function () {
        if (!$scope.checkoutClosed) {
            $scope.toggleCheckoutClicked = true;
        }
        // Reset the Close button
        $scope.checkoutClosed = false;
    };
    // Clicks on the Close button will override the overlay click!
    $scope.checkoutClosed = false;
    $scope.forceCheckoutOff = function () {
        $scope.toggleCheckoutClicked = false;
        $scope.checkoutClosed = true;
    };

    // Small hack to persist the basket because bloody ng-include creates a new scope
    $scope.previousBasket = {};
    $scope.persistBasket = function(basket) {
        $scope.previousBasket = basket;
    };
    
    /* API popup */
    $scope.apiPopupViewed = false;
    $scope.apiPopupEnabled = false;
    $scope.enableApiPopup = function(enabled) {
        $scope.apiPopupEnabled = enabled;
    };
    $scope.resetSlide = function() {
        $scope.activeSlideIndex = 0;
        $scope.slides = [slides[$scope.activeSlideIndex]];
        $scope.activeSlide = $scope.slides[$scope.activeSlideIndex];
    };
    $scope.resetSlide(); // Call immediately at the beginning
    $scope.setActiveSlide = function(slide) {
        $scope.activeSlide = slide;
        $scope.slides.pop();
        $scope.slides.push(slide);
    };
    $scope.nextActiveSlide = function() {
        if ($scope.activeSlideIndex < slides.length - 1) {
            $scope.activeSlideIndex += 1;
            $scope.setActiveSlide(slides[$scope.activeSlideIndex]);
        } else {
            $scope.resetSlide();
            $scope.apiPopupEnabled = false;
            $scope.apiPopupViewed = true;
        }
    };
    $scope.prevActiveSlide = function() {
        if ($scope.activeSlideIndex > 0) {
            $scope.activeSlideIndex -= 1;
            $scope.setActiveSlide(slides[$scope.activeSlideIndex]);
        }
    };
    $scope.isActiveSlide = function(slide) {
        return $scope.activeSlide === slide;
    };

    $scope.setViewedApiPopUp = function(viewed) {
        $scope.apiPopupViewed = viewed;
    };
});
