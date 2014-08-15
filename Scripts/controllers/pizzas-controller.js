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

    $scope.checkEntries = function (pizza) {
        var title = pizza.title;
        for (var i = 0, length = $scope.cart.pizzas.length; i < length; i++) {
            if (title === $scope.cart.pizzas[i].title) {
                $scope.cart.pizzas[i].quantity += pizza.quantity;
                return $scope.cart;
            }
        }
        $scope.cart.pizzas.push(pizza);
        return $scope.cart;
    };

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
        var newCart = $scope.checkEntries(pizza);
        cart.addToCart(newCart);
    }
});