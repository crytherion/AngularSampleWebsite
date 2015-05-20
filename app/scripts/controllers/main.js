'use strict';

/**
 * @ngdoc function
 * @name userManagementApp.controller:MainController
 * @description
 * # MainController
 * Controller of the userManagementApp
 */
angular.module('userManagementApp')
    .controller('MainController', function($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
