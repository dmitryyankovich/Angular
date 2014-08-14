(function() {
    'use strict';

    angular.module('pizzaDeliveryService').directive('hideButton', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var text = angular.element('<span>' + attrs.hideText + '</span>');
                text.hide();
                element.after(text);

                element.click(function() {
                    text.show();
                    element.hide();
                });
            }
        };
    });
})();