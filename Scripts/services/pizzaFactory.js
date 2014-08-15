angular.module('pizzaDeliveryService').factory('pizzas', function ($http) {
    'use strict';

    var pizzas = JSON.parse(localStorage.getItem('pizzas'));
    if (!pizzas) {
        $http.get('Content/json/pizzas.json').then(function (res) {
            pizzas = res.data;
            localStorage.setItem('pizzas', JSON.stringify(pizzas));
        });
    }

    var max = 0;
    var returnMaxId = function () {
        for (var i = 0, length = pizzas.length; i < length; i++) {
            if (pizzas[i].id > max) {
                max = pizzas[i].id;
            }
        }
        return ++max;
    };

    var savePizza = function (pizz) {
        if (pizz !== undefined && pizz !== null) {
            localStorage.setItem('pizzas', JSON.stringify(pizz));
        }
    };

    return {
        pizzas: pizzas,
        pizzasMax: returnMaxId,
        saveNew: savePizza
    }
});