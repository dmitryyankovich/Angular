(function() {

    angular.module('pizzaDeliveryService', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/create_new', {
                templateUrl: 'Partials/create_new.html',
                controller: 'NewPizzaCtrl'
            })
            .when('/cart', {
                templateUrl: 'Partials/cart.html',
                controller: 'CartCtrl'
            })
            .when('/order_history', {
                templateUrl: 'Partials/order_history.html',
                controller: 'OrderHistoryCtrl'
            })
            .when('/show_all',{
                templateUrl: 'Partials/show_all.html',
                controller: 'PizzasCtrl'
            })
            .otherwise({
                redirectTo: '/show_all'
            });
    }]);

})();

