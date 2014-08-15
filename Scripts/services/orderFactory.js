angular.module('pizzaDeliveryService').factory('orders', function () {
    'use strict';

    var orders = JSON.parse(localStorage.getItem('orders'));

    if (!orders) {
        orders = [];
        localStorage.setItem('orders', JSON.stringify(orders));
    }

    var max = 0;
    var returnMaxId = function () {
        for (var i = 0, length = orders.length; i < length; i++) {
            if (orders[i].id > max) {
                max = orders[i].id;
            }
        }
        return ++max;
    };

    var saveOrder = function (order) {
        if (order !== undefined && order !== null) {
            orders.push(order);
            localStorage.setItem('orders', JSON.stringify(orders));
        }
    };

    return {
        orders: orders,
        saveOrder: saveOrder,
        orderMax: returnMaxId
    }
});