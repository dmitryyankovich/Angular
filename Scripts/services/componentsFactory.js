(function() {
    'use strict';

    angular.module('pizzaDeliveryService').factory('components', function($http){
        var components = JSON.parse(localStorage.getItem('components'));
        if(!components){
            $http.get('Content/json/components.json').then(function(res){
                components = res.data;
                localStorage.setItem('components',JSON.stringify(components));
            });
        }
        return components;
    })
})();