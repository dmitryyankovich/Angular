(function() {
    'use strict';

    angular.module('pizzaDeliveryService').factory('cart', function(){
        var cart = JSON.parse(localStorage.getItem('cart'));
        if(!cart){
            cart={};
            localStorage.setItem('cart',JSON.stringify(cart));
        }
        return cart;
    })
})();