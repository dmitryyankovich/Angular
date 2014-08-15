angular.module('pizzaDeliveryService').factory('cart', function () {
    'use strict';

    var cart = function () {
        return JSON.parse(localStorage.getItem('cart')) || { "pizzas": [] };
    };

    if (!cart) {
        cart = { "pizzas": [] };
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    var clearCart = function () {
        cart = { "pizzas": [] };
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    var addToCart = function (cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    return {
        cart: cart,
        clearCart: clearCart,
        addToCart: addToCart
    }
});