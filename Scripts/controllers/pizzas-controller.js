(function() {
   'use strict';

    angular.module('pizzaDeliveryService').controller('PizzasCtrl', function($scope, pizzas, cart){
        $scope.pizzas = pizzas.pizzas;

        $scope.computeCost = function(pizza) {
            var sum = 0;
            for (var i = 0, length = pizza.components.length; i < length; i++) {
                sum += pizza.components[i].cost;
            }
            return sum + ' руб.';
        }
    })
})();