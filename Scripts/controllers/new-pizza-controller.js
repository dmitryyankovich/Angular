(function() {
    'use strict';

    angular.module('pizzaDeliveryService').controller('NewPizzaCtrl', function($scope, $location, components, pizzas){
        $scope.componentsOfPizza = components;
        $scope.pizzas = pizzas.pizzas;
        $scope.newPizza = {};
        $scope.newPizza.components = [];


        $scope.visss = false;
        for(var i = 0, length = $scope.componentsOfPizza.length; i< length; i++){
            $scope.componentsOfPizza[i].toShow = true;
        }

        $scope.addComponent = function(comp) {
            delete comp.toShow;
            $scope.newPizza.components.push(comp);
        };

        $scope.save = function () {
            $scope.newPizza.id = pizzas.pizzasMax();
            $scope.newPizza.weight = 300;
            $scope.newPizza.size = "XXL";
            $scope.newPizza.photo = "Content/img/default.png";
            $scope.pizzas.push($scope.newPizza);
            pizzas.saveNew($scope.pizzas);
            $location.path('/show_all');
        }
    })
})();