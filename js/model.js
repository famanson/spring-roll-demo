/*jshint browser:true */

// angular is defined in angular.js
/*global angular */

// these are in global.js
/*global posts, notifications, topNavs, slides, app, longdanEnabled, $:false */

app.controller("ListingsCtrl", function($scope, $timeout) {
    'use strict';
    
    // Add control for toggling the visibility of the grid lines.
    $scope.showGridLines = false;

    // Whether longdan features are enabled.
    $scope.longdanEnabled = window.longdanEnabled || false;
    
    // Currently selected post, will be displayed to user in detail.
    $scope.selected_post = null;
    

    // Split posts into three columns (and four if Longdan)
    $scope.columns = [];
    for (var i = 0; i < 4; i++) { // use 4 to make way for Longdan posts
        $scope.columns[i] = [];
    }
    
    // Define the two variables that will determine which posts to display
    $scope.currentType = "sale";
    $scope.searchText = "";
    
    // Don't know what this is for yet
    $scope.repopulate = function() {
        var rowLength = ($scope.currentType == 'longdan') ? 4 : 3;
        // Returns true if "text" contains "searchedText".
        var searchText = function(text, searchedText) {
            // Quick cheap text sanitization
            var sanitized = $("<div>" + text + "</div>").text();
            return sanitized.toLowerCase().search(searchedText.toLowerCase()) != -1;
        };
        var filterByType = function(post) {
            if (post.type === 'compose') {
                // Special case - the "compose" sentinel.
                return ($scope.currentType !== 'longdan' && $scope.searchText === "");
            } else {
                return post.type === $scope.currentType && searchText(post.description, $scope.searchText);
            }
        };
        var filteredPosts = posts.filter(filterByType);
        var perColumn = filteredPosts.length / rowLength;
        var remainder = filteredPosts.length % rowLength;
        // Again, cycling through each column and post is needed to get animations
        // working.
        for (var i = 0; i < rowLength; i++) {
            var columnPosts = filteredPosts.splice(0, perColumn + (i < remainder ? 1 : 0));
            for (var k = 0; k < columnPosts.length; k++) {
                $scope.columns[i].push(columnPosts[k]);
            }
        }
    };
    
    // Clear all columns. 
    $scope.emptyColumns = function () {
        // Cycling through each column to perform pop is necessary for animations.
        for (var i = 0; i < 4; i++) { // use 4 to make way for Longdan posts
            var len = $scope.columns[i].length;
            for (var j = 0; j < len; j++) {
                $scope.columns[i].pop();
            }
        }
    };

    /* Top Nav Control */
    $scope.populateByType = function(popType) {
        $scope.currentType = popType;
        $scope.repopulate();
    };

    $scope.switchColumn = function(popType) {
        if (popType !== $scope.selectedNav) {
            $scope.emptyColumns();
            $scope.populateByType(popType);
        }
    };
    
    $scope.selectPost = function(post) {
        post = (post !== null && post.type === 'compose') ? null : post;
        $scope.selected_post = post;
    };

    $scope.populateByType('sale');
    if (!$scope.longdanEnabled) {
        topNavs.pop();
    }
    $scope.topNavs = topNavs;

    $scope.setTopNavMaster = function(navType) {
        $scope.selectedNav = navType;
    };
    $scope.setTopNavMaster(topNavs[0].type);

    $scope.isTopNavSelected = function(navType) {
        return $scope.selectedNav === navType;
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
