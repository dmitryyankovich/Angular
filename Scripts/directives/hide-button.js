angular.module('pizzaDeliveryService').directive('hideButton', function () {
    'use strict';

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            var button = angular.element('<button type="button"class="btn btn-danger" ng-click="delete()">Delete from pizza</button>');

            button.hide();
            element.after(button);

            element.click(function () {
                button.show();
                element.hide();
            });
        }
    };
});