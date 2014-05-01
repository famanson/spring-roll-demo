/*jslint white: true */
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
        description: "<b>Old heater</b>, good for winter holidays. Heats well even in coldest weather for a bedroom-sided room. " +
                    "Will send anywhere within UK, <b>delivery</b> included."
    }, {
        price: 100,
        ago: "2 days ago",
        description: "<b>Old heater</b>, good for winter holidays. Heats well even in coldest weather for a bedroom-sided room. " +
                    "Will send anywhere within UK, <b>delivery</b> included."
    }, {
        price: 100,
        ago: "2 days ago",
        description: "<b>Old heater</b>, good for winter holidays. Heats well even in coldest weather for a bedroom-sided room. " +
                    "Will send anywhere within UK, <b>delivery</b> included."
    }
];


// Define controller.

var app = angular.module('SpringRollDemo', ['ngSanitize']);

app.controller("ListingsCtrl", function($scope) {
    'use strict';
    
    // Split posts into three columns.
    $scope.columns = [];
    
    var count = Math.ceil(posts.length / 3);
    $scope.columns[0] = posts.slice(0, count);
    $scope.columns[1] = posts.slice(count, 2 * count);
    $scope.columns[2] = posts.slice(2 * count, posts.length);
});