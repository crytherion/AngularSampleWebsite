'use strict';

describe('Controller: FooterController', function() {

    // load the controller's module
    beforeEach(module('userManagementApp'));

    var FooterController,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        FooterController = $controller('FooterController', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function() {
        expect(scope.awesomeThings.length).toBe(3);
    });

    it('should attach the current date to the scope', function() {
        expect(scope.date).toBeDefined();
    });
});
