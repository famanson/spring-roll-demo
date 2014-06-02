/*jshint browser:true */

// angular is defined in angular.js
/*global angular */

// these are in global.js
/*global posts, notifications, topNavs, slides, app, longdanEnabled, $:false */

app.controller("ListingsCtrl", function($scope, $timeout) {
    'use strict';

    // Fixed current date.
    $scope.currentDate = new Date();

    // Add control for toggling the visibility of the grid lines.
    $scope.showGridLines = false;

    // Whether longdan features are enabled.
    $scope.longdanEnabled = window.longdanEnabled || false;

    // Enable debug panel?
    $scope.debugPanelEnabled = window.debugPanelEnabled || false;

    // Currently shown posts.
    $scope.posts = [];

    // Currently selected post, will be displayed to user in detail.
    $scope.selected_post = null;

    // Define the two variables that will determine which posts to display
    $scope.currentType = "sale";
    $scope.searchedText = "";
    $scope.clearSearch = function() {
        $scope.searchedText = "";
        $scope.repopulate();
    };
    // Method for dynamically populate page, mainly used for search
    $scope.repopulate = function() {
        // Should search be enabled?
        var isSearchEnabled = function() {
            return $scope.currentType !== 'longdan';
        };
        // Returns true if "text" contains "searchedText".
        var isTextMatched = function(text, searchedText) {
            if (isSearchEnabled()) {
                // Quick cheap text sanitization
                var sanitized = $("<div>" + text + "</div>").text();
                return sanitized.toLowerCase().search(searchedText.escapeRegex().toLowerCase()) != -1;
            } else {
                return true;
            }
        };
        var filterByType = function(post) {
            if (post.type === 'compose') {
                // Special case - the "compose" sentinel.
                return ($scope.currentType !== 'longdan' && $scope.searchedText === "");
            } else {
                return post.type === $scope.currentType && isTextMatched(post.description, $scope.searchedText);
            }
        };
        $scope.posts = posts.filter(filterByType);
    };


    /* Top Nav Control */
    $scope.populateByType = function(popType) {
        $scope.currentType = popType;
        $scope.repopulate();
    };

    $scope.switchColumn = function(popType) {
        if (popType !== $scope.selectedNav) {
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
    $scope.openComposeBox = function() {
        $scope.$broadcast("EVENT_OPEN_COMPOSE_BOX");
    }

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
    $scope.toggleIntro = function() {
        $scope.introVisible = !$scope.introVisible;
    };
    $scope.setIntroVisible = function(show) {
        $scope.introVisible = show;
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
        if ($scope.pastSearches.indexOf(searchedText) != -1) {
            // if searchedText is found, drop it from current
            $scope.pastSearches.splice($scope.pastSearches.indexOf(searchedText),1);
        } else {
            // if searchedText is not found in current array, chop the last element if length >= 10
            if ($scope.pastSearches.length >= 10) {
                $scope.pastSearches.pop();
            }    
        }
        $scope.pastSearches.unshift(searchedText);
    };
    
    $scope.pastSearchesVisible = false;
    $scope.setPastSearchesVisible = function(visible) {
        $scope.pastSearchesVisible = visible;
    };
});

/* Converts date in string format to a time elapsed representation, e.g. "6 days ago" */
app.filter('timeElapsed', function() {
    return function(dateInput, currentDate) {
        // Process input date.
        var date;
        if (dateInput instanceof String || typeof(dateInput) === "string") {
            date = new Date(dateInput);
        } else if (dateInput instanceof Date) {
            date = dateInput;
        } else {
            return "Unsupported date type!";
        }

        var numHour = Math.floor((currentDate - date)/3600000);
        if (numHour < 1) {
                return "just now";
        } else if (numHour <= 24) {
                return "today" ;
        } else if (numHour <= 48) {
            return "yesterday";
        } else if (numHour < 168) {
            return Math.round(numHour/24) + " days ago";
        } else if (numHour < 264) {
            return "a week ago";
        } else if (numHour < 720) {
            return Math.round(numHour/168) + " weeks ago";
        } else if (numHour < 1080) {
            return "a month ago";
        } else {
            return Math.round(numHour/720) + " months ago";
        }
    };
});
