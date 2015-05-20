'use strict';

/**
 * @ngdoc function
 * @name userManagementApp.controller:HeadercontrollerCtrl
 * @description
 * # HeadercontrollerCtrl
 * Controller of the userManagementApp
 */
angular.module('userManagementApp')
    .controller('HeaderController', function($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
           'AngularJS',
           'Karma'
           ];


        $scope.isActive = function(viewLocation) {
            return viewLocation === $location.path();
        };
    });
