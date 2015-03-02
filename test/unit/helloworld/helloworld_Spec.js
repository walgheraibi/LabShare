/**
 * Created by James on 2/26/15.
 */
define([
    'angular',
    'angular-mocks',
    'app'
], function () {
    'use strict';

    describe('Controller: HelloWorldController1', function () {

        var helloCtrl,
            scope,
            stateParamsMock;

        beforeEach(angular.mock.module('lsseedApp'));

        beforeEach(function () {
            stateParamsMock = {};
            angular.mock.inject(function ($rootScope, $controller) {
                scope = $rootScope.$new();
                helloCtrl = $controller('helloCtrl', {
                    $scope: scope,
                    $stateParams: stateParamsMock
                });
            });
        });
        it('actually loaded', function() {
            expect(scope).toBeDefined();
            expect(helloCtrl).toBeDefined();
        });
        it('assigns a helloworld to the scope', function () {
            expect(scope.helloworld).toBeDefined();
        });

    });
});