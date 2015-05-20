'use strict';

describe('Filter: startFrom', function() {

    // load the filter's module
    beforeEach(module('userManagementApp'));

    // initialize a new instance of the filter before each test
    var startFrom;
    beforeEach(inject(function($filter) {
        startFrom = $filter('startFrom');
    }));

    it('should return the table with an offset', function() {
        var table = [1, 2, 3, 4, 5];
        expect(startFrom(table, 2)).toEqual([3, 4, 5]);
    });

});
