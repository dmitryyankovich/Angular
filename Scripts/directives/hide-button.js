angular.module('pizzaDeliveryService').directive('hideButton', function () {
    'use strict';

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var text = angular.element('<span>' + attrs.hideText + '</span>');
            text.hide();
            element.after(text);

            element.click(function () {
                text.show();
                element.hide();
            });
        }
    };
});