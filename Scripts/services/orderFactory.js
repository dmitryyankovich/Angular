(function() {
    'use strict';

    angular.module('pizzaDeliveryService').factory('orders', function(){
        var orders = JSON.parse(localStorage.getItem('orders'));
        if(!orders){
            orders={};
            localStorage.setItem('orders',JSON.stringify(orders));
        }
        return orders;
    })
})();