'use strict';

/**
 * @ngdoc function
 * @name userManagementApp.controller:FootercontrollerCtrl
 * @description
 * # FootercontrollerCtrl
 * Controller of the userManagementApp
 */
angular.module('userManagementApp')
    .controller('FooterController', function($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.date = new Date();
    });
