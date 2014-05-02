/*global angular */

/**
 * Fake data model + controller
 */

// Define data

/**
 * post := { price, daysAgo, description }
 */
var posts = [
    {
        price: 100,
        ago: "2 days ago",
        description: "<b>Old heater</b>, good for winter holidays. Heats well even in coldest weather for a bedroom-sided room. Will send anywhere within UK, <b>delivery</b> included.",
        type: "buy"
    }, {
        price: 150,
        ago: "4 days ago",
        description: "Old <b>50-inch TV</b>, brand Panasonic, black, small bezel. Purchased in 2009, in good condition (see photos). Has an in-built DVD player, 2 USB, 3 HDMI, Component and 2 AVI. <b>LED</b> display, may not good against direct sunlight. Delivery costs not included, please pick up from Clapham, London.",
        type: "buy"
    }, {
        price: 400,
        ago: "2 days ago",
        description: "<b>Phone 5S gold colour</b>. Barely used. Deliver anywhere within UK (delivery not included, up to £5 extra). Will throw in a free cover of your choice (see photos).",
        type: "buy"
    }, {
        price: 150,
        ago: "6 days ago",
        description: "<b>Brand new female bike</b>. Selling due to lack of use, collect in person only.",
        type: "sell"
    }
];

var topNavs = [
    {
        name: 'Buy',
        type: 'buy'
    },
    {
        name: 'Sell',
        type: 'sell'
    },
    {
        name: 'Rent',
        type: 'rent'
    }
];

// Define controller.

var app = angular.module('SpringRollDemo', ['ngSanitize']);

app.controller("ListingsCtrl", function($scope) {
    'use strict';
    // Add control for toggling the visibility of the grid lines.
    $scope.showGridLines = false;
    
    // Split posts into three columns.
    $scope.columns = [];
    
    $scope.populateByType = function ( popType ) {
        var filterByType = function ( element ) {
            return element.type === popType;
        };
        var filteredPosts = posts.filter(filterByType);
        var perColumn = filteredPosts.length / 3;
        var remainder = filteredPosts.length % 3;
        console.log(filteredPosts);
        for (var i = 0; i < 3; i++) {
            $scope.columns[i] = filteredPosts.splice(0, perColumn + (i < remainder ? 1 : 0));
        }
    };
    $scope.populateByType('buy');
//    for (var i = 0; i < 3; i++) {
//        $scope.columns[i] = posts.splice(0, perColumn + (i < remainder ? 1 : 0));
//        console.log($scope.columns[i]);
//    }
    
    $scope.switchPostType = function ( newType ) {
        $scope.currentPostType = {type:newType};
    };
    
    $scope.topNavs = topNavs;
    
    $scope.setTopNavMaster = function(nav) {
        $scope.selected = nav;
    };

    $scope.isTopNavSelected = function(nav) {
        return $scope.selected === nav;
    };
});