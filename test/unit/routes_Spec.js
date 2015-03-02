define([
    'angular',
    'angular-mocks',
    'app',
    'routes'
], function () {
    'use strict';
    describe('Routes test', function () {

        var $rootScope,
            $route,
            $location;

        beforeEach(angular.mock.module('lsseedApp'));

        beforeEach(angular.mock.inject(function (_$rootScope_, _$route_, _$location_, $templateCache) {
            $rootScope = _$rootScope_;
            $route = _$route_;
            $location = _$location_;
            $templateCache.put('ui/views/dashboard.html', '');
            $templateCache.put('ui/views/pages/404.html', '');

        }));

        function goTo(url) {
            $location.url(url);
            $rootScope.$digest();
        }

        it('should redirect to /dashboard on successful load of /', function() {
            expect($location.path()).toBe('');
            goTo('/');
            expect($location.path()).toBe('/dashboard');
        });

        it('should redirect to 404 for non-existent route', function() {
            expect($location.path()).toBe('');
            goTo('/non-existent/route');
            expect($location.path()).toBe('/404')
        })


    });
});