'use strict';

/**
 * @ngdoc filter
 * @name userManagementApp.filter:startWith
 * @function
 * @description
 * # startWith
 * Filter in the userManagementApp.
 */
angular.module('userManagementApp')
    .filter('startFrom', function() {
        return function(input, start) {
            start = +start; //parse to int
            return input.slice(start);
        };
    });
