angular.module('pizzaDeliveryService').controller('NewPizzaCtrl', function ($scope, $location, components, pizzas) {
    'use strict';

    $scope.componentsOfPizza = components;
    $scope.pizzas = pizzas.pizzas;
    $scope.newPizza = {};
    $scope.newPizza.components = [];
    $scope.indexArray = [];

    for (var i = 0, length = $scope.componentsOfPizza.length; i < length; i++) {
        $scope.indexArray[i] = true;
    }

    $scope.addComponent = function (index) {
        delete $scope.indexArray[index];
        $scope.newPizza.components.push($scope.componentsOfPizza[index]);
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
});