define([
  'angular',
  'angular-mocks',
  'app'
], function (angular, mocks) {
  'use strict';

  describe('Service: helloworldService', function () {
    var helloworldService;

    beforeEach(mocks.module('lsseedApp'));

    beforeEach(mocks.inject(function (_helloworldService_) {
      helloworldService = _helloworldService_;
    }));

    describe('.helloSuhas', function () {

      it('returns "Suhas"', function () {
        expect(helloworldService.helloSuhas()).toBe('Suhas');
      });

    });

  });
});