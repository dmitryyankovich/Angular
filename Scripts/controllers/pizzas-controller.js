angular.module('pizzaDeliveryService').controller('PizzasCtrl', function ($scope, pizzas, cart) {
    'use strict';

    $scope.pizzas = pizzas.pizzas;
    $scope.indexArray = [];
    $scope.cart = cart.cart() || {};
    $scope.cart.pizzas = cart.cart().pizzas || [];
    $scope.quantity = [];

    for (var i = 0, length = $scope.pizzas.length; i < length; i++) {
        $scope.indexArray[i] = true;
        $scope.quantity[i] = 1;
    }

    $scope.computeCost = function (pizza) {
        var sum = 0;
        for (var i = 0, length = pizza.components.length; i < length; i++) {
            sum += pizza.components[i].cost;
        }
        return sum + ' руб.';
    };

    $scope.addToCart = function (pizza, index) {
        delete $scope.indexArray[index];
        pizza.quantity = $scope.quantity[index];
        $scope.cart.pizzas.push(pizza);
        cart.addToCart($scope.cart);
    }
});