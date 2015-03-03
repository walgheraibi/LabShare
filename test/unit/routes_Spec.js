define([
  'angular',
  'angular-mocks',
  'app',
  'routes'
], function (angular, mocks) {
  'use strict';
  describe('Routes', function () {

    var $rootScope,
      $state,
      $location;

    beforeEach(mocks.module('lsseedApp'));

    beforeEach(mocks.inject(function(_$rootScope_, _$state_, _$location_, $templateCache) {
      $rootScope = _$rootScope_;
      $state = _$state_;
      $location = _$location_;
      $templateCache.put('ui/views/about.html', '');
      $templateCache.put('ui/views/hello1.html', '');
      $templateCache.put('ui/views/hello2.html', '');
      $templateCache.put('ui/views/hello3.html', '');
      $templateCache.put('ui/views/welcome.html', '');
    }));

    function goTo(url) {
      $location.url(url);
      $rootScope.$digest();
    }

    describe('State: home', function() {

      var state = 'home';

      it('has a url of "/"', function() {
        var homeConfig = $state.get(state);
        expect(homeConfig.url).toBe('/');
      });

      it('has a controller', function () {
        var homeConfig = $state.get(state);
        expect(homeConfig.controller).toBeDefined();
      });

      it('transitions to "home" when the url is "/"', function () {
        goTo('/');
        expect($state.current.name).toBe('home');
      });

      it('transitions to "home" when the url is empty', function () {
        goTo('');
        expect($state.current.name).toBe('home');
      });

    });

    describe('State: hello1', function () {
      var state = 'hello1';

      it('has a url of "/hello1"', function() {
        var homeConfig = $state.get(state);
        expect(homeConfig.url).toBe('/hello1');
      });

      it('has a controller', function () {
        var homeConfig = $state.get(state);
        expect(homeConfig.controller).toBeDefined();
      });

      it('transitions to "hello1" when the url is "/hello1"', function () {
        goTo('/hello1');
        expect($state.current.name).toBe('hello1');
      });

    });
  });
});