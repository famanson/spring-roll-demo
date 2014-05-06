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
        price: "£2.00",
        rrp: "£2.20",
        desc1: "Imperial Rice Vermicelli 1.6mm",
        desc2: "Bún Hoàng Gia 1.6mm",
        image_url: "http://www.longdan.co.uk/uploads/sanpham/prod_260213094726.jpg",
        packaging: "400g bag",
        type: "longdan"
    }, {
        id: 2,
        price: "£3.00",
        rrp: "£4.00",
        desc1: "Sriracha Hot Chilli Sauce",
        desc2: "Tương Ớt Con Phụng",
        image_url: "http://www.longdan.co.uk/uploads/sanpham/prod_170413044131.jpg",
        packaging: "793g bottle",
        type: "longdan"
    }, {
        id: 3,
        price: "£1.50",
        rrp: "£2.00",
        desc1: "Vifon Soup Powder",
        desc2: "Bột Canh Vifon",
        image_url: "http://www.longdan.co.uk/uploads/sanpham/prod_061208040049.jpg",
        packaging: "250g bag",
        type: "longdan"
    }, {
        id: 4,
        price: "£12.50",
        rrp: "£14.00",
        desc1: "Kim Son Marble Goby",
        desc2: "Cá Bống Tượng Kim Sơn",
        image_url: "http://www.longdan.co.uk/uploads/sanpham/prod_291108030604.jpg",
        packaging: "1kg",
        type: "longdan"
    }, {
        id: 5,
        price: "£2.50",
        rrp: "£3.00",
        desc1: "Longdan Dried Lotus Seed",
        desc2: "Hạt Sen Khô Longdan",
        image_url: "http://www.longdan.co.uk/uploads/sanpham/prod_081208045833.jpg",
        packaging: "200g box",
        type: "longdan"
    }, {
        id: 6,
        price: "£3.50",
        rrp: "£4.00",
        desc1: "Longdan Arrowroot Bean Thread",
        desc2: "Miến Dong Trắng Longdan",
        image_url: "http://www.longdan.co.uk/uploads/sanpham/prod_101108082505.jpg",
        packaging: "500g bag",
        type: "longdan"
    }, {
        id: 7,
        price: "£1.50",
        rrp: "£2.00",
        desc1: "Red Guava",
        desc2: "Ổi Xá Lị",
        image_url: "http://www.longdan.co.uk/uploads/sanpham/prod_241008111326.jpg",
        packaging: "3-fruit tray",
        type: "longdan"
    }, {
        id: 8,
        price: "£2.00",
        rrp: "£2.50",
        desc1: "Pak Choi",
        desc2: "Cải  Xanh",
        image_url: "http://www.longdan.co.uk/uploads/sanpham/prod_191008045430.jpg",
        packaging: "400g bag",
        type: "longdan"
    }, {
        id: 9,
        price: "£1.00",
        rrp: "£1.50",
        desc1: "Vietnamese Coriander ",
        desc2: "Ngò Rí",
        image_url: "http://www.longdan.co.uk/uploads/sanpham/prod_191008050413.jpg",
        packaging: "100g bag",
        type: "longdan"
    }, {
        id: 10,
        price: "£2.40",
        rrp: "£2.80",
        desc1: "Longdan Water Melon Seed Candy",
        desc2: "Kẹo Hạt Dưa Longdan",
        image_url: "http://www.longdan.co.uk/uploads/sanpham/prod_081108153148.jpg",
        packaging: "100g box",
        type: "longdan"
    }, {
        id: 11,
        price: "£13.50",
        rrp: "£15.00",
        desc1: "Longdan Vietnam Fragrant Rice",
        desc2: "Gạo Xuân Lộc Longdan",
        image_url: "http://www.longdan.co.uk/uploads/sanpham/prod_061208030757.jpg",
        packaging: "10kg bag",
        type: "longdan"
    }, {
        id: 12,
        price: "£2.50",
        rrp: "£3.00",
        desc1: "Nam Duong Soy Sauce",
        desc2: "Nước Tương Hoa Sen Nam Dương",
        image_url: "http://www.longdan.co.uk/uploads/sanpham/prod_081208040737.jpg",
        packaging: "500ml bottle",
        type: "longdan"
    }, {
        id: 13,
        price: "£7.50",
        rrp: "£9.00",
        desc1: "Korean Clay Pot Small (18cm)",
        desc2: "Nồi Đất Hàn Quốc Cỡ Nhỏ",
        image_url: "http://www.longdan.co.uk/uploads/sanpham/prod_250213084648.jpg",
        packaging: "",
        type: "longdan"
    }, {
        id: 14,
        price: "£5.50",
        rrp: "£6.00",
        desc1: "Trung Nguyen G7 Coffee 3 in 1",
        desc2: "Cà Phê Trung Nguyên G7 3 Trong 1",
        image_url: "http://www.longdan.co.uk/uploads/sanpham/prod_220313084920.jpg",
        packaging: "320g box",
        type: "longdan"
    }, {
        id: 15,
        price: "£3.90",
        rrp: "£4.50",
        desc1: "Vinacafe Buon Ma Thuot Coffee ",
        desc2: "Cà Phê Buôn Ma Thuột Vinacafe",
        image_url: "http://www.longdan.co.uk/uploads/sanpham/prod_040309111705.jpg",
        packaging: "250g bag",
        type: "longdan"
    }, {
        id: 16,
        price: "£7.50",
        rrp: "£9.00",
        desc1: "Sai Gon Wood Mortar",
        desc2: "Bộ Chày Cối Sài Gòn",
        image_url: "http://www.longdan.co.uk/uploads/sanpham/prod_081208115108.jpg",
        packaging: "",
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

var ldCategories = [
    { name: "Fresh & Chilled" },
    { name: "Rice & Noodles"},
    { name: "Seasoning & Spices"},
    { name: "Confectionery"},
    { name: "Drinks"},
    { name: "Non-food"}
 ];

// Define controller.
var app = angular.module('SpringRollDemo', ['ngSanitize','ngAnimate']);

app.controller("ListingsCtrl", function($scope, $timeout) {
    'use strict';
    // Add control for toggling the visibility of the grid lines.
    $scope.showGridLines = false;
    
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
    $scope.populateByType = function(popType, delay) {
        var rowLength = (popType == 'longdan') ? 4 : 3;
        $timeout(function() {
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
   
    // First work out Longdan's prices
    var longdanPosts = posts.filter(function(post) {return post.type == 'longdan';});
    var longdanPrices = {};
    for (var j = 0; j < longdanPosts.length; j++) {
        // Convert prices to numeric values here - this was not done in the definition because it'd
        // mess up the formatting
        var numericPrice = parseFloat(longdanPosts[j].price.replace('£',''));
        longdanPrices[longdanPosts[j].id] = numericPrice;
    }

    $scope.deliveryFee = 15;

    $scope.basketTotal = function() {
        var total = 0;
        for (var key in $scope.basket) {
            // $scope.basket[key] would be the quantity
            var price = longdanPrices[key];
            total += price * $scope.basket[key];
        }
        if (total >= 100) {
            $scope.deliveryFee = 0;
        } else {
            $scope.deliveryFee = 15;
        }
        return total;
    };
    
    $scope.showTruck = function() {
        return $scope.isDeliveryFree() ? 'free-truck.png' : 'truck.png';
    };
    
    $scope.deliveryFeeDisplay = function() {
        return $scope.isDeliveryFree() ? 'FREE!' : "£" + $scope.deliveryFee.toFixed(2);
    };
    
    $scope.isDeliveryFree = function() {
        return $scope.deliveryFee === 0;
    };
    
    // Longdan images for use in the checkout overlay
    var longdanImages = {};
    for (var k = 0; k < longdanPosts.length; k++) {
        longdanImages[longdanPosts[k].id] = {
            imageUrl: longdanPosts[k].image_url,
            description: longdanPosts[k].desc1
        };
    }
    $scope.longdanImages = longdanImages;

    $scope.checkedOutItems = [];
    $scope.showCheckoutOverlay = false;
    $scope.prepareCheckout = function () {
        var checkedOutItems = [];
        for (var key in $scope.basket) {
            // $scope.basket[key] would be the quantity
            var quantity = $scope.basket[key];
            var price = longdanPrices[key] * quantity;
            var imageUrl = longdanImages[key].imageUrl;
            var description = longdanImages[key].description;
            if (quantity > 0) {
                checkedOutItems.push({
                    quantity: quantity,
                    price: price,
                    imageUrl: imageUrl,
                    description: description,
                });
            }
        }
        $scope.checkedOutItems = checkedOutItems;
    };
   
    $scope.toggleCheckoutClicked = false;
    $scope.toggleCheckout = function() {
        $scope.toggleCheckoutClicked = true;
        $scope.checkoutSelected = !$scope.checkoutSelected;
    };
    
    $scope.dismissCheckout = function() {
        if (!$scope.toggleCheckoutClicked) {
            $scope.checkoutSelected = false;
        }
        $scope.toggleCheckoutClicked = false;
    };
    
    $scope.forceCheckoutOn = function () {
        if (!$scope.checkoutClosed) {
            $scope.toggleCheckoutClicked = true;
            console.log("force on");
        }
        // Reset the Close button
        $scope.checkoutClosed = false;
    };
    
    $scope.checkoutClosed = false; // Override the rest of checkout controls
    $scope.forceCheckoutOff = function () {
        $scope.toggleCheckoutClicked = false;
        $scope.checkoutClosed = true;
        console.log("force off");
    };
    
    $scope.checkoutProgress = function() {
        var fraction = $scope.basketTotal()/50;
        return fraction*100 + "%";
    };
    
    
    $scope.ldCategories = ldCategories;
});