(function() {
    angular.module('pizzaDeliveryService').filter('nameFilter', function () {
        'use strict';

        return function (items, title) {
            if (!title) {
                return items;
            }
            var result = [];

            for (var i = 0, len = items.length; i < len; i++) {
                if (items[i].title
                    .toLowerCase()
                    .indexOf(title.toLowerCase()) !== -1) {
                    result.push(items[i]);
                }
            }
            return result;
        };
    });
})();