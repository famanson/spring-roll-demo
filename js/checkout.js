/*global angular */

var ldCategories = [
    { name: "Fresh & Chilled" },
    { name: "Rice & Noodles"},
    { name: "Seasoning & Spices"},
    { name: "Confectionery"},
    { name: "Drinks"},
    { name: "Non-food"}
 ];

/* Longdan */
app.controller("CheckoutCtrl", function($scope) {
    if (!$scope.longdanEnabled) {
        $scope.topNavs.pop();
    } else {
        $scope.basket = $scope.previousBasket;

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

        $scope.checkoutProgress = function() {
            var fraction = $scope.basketTotal()/50;
            return Math.round(fraction*100) + "%";
        };


        $scope.ldCategories = ldCategories;
    }
});
