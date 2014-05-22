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
    
    // Quick and dirty way to get a persistent description (_description) on each post
    // meaning post.description will be displayed on the site and if we want transformation
    // on it, we do that on post._description and replace post.description with it
    for (var j = 0; j < posts.length; j++) {
        posts[j]._description = posts[j].description;
    }

    // Split posts into three columns (and four if Longdan)
    $scope.columns = [];
    for (var i = 0; i < 4; i++) { // use 4 to make way for Longdan posts
        $scope.columns[i] = [];
    }
    
    // Define the two variables that will determine which posts to display
    $scope.currentType = "sale";
    $scope.searchedText = "";
    $scope.clearSearch = function() {
        $scope.searchedText = "";
        $scope.emptyColumns();
        $scope.repopulate();
    };
    // Method for dynamically populate page, mainly used for search
    $scope.repopulate = function() {
        console.log($scope.searchedText);
        var rowLength = ($scope.currentType === 'longdan') ? 4 : 3;
        // Should search be enabled?
        var isSearchEnabled = function() {
            return $scope.currentType !== 'longdan';
        };
        // Returns true if "text" contains "searchedText".
        var searchText = function(text, searchedText) {
            if (isSearchEnabled()) {
                // Quick cheap text sanitization
                var sanitized = $("<div>" + text + "</div>").text();
                return sanitized.toLowerCase().search(searchedText.toLowerCase()) != -1;
            } else {
                return true;
            }
        };
        var processMatch = function(match, p1, offset, string) {
            return "<span class=\"searchHighlight\">" + match + "</span>";
        };
        var highlight = function(post) {
            if (isSearchEnabled()) {
                if ($scope.searchedText !== "") {
                    post.description = post._description.replace(new RegExp($scope.searchedText, 'gi'),
                                                                 processMatch);
                } else {
                    post.description = post._description;
                }
            }
            return post;
        };
        var filterByType = function(post) {
            if (post.type === 'compose') {
                // Special case - the "compose" sentinel.
                return ($scope.currentType !== 'longdan' && $scope.searchedText === "");
            } else {
                return post.type === $scope.currentType && searchText(post._description, $scope.searchedText);
            }
        };
        var filteredPosts = posts.filter(filterByType);
        filteredPosts = $.map(filteredPosts, highlight);
        $scope.postCount = filteredPosts.length;
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
    // Images used for post overlay
    $scope.postImages = [];
    $scope.hasImages = function(post) {
        return post !== null && 'images' in post;
    };
    $scope.selectPost = function(post) {
        post = (post !== null && post.type === 'compose') ? null : post;
        $scope.postImages = $scope.hasImages(post) ? post.images : [];
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
    
    /* Intro header */
    $scope.introVisible = false;
    $scope.setIntroVisible = function(visible) {
        $scope.introVisible = visible;
    };
    
    /* Image picker in overlay */
    $scope.fullImagePicked = false;
    $scope.setPostImage = function(image) {
        $scope.pickedImage = image;
        $scope.setFullImagePicked(true);
    };
    $scope.setFullImagePicked = function(picked) {
        $scope.fullImagePicked = picked;
    };
    $scope.cycleImages = function(forward) {
        var current = $scope.postImages.indexOf($scope.pickedImage);
        var cycleIndex = current + (forward ? 1 : -1);
        cycleIndex += cycleIndex < 0 ? $scope.postImages.length : 0;
        var next = cycleIndex % $scope.postImages.length;
        $scope.pickedImage = $scope.postImages[next];
    };
    
    /*Enabling past searches*/
    $scope.pastSearches = [];
    $scope.updatePastSearches = function(searchedText) {
    // update pastSearches here
        console.log($scope.pastSearches);
        if ($scope.pastSearches.indexOf(searchedText) == -1) {
            // if searchedText is not found in current array
            if ($scope.pastSearches.length < 10) {
                $scope.pastSearches.unshift(searchedText);
            } else {
                $scope.pastSearches.pop();
                $scope.pastSearches.unshift(searchedText);
            }
        } else {
            // if searchedText is found, drop it from current and add it back at the start of array
            $scope.pastSearches.splice($scope.pastSearches.indexOf(searchedText),1);
            $scope.pastSearches.unshift(searchedText);
        }
    };
});
