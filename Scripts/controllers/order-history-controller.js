(function() {
    'use strict';

    angular.module('pizzaDeliveryService').controller('OrderHistoryCtrl', function($scope, orders){
        $scope.orders = orders;

        $scope.computeCost = function(pizza) {
            var sum = 0;
            for (var i = 0, length = pizza.components.length; i < length; i++) {
                sum += pizza.components[i].cost;
            }
            return sum;
        };

        $scope.totalCost = function (order) {
            var cost = 0;
            for (var i = 0, length = order.pizzas.length; i<length; i++){
                cost += $scope.computeCost(order.pizzas[i]);
            }
            return cost;
        };

        $scope.showPizzas = function (order) {
            var string = order.pizzas[0].title;
            for (var i = 1, length = order.pizzas.length; i < length; i++) {
                string = string + ', ' + order.pizzas[i].title;
            }
            return string;
        };
    })
})();