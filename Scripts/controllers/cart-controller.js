angular.module('pizzaDeliveryService').controller('CartCtrl', function ($scope, $location, cart, orders) {
    'use strict';

    $scope.cart = cart.cart();

    $scope.computeCost = function (pizza) {
        var sum = 0;
        for (var i = 0, length = pizza.components.length; i < length; i++) {
            sum += pizza.components[i].cost;
        }
        return sum;
    };

    $scope.totalCost = function (order) {
        var cost = 0;
        for (var i = 0, length = order.pizzas.length; i < length; i++) {
            cost += $scope.computeCost(order.pizzas[i]) * order.pizzas[i].quantity;
        }
        return cost;
    };

    $scope.saveOrder = function () {
        $scope.cart.id = orders.orderMax();
        $scope.cart.customer = 'Carlene';
        $scope.cart.date = new Date().toLocaleString();
        orders.saveOrder($scope.cart);
        cart.clearCart();
        $location.path('/show_all');
    }
});