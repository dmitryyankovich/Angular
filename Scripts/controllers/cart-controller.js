(function() {
    'use strict';

    angular.module('pizzaDeliveryService').controller('CartCtrl', function($scope, cart){
        $scope.cart = cart;
    })
})();