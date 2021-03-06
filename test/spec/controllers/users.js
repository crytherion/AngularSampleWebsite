'use strict';

describe('Controller: UsersController', function() {

    // load the controller's module
    beforeEach(module('userManagementApp'));

    var UsersController,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        UsersController = $controller('UsersController', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function() {
        expect(scope.awesomeThings.length).toBe(3);
    });
});
