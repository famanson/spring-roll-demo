/*global angular */

/**
 * Fake data model + controller
 */

// Define data

/**
 * post := { price, daysAgo, description }
 */
var posts = [
    /* Sale posts */
    {
        price: "£100",
        ago: "2 days ago",
        description: "<b>Old heater</b>, good for winter holidays. Heats well even in coldest weather for a bedroom-sided room. Will send anywhere within UK, <b>delivery</b> included.",
        type: "sale"
    }, {
        price: "£150",
        ago: "4 days ago",
        description: "Old <b>50-inch TV</b>, brand Panasonic, black, small bezel. Purchased in 2009, in good condition (see photos). Has an in-built DVD player, 2 USB, 3 HDMI, Component and 2 AVI. <b>LED</b> display, may not good against direct sunlight. Delivery costs not included, please pick up from Clapham, London.",
        type: "sale"
    }, {
        price: "£400",
        ago: "2 days ago",
        description: "<b>Phone 5S gold colour</b>. Barely used. Deliver anywhere within UK (delivery not included, up to £5 extra). Will throw in a free cover of your choice (see photos).",
        type: "sale"
    }, {
        price: "£150",
        ago: "6 days ago",
        description: "<b>Brand new female bike</b> in London! Raleigh bike, including lights, lock and a free front basket. Recently serviced. Selling due to lack of use, collect in person only.",
        type: "sale"
    }, {
        price: "£750",
        ago: "5 days ago",
        description: "<b>Macbook Pro 2013 Like New!</b> Will post to anywhere in the UK. Including free Apple Magic Mouse and spare charger to sweeten the deal, plus <b>6 months left on Apple Care!</b>",
        type: "sale"
    }, 
    /* Wanted posts */
    {
        price: "£7/h+tips",
        ago: "today",
        description: "<b>Waiter needed</b> for a Vietnamese restaurant in South London. Valid ID and work permit (especially students) required. No experience needed, training will be included. Both full-time and part-time are welcomed.",
        type: "wanted"
    }, {
        price: "Wanted!",
        ago: "1 day ago",
        description: "<b>Man and van wanted!</b> We are 4 students and need to move to our new place across town in London early in June. Prices can be negotiable!",
        type: "wanted"
    }, {
        price: "£20/h",
        ago: "1 day ago",
        description: "<b>Looking for a home tutor</b> to teach Vietnamese to kids. <b>Two 2-hour lessons a week</b> Professional preferred, but students will also be considered.",
        type: "wanted"
    },
    /* Rent posts */
    {
        price: "£500pcm",
        ago: "2 days ago",
        description: "<b>Double room for rent</b> in Hackney E2. Suitable for couples. Very close to large supermarkets (Tesco, Asda), Vietnamese shops and restaurants. Buses: <b>149, 67, 242</b>. Nearby stations: <b>Hoxton, Shoreditch High Street</b>",
        type: "rent"
    }, {
        price: "£450pcm",
        ago: "2 days ago",
        description: "<b>Double room</b>. Can be shared for up to 2 people in <b>Finsbury Park, North London</b>. 5 mins walk to Sainsbury and 15 mins away from Finsbury Park Station. <b>Female students only</b>",
        type: "rent"
    }, {
        price: "£500pcm",
        ago: "2 days ago",
        description: "<b>Large studio room</b> in a Vietnamese family's large house, <b>all bills included!!</b> Post code: E3. Conveniently located near large shopping mall and public transport. <b>Students and professionals both welcome</b>.",
        type: "rent"
    }, {
        price: "£2000pcm",
        ago: "2 days ago",
        description: "<b>1-bedroom apartment</b>, Canada Water. Central area with all large shops, London's financial offices and major public transport links within walking distance. <b>Best suited for a single professional</b>.",
        type: "rent"
    }, {
        price: "£1500pcm",
        ago: "1 day ago",
        description: "<b>4-bedroom house</b> Greenwich SE10. Very near to Greenwich uni. Close to Greenwich station, Tesco and Chinese shop. Viewing arrangements welcomed.",
        type: "rent"
    },
    /* Longdan posts */
    {
        id: 1,
        price: "£20.00",
        desc1: "Imperial Rice Vermicelli 1.6mm",
        desc2: "Bún Hoàng Gia 1.6mm",
        image_url: "http://www.longdan.co.uk/uploads/sanpham/prod_260213094726.jpg",
        packaging: "400g x 30 bags",
        type: "longdan"
    }
];

var topNavs = [
    {
        name: 'Sale',
        type: 'sale'
    }, {
        name: 'Wanted',
        type: 'wanted'
    }, {
        name: 'Rent',
        type: 'rent'
    }, {
        name: 'Longdan',
        type: 'longdan'
    }
];

var notifications = [
    {
        content: "<b>Kevin Nguyen</b> and 5 others messaged you about your <b>\"Brand new iPhone 5\"</b> post.",
        ago: '1 hour ago in Sale',
        type: 'message',
        avatar: 'avatar04.jpg'
    }, {
        content: "<b>Van Tran</b> and 2 others messaged you about your <b>\"Old heater\"</b> post.",
        ago: '1 hour ago in Sale',
        type: 'message',
        avatar: 'avatar02.jpg'
    }, {
        content: "<b>Linh Nguyen</b> and 10 others messaged you about your <b>\"Waiters needed, Viet Restaurant\"</b> post.",
        ago: '3 hours ago in Wanted',
        type: 'message',
        avatar: 'avatar03.jpg'
    }, {
        content: "<b>Hoang Pham</b> replied about his <b>\"Airport taxi service\"</b> post.",
        ago: '4 hours ago in Wanted',
        type: 'message',
        avatar: 'avatar05.jpg'
    }, {
        content: "<b>Ha Bui</b> replied about her <b>\"Large Studio Room\"</b> post.",
        ago: '4 hours ago in Rent',
        type: 'message',
        avatar: 'avatar06.jpg'
    }
];

// Define controller.
var app = angular.module('SpringRollDemo', ['ngSanitize','ngAnimate']);

app.controller("ListingsCtrl", function($scope, $timeout) {
    'use strict';
    // Add control for toggling the visibility of the grid lines.
    $scope.showGridLines = false;
    
    // Split posts into three columns.
    $scope.columns = [];
    for (var i = 0; i < 3; i++) {
        $scope.columns[i] = [];
    }
    
    $scope.emptyColumns = function () {
        for (var i = 0; i < 3; i++) {
            var len = $scope.columns[i].length;
            for (var j = 0; j < len; j++) {
                $scope.columns[i].pop();
            }
        }
    };
    
    /* Top Nav Control */
    $scope.populateByType = function(popType, delay) {
        $timeout(function() {
            var filterByType = function(element) {
                return element.type === popType;
            };
            var filteredPosts = posts.filter(filterByType);
            var perColumn = filteredPosts.length / 3;
            var remainder = filteredPosts.length % 3;
            for (var i = 0; i < 3; i++) {
                var columnPosts = filteredPosts.splice(0, perColumn + (i < remainder ? 1 : 0));
                for (var k = 0; k < columnPosts.length; k++) {
                    $scope.columns[i].push(columnPosts[k]);
                }
            }
        }, delay);
    };

    $scope.populateByType('sale', 0);
    
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
    
    $scope.isNBoxSelected = function() {
        return $scope.nboxSelected;
    };

    $scope.toggleClicked = false;
    $scope.toggleNBox = function() {
        $scope.toggleClicked = true;
        $scope.nboxSelected = !$scope.nboxSelected;
    };
    
    $scope.dismissNBox = function() {
        //alert("Dismiss");
        if (!$scope.toggleClicked) {
            $scope.nboxSelected = false;
        }
        $scope.toggleClicked = false;
    };
    
    $scope.notifications = notifications;
    
    
    /* Longdan */
    $scope.basket = {};
    
    $scope.addBasket = function(id) {
        if (id in $scope.basket) {
            $scope.basket[id] += 1;
        } else {
            $scope.basket[id] = 1;
        }
    };
    
    $scope.removeBasket = function(id) {
        if (id in $scope.basket && $scope.basket[id] > 0) {
            $scope.basket[id] -= 1;
        }
    };
    
    $scope.showQuantity = function(id) {
        if (id in $scope.basket) {
            return $scope.basket[id];
        } else {
            return 0;
        }
    };
});