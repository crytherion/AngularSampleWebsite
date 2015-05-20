'use strict';

/**
 * @ngdoc overview
 * @name userManagementApp
 * @description
 * # userManagementApp
 *
 * Main module of the application.
 */
angular
    .module('userManagementApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainController'
            })
            .when('/users', {
                templateUrl: 'views/users.html',
                controller: 'UsersController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
