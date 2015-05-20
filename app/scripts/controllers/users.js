'use strict';

/**
 * @ngdoc function
 * @name userManagementApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the userManagementApp
 */
angular.module('userManagementApp')
    .controller('UsersController', function($scope, $modal, UserService) {

        /* Test Jasmine */
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        /* Form */

        $scope.userform = {
            open: function() {
                $modal.open({
                    animation: true,
                    templateUrl: 'formUser.html',
                    controller: 'UsersController'
                });
                $scope.users.selected = {};
            },
            close: function() {
                $scope.$close();
            },
            check: function() {
                return !$scope.userform.form.$invalid;
            },
            create: function() {
                if (this.check()) {
                    UserService.create($scope.users.selected);
                    this.close();
                }
            },
            delete: function() {
                UserService.delete($scope.users.selected.id);
                this.close();
            },
            update: function() {
                if (this.check()) {
                    UserService.update($scope.users.selected);
                    this.close();
                }
            },
            submit: function() {
                if ($scope.users.selected.id) {
                    this.update();
                } else {
                    this.create();
                }
            }
        };

        /* UsersService functions */

        $scope.users = UserService.getAll();
        $scope.users.sortType = 'id';
        $scope.users.sortReverse = false;

        $scope.users.setSelected = function(userData) {
            $scope.userform.open();
            $scope.users.selected = angular.copy(userData);
        };

        $scope.users.sort = function(field) {
            if ($scope.users.sortType === field) {
                $scope.users.sortReverse = !$scope.users.sortReverse;
            } else {
                $scope.users.sortType = field;
            }
        };

        /* Pagination */

        $scope.users.pageItems = 4;
        $scope.users.currentPage = 1;
    });
