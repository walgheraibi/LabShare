define([
  'angular',
  'angular-mocks',
  'app'
], function (angular, mocks) {
  'use strict';

  describe('Controller: HelloWorldController1', function () {

    var helloWorldController1,
      scope,
      stateParamsMock,
      helloworldServiceMock;

    beforeEach(mocks.module('lsseedApp'));

    beforeEach(function () {
      stateParamsMock = {};
      helloworldServiceMock = {
        helloSuhas: function () {
          return 'Suhas';
        }
      };
      mocks.inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        helloWorldController1 = $controller('HelloController1', {
          $scope: scope,
          $stateParams: stateParamsMock,
          helloworldService: helloworldServiceMock
        });
      });
    });

    it('assigns a name to the scope', function () {
      expect(scope.name).toBeDefined();
    });

  });
});